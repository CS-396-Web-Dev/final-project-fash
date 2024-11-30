import { useState } from 'react';
import { useHealthContext } from '../contexts/HealthContext';

export default function HealthBar() {
    // get current motivation level from the context
    const { health } = useHealthContext();

    console.log("Health has value ", health);

    let color;
    if (health > 70) {
        color = 'green';
    } else if (health > 30 && health <= 70) {
        color = 'orange';
    } else {
        color = 'red';
    }

    let barStyling = {
        green: "bg-green-600",
        orange: "bg-orange-400",
        red: "bg-red-600",
    }[color] + " h-2.5 rounded-full";

    // let barStyling = `bg-${color}-600 h-2.5 rounded-full`;

    return (
        // tailwind status bar from https://flowbite.com/docs/components/progress/
            // <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                    className={barStyling}
                    // style="width: 50%"
                    style={{ width: `${health}%` }}
                ></div> 
            </div>
    );
}