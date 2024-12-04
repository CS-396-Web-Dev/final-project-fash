import { useState } from 'react';
import { useHungerContext } from '../contexts/HungerContext';

export default function HungerBar() {
    // get current motivation level from the context
    const { hunger } = useHungerContext();

    console.log("Hunger has value ", hunger);

    let color;
    if (hunger > 70) {
        color = 'green';
    } else if (hunger > 30 && hunger <= 70) {
        color = 'orange';
    } else {
        color = 'red';
    }

    let barStyling = {
        green: "bg-green-600",
        orange: "bg-orange-400",
        red: "bg-red-600",
    }[color] + " h-2.5 rounded-full";

    return (
        // tailwind status bar from https://flowbite.com/docs/components/progress/
            // <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                    className={barStyling}
                    // style="width: 50%"
                    style={{ width: `${hunger}%` }}
                ></div> 
            </div>
    );
}