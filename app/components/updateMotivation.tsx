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
    let buttonPressable:boolean = false;
    const praise_time_pressed = localStorage.getItem('praise_time_pressed');

    if (praise_time_pressed){
      const timeElapsedInSeconds = Math.floor((Date.now() - parseInt(praise_time_pressed, 10)) / 1000);
      if (timeElapsedInSeconds >= 30){
        buttonPressable = true;
      }
    }
    else{
      buttonPressable = true;
    }
    if (buttonName != 'Praise'){
      buttonPressable = true;
    }
    if (buttonPressable){
      setMotivation(Math.min(Math.max(motivation + updateValue, 0), 100));
      if (buttonName == 'Praise') {
        setText('You praised <b>Alfred</b>. Motivation went up 5 points.');
        localStorage.setItem('praise_time_pressed', Date.now().toString()); // save the last time app accessed
      } else {
        setText('You scolded <b>Alfred</b>. Motivation went down 5 points.')
      }
    }
    // we're assuming that motivation bar wants a percentage value
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
