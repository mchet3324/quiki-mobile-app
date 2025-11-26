import { useState } from 'react';
import { BottomNav, NavTab } from './components/BottomNav';
import { HomePage } from './components/HomePage';
import { DiscountsPage } from './components/DiscountsPage';
import { CartPage } from './components/CartPage';
import { SavedListsPage } from './components/SavedListsPage';
import { ProfilePage } from './components/ProfilePage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CategoryListPage } from './components/CategoryListPage';
import { HelpPage } from './components/HelpPage';
import { Product, CartItem, ShoppingList } from './types';
import { getProductsByCategory } from './data/mockProducts';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

type Page = 
  | { type: 'main'; tab: NavTab }
  | { type: 'product-detail'; product: Product }
  | { type: 'category'; categoryId: string }
  | { type: 'help' };

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>({ type: 'main', tab: 'home' });
  const [cart, setCart] = useState<CartItem[]>([]);
  const [savedLists, setSavedLists] = useState<ShoppingList[]>([]);
  // Track user's provider preference for each product (overrides default cheapest provider)
  const [providerPreferences, setProviderPreferences] = useState<Record<string, 'walmart' | 'amazon' | 'instacart'>>({});

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Navigation handlers
  const handleTabChange = (tab: NavTab) => {
    setCurrentPage({ type: 'main', tab });
  };

  const handleProductClick = (product: Product) => {
    setCurrentPage({ type: 'product-detail', product });
  };

  const handleCategoryClick = (categoryId: string) => {
    setCurrentPage({ type: 'category', categoryId });
  };

  const handleBack = () => {
    if (currentPage.type === 'main') return;
    setCurrentPage({ type: 'main', tab: 'home' });
  };

  const handleShowHelp = () => {
    setCurrentPage({ type: 'help' });
  };

  // Cart handlers
  const handleAddToCart = (product: Product, provider?: 'walmart' | 'amazon' | 'instacart') => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        toast.success('Updated quantity in cart');
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success('Added to cart');
      return [...prev, { product, quantity: 1 }];
    });
    
    // If a specific provider was chosen, set the preference
    if (provider) {
      setProviderPreferences(prev => ({
        ...prev,
        [product.id]: provider
      }));
    }
    
    // Navigate back to home if we're on product detail page
    if (currentPage.type === 'product-detail') {
      setCurrentPage({ type: 'main', tab: 'home' });
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(item => item.product.id !== productId));
      toast.success('Removed from cart');
    } else {
      setCart(prev =>
        prev.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    toast.success('Removed from cart');
  };

  const handleClearCart = () => {
    if (cart.length > 0 && confirm('Are you sure you want to clear your cart?')) {
      setCart([]);
      toast.success('Cart cleared');
    }
  };

  // Saved lists handlers
  const handleCreateList = (name: string) => {
    const newList: ShoppingList = {
      id: Date.now().toString(),
      name,
      items: [...cart],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setSavedLists(prev => [...prev, newList]);
    toast.success(`"${name}" saved`);
  };

  const handleDeleteList = (id: string) => {
    setSavedLists(prev => prev.filter(list => list.id !== id));
    toast.success('List deleted');
  };

  const handleLoadList = (id: string) => {
    const list = savedLists.find(l => l.id === id);
    if (list) {
      setCart(list.items);
      setCurrentPage({ type: 'main', tab: 'cart' });
      toast.success(`Loaded "${list.name}" to cart`);
    }
  };

  // Check if product is in cart
  const isProductInCart = (productId: string) => {
    return cart.some(item => item.product.id === productId);
  };

  // Switch provider for a product
  const handleSwitchProvider = (productId: string, newProvider: 'walmart' | 'amazon' | 'instacart') => {
    const item = cart.find(c => c.product.id === productId);
    if (item) {
      setProviderPreferences(prev => ({
        ...prev,
        [productId]: newProvider
      }));
      const providerName = newProvider === 'walmart' ? 'Walmart' : newProvider === 'amazon' ? 'Amazon' : 'Instacart';
      toast.success(`Switched to ${providerName}`);
    }
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage.type) {
      case 'main':
        switch (currentPage.tab) {
          case 'home':
            return (
              <HomePage
                onCategoryClick={handleCategoryClick}
                onProductClick={handleProductClick}
              />
            );
          case 'discounts':
            return <DiscountsPage onProductClick={handleProductClick} />;
          case 'cart':
            return (
              <CartPage
                cart={cart}
                providerPreferences={providerPreferences}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
                onSwitchProvider={handleSwitchProvider}
              />
            );
          case 'lists':
            return (
              <SavedListsPage
                lists={savedLists}
                onCreateList={handleCreateList}
                onDeleteList={handleDeleteList}
                onLoadList={handleLoadList}
              />
            );
          case 'profile':
            return <ProfilePage onShowHelp={handleShowHelp} />;
        }
        break;
      
      case 'product-detail':
        return (
          <ProductDetailPage
            product={currentPage.product}
            onBack={handleBack}
            onAddToCart={handleAddToCart}
            isInCart={isProductInCart(currentPage.product.id)}
          />
        );
      
      case 'category':
        const products = getProductsByCategory(currentPage.categoryId);
        return (
          <CategoryListPage
            categoryId={currentPage.categoryId}
            products={products}
            onBack={handleBack}
            onProductClick={handleProductClick}
          />
        );
      
      case 'help':
        return <HelpPage onBack={handleBack} />;
    }
  };

  const showBottomNav = currentPage.type === 'main';
  const currentTab = currentPage.type === 'main' ? currentPage.tab : 'home';

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto relative">
      {renderPage()}
      {showBottomNav && (
        <BottomNav
          activeTab={currentTab}
          onTabChange={handleTabChange}
          cartCount={cartCount}
        />
      )}
      <Toaster />
    </div>
  );
}
