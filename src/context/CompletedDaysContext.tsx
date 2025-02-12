import { createContext } from 'react';

interface CompletedDaysContextType {
  completedDays: number[];
  toggleDayCompletion: (day: number) => void;
}

export const CompletedDaysContext = createContext<CompletedDaysContextType | undefined>(undefined);