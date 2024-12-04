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
    IQ: 0,
    setIQ: () => {},
});

export const useIQContext = () => useContext(IQContext);

export default function IQContextProvider({
    children,
}: IQContextProviderProps) {
    const savedIQ = localStorage.getItem('IQ');
    const initialIQ = savedIQ ? JSON.parse(savedIQ) : 0;

    const [IQ, setIQ] = useState(initialIQ);
    


    return (
        <IQContext.Provider value={{ IQ, setIQ }}>
            {children}
        </IQContext.Provider>
    )
}