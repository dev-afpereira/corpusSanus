import { functions } from './firebase';
import { httpsCallable } from 'firebase/functions';

export const sendInvitationEmail = async (email: string, code: string) => {
  const sendEmail = httpsCallable(functions, 'sendInvitationEmail');
  try {
    await sendEmail({ email, code });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}; 