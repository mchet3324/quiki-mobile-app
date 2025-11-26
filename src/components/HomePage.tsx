import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { CategoryGrid } from './CategoryGrid';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/mockProducts';
import { Product } from '../types';
import { Sparkles } from 'lucide-react';

interface HomePageProps {
  onCategoryClick: (categoryId: string) => void;
  onProductClick: (product: Product) => void;
}

export function HomePage({ onCategoryClick, onProductClick }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = searchQuery
    ? mockProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const featuredProducts = mockProducts.filter(p => p.discount).slice(0, 4);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6" />
          <h1>Quiki</h1>
        </div>
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery}
          placeholder="Search across all stores..."
        />
      </div>

      <div className="p-4">
        {searchQuery ? (
          <>
            <h2 className="mb-3">Search Results ({filteredProducts.length})</h2>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    onClick={() => onProductClick(product)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No products found
              </p>
            )}
          </>
        ) : (
          <>
            {/* Categories */}
            <div className="mb-6">
              <h2 className="mb-3">Categories</h2>
              <CategoryGrid onCategoryClick={onCategoryClick} />
            </div>

            {/* Featured Deals */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2>Featured Deals</h2>
                <button 
                  onClick={() => onCategoryClick('discounts')}
                  className="text-sm text-primary"
                >
                  See all
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {featuredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    onClick={() => onProductClick(product)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
