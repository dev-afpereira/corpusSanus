import { db } from './firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import PushNotification from 'react-native-push-notification';

export const setupNotifications = (userId: string) => {
  // Notificações de consultas
  const appointmentsQuery = query(
    collection(db, 'appointments'),
    where('userId', '==', userId),
    where('date', '>', new Date())
  );
  
  onSnapshot(appointmentsQuery, (snapshot) => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        const appointment = change.doc.data();
        PushNotification.localNotificationSchedule({
          message: `Você tem uma consulta em ${new Date(appointment.date).toLocaleString()}`,
          date: new Date(appointment.date - 15*60000) // 15 minutos antes
        });
      }
    });
  });

  // Notificações de lembretes
  const remindersQuery = query(
    collection(db, 'users', userId, 'reminders'),
    where('time', '<=', new Date().toISOString())
  );

  onSnapshot(remindersQuery, (snapshot) => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        const reminder = change.doc.data();
        PushNotification.localNotification({
          title: 'Lembrete de Medicação',
          message: `Hora de tomar ${reminder.medication} - ${reminder.dosage}`
        });
      }
    });
  });
}; 