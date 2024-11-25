import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
} from 'react';

interface IQContextProviderProps {
    children: ReactNode;
}

interface IQ {
    IQ: number;
    setIQ: Dispatch<any>;
}

// initial IQ context
const IQContext = createContext<IQ>({
    IQ: 100,
    setIQ: () => {},
});

export const useIQContext = () => useContext(IQContext);

export default function IQContextProvider({
    children,
}: IQContextProviderProps) {
    const [IQ, setIQ] = useState(100);

    return (
        <IQContext.Provider value={{ IQ, setIQ }}>
            {children}
        </IQContext.Provider>
    )
}