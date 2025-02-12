import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { db } from '../services/firebase';

interface MealItem {
  id: string;
  time: string;
  description: string;
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
  };
}

const MealPlanTemplates = () => {
  const [template, setTemplate] = useState<MealItem[]>([]);
  const [templateName, setTemplateName] = useState('');

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(template);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTemplate(items);
  };

  const addMeal = () => {
    const newMeal: MealItem = {
      id: Date.now().toString(),
      time: '08:00',
      description: 'Nova refeição',
      nutrients: { calories: 0, protein: 0, carbs: 0 }
    };
    setTemplate([...template, newMeal]);
  };

  const saveTemplate = async () => {
    await db.collection('mealTemplates').add({
      name: templateName,
      meals: template,
      createdAt: new Date()
    });
  };

  return (
    <div className="meal-plan-editor">
      <div className="template-header">
        <input
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          placeholder="Nome do template"
        />
        <button onClick={saveTemplate}>Salvar Template</button>
      </div>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="meals">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {template.map((meal, index) => (
                <Draggable key={meal.id} draggableId={meal.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="meal-item"
                    >
                      <div className="meal-time">
                        <input
                          type="time"
                          value={meal.time}
                          onChange={(e) => {
                            const newTemplate = [...template];
                            newTemplate[index].time = e.target.value;
                            setTemplate(newTemplate);
                          }}
                        />
                      </div>
                      <div className="meal-content">
                        <textarea
                          value={meal.description}
                          onChange={(e) => {
                            const newTemplate = [...template];
                            newTemplate[index].description = e.target.value;
                            setTemplate(newTemplate);
                          }}
                        />
                        <div className="nutrient-inputs">
                          <input
                            type="number"
                            placeholder="Calorias"
                            value={meal.nutrients.calories}
                            onChange={(e) => {
                              const newTemplate = [...template];
                              newTemplate[index].nutrients.calories = Number(e.target.value);
                              setTemplate(newTemplate);
                            }}
                          />
                          <input
                            type="number"
                            placeholder="Proteínas (g)"
                            value={meal.nutrients.protein}
                            onChange={(e) => {
                              const newTemplate = [...template];
                              newTemplate[index].nutrients.protein = Number(e.target.value);
                              setTemplate(newTemplate);
                            }}
                          />
                          <input
                            type="number"
                            placeholder="Carboidratos (g)"
                            value={meal.nutrients.carbs}
                            onChange={(e) => {
                              const newTemplate = [...template];
                              newTemplate[index].nutrients.carbs = Number(e.target.value);
                              setTemplate(newTemplate);
                            }}
                          />
                        </div>
                      </div>
                      <div className="drag-handle" {...provided.dragHandleProps}>
                        ☰
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={addMeal} className="add-meal-btn">
        + Adicionar Refeição
      </button>
    </div>
  );
}; 