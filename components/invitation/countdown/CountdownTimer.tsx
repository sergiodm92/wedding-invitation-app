"use client"

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  días: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      días: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    };

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div key={interval} className="flex flex-col items-center p-2 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-24">
      <span className="text-2xl sm:text-4xl font-bold text-textPrimary">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{interval}</span>
    </div>
  ));

  return (
    <div className="text-center">
      <div className="flex justify-center space-x-2 sm:space-x-4">
        {timerComponents.length ? timerComponents : <span className="text-2xl">¡Es el gran día!</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;