import { Product } from '../types';

export const categories = [
  { id: 'discounts', name: 'Discounts', icon: '🏷️' },
  { id: 'produce', name: 'Produce', icon: '🥬' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛' },
  { id: 'meat', name: 'Meat & Seafood', icon: '🥩' },
  { id: 'bakery', name: 'Bakery', icon: '🍞' },
  { id: 'pantry', name: 'Pantry', icon: '🥫' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Fairlife Core Power High Protein Milk Shake, Chocolate, 14 Fl Oz, 12 Count',
    brand: 'Fairlife',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
    category: 'beverages',
    upc: '811620020015',
    snapEligible: true,
    discount: {
      amount: 8.50,
      percentage: 25,
      label: '25% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 25.99,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $27.48 (lowest new)*',
        lowestNew: 27.48,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      '26g of complete, high-quality protein',
      'Lactose-free',
      '150 calories per bottle',
      'Excellent source of calcium'
    ]
  },
  {
    id: '2',
    name: 'Great Value Whole Vitamin D Milk, Gallon, 128 fl oz',
    brand: 'Great Value',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
    category: 'dairy',
    upc: '078742370705',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 3.64,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Vitamin D fortified',
      '100% real milk',
      'Grade A',
      'Fresh taste'
    ]
  },
  {
    id: '3',
    name: 'Organic Valley Organic Free Range Large Brown Eggs, 12 ct',
    brand: 'Organic Valley',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
    category: 'dairy',
    upc: '092657000120',
    snapEligible: true,
    discount: {
      amount: 1.50,
      percentage: 20,
      label: '20% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 5.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $6.49 (lowest new)*',
        lowestNew: 6.49,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Certified organic',
      'Free range hens',
      'Large brown eggs',
      'Grade AA'
    ]
  },
  {
    id: '4',
    name: 'Fresh Bananas, each',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop',
    category: 'produce',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 0.58,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Rich in potassium',
      'Natural energy source',
      'Fresh produce',
      'Individually sold'
    ]
  },
  {
    id: '5',
    name: 'Organic Avocados, 4 count',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
    category: 'produce',
    snapEligible: true,
    discount: {
      amount: 2.00,
      percentage: 30,
      label: '30% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 4.68,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $5.99 (lowest new)*',
        lowestNew: 5.99,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Certified organic',
      'Rich in healthy fats',
      'Ripe and ready to eat',
      '4 count package'
    ]
  },
  {
    id: '6',
    name: 'Nature\'s Own 100% Whole Wheat Bread, 20 oz Loaf',
    brand: 'Nature\'s Own',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    category: 'bakery',
    upc: '072250007382',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 2.48,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $3.29 (lowest new)*',
        lowestNew: 3.29,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      '100% whole wheat',
      'No artificial preservatives',
      'Good source of fiber',
      '20 oz loaf'
    ]
  },
  {
    id: '7',
    name: 'Cheerios Cereal, Gluten Free, Whole Grain Oats, 18 oz',
    brand: 'Cheerios',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop',
    category: 'pantry',
    upc: '016000275560',
    snapEligible: true,
    discount: {
      amount: 1.00,
      percentage: 22,
      label: '22% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 3.64,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $4.48 (lowest new)*',
        lowestNew: 4.48,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Gluten free',
      'Whole grain oats',
      'Heart healthy',
      'No artificial flavors'
    ],
    ingredients: ['Whole Grain Oats', 'Modified Corn Starch', 'Sugar', 'Salt', 'Tripotassium Phosphate']
  },
  {
    id: '8',
    name: 'Lay\'s Classic Potato Chips, 13 oz',
    brand: 'Lay\'s',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop',
    category: 'snacks',
    upc: '028400314947',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 4.48,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $4.98 (lowest new)*',
        lowestNew: 4.98,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Classic flavor',
      'Crispy and crunchy',
      '13 oz bag',
      'Party size'
    ]
  },
  {
    id: '9',
    name: 'Horizon Organic Whole Milk, Half Gallon, 64 fl oz',
    brand: 'Horizon',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
    category: 'dairy',
    upc: '042190002085',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 5.24,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $5.98 (lowest new)*',
        lowestNew: 5.98,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        price: 4.99,
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Certified organic',
      'Whole milk',
      'DHA Omega-3',
      'Grade A'
    ]
  },
  {
    id: '10',
    name: 'Fresh Strawberries, 1 lb',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
    category: 'produce',
    snapEligible: true,
    discount: {
      amount: 1.00,
      percentage: 25,
      label: '25% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 2.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Fresh picked',
      'Sweet and juicy',
      '1 lb container',
      'Rich in vitamin C'
    ]
  },
  {
    id: '11',
    name: 'Boneless Skinless Chicken Breast, 2.5 lb',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop',
    category: 'meat',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 9.84,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Boneless & skinless',
      'All natural',
      'High protein',
      'Family pack'
    ]
  },
  {
    id: '12',
    name: 'Wild Caught Salmon Fillet, 1 lb',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop',
    category: 'meat',
    snapEligible: true,
    discount: {
      amount: 3.00,
      percentage: 18,
      label: '18% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 13.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $15.49 (lowest new)*',
        lowestNew: 15.49,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Wild caught',
      'Omega-3 rich',
      'Skin on',
      '1 lb portion'
    ]
  },
  {
    id: '13',
    name: 'Coca-Cola Classic, 12 Pack, 12 fl oz Cans',
    brand: 'Coca-Cola',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop',
    category: 'beverages',
    upc: '049000042566',
    snapEligible: true,
    discount: {
      amount: 1.50,
      percentage: 20,
      label: '20% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 5.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $6.48 (lowest new)*',
        lowestNew: 6.48,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      '12 pack',
      'Classic taste',
      '12 fl oz cans',
      'Perfect for sharing'
    ]
  },
  {
    id: '14',
    name: 'Simply Orange Juice, 52 fl oz',
    brand: 'Simply',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
    category: 'beverages',
    upc: '025000058622',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 4.28,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $4.78 (lowest new)*',
        lowestNew: 4.78,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Not from concentrate',
      '100% orange juice',
      'No added preservatives',
      '52 fl oz'
    ]
  },
  {
    id: '15',
    name: 'Kroger Butter Croissants, 6 count',
    brand: 'Kroger',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
    category: 'bakery',
    snapEligible: true,
    discount: {
      amount: 1.00,
      percentage: 28,
      label: '28% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 2.58,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Buttery and flaky',
      'Freshly baked',
      '6 count package',
      'Perfect for breakfast'
    ]
  },
  {
    id: '16',
    name: 'Dave\'s Killer Bread 21 Whole Grains and Seeds, 27 oz',
    brand: 'Dave\'s Killer Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    category: 'bakery',
    upc: '013110004592',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 5.48,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $5.98 (lowest new)*',
        lowestNew: 5.98,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      '21 whole grains',
      'USDA organic',
      'Non-GMO',
      'Excellent source of fiber'
    ]
  },
  {
    id: '17',
    name: 'Kraft Mac & Cheese, Original, 7.25 oz Box',
    brand: 'Kraft',
    image: 'https://images.unsplash.com/photo-1621510456681-2330135e5871?w=400&h=400&fit=crop',
    category: 'pantry',
    upc: '021000658527',
    snapEligible: true,
    discount: {
      amount: 0.30,
      percentage: 23,
      label: '23% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 0.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $1.28 (lowest new)*',
        lowestNew: 1.28,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Original flavor',
      'Ready in 7 minutes',
      'Family favorite',
      '7.25 oz box'
    ]
  },
  {
    id: '18',
    name: 'Campbell\'s Condensed Tomato Soup, 10.75 oz',
    brand: 'Campbell\'s',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop',
    category: 'pantry',
    upc: '051000012500',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 1.28,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $1.48 (lowest new)*',
        lowestNew: 1.48,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Classic tomato soup',
      'Condensed',
      'Comfort food',
      'Easy to prepare'
    ]
  },
  {
    id: '19',
    name: 'Minute Maid Lemonade, 12 fl oz, 12 Pack',
    brand: 'Minute Maid',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f0e?w=400&h=400&fit=crop',
    category: 'beverages',
    upc: '025000030802',
    snapEligible: true,
    discount: {
      amount: 1.50,
      percentage: 21,
      label: '21% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 5.58,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $6.28 (lowest new)*',
        lowestNew: 6.28,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Refreshing lemonade',
      '12 pack',
      'Made with real lemons',
      'Perfect for lunch boxes'
    ]
  },
  {
    id: '20',
    name: 'Doritos Nacho Cheese Tortilla Chips, 9.75 oz',
    brand: 'Doritos',
    image: 'https://images.unsplash.com/photo-1613919113640-23731f1f4c28?w=400&h=400&fit=crop',
    category: 'snacks',
    upc: '028400047326',
    snapEligible: true,
    discount: {
      amount: 0.50,
      percentage: 14,
      label: '14% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 2.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $3.48 (lowest new)*',
        lowestNew: 3.48,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Nacho cheese flavor',
      'Crunchy corn chips',
      '9.75 oz bag',
      'Party favorite'
    ]
  },
  {
    id: '21',
    name: 'Oreo Chocolate Sandwich Cookies, 14.3 oz',
    brand: 'Oreo',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop',
    category: 'snacks',
    upc: '044000032067',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 3.68,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $3.98 (lowest new)*',
        lowestNew: 3.98,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Classic sandwich cookies',
      'Chocolate wafers',
      'Creme filling',
      'America\'s favorite cookie'
    ]
  },
  {
    id: '22',
    name: 'Romaine Lettuce Hearts, 3 Pack',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop',
    category: 'produce',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 3.48,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Fresh romaine hearts',
      'Crisp and crunchy',
      '3 pack',
      'Perfect for salads'
    ]
  },
  {
    id: '23',
    name: 'Red Bell Peppers, 3 count',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop',
    category: 'produce',
    snapEligible: true,
    discount: {
      amount: 1.00,
      percentage: 22,
      label: '22% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 3.48,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Sweet and crisp',
      'Rich in vitamin C',
      '3 count package',
      'Versatile cooking ingredient'
    ]
  },
  {
    id: '24',
    name: 'Chobani Greek Yogurt, Strawberry, 5.3 oz, 4 Pack',
    brand: 'Chobani',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
    category: 'dairy',
    upc: '894700010007',
    snapEligible: true,
    discount: {
      amount: 1.00,
      percentage: 20,
      label: '20% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 3.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $4.48 (lowest new)*',
        lowestNew: 4.48,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Greek yogurt',
      'Strawberry flavor',
      'High protein',
      '4 pack'
    ]
  },
  {
    id: '25',
    name: 'Philadelphia Cream Cheese, Original, 8 oz',
    brand: 'Philadelphia',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=400&fit=crop',
    category: 'dairy',
    upc: '021000614523',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 2.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $3.28 (lowest new)*',
        lowestNew: 3.28,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Original cream cheese',
      'Rich and creamy',
      '8 oz brick',
      'Perfect for bagels'
    ]
  },
  {
    id: '26',
    name: 'Ground Beef 80/20, 1 lb',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop',
    category: 'meat',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 4.87,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      '80% lean / 20% fat',
      'Fresh ground beef',
      '1 lb package',
      'Perfect for burgers'
    ]
  },
  {
    id: '27',
    name: 'Honey Nut Cheerios Cereal, 19.5 oz',
    brand: 'Cheerios',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop',
    category: 'pantry',
    upc: '016000275577',
    snapEligible: true,
    discount: {
      amount: 0.80,
      percentage: 18,
      label: '18% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 3.64,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $4.18 (lowest new)*',
        lowestNew: 4.18,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Honey nut flavor',
      'Whole grain oats',
      'Heart healthy',
      'Gluten free'
    ]
  },
  {
    id: '28',
    name: 'Pringles Original, 5.5 oz',
    brand: 'Pringles',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop',
    category: 'snacks',
    upc: '038000845222',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 1.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $2.28 (lowest new)*',
        lowestNew: 2.28,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Original flavor',
      'Stackable chips',
      '5.5 oz can',
      'Resealable lid'
    ]
  },
  {
    id: '29',
    name: 'Fresh Blueberries, 18 oz',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1584459853781-6e4ed51deebf?w=400&h=400&fit=crop',
    category: 'produce',
    snapEligible: true,
    discount: {
      amount: 1.50,
      percentage: 30,
      label: '30% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 3.48,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Fresh blueberries',
      'Antioxidant-rich',
      '18 oz container',
      'Perfect for smoothies'
    ]
  },
  {
    id: '30',
    name: 'Barilla Penne Pasta, 16 oz',
    brand: 'Barilla',
    image: 'https://images.unsplash.com/photo-1559394452-087c19c260ac?w=400&h=400&fit=crop',
    category: 'pantry',
    upc: '076808501094',
    snapEligible: true,
    discount: {
      amount: 0.50,
      percentage: 33,
      label: '33% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 1.00,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $1.28 (lowest new)*',
        lowestNew: 1.28,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Penne pasta',
      'Cooks in 11 minutes',
      'Made in Italy',
      '16 oz box'
    ]
  },
  {
    id: '31',
    name: 'Jif Creamy Peanut Butter, 40 oz',
    brand: 'Jif',
    image: 'https://images.unsplash.com/photo-1691480208637-6ed63aac6694?w=400&h=400&fit=crop',
    category: 'pantry',
    upc: '051500255094',
    snapEligible: true,
    discount: {
      amount: 1.50,
      percentage: 24,
      label: '24% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 4.78,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $5.48 (lowest new)*',
        lowestNew: 5.48,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Creamy texture',
      '7g protein per serving',
      '40 oz jar',
      'No artificial preservatives'
    ]
  },
  {
    id: '32',
    name: 'Nature Valley Granola Bars, Oats \'n Honey, 12 count',
    brand: 'Nature Valley',
    image: 'https://images.unsplash.com/photo-1597776776796-092650d7afed?w=400&h=400&fit=crop',
    category: 'snacks',
    upc: '016000275577',
    snapEligible: true,
    discount: {
      amount: 1.20,
      percentage: 26,
      label: '26% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 3.48,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $3.98 (lowest new)*',
        lowestNew: 3.98,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Oats and honey flavor',
      'Whole grain',
      '12 count box',
      'Great for on-the-go'
    ]
  },
  {
    id: '33',
    name: 'Tropicana Apple Juice, 64 fl oz',
    brand: 'Tropicana',
    image: 'https://images.unsplash.com/photo-1672351883535-b3f7dad1a27c?w=400&h=400&fit=crop',
    category: 'beverages',
    upc: '048500003503',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 2.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $3.28 (lowest new)*',
        lowestNew: 3.28,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      '100% apple juice',
      'No added sugar',
      '64 fl oz bottle',
      'Good source of vitamin C'
    ]
  },
  {
    id: '34',
    name: 'Russet Potatoes, 5 lb bag',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
    category: 'produce',
    snapEligible: true,
    offers: [
      {
        provider: 'walmart',
        price: 3.28,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Russet potatoes',
      'Perfect for baking',
      '5 lb bag',
      'Versatile cooking'
    ]
  },
  {
    id: '35',
    name: 'Baby Carrots, 2 lb bag',
    brand: 'Fresh',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop',
    category: 'produce',
    snapEligible: true,
    discount: {
      amount: 0.80,
      percentage: 25,
      label: '25% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 2.38,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Baby carrots',
      'Washed and ready',
      '2 lb bag',
      'Healthy snacking'
    ]
  },
  {
    id: '36',
    name: 'Tillamook Medium Cheddar Cheese, 8 oz',
    brand: 'Tillamook',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=400&fit=crop',
    category: 'dairy',
    upc: '072830000048',
    snapEligible: true,
    discount: {
      amount: 1.00,
      percentage: 20,
      label: '20% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 3.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $4.48 (lowest new)*',
        lowestNew: 4.48,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Medium cheddar',
      'Naturally aged',
      '8 oz block',
      'Perfect for melting'
    ]
  },
  {
    id: '37',
    name: 'Bagel Bites Cheese & Pepperoni, 9 count',
    brand: 'Bagel Bites',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
    category: 'bakery',
    snapEligible: true,
    discount: {
      amount: 0.80,
      percentage: 24,
      label: '24% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 2.58,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Cheese & pepperoni',
      'Microwaveable',
      '9 count',
      'Quick snack'
    ]
  },
  {
    id: '38',
    name: 'Tyson Chicken Nuggets, 32 oz',
    brand: 'Tyson',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop',
    category: 'meat',
    snapEligible: true,
    discount: {
      amount: 2.00,
      percentage: 22,
      label: '22% off'
    },
    offers: [
      {
        provider: 'walmart',
        price: 6.98,
        link: 'https://walmart.com/affiliate/...',
        availability: 'In Stock'
      },
      {
        provider: 'amazon',
        priceLabel: 'From $7.98 (lowest new)*',
        lowestNew: 7.98,
        link: 'https://amazon.com/associate/...',
        availability: 'In Stock',
        timestamp: '2025-10-02T10:30:00Z'
      },
      {
        provider: 'instacart',
        priceLabel: 'Shop on Instacart',
        link: 'https://instacart.com/idp/...',
        availability: 'Available'
      }
    ],
    features: [
      'Fully cooked',
      'Crispy breading',
      '32 oz bag',
      'Kids favorite'
    ]
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === 'discounts') {
    return mockProducts.filter(p => p.discount);
  }
  return mockProducts.filter(p => p.category === categoryId);
};

export const getLowestPrice = (product: Product): number | null => {
  const prices = product.offers
    .filter(o => o.price !== undefined)
    .map(o => o.price as number);
  
  if (prices.length === 0) return null;
  return Math.min(...prices);
};

export const getBestOffer = (product: Product): { provider: string; price: number } | null => {
  const offers = product.offers.filter(o => o.price !== undefined);
  if (offers.length === 0) return null;
  
  const bestOffer = offers.reduce((min, offer) => 
    (offer.price! < min.price! ? offer : min)
  );
  
  return {
    provider: bestOffer.provider,
    price: bestOffer.price!
  };
};
