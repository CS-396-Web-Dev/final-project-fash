import { useHungerContext } from '@/app/contexts/HungerContext';
import { useEffect } from 'react';

// var counter: number = 0;


interface HungerProps {
    updateValue: number;
  }

export default function UpdateHunger({ updateValue }: HungerProps) {
    const { setHunger, hunger } = useHungerContext();

  // Function to update the health by passed in value
  const onUpdateHunger = () => {
    setHunger(Math.max(hunger + updateValue, 0));
  };

    // Log whenever health changes
    useEffect(() => {
    console.log(hunger);
    }, [hunger]);

  return (
    <>
        <button
          className="m-5 inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white hover:opacity-50"
          id="add-btn"
          onClick = {(e) => {
            e.preventDefault();
            onUpdateHunger();
          }}
        >
          Feed
        </button>
    </>
  );
}
