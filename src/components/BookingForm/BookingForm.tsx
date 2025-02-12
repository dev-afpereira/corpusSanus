import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/seu-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Consulta agendada com sucesso! Entraremos em contato em breve.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Erro ao agendar consulta:', error);
      alert('Erro ao agendar consulta. Por favor, tente novamente.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Mensagem (opcional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <button type="submit" className="submit-button">
        Agendar Consulta Gratuita
      </button>
    </form>
  );
};

export default BookingForm; 