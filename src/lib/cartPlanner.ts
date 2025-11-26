import { CartItem, ProviderSplit, Provider, CartRecommendation, DeliveryFeeRecommendation } from '../types';

// Delivery fee estimates for each provider
export const DELIVERY_FEES: Record<Provider, number> = {
  walmart: 7.95,
  amazon: 0, // Free with Prime, but we'll count it for non-Prime users
  instacart: 5.99
};

// Helper to get the effective price from an offer (price or lowestNew)
function getOfferPrice(offer: { price?: number; lowestNew?: number }): number | undefined {
  return offer.price ?? offer.lowestNew;
}

export function generateRecommendations(
  items: CartItem[], 
  currentSplits: ProviderSplit[],
  providerPreferences: Record<string, Provider>
): CartRecommendation[] {
  const recommendations: CartRecommendation[] = [];
  
  items.forEach(cartItem => {
    const { product, quantity } = cartItem;
    
    // Find current assignment
    const currentSplit = currentSplits.find(split => 
      split.items.some(item => item.product.id === product.id)
    );
    
    if (!currentSplit) return;
    
    const currentProvider = currentSplit.provider;
    const currentOffer = product.offers.find(o => o.provider === currentProvider);
    const currentPrice = currentOffer && getOfferPrice(currentOffer);
    
    if (!currentPrice) return;
    
    // Look for better offers at other providers
    product.offers.forEach(offer => {
      const offerPrice = getOfferPrice(offer);
      if (offer.provider === currentProvider || !offerPrice) return;
      
      const potentialSavings = (currentPrice - offerPrice) * quantity;
      
      // Only recommend if savings is at least $0.50
      if (potentialSavings >= 0.5) {
        recommendations.push({
          id: `${product.id}-${offer.provider}`,
          productId: product.id,
          productName: product.name,
          currentProvider,
          currentPrice: currentPrice,
          recommendedProvider: offer.provider,
          recommendedPrice: offerPrice,
          savings: potentialSavings,
          quantity,
          message: `If you get ${product.brand} ${product.name.split(',')[0]} at ${getProviderName(offer.provider)}, you can save an extra ${potentialSavings.toFixed(2)}${quantity > 1 ? ` (${(potentialSavings / quantity).toFixed(2)} each)` : ''}. Would you like me to switch for you?`
        });
      }
    });
  });
  
  // Sort by highest savings first
  return recommendations.sort((a, b) => b.savings - a.savings);
}

export function planCart(items: CartItem[], providerPreferences: Record<string, Provider> = {}): ProviderSplit[] {
  const providerMap = new Map<Provider, CartItem[]>();
  
  // Assign each item to the provider based on user preference or lowest price
  items.forEach(cartItem => {
    const { product, quantity } = cartItem;
    
    // Check if user has a preference for this product
    const preferredProvider = providerPreferences[product.id];
    
    if (preferredProvider) {
      // Use user's preferred provider
      if (!providerMap.has(preferredProvider)) {
        providerMap.set(preferredProvider, []);
      }
      providerMap.get(preferredProvider)!.push(cartItem);
    } else {
      // Find best provider for this product based on price
      const pricedOffers = product.offers.filter(o => getOfferPrice(o) !== undefined);
      
      if (pricedOffers.length > 0) {
        // Choose provider with lowest price
        const bestOffer = pricedOffers.reduce((min, offer) => 
          (getOfferPrice(offer)! < getOfferPrice(min)! ? offer : min)
        );
        
        const provider = bestOffer.provider;
        if (!providerMap.has(provider)) {
          providerMap.set(provider, []);
        }
        providerMap.get(provider)!.push(cartItem);
      } else {
        // Default to Instacart if no prices available
        if (!providerMap.has('instacart')) {
          providerMap.set('instacart', []);
        }
        providerMap.get('instacart')!.push(cartItem);
      }
    }
  });
  
  // Build provider splits
  const splits: ProviderSplit[] = [];
  
  providerMap.forEach((items, provider) => {
    const estimatedTotal = items.reduce((sum, item) => {
      const offer = item.product.offers.find(o => o.provider === provider);
      const price = offer && getOfferPrice(offer);
      if (price) {
        return sum + (price * item.quantity);
      }
      return sum;
    }, 0);
    
    let checkoutLink = '';
    let disclaimer = '';
    
    switch (provider) {
      case 'walmart':
        checkoutLink = 'https://walmart.com/cart';
        disclaimer = 'Estimated total. Final price confirmed at Walmart checkout.';
        break;
      case 'amazon':
        checkoutLink = 'https://amazon.com/cart';
        disclaimer = 'As an Amazon Associate I earn from qualifying purchases. Prices and availability subject to change. Showing lowest new prices as of last update.';
        break;
      case 'instacart':
        checkoutLink = 'https://instacart.com/idp/v1/products/products_link';
        disclaimer = 'Prices shown on Instacart after list opens. Quiki helps you choose, Instacart completes the transaction.';
        break;
    }
    
    splits.push({
      provider,
      items,
      estimatedTotal,
      checkoutLink,
      disclaimer
    });
  });
  
  return splits.sort((a, b) => a.estimatedTotal - b.estimatedTotal);
}

export function getProviderName(provider: Provider): string {
  switch (provider) {
    case 'walmart': return 'Walmart';
    case 'amazon': return 'Amazon';
    case 'instacart': return 'Instacart';
  }
}

export function getProviderColor(provider: Provider): string {
  switch (provider) {
    case 'walmart': return 'bg-blue-500';
    case 'amazon': return 'bg-orange-500';
    case 'instacart': return 'bg-green-500';
  }
}

export function generateDeliveryFeeRecommendation(
  items: CartItem[],
  currentSplits: ProviderSplit[],
  providerPreferences: Record<string, Provider>
): DeliveryFeeRecommendation | null {
  // Only suggest consolidation if there are 2+ providers
  if (currentSplits.length < 2) return null;
  
  const currentDeliveryFees = currentSplits.reduce((sum, split) => sum + DELIVERY_FEES[split.provider], 0);
  
  // Try consolidating to each provider and see which saves the most
  const consolidationOptions: Array<{
    provider: Provider;
    totalCost: number;
    productsSavings: number;
    deliveryFeeSavings: number;
    affectedProducts: Array<{ productId: string; productName: string; fromProvider: Provider }>;
  }> = [];
  
  // Check each provider as potential consolidation target
  const providers: Provider[] = ['walmart', 'amazon', 'instacart'];
  
  providers.forEach(targetProvider => {
    let totalProductCost = 0;
    let currentProductCost = 0;
    const affectedProducts: Array<{ productId: string; productName: string; fromProvider: Provider }> = [];
    let canConsolidate = true;
    
    items.forEach(cartItem => {
      const { product, quantity } = cartItem;
      
      // Get current provider for this item
      const currentSplit = currentSplits.find(split => 
        split.items.some(item => item.product.id === product.id)
      );
      
      if (!currentSplit) {
        canConsolidate = false;
        return;
      }
      
      // Get current price
      const currentOffer = product.offers.find(o => o.provider === currentSplit.provider);
      const currentPrice = currentOffer && getOfferPrice(currentOffer);
      
      // Get target provider price
      const targetOffer = product.offers.find(o => o.provider === targetProvider);
      const targetPrice = targetOffer && getOfferPrice(targetOffer);
      
      if (!currentPrice || !targetPrice) {
        // Can't consolidate if product not available at target provider
        canConsolidate = false;
        return;
      }
      
      currentProductCost += currentPrice * quantity;
      totalProductCost += targetPrice * quantity;
      
      // Track which products would switch providers
      if (currentSplit.provider !== targetProvider) {
        affectedProducts.push({
          productId: product.id,
          productName: product.name,
          fromProvider: currentSplit.provider
        });
      }
    });
    
    if (!canConsolidate) return;
    
    const productsSavings = currentProductCost - totalProductCost;
    const deliveryFeeSavings = currentDeliveryFees - DELIVERY_FEES[targetProvider];
    
    consolidationOptions.push({
      provider: targetProvider,
      totalCost: totalProductCost + DELIVERY_FEES[targetProvider],
      productsSavings,
      deliveryFeeSavings,
      affectedProducts
    });
  });
  
  if (consolidationOptions.length === 0) return null;
  
  // Find the best consolidation option (highest total savings including delivery)
  const bestOption = consolidationOptions.reduce((best, option) => {
    const bestSavings = best.productsSavings + best.deliveryFeeSavings;
    const optionSavings = option.productsSavings + option.deliveryFeeSavings;
    return optionSavings > bestSavings ? option : best;
  });
  
  const totalSavings = bestOption.productsSavings + bestOption.deliveryFeeSavings;
  
  // Only recommend if we can save at least $5 total (otherwise the hassle isn't worth it)
  if (totalSavings < 5) return null;
  
  const message = `Your cart is currently split into ${currentSplits.length} ${currentSplits.length === 2 ? 'stores' : 'stores'}, which means you're paying ${currentSplits.length} delivery fees (${currentSplits.map(s => `${getProviderName(s.provider)}: ${DELIVERY_FEES[s.provider].toFixed(2)}`).join(', ')}). If you consolidate everything to ${getProviderName(bestOption.provider)}, you can save ${bestOption.deliveryFeeSavings.toFixed(2)} on delivery fees${bestOption.productsSavings !== 0 ? ` and ${bestOption.productsSavings > 0 ? `${bestOption.productsSavings.toFixed(2)} on products` : `pay ${Math.abs(bestOption.productsSavings).toFixed(2)} more for products`}` : ''} for a total savings of ${totalSavings.toFixed(2)}. Would you like me to move everything to ${getProviderName(bestOption.provider)}?`;
  
  return {
    id: 'delivery-consolidation',
    type: 'consolidate',
    currentProviderCount: currentSplits.length,
    recommendedProvider: bestOption.provider,
    currentDeliveryFees,
    recommendedDeliveryFees: DELIVERY_FEES[bestOption.provider],
    productsSavings: bestOption.productsSavings,
    deliveryFeeSavings: bestOption.deliveryFeeSavings,
    totalSavings,
    message,
    affectedProducts: bestOption.affectedProducts
  };
}
