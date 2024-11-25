import { useState } from 'react';
import { useMotivationContext } from '../contexts/MotivationContext';

export default function MotivationBar() {
    // get current motivation level from the context
    const { motivation } = useMotivationContext();

    return (
        // tailwind status bar from https://flowbite.com/docs/components/progress/
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div 
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${motivation}%` }}
            ></div> 
        </div>
    );
}