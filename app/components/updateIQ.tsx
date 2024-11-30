
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
    setIQ(Math.min(Math.max(IQ + updateValue, 0), 200));
    if (buttonName == 'Study') {
      setText('You made <b>Alfred</b> watch lectures. IQ went up 5 points.');
    } else {
      setText('You went on TikTok with <b>Alfred</b>. IQ went down 5 points.')
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