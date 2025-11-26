import { useState } from 'react';
import { Tag, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/mockProducts';
import { Product } from '../types';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface DiscountsPageProps {
  onProductClick: (product: Product) => void;
}

export function DiscountsPage({ onProductClick }: DiscountsPageProps) {
  const [sortBy, setSortBy] = useState<'percentage' | 'amount' | 'name'>('percentage');
  
  const discountedProducts = mockProducts.filter(p => p.discount);

  const sortedProducts = [...discountedProducts].sort((a, b) => {
    if (sortBy === 'percentage') {
      return (b.discount?.percentage || 0) - (a.discount?.percentage || 0);
    } else if (sortBy === 'amount') {
      return (b.discount?.amount || 0) - (a.discount?.amount || 0);
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-destructive text-destructive-foreground p-4">
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-6 h-6" />
          <h1>Discounts</h1>
        </div>
        <p className="text-sm opacity-90">
          {discountedProducts.length} deals available
        </p>
      </div>

      {/* Filters */}
      <div className="p-4 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
          <Select value={sortBy} onValueChange={(val) => setSortBy(val as 'percentage' | 'amount' | 'name')}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="percentage">Sort by % Off</SelectItem>
              <SelectItem value="amount">Sort by $ Saved</SelectItem>
              <SelectItem value="name">Sort by Product Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {sortedProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Tag className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground">No discounts available</p>
          </div>
        )}
      </div>
    </div>
  );
}
