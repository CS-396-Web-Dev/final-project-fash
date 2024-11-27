
import { useIQContext } from '../contexts/IqContext';
import { useEffect } from 'react';

// var counter: number = 0;


interface IQProps {
    updateValue: number;
    buttonName: string;
  }

export default function UpdateIQ({ updateValue, buttonName }: IQProps) {
    const { setIQ, IQ } = useIQContext();

  // Function to update the IQ by passed in value
  const onUpdateIQ = () => {
    setIQ(Math.min(Math.max(IQ + updateValue, 0), 100));
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