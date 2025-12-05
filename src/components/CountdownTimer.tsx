"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    if (value > 0 || timerComponents.length > 0) {
      timerComponents.push(
        <div key={interval} className="flex flex-col items-center mx-2 p-4 bg-white/80 rounded-lg shadow-md backdrop-blur-sm">
          <span className="text-4xl font-bold text-palette-secondary">{String(value).padStart(2, '0')}</span>
          <span className="text-lg text-gray-600 mt-1">{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
        </div>
      );
    }
  });

  return (
    <div className="flex justify-center items-center space-x-4">
      {timerComponents.length ? timerComponents : <span className="text-2xl font-semibold text-green-600">Waktu telah tiba!</span>}
    </div>
  );
};

export default CountdownTimer;