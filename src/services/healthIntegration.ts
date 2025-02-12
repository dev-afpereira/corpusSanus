// Conector para APIs de saúde (Apple Health, Google Fit) 
import { getAuth } from 'firebase/auth';
import { GoogleFit, HealthKit } from 'react-native-health';

export const connectHealthData = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  
  if (!user) return;

  try {
    // Integração com Google Fit
    const googleFitData = await GoogleFit.authorize();
    if (googleFitData.success) {
      const steps = await GoogleFit.getDailySteps();
      await saveHealthData(user.uid, 'steps', steps);
    }

    // Integração com Apple HealthKit
    const healthKitData = await HealthKit.initHealthKit({
      permissions: {
        read: ['Steps', 'HeartRate']
      }
    });
    if (healthKitData.success) {
      const heartRate = await HealthKit.getHeartRateSamples();
      await saveHealthData(user.uid, 'heartRate', heartRate);
    }
  } catch (error) {
    console.error('Erro na integração de saúde:', error);
  }
};

const saveHealthData = async (userId: string, metric: string, value: any) => {
  await db.collection('healthData').add({
    userId,
    metric,
    value,
    timestamp: new Date()
  });
}; 