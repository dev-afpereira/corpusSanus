export interface Recipe {
  id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
  benefits?: string[];
  notes?: string;
} 