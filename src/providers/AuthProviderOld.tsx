import React, { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  setPersistence
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { AuthContext } from '../context/AuthContext';
import { User } from '../types/auth.types';

export function AuthProviderOld({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState({
    user: null as User | null,
    loading: true,
    role: null as 'patient' | 'doctor' | null,
    isVerified: false
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.data();
        
        setAuthState({
          user: firebaseUser as unknown as User,
          role: (userData?.role as 'patient' | 'doctor') || null,
          isVerified: userData?.isVerified || false,
          loading: false
        });
      } else {
        setAuthState({
          user: null,
          role: null,
          isVerified: false,
          loading: false
        });
      }
    });

    setPersistence(auth, browserLocalPersistence);
    return () => unsubscribe();
  }, []);

  const value = {
    ...authState,
    signIn: async (email: string, password: string) => {
      await signInWithEmailAndPassword(auth, email, password);
    },
    signUp: async (email: string, password: string, name: string) => {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });
    },
    logout: async () => {
      await signOut(auth);
      setAuthState(prev => ({ ...prev, user: null }));
    },
    signInWithGoogle: async () => {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider, browserPopupRedirectResolver);
    },
    signInWithFacebook: async () => {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider, browserPopupRedirectResolver);
    },
    signInWithGithub: async () => {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider, browserPopupRedirectResolver);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {!authState.loading && children}
    </AuthContext.Provider>
  );
} 