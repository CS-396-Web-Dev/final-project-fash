
import { useIQContext } from '../contexts/IqContext';
import { useEffect } from 'react';
import { useTextContext } from '../contexts/TextContext';

// var counter: number = 0;


interface IQProps {
    updateValue: number;
    buttonName: string;
  }

export default function UpdateIQ({ updateValue, buttonName }: IQProps) {
    const { setIQ, IQ } = useIQContext();
    const { text, setText } = useTextContext();

  // Function to update the IQ by passed in value
  const onUpdateIQ = () => {
    let buttonPressable:boolean = false;
    const study_time_pressed = localStorage.getItem('study_time_pressed');

    if (study_time_pressed){
      const timeElapsedInSeconds = Math.floor((Date.now() - parseInt(study_time_pressed, 10)) / 1000);
      if (timeElapsedInSeconds >= 30){
        buttonPressable = true;
      }
    }
    else{
      buttonPressable = true;
    }
    if (buttonName != 'Study'){
      buttonPressable = true;
    }
    if (buttonPressable){
      setIQ(Math.min(Math.max(IQ + updateValue, 0), 200));
      if (buttonName == 'Study') {
        setText('You made <b>Alfred</b> watch lectures. IQ went up 5 points.');
        localStorage.setItem('study_time_pressed', Date.now().toString()); // save the last time app accessed
      } else {
        setText('You went on TikTok with <b>Alfred</b>. IQ went down 5 points.')
      }
    }
  };

    // Log whenever IQ changes
    useEffect(() => {
    console.log(IQ);
    }, [IQ]);

  return (
    <>
        <button
          className="m-5 inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white hover:opacity-50"
          id="add-btn"
          onClick = {(e) => {
            e.preventDefault();
            onUpdateIQ();
          }}
        >
          {buttonName}
        </button>
    </>
  );
}