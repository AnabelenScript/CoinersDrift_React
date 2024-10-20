import React from 'react';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import Paragraph from '../Atoms/Paragraph';

const GarageButton = () => {
  return (
    <Button className="garage-button">
      <Icon iconClass="fa-solid fa-box" />
      <Paragraph text="Garage" />
    </Button>
  );
};

export default GarageButton;
