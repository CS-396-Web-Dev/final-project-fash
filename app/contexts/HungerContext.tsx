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

    const savedHunger = localStorage.getItem('hunger');
    const initialHunger = savedHunger ? JSON.parse(savedHunger) : 100;

    const [hunger, setHunger] = useState(initialHunger);



    return (
        <HungerContext.Provider value={{ hunger, setHunger }}>
            {children}
        </HungerContext.Provider>
    )
}