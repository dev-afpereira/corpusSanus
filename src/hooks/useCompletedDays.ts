import { useContext } from 'react';
import { CompletedDaysContext } from '../context/CompletedDaysContext';

export const useCompletedDays = () => {
  const context = useContext(CompletedDaysContext);
  if (context === undefined) {
    throw new Error('useCompletedDays must be used within a CompletedDaysProvider');
  }
  return context;
}; 