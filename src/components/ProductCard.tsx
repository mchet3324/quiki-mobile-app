import { Product } from '../types';
import { getLowestPrice } from '../data/mockProducts';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const lowestPrice = getLowestPrice(product);
  
  return (
    <div 
      onClick={onClick}
      className="bg-card rounded-lg border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="aspect-square bg-muted relative">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-destructive text-destructive-foreground">
              {product.discount.label}
            </Badge>
          </div>
        )}
        {product.snapEligible && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="text-xs">
              SNAP
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
        <h3 className="text-sm line-clamp-2 mb-2">{product.name}</h3>
        
        {lowestPrice !== null && (
          <div className="flex items-baseline gap-2">
            <p className="text-lg text-primary">${lowestPrice.toFixed(2)}</p>
            {product.discount && (
              <p className="text-xs text-muted-foreground line-through">
                ${(lowestPrice + product.discount.amount).toFixed(2)}
              </p>
            )}
          </div>
        )}
        
        <div className="flex gap-1 mt-2 flex-wrap">
          {product.offers.map((offer, idx) => (
            <div 
              key={idx}
              className={`w-2 h-2 rounded-full ${
                offer.provider === 'walmart' ? 'bg-blue-500' :
                offer.provider === 'amazon' ? 'bg-orange-500' :
                'bg-green-500'
              }`}
              title={offer.provider}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
