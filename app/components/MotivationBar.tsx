import { useState } from 'react';
import { useMotivationContext } from '../contexts/MotivationContext';

export default function MotivationBar() {
    // get current motivation level from the context
    const { motivation } = useMotivationContext();

    console.log("Motivation has value ", motivation);

    let color;
    if (motivation > 70) {
        color = 'green';
    } else if (motivation > 30 && motivation <= 70) {
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
                    style={{ width: `${motivation}%` }}
                ></div> 
            </div>
    );
}