export type Provider = 'walmart' | 'amazon' | 'instacart';

export interface ProductOffer {
  provider: Provider;
  price?: number;
  priceLabel?: string;
  link: string;
  availability: string;
  timestamp?: string;
  lowestNew?: number;
  lowestUsed?: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  category: string;
  upc?: string;
  offers: ProductOffer[];
  features?: string[];
  ingredients?: string[];
  discount?: {
    amount: number;
    percentage: number;
    label: string;
  };
  snapEligible?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShoppingList {
  id: string;
  name: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ProviderSplit {
  provider: Provider;
  items: CartItem[];
  estimatedTotal: number;
  checkoutLink: string;
  disclaimer?: string;
}

export interface CartRecommendation {
  id: string;
  productId: string;
  productName: string;
  currentProvider: Provider;
  currentPrice: number;
  recommendedProvider: Provider;
  recommendedPrice: number;
  savings: number;
  quantity: number;
  message: string;
}

export interface DeliveryFeeRecommendation {
  id: string;
  type: 'consolidate';
  currentProviderCount: number;
  recommendedProvider: Provider;
  currentDeliveryFees: number;
  recommendedDeliveryFees: number;
  productsSavings: number;
  deliveryFeeSavings: number;
  totalSavings: number;
  message: string;
  affectedProducts: Array<{
    productId: string;
    productName: string;
    fromProvider: Provider;
  }>;
}
