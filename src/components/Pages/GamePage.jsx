import React from 'react';
import Game from '../Organisms/Game';
import Button from '../Atoms/Button';
import Controls from '../Molecules/Controls';
import './GameStyles.css'; 


const GamePage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className='gamePage'>
      <Button onClick={handleGoBack} className="go-back-button">
      <i className='bx bxs-left-arrow' ></i>
      </Button>
      <Game />
      <Controls />
    </div>
  );
};

export default GamePage;
