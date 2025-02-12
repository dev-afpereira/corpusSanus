import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../../services/firebase';
import './PatientForm.css';

interface PatientFormProps {
  onSuccess: () => void;
}

interface Doctor {
  id: string;
  name: string;
}

const PatientForm = ({ onSuccess }: PatientFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    assignedDoctor: ''
  });
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDoctors = async () => {
      const querySnapshot = await getDocs(collection(db, 'doctors'));
      const doctorsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      }));
      setDoctors(doctorsData);
    };

    loadDoctors();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // 1. Criar usuário no Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        'senha-temporaria123'
      );

      // 2. Adicionar dados do paciente no Firestore
      await addDoc(collection(db, 'patients'), {
        uid: userCredential.user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        assignedDoctor: formData.assignedDoctor,
        status: 'active',
        createdAt: new Date(),
        role: 'patient'
      });

      console.log('Paciente adicionado com sucesso!');
      onSuccess();
    } catch (error) {
      console.error('Erro ao adicionar paciente:', error);
      setError('Erro ao adicionar paciente. Verifique os dados e tente novamente.');
    }
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <h3>Adicionar Novo Paciente</h3>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label>Nome Completo</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label>Médico Responsável</label>
        <select
          name="assignedDoctor"
          value={formData.assignedDoctor}
          onChange={(e) => setFormData({...formData, assignedDoctor: e.target.value})}
          required
        >
          <option value="">Selecione um médico</option>
          {doctors.map(doctor => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Adicionar Paciente
        </button>
      </div>
    </form>
  );
};

export default PatientForm; 