'use client';
import { LocationContext } from '@/app/contexts/LocationContext';
import { useEffect } from 'react';

// interface BackgroundProps {
//     locationName: string;
//   }

export default function displayBackground() {
  const { location, setLocation } = LocationContext();

  return (
    <div className="bg-cover -z-50">
        <img
          src={`${location}.jpg`}
          alt={`${location}`}
        />
    </div>
  );
}