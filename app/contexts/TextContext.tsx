import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
} from 'react';

interface TextContextProviderProps {
    children: ReactNode;
}

interface Text {
    text: number;
    setText: Dispatch<any>;
}

// initial Text context
const TextContext = createContext<Text>({
    text: 100,
    setText: () => {},
});

export const useTextContext = () => useContext(TextContext);

export default function TextContextProvider({
    children,
}: TextContextProviderProps) {

    const savedText = localStorage.getItem('text');
    const initialText = savedText ? JSON.parse(savedText) : 100;

    const [text, setText] = useState(initialText);



    return (
        <TextContext.Provider value={{ text, setText }}>
            {children}
        </TextContext.Provider>
    )
}