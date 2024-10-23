import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import Button from '../Atoms/Button';
import Paragraph from '../Atoms/Paragraph';

const StartButton = () => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleClick = () => {
    navigate('/CoinersDrift'); // Redirige a la ruta CoinersDrift
  };

  return (
    <Button className="start-button" onClick={handleClick}> {/* Asigna el evento onClick */}
      <Paragraph text="Start" />
    </Button>
  );
};

export default StartButton;
