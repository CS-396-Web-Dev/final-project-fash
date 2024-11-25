import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
  } from 'react';

  interface MotivationContextProviderProps {
    children: ReactNode;
  }

  interface Motivation {
    motivation: number;
    setMotivation: Dispatch<any>;
  }

  const MotivationContext = createContext<Motivation>({
    motivation: 0,
    setMotivation: () => {},
  });

  export const useMotivationContext = () => useContext(MotivationContext);

  export default function MotivationContextProvider({
    children,
  }: MotivationContextProviderProps) {
    const [motivation, setMotivation] = useState(0);

    return (
        <MotivationContext.Provider value={{ motivation, setMotivation }}>
            {children}
        </MotivationContext.Provider>
    );
  }