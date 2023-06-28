import React, { useEffect, useState } from 'react';

export default function MyCustomWidget() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);

    return `${formatNumberWithZero(minutes)}:${formatNumberWithZero(seconds)}:${formatNumberWithZero(milliseconds, 3)}`;
  };

  const formatNumberWithZero = (num, width = 2) => {
    return num.toString().padStart(width, '0');
  };

  return (
    <div>
      <p className='time'>{formatTime(time)}</p>
      <div style={{ margin:"auto" , width:"30%"}}> 
      <div className='buttons' style={{display:"flex" , justifyContent:"space-between"}}>
        {isRunning ? (
          <button 
          style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
          onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}
          style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
          >Start</button>
        )}
        <button onClick={handleReset}
        style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}>Reset</button>
      </div>
       </div>
      
    </div>
  );
}
