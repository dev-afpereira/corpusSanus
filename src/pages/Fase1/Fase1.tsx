import { Link } from "react-router-dom";
import "../../styles/Fase1.css";

const Fase1 = () => {
  const healthyFats = [
    {
      title: "Ovos",
      description: "Rico em luteína e zeaxantina, antioxidantes que combatem radicais livres. Contém vitaminas B, A, E, B12, ácido fólico e minerais essenciais."
    },
    {
      title: "Óleo de Coco",
      description: "Acelera o metabolismo, promove saciedade e controla taxas de açúcar no sangue. Excelente para preparações pré-treino."
    },
    {
      title: "Chocolate Amargo (70%+ cacau)",
      description: "Rico em gorduras monoinsaturadas. Melhora a função dos vasos sanguíneos."
    },
    {
      title: "Azeite de Oliva",
      description: "Reduz riscos cardíacos e pressão arterial. Rico em gorduras monoinsaturadas saudáveis."
    },
    {
      title: "Abacate",
      description: "Rico em gorduras monoinsaturadas que reduzem colesterol ruim. Ótimo substituto para manteiga."
    },
    {
      title: "Oleaginosas",
      description: "Amêndoas, nozes, castanhas. Ricas em proteínas, ômega-3 e fibras. Ideais para lanches."
    },
    {
      title: "Peixes Gordurosos",
      description: "Salmão, sardinha, atum. Ricos em ômega-3, essencial para saúde do cérebro."
    },
    {
      title: "Queijos",
      description: "Ricos em proteínas e cálcio. Favorece massa muscular e saúde óssea."
    }
  ];

  return (
    <div className="fase1-container">
      <header className="header-phase">
        <h1>FASE 1 - CARREGAMENTO</h1>
        <p className="phase-motto">"Chegou a hora de virar a página de sua vida!"</p>
      </header>

      <section className="daily-routine">
        <h2>Rotina Diária (5 dias)</h2>
        <div className="time-cards">
          <div className="time-card">
            <h3>7:00</h3>
            <ul>
              <li>5 gotas de HCG sublingual</li>
              <li>Pesar-se e registrar</li>
              <li>2 gotas de lugol em 200ml água</li>
            </ul>
          </div>
          <div className="time-card">
            <h3>11:30</h3>
            <li>5 gotas de HCG sublingual</li>
          </div>
          <div className="time-card">
            <h3>17:30</h3>
            <li>5 gotas de HCG sublingual</li>
          </div>
        </div>
      </section>

      <section className="food-section">
        <h2>Alimentos Recomendados</h2>
        <div className="foods-grid">
          {healthyFats.map((fat, index) => (
            <div key={index} className="food-card">
              <h3>{fat.title}</h3>
              <p>{fat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="warning-section">
        <h3>⚠️ Observações Importantes</h3>
        <ul>
          <li>Nesta fase é OBRIGATÓRIO comer exageradamente!</li>
          <li>Quanto mais peso ganhar, melhores resultados terá na Fase 2</li>
          <li>Aproveite para fazer hidratações e tratamentos estéticos</li>
          <li>Prepare-se comprando balança digital e fita métrica</li>
          <li>Estoque os alimentos permitidos para as próximas fases</li>
        </ul>
      </section>

      <section className="preparation-section">
        <h3>Preparação para Próximas Fases</h3>
        <ul>
          <li>Limpe e pese as proteínas permitidas</li>
          <li>Organize seu estoque de alimentos</li>
          <li>Avise família e amigos sobre sua transformação</li>
          <li>Evite compromissos sociais que possam dificultar a dieta</li>
        </ul>
      </section>

      <div className="navigation-buttons">
        <Link to="/" className="nav-button">Voltar</Link>
        <Link to="/fase2" className="nav-button">Próxima Fase</Link>
      </div>
    </div>
  );
};

export default Fase1;