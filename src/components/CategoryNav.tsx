import React from 'react';
import { 
  Building2, 
  Palmtree, 
  Landmark, 
  Store, 
  Mountain, 
  Waves, 
  Cpu, 
  Home, 
  Layers
} from 'lucide-react';
import { PlaceCategory } from '../types';

interface CategoryNavProps {
  selectedCategory: PlaceCategory;
  onSelectCategory: (category: PlaceCategory) => void;
  categoryCounts: Record<PlaceCategory, number>;
}

interface CategoryItem {
  id: PlaceCategory;
  label: string;
  icon: React.ReactNode;
}

const CATEGORIES: CategoryItem[] = [
  { id: 'All', label: 'All Localities', icon: <Layers className="w-4 h-4" /> },
  { id: 'Coastal & Beach', label: 'Beaches & Coastal', icon: <Palmtree className="w-4 h-4" /> },
  { id: 'Heritage & Culture', label: 'Heritage & Culture', icon: <Landmark className="w-4 h-4" /> },
  { id: 'Urban & Commercial', label: 'Towns & Markets', icon: <Store className="w-4 h-4" /> },
  { id: 'Nature & Hills', label: 'Hills & Nature', icon: <Mountain className="w-4 h-4" /> },
  { id: 'Backwaters & Waterways', label: 'Backwaters & Rivers', icon: <Waves className="w-4 h-4" /> },
  { id: 'Tech & Knowledge Hub', label: 'Tech & IT Hubs', icon: <Cpu className="w-4 h-4" /> },
  { id: 'Village & Panchayat', label: 'Villages & Panchayats', icon: <Home className="w-4 h-4" /> }
];

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts
}) => {
  return (
    <div className="w-full overflow-x-auto py-2 scrollbar-none" id="category-navigation">
      <div className="flex items-center gap-2 min-w-max px-1">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              <span className={isSelected ? 'text-amber-400' : 'text-neutral-500'}>
                {cat.icon}
              </span>
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold ${
                  isSelected
                    ? 'bg-neutral-800 text-neutral-300'
                    : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
