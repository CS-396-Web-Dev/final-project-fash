import { useMotivationContext } from '../contexts/MotivationContext';
import { useEffect, useState } from 'react';
import { useTextContext } from '../contexts/TextContext';

interface MotivationProps {
  updateValue: number;
  buttonName: string;
}

export default function UpdateMotivation({ updateValue, buttonName }: MotivationProps) {
  const { motivation, setMotivation } = useMotivationContext();
  const { text, setText } = useTextContext();

  // Function to update the motivation by passed in value
  const onUpdateMotivation = () => {
    // we're assuming that motivation bar wants a percentage value
    setMotivation(Math.min(Math.max(motivation + updateValue, 0), 100));
    if (buttonName == 'Praise') {
      setText('You praised <b>Alfred</b>. Motivation went up 5 points.');
    } else {
      setText('You scolded <b>Alfred</b>. Motivation went down 5 points.')
    }
  };

    // Log whenever motivation changes
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
