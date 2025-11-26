import { Lightbulb, X } from 'lucide-react';
import { CartRecommendation } from '../types';
import { Button } from './ui/button';
import { getProviderColor, getProviderName } from '../lib/cartPlanner';
import { useState } from 'react';

interface CartRecommendationsProps {
  recommendations: CartRecommendation[];
  onAccept: (recommendation: CartRecommendation) => void;
  onDismiss: (recommendationId: string) => void;
}

export function CartRecommendations({ recommendations, onAccept, onDismiss }: CartRecommendationsProps) {
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());

  if (recommendations.length === 0) return null;

  const visibleRecommendations = recommendations.filter(r => !dismissedIds.has(r.id));

  if (visibleRecommendations.length === 0) return null;

  const handleDismiss = (id: string) => {
    setDismissedIds(prev => new Set(prev).add(id));
    onDismiss(id);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="w-5 h-5 text-amber-500" />
        <h3>Smart Savings Recommendations</h3>
      </div>
      
      {visibleRecommendations.map((rec) => (
        <div key={rec.id} className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 relative">
          <button
            onClick={() => handleDismiss(rec.id)}
            className="absolute top-2 right-2 p-1 hover:bg-amber-100 dark:hover:bg-amber-900 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-amber-700 dark:text-amber-300" />
          </button>

          <p className="text-sm mb-3 pr-6">{rec.message}</p>
          
          <div className="flex items-center gap-2 mb-3 text-sm">
            <div className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${getProviderColor(rec.currentProvider)}`} />
              <span className="text-muted-foreground">
                {getProviderName(rec.currentProvider)}: ${rec.currentPrice.toFixed(2)}
              </span>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${getProviderColor(rec.recommendedProvider)}`} />
              <span className="text-green-600 dark:text-green-400">
                {getProviderName(rec.recommendedProvider)}: ${rec.recommendedPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              size="sm" 
              onClick={() => onAccept(rec)}
              className="flex-1"
            >
              Yes, switch to {getProviderName(rec.recommendedProvider)}
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => handleDismiss(rec.id)}
              className="flex-1"
            >
              No, thanks
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
