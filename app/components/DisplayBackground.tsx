'use client';
import { useLocationContext } from '@/app/contexts/LocationContext';
import { useEffect } from 'react';

// interface BackgroundProps {
//     locationName: string;
//   }

export default function displayBackground() {
  const { location, setLocation } = useLocationContext();

  return (
    <div
      style={{ backgroundImage: `url(${location}.png)` }}
      className="fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-50 opacity-50"
    />
  );
}