
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsAppButton.css';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+35197365099', '_blank');
  };

  return (
    <div className="whatsapp-container">
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <h3>CorpusSanos</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="popup-body">
            <img src="/images/doctor-avatar.jpg" alt="Nutricionista" className="doctor-avatar" />
            <p>Olá! Como posso ajudar você hoje?</p>
            <p className="small-text">Normalmente respondemos em alguns minutos.</p>
          </div>
          <button className="start-chat" onClick={handleWhatsAppClick}>
            <FaWhatsapp /> Iniciar Conversa
          </button>
        </div>
      )}
      <button 
        className={`whatsapp-float ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaWhatsapp size={30} />
        <span className="tooltip">Fale Conosco</span>
      </button>
    </div>
  );
};

export default WhatsAppButton; 