import React, { useState, useEffect } from 'react';

const Timer = () => {
  const initialSeconds = 600; // 600 seconds = 10 minutes
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
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
      <div className="timer-container w-full flex gap-2 bg-blue-500 p-1 rounded-md text-white">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                        </svg>
      <div className="timer-display font-bold">{displayTime()}</div>
    </div>
  );
};


export default Timer;
