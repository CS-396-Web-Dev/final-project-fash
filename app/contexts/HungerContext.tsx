import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
} from 'react';

interface HungerContextProviderProps {
    children: ReactNode;
}

interface Hunger {
    hunger: number;
    setHunger: Dispatch<any>;
}

// initial Hunger context
const HungerContext = createContext<Hunger>({
    hunger: 100,
    setHunger: () => {},
});

export const useHungerContext = () => useContext(HungerContext);

export default function HungerContextProvider({
    children,
}: HungerContextProviderProps) {
    const [hunger, setHunger] = useState(100);

    return (
        <HungerContext.Provider value={{ hunger, setHunger }}>
            {children}
        </HungerContext.Provider>
    )
}