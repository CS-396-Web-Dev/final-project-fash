import { useHungerContext } from '@/app/contexts/HungerContext';
import { useEffect, useState } from 'react';
import { useTextContext } from '../contexts/TextContext';
import { useLocationContext } from '@/app/contexts/LocationContext';

interface HungerProps {
  updateValue: number;
  buttonName: string;
}
var hungerInterval: NodeJS.Timeout | null = null;

export default function UpdateHunger({ updateValue, buttonName }: HungerProps) {
  const { setHunger, hunger } = useHungerContext();
  const { setText } = useTextContext();
  const { location } = useLocationContext();
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false); // State to track if the timer is active

  // Function to update hunger manually
  const onUpdateHunger = () => {
    setHunger(Math.min(Math.max(hunger + updateValue, 0), 100));
    if (buttonName === 'Feed') {
      setText('You fed <b>Alfred</b> some 10Q. Satiety went up 5 points.');
    } else {
      setText('You starved <b>Alfred</b>. Satiety went down 5 points.');
    }
  };

  // Hunger Timer Logic
  useEffect(() => {
    let hungerInterval: NodeJS.Timeout | null = null;

    if (isTimerRunning) {
      hungerInterval = setInterval(() => {
        setHunger((prevHunger:number) => Math.max(prevHunger - 1, 0)); // Decrement hunger by 1
      }, 600); // Update every 6 seconds
    }

    // Cleanup interval when the timer stops or the component unmounts
    return () => {
      if (hungerInterval) {
        console.log("STOP TIMER?")
        clearInterval(hungerInterval);}
    };
  }, [isTimerRunning]);


  useEffect(() => {
    // Stop the timer when location changes
    setIsTimerRunning(location === "gym");
  }, [location]);


  // Log whenever hunger changes
  useEffect(() => {
    console.log(hunger);
  }, [hunger]);

  return (
    <>
      <button
        className="m-5 inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white hover:opacity-50"
        id="add-btn"
        onClick={(e) => {
          e.preventDefault();
          onUpdateHunger();
        }}
      >
        {buttonName}
      </button>
    </>
  );
}
