"use client";

import React, { useState, useEffect } from "react";

interface TimeSinceLoveProps {
  startDate: Date;
}

const TimeSinceLove: React.FC<TimeSinceLoveProps> = ({ startDate }) => {
  const calculateTimeElapsed = () => {
    const now = new Date();
    const difference = now.getTime() - startDate.getTime();

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const timeComponents: JSX.Element[] = [];

  Object.keys(timeElapsed).forEach((interval) => {
    const value = timeElapsed[interval as keyof typeof timeElapsed];
    timeComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 p-4 bg-white rounded-xl shadow-lg">
        <span className="text-4xl font-bold text-palette-secondary">{String(value).padStart(2, '0')}</span>
        <span className="text-lg text-gray-600 mt-1">{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
      </div>
    );
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-palette-primary mb-6">
        Time Since You Said "YES"
      </h2>
      <div className="flex justify-center items-center space-x-4 mb-4">
        {timeComponents}
      </div>
      <p className="text-xl text-gray-700 font-medium  mb-8">
        Every second with your smile has been a blessing.
      </p>
      <div className="w-1/2 h-0.5 bg-palette-primary/30 mx-auto my-8"></div> {/* Separator */}
    </div>
  );
};

export default TimeSinceLove;