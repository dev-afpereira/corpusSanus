import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../../services/firebase';
import './DoctorForm.css';

interface DoctorFormData {
  name: string;
  email: string;
  specialty: string;
  crm: string;
}

interface DoctorFormProps {
  onSuccess: () => void;
}

const DoctorForm = ({ onSuccess }: DoctorFormProps) => {
  const [formData, setFormData] = useState<DoctorFormData>({
    name: '',
    email: '',
    specialty: '',
    crm: ''
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      // 1. Criar usuário no Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        'senha-temporaria123' // Senha temporária que o médico deverá alterar
      );

      // 2. Adicionar dados do médico no Firestore
      await addDoc(collection(db, 'doctors'), {
        uid: userCredential.user.uid,
        name: formData.name,
        email: formData.email,
        specialty: formData.specialty,
        crm: formData.crm,
        status: 'active',
        createdAt: new Date(),
        role: 'doctor'
      });

      // 3. Enviar email com credenciais (implementar depois)
      // TODO: Implementar envio de email com senha temporária

      console.log('Médico adicionado com sucesso!');
      onSuccess();
    } catch (error) {
      console.error('Erro ao adicionar médico:', error);
      setError('Erro ao adicionar médico. Verifique os dados e tente novamente.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="doctor-form" onSubmit={handleSubmit}>
      <h3>Adicionar Novo Médico</h3>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label>Nome Completo</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Especialidade</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>CRM</label>
        <input
          type="text"
          name="crm"
          value={formData.crm}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Adicionar Médico
        </button>
      </div>
    </form>
  );
};

export default DoctorForm; 