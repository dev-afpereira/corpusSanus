import React, { createContext, useContext, useEffect, useState } from 'react';
// ... outras importações

const AuthContext = createContext<AuthContextType>({ /* ... */ });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // ... implementação existente
}; 