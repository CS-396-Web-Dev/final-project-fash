import { useHungerContext } from '@/app/contexts/HungerContext';
import { useEffect } from 'react';
import { useTextContext } from '../contexts/TextContext';

// var counter: number = 0;


interface HungerProps {
    updateValue: number;
    buttonName: string;
  }

export default function UpdateHunger({ updateValue, buttonName }: HungerProps) {
    const { setHunger, hunger } = useHungerContext();
    const { setText, text } = useTextContext();

  // Function to update the hunger by passed in value
  const onUpdateHunger = () => {
    setHunger(Math.min(Math.max(hunger + updateValue, 0), 100));
    if (buttonName == 'Feed') {
      setText('You fed <b>Chicken</b> some 10Q. Satiety went up 5 points.');
    } else {
      setText('You starved <b>Chicken</b>. Satiety went down 5 points.')
    }
  };

    // Log whenever hunger changes
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
          {buttonName}
        </button>
    </>
  );
}
