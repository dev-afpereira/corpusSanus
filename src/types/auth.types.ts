export type UserRole = 'doctor' | 'patient' | 'admin';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: 'patient' | 'doctor' | 'admin';
  twoFactorEnabled: boolean;
  phoneNumber?: string;
  isVerified: boolean;
  name: string;
  verified: boolean;
  createdAt: Date;
  invitedBy?: string; // UID do médico que convidou (para pacientes)
}

export interface Invitation {
  id: string;
  email: string;
  doctorId: string;
  status: 'pending' | 'accepted' | 'expired';
  createdAt: Date;
  expiresAt: Date;
} 