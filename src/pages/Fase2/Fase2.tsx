import { useState } from "react";
import { Link } from "react-router-dom";
import { dailyMenus } from "../../data/menuData";
import { useCompletedDays } from "../../hooks/useCompletedDays";
import { RecipeModal } from "../../components/RecipeModal";
import { Recipe } from "../../types/Recipe";
import { recipes } from "../../data/recipes";
import "../../styles/Fase2.css";

const Fase2 = () => {
  const { completedDays, toggleDayCompletion } = useCompletedDays();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleRecipeClick = (mealText: string) => {
    // Verifica se o texto contém "Verificar as quantidades e preparo na pagina de receitas"
    if (mealText.includes("Verificar as quantidades")) {
      // Encontra a receita correspondente
      const recipe = recipes.find(r => mealText.toLowerCase().includes(r.title.toLowerCase()));
      if (recipe) {
        setSelectedRecipe(recipe);
      }
    }
  };

  return (
    <div className="fase2-container">
      <header className="header-phase">
        <h1>CORPUS SANUS - CARDÁPIOS DIÁRIO</h1>
        <h2>Fase 2 e 3</h2>
      </header>

      <section className="phase-intro">
        <div className="intro-content">
          <h3>Sobre a Fase 2</h3>
          <p>Nesta fase, você iniciará o processo de emagrecimento com uma dieta específica e controlada.</p>
          
          <div className="phase-details">
            <div className="detail-item">
              <h4>Duração</h4>
              <p>32 dias de dieta controlada</p>
            </div>
            
            <div className="detail-item">
              <h4>Objetivo</h4>
              <p>Perda de peso através de cardápio específico e uso de HCG</p>
            </div>

            <div className="detail-item">
              <h4>Importante</h4>
              <ul>
                <li>Siga rigorosamente o cardápio</li>
                <li>Mantenha o uso do HCG conforme prescrito</li>
                <li>Beba muita água durante o dia</li>
                <li>Registre seu progresso diariamente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="menu-grid">
        {dailyMenus.map((day) => (
          <div key={day.day} className={`day-card ${completedDays.includes(day.day) ? 'completed' : ''}`}>
            <div className="day-header">
              <div className="day-title-wrapper">
                <h3>Dia {day.day}</h3>
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={completedDays.includes(day.day)}
                    onChange={() => toggleDayCompletion(day.day)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <p className="motto">{day.motto}</p>
            </div>

            <div className="meals">
              {Object.entries(day.meals).map(([mealType, mealText]) => (
                <div key={mealType} className="meal">
                  <h4>{mealType.toUpperCase()}</h4>
                  <p 
                    onClick={() => handleRecipeClick(mealText)}
                    className={mealText.includes("Verificar") ? "recipe-link" : ""}
                  >
                    {mealText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="phase3-info">
        <h2>FASE 3 - PARABÉNS! VOCÊ CHEGOU NA FASE 3!</h2>
        <div className="info-card">
          <h3>O QUE ESPERAR NESTA FASE?</h3>
          <div className="important-notes">
            <h4>IMPORTANTE:</h4>
            <ul>
              <li>INTERROMPA O USO DO HCG:
                <p>Nesta fase, você não tomará mais o hCG. Continue com a alimentação da Fase 3 por três dias para permitir que o hCG saia completamente do seu sistema.</p>
              </li>
              <li>INTRODUÇÃO DE NOVOS ALIMENTOS:
                <p>Após esses três dias, você poderá começar a introduzir outros tipos de alimentos.</p>
              </li>
              <li>LEMBRE-SE:
                <p>Mantenha todas as restrições alimentares da Fase 2 durante esses três dias. A única diferença é a ausência do hCG.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/fase1" className="nav-button">Fase Anterior</Link>
        <Link to="/fase4" className="nav-button">Próxima Fase</Link>
      </div>

      <footer className="footer">
        <p>© 2024 Corpus Sanus. Todos os direitos reservados.</p>
      </footer>

      <RecipeModal 
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />
    </div>
  );
};

export default Fase2; 