import { ArrowLeft, Filter } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { categories } from '../data/mockProducts';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Slider } from './ui/slider';

interface CategoryListPageProps {
  categoryId: string;
  products: Product[];
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export function CategoryListPage({ categoryId, products, onBack, onProductClick }: CategoryListPageProps) {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [snapOnly, setSnapOnly] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'name'>('price-low');

  const category = categories.find(c => c.id === categoryId);
  
  // Get unique brands from products
  const brands = Array.from(new Set(products.map(p => p.brand))).sort();

  // Apply filters
  let filteredProducts = products.filter(product => {
    // Price filter
    const productPrice = product.offers.find(o => o.price)?.price || 0;
    if (productPrice < priceRange[0] || productPrice > priceRange[1]) {
      return false;
    }

    // SNAP filter
    if (snapOnly && !product.snapEligible) {
      return false;
    }

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    return true;
  });

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low' || sortBy === 'price-high') {
      const priceA = a.offers.find(o => o.price)?.price || Infinity;
      const priceB = b.offers.find(o => o.price)?.price || Infinity;
      return sortBy === 'price-low' ? priceA - priceB : priceB - priceA;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 100]);
    setSnapOnly(false);
    setSelectedBrands([]);
  };

  const activeFiltersCount = 
    (snapOnly ? 1 : 0) + 
    selectedBrands.length +
    (priceRange[0] !== 0 || priceRange[1] !== 100 ? 1 : 0);

  return (
    <div className="pb-20 min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-border z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h2>{category?.name || 'Products'}</h2>
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </p>
            </div>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="relative">
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              
              <div className="py-6 space-y-6 overflow-y-auto max-h-[calc(80vh-120px)]">
                {/* Sort By */}
                <div>
                  <Label className="mb-3 block">Sort By</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-low"
                        checked={sortBy === 'price-low'}
                        onCheckedChange={() => setSortBy('price-low')}
                      />
                      <Label htmlFor="price-low" className="cursor-pointer">
                        Price: Low to High
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-high"
                        checked={sortBy === 'price-high'}
                        onCheckedChange={() => setSortBy('price-high')}
                      />
                      <Label htmlFor="price-high" className="cursor-pointer">
                        Price: High to Low
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="name"
                        checked={sortBy === 'name'}
                        onCheckedChange={() => setSortBy('name')}
                      />
                      <Label htmlFor="name" className="cursor-pointer">
                        Product Name (A-Z)
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <Label className="mb-4 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    step={5}
                    className="mb-2"
                  />
                </div>

                {/* SNAP Eligible */}
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="snap" 
                    checked={snapOnly}
                    onCheckedChange={(checked) => setSnapOnly(checked as boolean)}
                  />
                  <Label htmlFor="snap" className="cursor-pointer">
                    SNAP Eligible Only
                  </Label>
                </div>

                {/* Brands */}
                {brands.length > 0 && (
                  <div>
                    <Label className="mb-3 block">Brands</Label>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {brands.map(brand => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox 
                            id={brand}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                          />
                          <Label htmlFor={brand} className="cursor-pointer">
                            {brand}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
                <div className="flex gap-2">
                  <Button variant="outline" onClick={clearFilters} className="flex-1">
                    Clear All
                  </Button>
                  <SheetTrigger asChild>
                    <Button className="flex-1">
                      Apply Filters
                    </Button>
                  </SheetTrigger>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4">
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
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products match your filters</p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
