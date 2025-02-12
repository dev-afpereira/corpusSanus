import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../services/firebase';
import './DoctorsList.css';

interface Doctor {
  id: string;
  name: string;
  email: string;
  specialty: string;
  status: 'active' | 'pending' | 'inactive';
}

interface DoctorsListProps {
  onAddClick: () => void;
}

const DoctorsList = ({ onAddClick }: DoctorsListProps) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'doctors'), (snapshot) => {
      const doctorsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Doctor[];
      setDoctors(doctorsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="doctors-list">
      <div className="list-header">
        <h2>Médicos Cadastrados</h2>
        <button 
          className="add-button"
          onClick={onAddClick}
        >
          Adicionar Médico
        </button>
      </div>

      {doctors.length > 0 ? (
        <table className="doctors-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Especialidade</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <span className={`status ${doctor.status}`}>
                    {doctor.status}
                  </span>
                </td>
                <td>
                  <button className="action-button edit">Editar</button>
                  <button className="action-button delete">Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-state">
          <p>Nenhum médico cadastrado ainda.</p>
        </div>
      )}
    </div>
  );
};

export default DoctorsList; 