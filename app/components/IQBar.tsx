import { useState } from 'react';
import { useIQContext } from '../contexts/IqContext';

export default function IQBar() {
    // get current IQ level from the context
    const { IQ } = useIQContext();

    console.log("IQ has value ", IQ);
    let color;
    if (IQ > 70) {
        color = 'green';
    } else if (IQ > 30 && IQ <= 70) {
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
                    style={{ width: `${IQ / 2}%` }}
                ></div> 
            </div>
    );
}