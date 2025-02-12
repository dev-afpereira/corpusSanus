import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../services/firebase';
import './PatientsList.css';

interface PatientsListProps {
  onAddClick: () => void;
}

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  assignedDoctor: string;
  status: 'active' | 'pending' | 'inactive';
}

const PatientsList = ({ onAddClick }: PatientsListProps) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'patients'), (snapshot) => {
      const patientsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Patient[];
      setPatients(patientsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="patients-list">
      <div className="list-header">
        <h2>Pacientes Cadastrados</h2>
        <button 
          className="add-button"
          onClick={onAddClick}
        >
          Adicionar Paciente
        </button>
      </div>

      {patients.length > 0 ? (
        <table className="patients-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Médico</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.phone}</td>
                <td>{patient.assignedDoctor}</td>
                <td>
                  <span className={`status ${patient.status}`}>
                    {patient.status}
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
          <p>Nenhum paciente cadastrado ainda.</p>
        </div>
      )}
    </div>
  );
};

export default PatientsList; 