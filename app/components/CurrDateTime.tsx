// inspired by https://medium.com/create-a-clocking-in-system-on-react/create-a-react-app-displaying-the-current-date-and-time-using-hooks-21d946971556

import { useState, useEffect } from 'react';

// define a conversion from int to string for days of the week
const DAYSTRINGS = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.']

export default function CurrDateTime () {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60000);                                  // update each minute (60k ms)

        return () => clearInterval(timer);          // cleanup for unmounting
    }, []);                                         // no dependencies (run once on mount)

    // get info from current date object
    const day = DAYSTRINGS[date.getDay()];
    const hour = date.getHours();
    const minute = date.getMinutes();

    // format the time string as am/pm
    const formattedMinute = minute < 10 ? `0${minute}` : minute
    const formattedHour = hour % 12 || 12;         // if 0, show as 12 (midnight)
    // ^ this is kinda unreadable code, maybe factor out
    const ampm = hour < 12 ? 'am' : 'pm'
    
    return (
        <div>
            {/* <p>Time: {date.toLocaleTimeString()}</p>
            <p>Date: {date.toLocaleDateString()}</p>
            <p>Day: {day}</p> */}
            <p>{day} {formattedHour}:{formattedMinute}{ampm}</p>
        </div>
    );
}