import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2 className='time'>Current Time</h2>
      <p className='time-value'>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentTime;
