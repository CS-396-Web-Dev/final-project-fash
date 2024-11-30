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
    if (locationName == 'library') {
      setText('You forced <b>Alfred</b> into Mudd Library. He plans to stare blankly at his RecipeStepTracker.');
    } else if (locationName == 'dorm') {
      setText('You walked <b>Alfred</b> back to his dorm. He realizes his mini fridge is starting to smell funky.');
    } else if (locationName == 'gym') {
      setText('You walked <b>Alfred</b> to SPAC. He has been wanting bigger wing muscles lately.');
    } else {
        setText('You walked <b>Alfred</b> to Allison Dining Hall. The cajun chicken looks extra dry today.');   
    };
  }

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
