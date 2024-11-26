'use client';
import { useIQContext } from '@/app/contexts/IqContext';
import { useHealthContext } from '@/app/contexts/HealthContext';
import { useEffect } from 'react';

export default function displayCharacter() {
  const { IQ, setIQ } = useIQContext();
  const { health, setHealth} = useHealthContext();

  var tempHealth: number = health;
  if (health < 100 && health > 50){
    tempHealth = 100;
  }
  if (health < 50 && health > 0){
    tempHealth = 50;
  }

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
          src={`character_health${tempHealth}_iq${IQ}.png`}
          alt="my image"
          className="w-20 h-20"
        />
    </div>
  );
}