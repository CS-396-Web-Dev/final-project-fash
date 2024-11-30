import { useHealthContext } from '@/app/contexts/HealthContext';
import { useEffect } from 'react';
import { useTextContext } from '../contexts/TextContext';

// var counter: number = 0;


interface HealthProps {
    updateValue: number;
    buttonName: string;
  }

export default function UpdateHealth({ updateValue, buttonName }: HealthProps) {
    const { setHealth, health } = useHealthContext();
    const { text, setText } = useTextContext();

  // Function to update the health by passed in value
  const onUpdateHealth = () => {
    setHealth(Math.min(Math.max(health + updateValue, 0), 100));
    if (buttonName == 'Exercise') {
      setText('You did a Chloe Ting workout with <b>Alfred</b>. Health went up 5 points.');
    } else {
      setText('You made <b>Alfred</b> eat dining hall food. Health went down 5 points.')
    }
  };

    // Log whenever health changes
    useEffect(() => {
    console.log(health);
    console.log(text);
    }, [health, text]);

  return (
    <>
        <button
          className="m-5 inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white hover:opacity-50"
          id="add-btn"
          onClick = {(e) => {
            e.preventDefault();
            onUpdateHealth();
          }}
        >
          {buttonName}
        </button>
    </>
  );
}
