import { TruckIcon, X } from 'lucide-react';
import { DeliveryFeeRecommendation } from '../types';
import { Button } from './ui/button';
import { getProviderName } from '../lib/cartPlanner';
import { useState } from 'react';

interface DeliveryFeeRecommendationProps {
  recommendation: DeliveryFeeRecommendation;
  onAccept: (recommendation: DeliveryFeeRecommendation) => void;
  onDismiss: () => void;
}

export function DeliveryFeeRecommendationComponent({ 
  recommendation, 
  onAccept, 
  onDismiss 
}: DeliveryFeeRecommendationProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss();
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 relative">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 p-1 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full transition-colors"
      >
        <X className="w-4 h-4 text-blue-700 dark:text-blue-300" />
      </button>

      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <TruckIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 pr-6">
          <h3 className="mb-2 text-blue-900 dark:text-blue-100">Delivery Fee Savings</h3>
          <p className="text-sm text-blue-800 dark:text-blue-200">{recommendation.message}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-blue-900/50 rounded-lg p-3 mb-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">Current Delivery Fees</p>
            <p className="text-lg text-destructive">${recommendation.currentDeliveryFees.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">After Consolidation</p>
            <p className="text-lg text-green-600 dark:text-green-400">
              ${recommendation.recommendedDeliveryFees.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Delivery Savings</p>
            <p className="text-green-600 dark:text-green-400">
              +${recommendation.deliveryFeeSavings.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Total Savings</p>
            <p className="text-lg text-green-600 dark:text-green-400">
              ${recommendation.totalSavings.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button 
          onClick={() => onAccept(recommendation)}
          className="flex-1"
        >
          Yes, consolidate to {getProviderName(recommendation.recommendedProvider)}
        </Button>
        <Button 
          variant="outline"
          onClick={handleDismiss}
          className="flex-1"
        >
          No, keep split
        </Button>
      </div>
    </div>
  );
}
