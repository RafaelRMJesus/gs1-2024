"use client"

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  anos?: number;
  dias?: number;
  horas?: number;
  minutos?: number;
  segundos?: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      const totalSeconds = Math.floor(difference / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalYears = Math.floor(totalDays / 365);

      timeLeft = {
        anos: totalYears,
        dias: totalDays % 365,
        horas: totalHours % 24,
        minutos: totalMinutes % 60,
        segundos: totalSeconds % 60,
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

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval as keyof TimeLeft] !== undefined) {
      timerComponents.push(
        <div key={interval} className="flex flex-col items-center mx-2">
          <span className="text-5xl font-bold">{timeLeft[interval as keyof TimeLeft]}</span>
          <span className="mt-2 text-xl">{interval}</span>
        </div>
      );
    }
  });

  return (
    <div className="flex justify-center items-center space-x-4">
      {timerComponents.length ? timerComponents : <span>Time&rsquo;s up!</span>}
    </div>
  );
};

export default Countdown;
