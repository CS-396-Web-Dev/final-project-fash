'use client';
import { useIQContext } from '@/app/contexts/IqContext';
import { useHealthContext } from '@/app/contexts/HealthContext';
import { useEffect } from 'react';

export default function displayCharacter() {
  const { IQ, setIQ } = useIQContext();
  const { health, setHealth} = useHealthContext();

  var tempHealth: number = health;
  var tempIQ: number = IQ;

  if (IQ < 200 && IQ > 150){
    tempIQ = 150;
  }
  if (IQ < 150 && IQ > 100){
    tempIQ = 100;
  }
  if (IQ < 100 && IQ > 50){
    tempIQ = 50;
  }
  if (IQ < 50 && IQ > 0){
    tempIQ = 0;
  }
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
    <div className="inline-block m-10 z-10">
        <img
          src={`character_health${tempHealth}_iq${tempIQ}.png`}
          alt="my image"
          className="w-20 h-20"
        />
    </div>
  );
}