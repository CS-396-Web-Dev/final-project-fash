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
    let buttonPressable:boolean = false;
    const exercise_time_pressed = localStorage.getItem('exercise_time_pressed');

    if (exercise_time_pressed){
      const timeElapsedInSeconds = Math.floor((Date.now() - parseInt(exercise_time_pressed, 10)) / 1000);
      if (timeElapsedInSeconds >= 30){
        buttonPressable = true;
      }
    }
    else{
      buttonPressable = true;
    }
    if (buttonName != 'Exercise'){
      buttonPressable = true;
    }

    if (buttonPressable){
      setHealth(Math.min(Math.max(health + updateValue, 0), 100));
      if (buttonName == 'Exercise') {
        setText('You did a Chloe Ting workout with <b>Alfred</b>. Health went up 5 points.');
        localStorage.setItem('exercise_time_pressed', Date.now().toString()); // save the last time app accessed
      } else {
        setText('You made <b>Alfred</b> eat dining hall food. Health went down 5 points.')
      }
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
