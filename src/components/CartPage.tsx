import { ShoppingCart, Trash2, Plus, Minus, ExternalLink } from 'lucide-react';
import { CartItem, Provider, CartRecommendation } from '../types';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { planCart, getProviderName, getProviderColor, generateRecommendations, generateDeliveryFeeRecommendation } from '../lib/cartPlanner';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';
import { CartRecommendations } from './CartRecommendations';
import { DeliveryFeeRecommendationComponent } from './DeliveryFeeRecommendation';
import { useState } from 'react';

interface CartPageProps {
  cart: CartItem[];
  providerPreferences: Record<string, Provider>;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onSwitchProvider: (productId: string, newProvider: Provider) => void;
}

export function CartPage({ cart, providerPreferences, onUpdateQuantity, onRemoveItem, onClearCart, onSwitchProvider }: CartPageProps) {
  const providerSplits = planCart(cart, providerPreferences);
  const totalEstimate = providerSplits.reduce((sum, split) => sum + split.estimatedTotal, 0);
  const recommendations = generateRecommendations(cart, providerSplits, providerPreferences);
  const deliveryFeeRecommendation = generateDeliveryFeeRecommendation(cart, providerSplits, providerPreferences);
  
  const handleAcceptRecommendation = (rec: CartRecommendation) => {
    onSwitchProvider(rec.productId, rec.recommendedProvider);
  };
  
  const handleAcceptDeliveryRecommendation = (rec: typeof deliveryFeeRecommendation) => {
    if (!rec) return;
    // Switch all affected products to the recommended provider
    rec.affectedProducts.forEach(({ productId }) => {
      onSwitchProvider(productId, rec.recommendedProvider);
    });
  };

  if (cart.length === 0) {
    return (
      <div className="pb-20 flex flex-col items-center justify-center min-h-screen">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
        <h2 className="mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground text-center px-8">
          Add products to start planning your shopping
        </p>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-border z-10">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1>Cart</h1>
            <p className="text-sm text-muted-foreground">{cart.length} items</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClearCart}>
            Clear
          </Button>
        </div>
      </div>

      <div className="p-4">
        {/* Delivery Fee Recommendation */}
        {deliveryFeeRecommendation && (
          <div className="mb-4">
            <DeliveryFeeRecommendationComponent
              recommendation={deliveryFeeRecommendation}
              onAccept={handleAcceptDeliveryRecommendation}
              onDismiss={() => {}}
            />
          </div>
        )}

        {/* Product Recommendations */}
        {recommendations.length > 0 && (
          <div className="mb-4">
            <CartRecommendations
              recommendations={recommendations}
              onAccept={handleAcceptRecommendation}
              onDismiss={() => {}}
            />
          </div>
        )}

        {/* Provider Split Summary */}
        <div className="bg-accent rounded-lg p-4 mb-4">
          <h3 className="mb-3">Smart Split Recommendation</h3>
          <div className="space-y-2">
            {providerSplits.map((split) => (
              <div key={split.provider} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getProviderColor(split.provider)}`} />
                  <span className="text-sm">
                    {getProviderName(split.provider)} ({split.items.length} items)
                  </span>
                </div>
                <span className="text-sm">${split.estimatedTotal.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <Separator className="my-3" />
          <div className="flex items-center justify-between">
            <span>Estimated Total</span>
            <span className="text-lg">${totalEstimate.toFixed(2)}</span>
          </div>
        </div>

        {/* Provider Tabs */}
        <Tabs defaultValue={providerSplits[0]?.provider || 'walmart'} className="w-full">
          <TabsList className="w-full grid" style={{ gridTemplateColumns: `repeat(${providerSplits.length}, 1fr)` }}>
            {providerSplits.map((split) => (
              <TabsTrigger key={split.provider} value={split.provider} className="capitalize">
                {getProviderName(split.provider)}
              </TabsTrigger>
            ))}
          </TabsList>

          {providerSplits.map((split) => (
            <TabsContent key={split.provider} value={split.provider} className="mt-4">
              {/* Items List */}
              <div className="space-y-3 mb-4">
                {split.items.map((item) => {
                  const offer = item.product.offers.find(o => o.provider === split.provider);
                  
                  return (
                    <div key={item.product.id} className="bg-card border border-border rounded-lg p-3">
                      <div className="flex gap-3">
                        <div className="w-20 h-20 bg-muted rounded flex-shrink-0">
                          <ImageWithFallback
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm line-clamp-2 mb-1">{item.product.name}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{item.product.brand}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 bg-muted rounded-full">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                                className="p-1.5 hover:bg-accent rounded-full transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-sm w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1.5 hover:bg-accent rounded-full transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <div className="text-right">
                              {offer?.price && (
                                <p className="text-sm">${(offer.price * item.quantity).toFixed(2)}</p>
                              )}
                              {!offer?.price && offer?.priceLabel && (
                                <p className="text-xs text-muted-foreground">{offer.priceLabel}</p>
                              )}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg transition-colors self-start"
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Provider Summary */}
              <div className="bg-accent rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span>Subtotal</span>
                  <span className="text-lg">${split.estimatedTotal.toFixed(2)}</span>
                </div>
                
                {split.disclaimer && (
                  <p className="text-xs text-muted-foreground mb-3">
                    {split.disclaimer}
                  </p>
                )}

                <Button className="w-full" asChild>
                  <a href={split.checkoutLink} target="_blank" rel="noopener noreferrer">
                    Checkout on {getProviderName(split.provider)}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Amazon Disclosure */}
              {split.provider === 'amazon' && (
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">
                    As an Amazon Associate I earn from qualifying purchases.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
