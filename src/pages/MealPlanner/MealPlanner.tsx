import React, { useState, useEffect, useCallback } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import useAuth  from '../../hooks/useAuth';
import { db } from '../../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { MealPlan } from '../../types';

const DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const MEAL_TIMES = ['Pequeno-almoço', 'Almoço', 'Jantar'];

interface Recipe {
  id: string;
  name: string;
  description?: string;
}

function SortableItem(props: { id: string; children: React.ReactNode }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </div>
  );
}

const MealPlanner = () => {
  const [weekPlan, setWeekPlan] = useState<MealPlan[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { user } = useAuth();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const loadWeekPlan = useCallback(async () => {
    if (!user) return;
    
    try {
      const docRef = doc(db, 'users', user.uid, 'mealPlans', 'currentWeek');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setWeekPlan(docSnap.data().plans);
      } else {
        // Criar plano vazio para a semana
        const emptyPlan = DAYS.map(day => ({
          id: day.toLowerCase(),
          date: new Date().toISOString(),
          meals: {}
        }));
        setWeekPlan(emptyPlan);
        await setDoc(docRef, { plans: emptyPlan });
      }
    } catch (error) {
      console.error('Erro ao carregar plano:', error);
    }
  }, [user]);

  const loadRecipes = useCallback(async () => {
    if (!user) return;
    
    try {
      const docRef = doc(db, 'users', user.uid, 'recipes', 'all');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setRecipes(docSnap.data().recipes);
      }
    } catch (error) {
      console.error('Erro ao carregar receitas:', error);
    }
  }, [user]);

  useEffect(() => {
    loadWeekPlan();
    loadRecipes();
  }, [loadWeekPlan, loadRecipes]);

  const onDragEnd = (event: DragEndEvent) => {
    if (!event.active || !event.over) return;

    const items = Array.from(recipes);
    const oldIndex = items.findIndex(item => item.id === event.active.id);
    const newIndex = items.findIndex(item => item.id === event.over?.id);

    setRecipes(arrayMove(recipes, oldIndex, newIndex));
  };

  return (
    <div className="meal-planner">
      <h2>Planeamento Semanal de Refeições</h2>
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <div className="week-grid">
          {weekPlan.map((day) => (
            <div key={day.id} className="day-card">
              <h3>{day.id}</h3>
              {MEAL_TIMES.map((mealTime, mealIndex) => (
                <SortableContext
                  key={`${day.id}-${mealTime}`}
                  id={`${day.id}-${mealIndex}`}
                  items={recipes.map(recipe => recipe.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="meal-slot">
                    <h4>{mealTime}</h4>
                    {/* Receitas planejadas aparecerão aqui */}
                  </div>
                </SortableContext>
              ))}
            </div>
          ))}
        </div>
      </DndContext>

      <div className="recipe-list">
        <h3>Receitas Disponíveis</h3>
        <SortableContext
          id="recipes"
          items={recipes.map(recipe => recipe.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="recipes-container">
            {recipes.map((recipe) => (
              <SortableItem
                key={recipe.id}
                id={recipe.id}
              >
                <div className="recipe-card">
                  {recipe.name}
                </div>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};

export default MealPlanner; 