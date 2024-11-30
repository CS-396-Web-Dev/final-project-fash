import { useMotivationContext } from '../contexts/MotivationContext';
import { useEffect, useState } from 'react';
import { useTextContext } from '../contexts/TextContext';
import { useLocationContext } from '@/app/contexts/LocationContext';
// var counter: number = 0;


interface MotivationProps {
  updateValue: number;
  buttonName: string;
}

export default function UpdateMotivation({ updateValue, buttonName }: MotivationProps) {
    const { motivation, setMotivation } = useMotivationContext();
    const { text, setText } = useTextContext();
    const { location } = useLocationContext();
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false); // State to track if the timer is active

  // Function to update the health by passed in value
  const onUpdateMotivation = () => {
    // we're assuming that motivation bar wants a percentage value
    setMotivation(Math.min(Math.max(motivation + updateValue, 0), 100));
    if (buttonName == 'Praise') {
      setText('You praised <b>Alfred</b>. Motivation went up 5 points.');
    } else {
      setText('You scolded <b>Alfred</b>. Motivation went down 5 points.')
    }
  };

    useEffect(() => {
      let motivationInterval: NodeJS.Timeout | null = null;

      if (isTimerRunning) {
        motivationInterval = setInterval(() => {
          setMotivation((prevMotivation:number) => Math.max(prevMotivation - 1, 0)); // Decrement motivation by 1
        }, 600); // Update every 6 seconds
      }

      return () => {
        if (motivationInterval) {
          console.log("STOP TIMER?")
          clearInterval(motivationInterval);}
        };
      }, [isTimerRunning]);
    
      useEffect(() => {
        // Stop the timer when location changes
        setIsTimerRunning(location === "dorm");
      }, [location]);

    // Log whenever health changes
    useEffect(() => {
      console.log(motivation);
    }, [motivation]);

  return (
    <>
        <button
          className="m-5 inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white hover:opacity-50"
          id="add-btn"
          onClick = {(e) => {
            e.preventDefault();
            onUpdateMotivation();
          }}
        >
          {buttonName}
        </button>
    </>
  );
}
