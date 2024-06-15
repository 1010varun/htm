import React from 'react';
import Countdown from 'react-countdown';
import '../App.css';


const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-time">{days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-colon">:</div>
      <div className="countdown-item">
        <div className="countdown-time">{hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-colon">:</div>
      <div className="countdown-item">
        <div className="countdown-time">{minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-colon">:</div>
      <div className="countdown-item">
        <div className="countdown-time">{seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
};

const CountdownTimer = ({ date }) => {
  return (
    <div className="countdown-timer">
      <Countdown date={date} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
