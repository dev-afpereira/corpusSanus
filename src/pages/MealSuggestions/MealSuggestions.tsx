import { useState, useCallback, useEffect } from 'react';
import useAuth  from '../../hooks/useAuth';
import { db } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  ingredients: string[];
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  preparationTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface UserPreferences {
  calorieGoal: number;
  dietType: 'balanced' | 'lowCarb' | 'highProtein';
  allergies: string[];
  excludedIngredients: string[];
}

const MealSuggestions = () => {
  const [suggestions, setSuggestions] = useState<Meal[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const { user } = useAuth();

  const loadPreferences = useCallback(async () => {
    if (!user) return;

    try {
      const docRef = doc(db, 'users', user.uid, 'preferences', 'nutrition');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPreferences(docSnap.data() as UserPreferences);
      }
    } catch (error) {
      console.error('Erro ao carregar preferências:', error);
    }
  }, [user]);

  const loadSuggestions = useCallback(async () => {
    if (!user || !preferences) return;

    try {
      const docRef = doc(db, 'mealSuggestions', preferences.dietType);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const allMeals = docSnap.data().meals as Meal[];
        
        // Filtrar baseado nas preferências
        const filteredMeals = allMeals.filter(meal => {
          const noAllergies = !preferences.allergies.some(allergen => 
            meal.ingredients.includes(allergen)
          );
          const noExcluded = !preferences.excludedIngredients.some(ingredient => 
            meal.ingredients.includes(ingredient)
          );
          return noAllergies && noExcluded;
        });

        setSuggestions(filteredMeals);
      }
    } catch (error) {
      console.error('Erro ao carregar sugestões:', error);
    }
  }, [user, preferences]);

  useEffect(() => {
    loadPreferences();
  }, [loadPreferences]);

  useEffect(() => {
    loadSuggestions();
  }, [loadSuggestions]);

  return (
    <div className="meal-suggestions">
      <h2>Sugestões de Refeições</h2>

      <div className="preferences-summary">
        <h3>Suas Preferências</h3>
        {preferences && (
          <div className="preferences-grid">
            <div className="preference-item">
              <span>Objetivo Calórico:</span>
              <strong>{preferences.calorieGoal} kcal</strong>
            </div>
            <div className="preference-item">
              <span>Tipo de Dieta:</span>
              <strong>{preferences.dietType}</strong>
            </div>
            <div className="preference-item">
              <span>Alergias:</span>
              <strong>{preferences.allergies.join(', ') || 'Nenhuma'}</strong>
            </div>
          </div>
        )}
      </div>

      <div className="suggestions-grid">
        {suggestions.map(meal => (
          <div key={meal.id} className="meal-card">
            <h3>{meal.name}</h3>
            <div className="meal-info">
              <span>🔥 {meal.calories} kcal</span>
              <span>⏱️ {meal.preparationTime} min</span>
              <span>📊 {meal.difficulty}</span>
            </div>
            <div className="macros">
              <div className="macro">
                <span>Proteínas</span>
                <strong>{meal.protein}g</strong>
              </div>
              <div className="macro">
                <span>Carboidratos</span>
                <strong>{meal.carbs}g</strong>
              </div>
              <div className="macro">
                <span>Gorduras</span>
                <strong>{meal.fats}g</strong>
              </div>
            </div>
            <div className="ingredients">
              <h4>Ingredientes:</h4>
              <ul>
                {meal.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealSuggestions; 