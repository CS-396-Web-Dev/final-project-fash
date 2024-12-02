import { useHungerContext } from '@/app/contexts/HungerContext';
import { useMotivationContext } from '@/app/contexts/MotivationContext';
import { useEffect, useState } from 'react';
import { useLocationContext } from '@/app/contexts/LocationContext';

export default function UpdateHunger() {
    const { setHunger } = useHungerContext();
    const { setMotivation } = useMotivationContext();
    const { location } = useLocationContext();

    // Hunger Timer Logic
    useEffect(() => {
        let hungerInterval: NodeJS.Timeout | null = null;
        let motivationInterval: NodeJS.Timeout | null = null;

        if (location === "gym") {
            console.log("Starting new hunger timer...");
            hungerInterval = setInterval(() => {
                setHunger((prevHunger:number) => Math.max(prevHunger - 1, 0)); // Decrement hunger by 1
            }, 6000); // Update every 6 seconds
        }
        else if (location === "library"){
            console.log("starting new motivation timer...");
            motivationInterval = setInterval(() => {
                setMotivation((prevMotivation:number) => Math.max(prevMotivation - 1, 0)); // Decrement motivation by 1
              }, 6000); // Update every 6 seconds
        }

        // Cleanup interval when the timer stops or the component unmounts
        return () => {
            if (hungerInterval) {
                console.log("Clearing hunger timer...");
                clearInterval(hungerInterval);
            }
            if (motivationInterval){
                console.log("Clearing motivation timer...");
                clearInterval(motivationInterval);
            }
        };
    }, [location]);

    return (null);
}