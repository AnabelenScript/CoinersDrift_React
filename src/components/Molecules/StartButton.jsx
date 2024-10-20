import React from 'react';
import Button from '../Atoms/Button';
import Paragraph from '../Atoms/Paragraph';

const StartButton = () => {
  return (
    <Button className="start-button">
      <Paragraph text="Start" />
    </Button>
  );
};

export default StartButton;
