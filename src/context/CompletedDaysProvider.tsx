import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { CompletedDaysContext } from './CompletedDaysContext';

export const CompletedDaysProvider = ({ children }: { children: React.ReactNode }) => {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`completedDays_${user.uid}`);
      if (saved) {
        setCompletedDays(JSON.parse(saved));
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`completedDays_${user.uid}`, JSON.stringify(completedDays));
    }
  }, [completedDays, user]);

  const toggleDayCompletion = (day: number) => {
    setCompletedDays(prev => {
      if (prev.includes(day)) {
        return prev.filter(d => d !== day);
      } else {
        return [...prev, day];
      }
    });
  };

  return (
    <CompletedDaysContext.Provider value={{ completedDays, toggleDayCompletion }}>
      {children}
    </CompletedDaysContext.Provider>
  );
}; 