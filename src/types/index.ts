export interface WeightEntry {
  date: string;
  weight: number;
}

export interface ShoppingList {
  id: string;
  items: ShoppingItem[];
  createdAt: string;
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: 'Proteínas' | 'Vegetais' | 'Temperos' | 'Outros';
  checked: boolean;
}

export interface MealPlan {
  id: string;
  date: string;
  meals: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
} 