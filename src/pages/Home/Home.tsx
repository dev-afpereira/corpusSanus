import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../styles/Home.css';
import Modal from '../../components/Modal/Modal';
import LoginForm from '../../components/Auth/LoginForm';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import BookingForm from '../../components/BookingForm/BookingForm';

const Home = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="home-container">
      <nav className="home-nav">
        <div className="logo">CorpusSanos</div>
        <div className="nav-buttons">
          <button onClick={() => setIsLoginModalOpen(true)} className="login-button">
            Login
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          className="carousel"
        >
          <div className="carousel-item">
            <img src="/images/healthy-food-1.jpg" alt="Alimentação saudável" />
            <h2>Transforme sua vida com alimentação saudável</h2>
          </div>
          <div className="carousel-item">
            <img src="/images/consultation.jpg" alt="Consulta nutricional" />
            <h2>Acompanhamento personalizado</h2>
          </div>
          <div className="carousel-item">
            <img src="/images/results.jpg" alt="Resultados" />
            <h2>Resultados comprovados</h2>
          </div>
        </Carousel>
      </section>

      <section className="benefits-section">
        <h2>Por que escolher nosso programa?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Plano Personalizado</h3>
            <p>Dieta adaptada ao seu estilo de vida e objetivos</p>
          </div>
          <div className="benefit-card">
            <h3>Acompanhamento Online</h3>
            <p>Suporte contínuo através da nossa plataforma</p>
          </div>
          <div className="benefit-card">
            <h3>Resultados Garantidos</h3>
            <p>Metodologia comprovada cientificamente</p>
          </div>
        </div>
      </section>

      <section className="protocol-section">
        <div className="protocol-header">
          <h2>Método CorpusSanos</h2>
          <p>Rápido, Simples, Seguro e Eficaz!</p>
        </div>

        <div className="protocol-timeline">
          <div className="timeline-phase active">
            <div className="phase-card">
              <div className="phase-icon">1</div>
              <h3>Fase de Carregamento</h3>
              <span className="phase-duration">5 dias</span>
              <div className="phase-content">
                <p className="phase-description">
                  Prepare seu corpo para a transformação! Nesta fase você deve comer o máximo possível, 
                  focando em gorduras boas para ativar seu metabolismo.
                </p>
                <ul className="phase-highlights">
                  <li>Coma sem restrições</li>
                  <li>Foco em gorduras boas</li>
                  <li>Início do HCG</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-phase">
            <div className="phase-card">
              <div className="phase-icon">2</div>
              <h3>Fase de Eliminação</h3>
              <span className="phase-duration">32 dias</span>
              <div className="phase-content">
                <p className="phase-description">
                  O momento da transformação! Com apenas 500 calorias diárias e o auxílio do HCG, 
                  seu corpo utilizará as reservas acumuladas.
                </p>
                <ul className="phase-highlights">
                  <li>Dieta de 500 calorias</li>
                  <li>Cardápio específico</li>
                  <li>Acompanhamento diário</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-phase">
            <div className="phase-card">
              <div className="phase-icon">3</div>
              <h3>Parada do HCG</h3>
              <span className="phase-duration">3 dias</span>
              <div className="phase-content">
                <p className="phase-description">
                  Preparação para a manutenção, mantendo a dieta restrita enquanto seu corpo 
                  se adapta à ausência do HCG.
                </p>
                <ul className="phase-highlights">
                  <li>Mantém 500 calorias</li>
                  <li>Suspensão do HCG</li>
                  <li>Transição controlada</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-phase">
            <div className="phase-card">
              <div className="phase-icon">4</div>
              <h3>Fase de Manutenção</h3>
              <span className="phase-duration">18 dias</span>
              <div className="phase-content">
                <p className="phase-description">
                  Período crucial para estabilizar seu novo peso, aprendendo a manter os 
                  resultados conquistados.
                </p>
                <ul className="phase-highlights">
                  <li>Estabilização do peso</li>
                  <li>Reintrodução alimentar</li>
                  <li>Monitoramento constante</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-phase">
            <div className="phase-card">
              <div className="phase-icon">5</div>
              <h3>Fase de Observação</h3>
              <span className="phase-duration">Para a vida</span>
              <div className="phase-content">
                <p className="phase-description">
                  Sua nova vida começa aqui! Mantenha seus resultados com os hábitos 
                  saudáveis conquistados.
                </p>
                <ul className="phase-highlights">
                  <li>Manutenção dos resultados</li>
                  <li>Novo estilo de vida</li>
                  <li>Acompanhamento contínuo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="protocol-note">
          <p>* São 37 dias de HCG contando do primeiro dia da fase 1</p>
          <p>* O sucesso do tratamento depende exclusivamente de VOCÊ!</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Agende sua consulta gratuita!</h2>
        <p>Comece sua transformação hoje mesmo</p>
        <BookingForm />
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 CorpusSanos. Todos os direitos reservados.</p>
      </footer>

      <Modal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        title="Login"
      >
        <LoginForm onSuccess={() => setIsLoginModalOpen(false)} />
      </Modal>

      <WhatsAppButton />
    </div>
  );
};

export default Home;