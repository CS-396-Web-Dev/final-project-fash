// 'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from 'react';

interface HealthContextProviderProps {
  children: ReactNode;
}

export interface HealthContextType {
  health: number;
  setHealth: Dispatch<any>;
}

const HealthContext = createContext<HealthContextType>({
  health: 100,
  setHealth: () => {},
});

export const useHealthContext = () => useContext(HealthContext);

export default function HealthContextProvider({
  children,
}: HealthContextProviderProps) {
  const savedHealth = localStorage.getItem('hunger');
  const initialHealth = savedHealth ? JSON.parse(savedHealth) : 100;

  const [health, setHealth] = useState(initialHealth);

  return (
    <HealthContext.Provider value={{ health, setHealth }}>
      {children}
    </HealthContext.Provider>
  );
}
