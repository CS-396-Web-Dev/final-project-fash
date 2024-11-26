'use client';
import { useIQContext } from '@/app/contexts/IqContext';
import { useHealthContext } from '@/app/contexts/HealthContext';
import { useEffect } from 'react';

export default function recipeCarousel() {
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
    <div className="flex flex-wrap justify-start gap-5 p-5">
        <img
          src={`character_health${health}_iq${IQ}`}
          alt="my image"
          className="w-8 h-8"
        />
    </div>
  );
}