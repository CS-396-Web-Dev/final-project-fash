import { useLocationContext } from '@/app/contexts/LocationContext';
import { useEffect } from 'react';
import { useTextContext } from '../contexts/TextContext';

// var counter: number = 0;


interface LocationProps {
    locationName: string;
  }

export default function UpdateLocation({ locationName }: LocationProps) {
    const { setLocation, location } = useLocationContext();
    const { text, setText } = useTextContext();

  // Function to update the health by passed in value
  const onUpdateLocation = () => {
    setLocation(locationName);
//     if (locationName == 'library') {
//       setText('You walked to the library');
//     } else {
//       setText('You made <b>Chicken</b> eat dining hall food. Health went down 5 points.')
//     }
//     if (locationName == 'dorm') {
//         setText('You did a Chloe Ting workout with <b>Chicken</b>. Health went up 5 points.');
//         } else {
//         setText('You made <b>Chicken</b> eat dining hall food. Health went down 5 points.')
//         }
//       if (locationName == 'gym') {
//         setText('You did a Chloe Ting workout with <b>Chicken</b>. Health went up 5 points.');
//       } else {
//         setText('You made <b>Chicken</b> eat dining hall food. Health went down 5 points.')
//       }
//       if (locationName == 'dining-hall') {
//         setText('You did a Chloe Ting workout with <b>Chicken</b>. Health went up 5 points.');
//       } else {
//         setText('You made <b>Chicken</b> eat dining hall food. Health went down 5 points.')
//       }    
  };

    // Log whenever health changes
    useEffect(() => {
    console.log(locationName);
    console.log(text);
    }, [locationName, text]);

  return (
    <>
        <button
          className="m-5 inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white hover:opacity-50"
          id="add-btn"
          onClick = {(e) => {
            e.preventDefault();
            onUpdateLocation();
          }}
        >
          Walk to {locationName}
        </button>
    </>
  );
}
