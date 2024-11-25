import { useState } from 'react';
import { useHealthContext } from '../contexts/HealthContext';

export default function HealthBar() {
    // get current motivation level from the context
    const { health } = useHealthContext();

    console.log("Health has value ", health);

    return (
        // tailwind status bar from https://flowbite.com/docs/components/progress/
            // <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                    className="bg-blue-600 h-2.5 rounded-full"
                    // style="width: 50%"
                    style={{ width: `${health}%` }}
                ></div> 
            </div>
    );
}