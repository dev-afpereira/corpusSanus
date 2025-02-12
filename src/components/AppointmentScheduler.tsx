import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, onSnapshot, where, deleteDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

interface Appointment {
  id: string;
  title: string;
  start: Date;
  end: Date;
  patientId?: string;
  notes?: string;
}

interface AppointmentSchedulerProps {
  doctorId?: string;
}

const localizer = momentLocalizer(moment);

export const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = ({ doctorId }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [newAppointment, setNewAppointment] = useState<Partial<Appointment>>({
    title: '',
    start: new Date(),
    end: new Date(),
  });

  useEffect(() => {
    if (doctorId) {
      const q = query(
        collection(db, 'appointments'),
        where('doctorId', '==', doctorId)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const apps = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Appointment[];
        setAppointments(apps);
      });
      return () => unsubscribe();
    }
  }, [doctorId]);

  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    setNewAppointment({
      ...newAppointment,
      start: slotInfo.start,
      end: slotInfo.end,
    });
  };

  const handleSubmit = async () => {
    if (doctorId && newAppointment.title) {
      await addDoc(collection(db, 'appointments'), {
        ...newAppointment,
        doctorId,
        createdAt: new Date()
      });
      setNewAppointment({ title: '', start: new Date(), end: new Date() });
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'appointments', id));
  };

  return (
    <div className="scheduler-container">
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={event => {
          if (window.confirm('Deseja excluir este agendamento?')) {
            handleDelete(event.id);
          }
        }}
      />
      
      <div className="appointment-form">
        <input
          type="text"
          placeholder="Título da consulta"
          value={newAppointment.title}
          onChange={(e) => setNewAppointment({...newAppointment, title: e.target.value})}
        />
        <button onClick={handleSubmit}>Agendar Consulta</button>
      </div>
    </div>
  );
}; 