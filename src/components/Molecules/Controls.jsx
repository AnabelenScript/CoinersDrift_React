import React from 'react';

const Controls = () => {
  return (
    <div id="controls">
      <span className="control-item">
        <span className="key">C</span> Jugar
      </span>
      <span className="control-item">
        <span className="key">M</span> Silencio
      </span>
      <span className="control-item">
        <span className="key pixel-icon"><i className='bx bx-chevron-left'></i></span>
        <span className="key pixel-icon"><i className='bx bx-chevron-right' ></i></span> Mover
      </span>
      <span className="control-item">
        <span className="key pixel-icon"><i className='bx bx-chevron-up' ></i></span>
        <span className="key pixel-icon"><i className='bx bx-chevron-down' ></i></span> Acelerar
      </span>
    </div>
  );
};

export default Controls;
