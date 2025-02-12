import React from 'react';
import { Recipe } from '../types/Recipe';

interface Props {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<Props> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-modal-overlay" onClick={onClose}>
      <div className="recipe-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <h2>{recipe.title}</h2>
        
        <div className="recipe-section">
          <h3>Ingredientes:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-section">
          <h3>Modo de Preparo:</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>

        {recipe.tips && (
          <div className="recipe-section">
            <h3>Dicas:</h3>
            <ul>
              {recipe.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}; 