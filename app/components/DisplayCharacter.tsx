'use client';
import { useIQContext } from '@/app/contexts/IqContext';
import { useHealthContext } from '@/app/contexts/HealthContext';
import { useEffect } from 'react';

export default function displayCharacter() {
  const { IQ, setIQ } = useIQContext();
  const { health, setHealth} = useHealthContext();

//   // Function to update the health by passed in value
//   const determineImage = () => {
//     if (health < 75 )
//   };

//     // Log whenever health changes
//     useEffect(() => {
//     console.log(health);
//     }, [health]);

  return (
    <div className="inline-block">
        <img
          src={`character_health${health}_iq${IQ}`}
          alt="my image"
          className="w-20 h-20"
        />
    </div>
  );
}