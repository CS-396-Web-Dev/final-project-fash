import { useMotivationContext } from '../contexts/MotivationContext';
import { useEffect } from 'react';

// var counter: number = 0;


interface MotivationProps {
  updateValue: number;
  buttonName: string;
}

export default function UpdateMotivation({ updateValue, buttonName }: MotivationProps) {
    const { motivation, setMotivation } = useMotivationContext();

  // Function to update the health by passed in value
  const onUpdateMotivation = () => {
    // we're assuming that motivation bar wants a percentage value
    setMotivation(Math.min(Math.max(motivation + updateValue, 0), 100));
  };

    // Log whenever health changes
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
