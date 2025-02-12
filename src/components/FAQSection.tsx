import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [faqs] = useState<FAQItem[]>([
    {
      question: "Como marcar uma consulta?",
      answer: "Acesse a seção de agendamento no seu dashboard..."
    },
    {
      question: "Posso alterar meu plano alimentar?",
      answer: "Entre em contato com seu nutricionista para ajustes..."
    }
  ]);

  return (
    <div className="faq-section">
      <h3>Perguntas Frequentes</h3>
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="faq-question">
            {faq.question}
            <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection; 