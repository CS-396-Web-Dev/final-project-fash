import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
} from 'react';

interface LocationContextProviderProps{
    children: ReactNode;
}

interface Location {
    location: string;
    setLocation: Dispatch<any>;
}

const LocationContext = createContext<Location>({
    location: 'mudd',
    setLocation: () => {};
});

export const useLocationContext = () => useContext(LocationContext);

export default function LocationContextProvider({
    children,
}: LocationContextProviderProps) {

    const savedLocation = localStorage.getItem('location');
    const initialLocation = savedLocation ? JSON.parse(savedLocation) : 'mudd';

    const [location, setLocation] = useState(initialLocation);

    return(
        
    )
}