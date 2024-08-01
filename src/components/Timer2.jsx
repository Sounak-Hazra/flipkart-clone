
import React, { useState, useEffect } from 'react';

const Timer2 = () => {
  const initialSeconds = 375; // 600 seconds = 10 minutes
  const [seconds, setSeconds] = useState(initialSeconds);

  // Effect to decrement timer every second and reset to 10 minutes when it reaches 00:00
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);
          return initialSeconds; // Reset to 10 minutes
        }
      });
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format seconds into minutes and seconds for display
  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}min ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}sec`;
  };

  return (
      <div className="timer-container w-full flex items-center justify-center text-xl  p-3 rounded-md text-red-500 font-bold">
      <div className="timer-display font-bold">{displayTime()}</div>
    </div>
  );
};


export default Timer2;
