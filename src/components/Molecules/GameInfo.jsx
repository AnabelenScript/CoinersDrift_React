import React from 'react';

const GameInfo = ({ score, time, lap, tacho }) => {
  return (
    <div id="hud">
      <div className="info-item">
        <span className="label time-label">TIME</span>
        <span className="value">{time}</span>
      </div>
      <div className="info-item">
        <span className="label score-label">SCORE</span>
        <span className="value">{score}</span>
      </div>
      <div className="info-item">
        <span className="label lap-label">LAP</span>
        <span className="value">{lap}</span>
      </div>
      <div className="info-item">
        <span className="value tacho-value">{tacho}</span>
      </div>
    </div>
  );
};

export default GameInfo;
