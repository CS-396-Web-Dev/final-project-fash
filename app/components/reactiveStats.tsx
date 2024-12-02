import { useEffect, useState } from 'react';

// Import Contexts
import { useHungerContext } from '@/app/contexts/HungerContext';
import { useMotivationContext } from '@/app/contexts/MotivationContext';
import { useLocationContext } from '@/app/contexts/LocationContext';
import { useIQContext } from '@/app/contexts/IqContext';
import { useHealthContext } from '@/app/contexts/HealthContext';

export default function UpdateHunger() {
    const { setHunger } = useHungerContext();
    const { setMotivation } = useMotivationContext();
    const { setIQ } = useIQContext();
    const { setHealth } = useHealthContext();
    const { location } = useLocationContext();

    // Save time to local memory every minute to help calculate stats while away
    useEffect(() => {
        let saveMemoryInterval: NodeJS.Timeout | null = null;

        saveMemoryInterval = setInterval(() => {
            localStorage.setItem('Last Time Accessed', Date.now().toString()); // save the last time app accessed
        }, 6000); // Every 6 seconds

        return() =>{
            if (saveMemoryInterval){
                clearInterval(saveMemoryInterval);
            }
        };
    }, []);

    // Calculate away stats on load 
    useEffect(() => {
        const lastAccessTime = localStorage.getItem('Last Time Accessed');
        const lastLocation = localStorage.getItem('location')

        if (lastAccessTime){
            const current_time = Date.now();
            
            const timeElapsedInSeconds = Math.floor((current_time - parseInt(lastAccessTime, 10)) / 1000);
            console.log(`Time elapsed since last access: ${timeElapsedInSeconds} seconds`);

            if (lastLocation === "gym") {
                setHealth((prevHealth:number) => Math.min(prevHealth + (timeElapsedInSeconds/6) * 3, 100)); // Increase Health by 5
                setHunger((prevHunger:number) => Math.max(prevHunger - (timeElapsedInSeconds/6) * 1, 0)); // Decrement hunger by 1
            }
            else if (lastLocation === "library"){
                setIQ((prevIQ:number) => Math.min(prevIQ + (timeElapsedInSeconds/6) * 1, 200)); // Increase IQ by 1
                setMotivation((prevMotivation:number) => Math.max(prevMotivation -  (timeElapsedInSeconds/6) * 1, 0)); // Decrement motivation by 1
            }
            else if (lastLocation === "dorm"){
                setHealth((prevHealth:number) => Math.min(prevHealth + (timeElapsedInSeconds/6) * 1, 100)); // Increase Health by 1
            }
            else if (lastLocation === "dining-hall"){
                setHealth((prevHealth:number) => Math.max(prevHealth - (timeElapsedInSeconds/3) * 5, 0)); // Decrease health by 5 
                setHunger((prevHunger:number) => Math.max(prevHunger - (timeElapsedInSeconds/3) * 5, 0)); // Decrement hunger by 5
            }

        }
    }, []);
    


    // reactive Stats Logic
    useEffect(() => {
        let hungerInterval: NodeJS.Timeout | null = null;
        let motivationInterval: NodeJS.Timeout | null = null;
        let IQInterval: NodeJS.Timeout | null = null;
        let healthInterval: NodeJS.Timeout | null = null;

        if (location === "gym") {
            console.log("Starting new hunger timer...");
            console.log("starting new health timer...");
            healthInterval = setInterval(() => {
                setHealth((prevHealth:number) => Math.min(prevHealth + 3, 100)); // Increase Health by 5
            }, 6000); // Update every 6 seconds
            hungerInterval = setInterval(() => {
                setHunger((prevHunger:number) => Math.max(prevHunger - 1, 0)); // Decrement hunger by 1
            }, 6000); // Update every 6 seconds
        }
        else if (location === "library"){
            console.log("starting new motivation timer...");
            console.log("starting a new IQ timer...");
            IQInterval = setInterval(() => {
                setIQ((prevIQ:number) => Math.min(prevIQ + 1, 200)); // Increase IQ by 1
              }, 6000); // Update every 6 seconds            
            motivationInterval = setInterval(() => {
                setMotivation((prevMotivation:number) => Math.max(prevMotivation - 1, 0)); // Decrement motivation by 1
              }, 6000); // Update every 6 seconds
        }
        else if (location === "dorm"){
            console.log("starting new health timer...");
            healthInterval = setInterval(() => {
                setHealth((prevHealth:number) => Math.min(prevHealth + 1, 100)); // Increase Health by 1
            }, 6000); // Update every 6 seconds
        }
        else if (location === "dining-hall"){
            console.log("starting new health timer...");
            console.log("also starting new hunger timer...")
            healthInterval = setInterval(() => {
                setHealth((prevHealth:number) => Math.max(prevHealth - 5, 0)); // Decrease health by 5 
            }, 3000); // Update every 3 seconds
            hungerInterval = setInterval(() => {
                setHunger((prevHunger:number) => Math.max(prevHunger - 5, 0)); // Decrement hunger by 5
            }, 3000); // Update every 3 seconds
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
            if (healthInterval){
                console.log("Clearing health timer...");
                clearInterval(healthInterval);
            }
            if (IQInterval){
                console.log("Clearing IQ timer...");
                clearInterval(IQInterval);
            }
        };
    }, [location]);

    return (null);
}