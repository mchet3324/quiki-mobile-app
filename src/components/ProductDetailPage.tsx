import { ArrowLeft, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, provider?: 'walmart' | 'amazon' | 'instacart') => void;
  isInCart: boolean;
}

export function ProductDetailPage({ product, onBack, onAddToCart, isInCart }: ProductDetailPageProps) {
  return (
    <div className="pb-20 min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-border z-10">
        <div className="flex items-center gap-3 p-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2>Product Details</h2>
        </div>
      </div>

      {/* Product Image */}
      <div className="aspect-square bg-muted relative">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discount && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-destructive text-destructive-foreground text-sm px-3 py-1">
              Save {product.discount.label}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Product Info */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
          <h2 className="mb-2">{product.name}</h2>
          
          <div className="flex gap-2 flex-wrap">
            {product.snapEligible && (
              <Badge variant="outline">
                SNAP Eligible (Instacart)*
              </Badge>
            )}
            {product.upc && (
              <Badge variant="outline">
                UPC: {product.upc}
              </Badge>
            )}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Price Comparison */}
        <div className="mb-4">
          <h3 className="mb-3">Available at</h3>
          <div className="space-y-3">
            {product.offers.map((offer, idx) => (
              <button
                key={idx}
                onClick={() => onAddToCart(product, offer.provider)}
                className="w-full bg-card border border-border rounded-lg p-3 hover:bg-accent transition-colors text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      offer.provider === 'walmart' ? 'bg-blue-500' :
                      offer.provider === 'amazon' ? 'bg-orange-500' :
                      'bg-green-500'
                    }`} />
                    <span className="capitalize">{offer.provider}</span>
                  </div>
                  {offer.price && (
                    <span className="text-lg text-primary">
                      ${offer.price.toFixed(2)}
                    </span>
                  )}
                  {!offer.price && offer.priceLabel && (
                    <span className="text-sm text-primary">{offer.priceLabel}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{offer.availability}</p>
                {offer.provider === 'amazon' && offer.timestamp && (
                  <p className="text-xs text-muted-foreground mt-1">
                    *Price and availability subject to change
                  </p>
                )}
                {offer.provider === 'instacart' && (
                  <p className="text-xs text-muted-foreground mt-1">
                    *Final price confirmed on Instacart during checkout
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ingredients */}
        {product.ingredients && product.ingredients.length > 0 && (
          <div className="mb-4">
            <Separator className="my-4" />
            <h3 className="mb-3">Ingredients</h3>
            <p className="text-sm">{product.ingredients.join(', ')}</p>
          </div>
        )}

        {/* Compliance Notices */}
        {product.offers.some(o => o.provider === 'amazon') && (
          <div className="bg-muted rounded-lg p-3 mt-4">
            <p className="text-xs text-muted-foreground">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t border-border">
          <Button 
            onClick={() => onAddToCart(product)}
            className="w-full"
            variant={isInCart ? "secondary" : "default"}
          >
            {isInCart ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Added to Cart
              </>
            ) : (
              <>
                <Plus className="w-5 h-5 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
