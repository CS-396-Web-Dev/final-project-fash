import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
} from 'react';

interface IqContextProviderProps {
    children: ReactNode;
}

interface IQ {
    IQ: number;
    setIQ: Dispatch<any>;
}

// initial IQ context
const IqContext = createContext<IQ>({
    IQ: 100,
    setIQ: () => {},
});

export const useIqContext = () => useContext(IqContext);

export default function IqContextProvider({
    children,
}: IqContextProviderProps) {
    const [IQ, setIQ] = useState(100);

    return (
        <IqContext.Provider value={{ IQ, setIQ }}>
            {children}
        </IqContext.Provider>
    )
}