import { useState, useCallback, useEffect } from 'react';
import useAuth  from '../../hooks/useAuth';
import { db } from '../../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface MealDay {
  date: string;
  breakfast?: string;
  lunch?: string;
  dinner?: string;
  snacks?: string[];
}

const MealCalendar = () => {
  const [weekMeals, setWeekMeals] = useState<MealDay[]>([]);
  const { user } = useAuth();

  const loadWeekMeals = useCallback(async () => {
    if (!user) return;

    try {
      const docRef = doc(db, 'users', user.uid, 'meals', 'currentWeek');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setWeekMeals(docSnap.data().meals);
      } else {
        // Criar semana vazia
        const emptyWeek = Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() + i);
          return {
            date: date.toISOString(),
            breakfast: '',
            lunch: '',
            dinner: '',
            snacks: []
          };
        });
        await setDoc(docRef, { meals: emptyWeek });
        setWeekMeals(emptyWeek);
      }
    } catch (error) {
      console.error('Erro ao carregar refeições:', error);
    }
  }, [user]);

  useEffect(() => {
    loadWeekMeals();
  }, [loadWeekMeals]);

  const updateMeal = async (dayIndex: number, mealType: keyof MealDay, value: string) => {
    if (!user) return;

    const updatedMeals = [...weekMeals];
    updatedMeals[dayIndex] = {
      ...updatedMeals[dayIndex],
      [mealType]: value
    };

    try {
      const docRef = doc(db, 'users', user.uid, 'meals', 'currentWeek');
      await setDoc(docRef, { meals: updatedMeals });
      setWeekMeals(updatedMeals);
    } catch (error) {
      console.error('Erro ao atualizar refeição:', error);
    }
  };

  return (
    <div className="meal-calendar">
      <h2>Calendário Semanal de Refeições</h2>
      
      <div className="week-grid">
        {weekMeals.map((day, dayIndex) => (
          <div key={day.date} className="day-card">
            <h3>{new Date(day.date).toLocaleDateString('pt-PT', { weekday: 'long' })}</h3>
            <div className="meal-slots">
              <div className="meal-slot">
                <h4>Pequeno-almoço</h4>
                <input
                  type="text"
                  value={day.breakfast || ''}
                  onChange={(e) => updateMeal(dayIndex, 'breakfast', e.target.value)}
                  placeholder="Adicionar refeição..."
                />
              </div>
              <div className="meal-slot">
                <h4>Almoço</h4>
                <input
                  type="text"
                  value={day.lunch || ''}
                  onChange={(e) => updateMeal(dayIndex, 'lunch', e.target.value)}
                  placeholder="Adicionar refeição..."
                />
              </div>
              <div className="meal-slot">
                <h4>Jantar</h4>
                <input
                  type="text"
                  value={day.dinner || ''}
                  onChange={(e) => updateMeal(dayIndex, 'dinner', e.target.value)}
                  placeholder="Adicionar refeição..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealCalendar; 