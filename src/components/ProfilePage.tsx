import { User, Settings, HelpCircle, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback } from './ui/avatar';

interface ProfilePageProps {
  onShowHelp: () => void;
}

export function ProfilePage({ onShowHelp }: ProfilePageProps) {
  const menuItems = [
    {
      icon: Settings,
      label: 'Account Settings',
      description: 'Manage your profile and preferences',
      onClick: () => alert('Settings - Coming soon')
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: 'Deal alerts and order updates',
      onClick: () => alert('Notifications - Coming soon')
    },
    {
      icon: Shield,
      label: 'Privacy & Data',
      description: 'Control your data and privacy settings',
      onClick: () => alert('Privacy - Coming soon')
    },
    {
      icon: HelpCircle,
      label: 'Help & FAQ',
      description: 'Get help and view frequently asked questions',
      onClick: onShowHelp
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-primary-foreground text-primary text-2xl">
              <User className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2>Welcome to Quiki</h2>
            <p className="text-sm opacity-90">demo@quiki.app</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Account Info */}
        <div className="bg-card border border-border rounded-lg p-4 mb-4">
          <h3 className="mb-3">Account Status</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Member Since</p>
              <p className="text-sm">October 2025</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Account Type</p>
              <p className="text-sm">Free</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 mb-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.onClick}
                className="w-full bg-card border border-border rounded-lg p-4 hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm mb-0.5">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-muted rounded-lg p-4 mb-4">
          <h4 className="text-sm mb-2">Affiliate Partnerships</h4>
          <p className="text-xs text-muted-foreground mb-2">
            Quiki participates in affiliate programs with Walmart and Amazon. As an Amazon Associate, we earn from qualifying purchases. This helps us keep Quiki free for you.
          </p>
          <p className="text-xs text-muted-foreground">
            Instacart partnerships are managed through their Inspire Digital Platform (IDP) for shopping list creation.
          </p>
        </div>

        <Separator className="my-6" />

        {/* Sign Out */}
        <Button variant="outline" className="w-full" onClick={() => alert('Sign out - Coming soon')}>
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>

        {/* Version */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Quiki MVP v1.0.0
        </p>
      </div>
    </div>
  );
}
