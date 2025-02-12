import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';

interface Reminder {
  id: string;
  medication: string;
  dosage: string;
  time: string;
  completed: boolean;
}

const MedicationReminders = ({ userId }: { userId?: string }) => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    if (userId) {
      const q = query(
        collection(db, 'users', userId, 'reminders'),
        where('time', '<=', new Date().toISOString())
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setReminders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Reminder)));
      });
      return () => unsubscribe();
    }
  }, [userId]);

  return (
    <div className="medication-reminders">
      <h3>Lembretes de Medicação</h3>
      <div className="reminder-list">
        {reminders.map(reminder => (
          <div key={reminder.id} className={`reminder-item ${reminder.completed ? 'completed' : ''}`}>
            <div className="reminder-info">
              <span className="medication-name">{reminder.medication}</span>
              <span className="dosage">{reminder.dosage}</span>
              <span className="time">{new Date(reminder.time).toLocaleTimeString()}</span>
            </div>
            <button className="complete-button">
              {reminder.completed ? '✓' : 'Marcar'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationReminders; 