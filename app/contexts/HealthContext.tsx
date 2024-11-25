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
  const [health, setHealth] = useState(100);

  return (
    <HealthContext.Provider value={{ health, setHealth }}>
      {children}
    </HealthContext.Provider>
  );
}
