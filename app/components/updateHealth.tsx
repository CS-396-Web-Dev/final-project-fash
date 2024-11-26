import { useHealthContext } from '@/app/contexts/HealthContext';
import { useEffect } from 'react';

// var counter: number = 0;


interface HealthProps {
    updateValue: number;
  }

export default function UpdateHealth({ updateValue }: HealthProps) {
    const { setHealth, health } = useHealthContext();

  // Function to update the health by passed in value
  const onUpdateHealth = () => {
    setHealth(Math.min(Math.max(health + updateValue, 0), 100));
  };

    // Log whenever health changes
    useEffect(() => {
    console.log(health);
    }, [health]);

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
          Update Health
        </button>
    </>
  );
}
