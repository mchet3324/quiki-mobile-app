import { Home, Tag, ShoppingCart, List, User } from 'lucide-react';

export type NavTab = 'home' | 'discounts' | 'cart' | 'lists' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  cartCount?: number;
}

export function BottomNav({ activeTab, onTabChange, cartCount = 0 }: BottomNavProps) {
  const tabs = [
    { id: 'home' as NavTab, icon: Home, label: 'Home' },
    { id: 'discounts' as NavTab, icon: Tag, label: 'Discounts' },
    { id: 'cart' as NavTab, icon: ShoppingCart, label: 'Cart' },
    { id: 'lists' as NavTab, icon: List, label: 'Lists' },
    { id: 'profile' as NavTab, icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className="relative">
                <Icon className="w-6 h-6" />
                {tab.id === 'cart' && cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
