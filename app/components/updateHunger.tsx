import { useHungerContext } from '@/app/contexts/HungerContext';
import { useEffect, useState } from 'react';
import { useTextContext } from '../contexts/TextContext';

interface HungerProps {
  updateValue: number;
  buttonName: string;
}

export default function UpdateHunger({ updateValue, buttonName }: HungerProps) {
  const { setHunger, hunger } = useHungerContext();
  const { setText } = useTextContext();

  // Function to update hunger manually
  const onUpdateHunger = () => {
    let buttonPressable:boolean = false;
    const feed_time_pressed = localStorage.getItem('feed_time_pressed');

    if (feed_time_pressed){
      const timeElapsedInSeconds = Math.floor((Date.now() - parseInt(feed_time_pressed, 10)) / 1000);
      if (timeElapsedInSeconds >= 30){
        buttonPressable = true;
      }
    }
    else{
      buttonPressable = true;
    }
    if (buttonName != 'Feed'){
      buttonPressable = true;
    }

    if (buttonPressable){
      setHunger(Math.min(Math.max(hunger + updateValue, 0), 100));
      if (buttonName === 'Feed') {
        setText('You fed <b>Alfred</b> some 10Q. Satiety went up 5 points.');
        localStorage.setItem('feed_time_pressed', Date.now().toString()); // save the last time app accessed
      } else {
        setText('You starved <b>Alfred</b>. Satiety went down 5 points.');
      }
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
