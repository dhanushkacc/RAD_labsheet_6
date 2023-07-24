import React, { useState } from 'react';

const Timer = () => {
  const [time, settime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  let interval ;

  const startTimer = () => {
    interval = setInterval(() => {
      settime((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(interval);
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(true);
    startTimer();
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
    </div>
  );
};

export default Timer;

