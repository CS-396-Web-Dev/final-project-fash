import { useState } from 'react';
import { useIQContext } from '../contexts/IqContext';

export default function IQBar() {
    // get current IQ level from the context
    const { IQ } = useIQContext();

    console.log("IQ has value ", IQ);

    return (
        // tailwind status bar from https://flowbite.com/docs/components/progress/
            // <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                    className="bg-blue-600 h-2.5 rounded-full"
                    // style="width: 50%"
                    style={{ width: `${IQ}%` }}
                ></div> 
            </div>
    );
}