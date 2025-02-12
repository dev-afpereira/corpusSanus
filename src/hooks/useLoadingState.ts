import { useState, useCallback } from 'react';

export const useLoadingState = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);

  const withLoading = useCallback(async <T>(operation: () => Promise<T>): Promise<T> => {
    setIsLoading(true);
    try {
      return await operation();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, withLoading };
}; 