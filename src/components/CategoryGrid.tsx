import { categories } from '../data/mockProducts';

interface CategoryGridProps {
  onCategoryClick: (categoryId: string) => void;
}

export function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryClick(category.id)}
          className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border border-border hover:bg-accent transition-colors"
        >
          <span className="text-3xl">{category.icon}</span>
          <span className="text-xs text-center">{category.name}</span>
        </button>
      ))}
    </div>
  );
}
