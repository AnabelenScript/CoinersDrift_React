import React, { useState, useEffect } from 'react';
import Image from '../Atoms/Image';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const moveToLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveToRight();
    }, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <Image src={images[currentIndex].src} alt={images[currentIndex].alt} />
      </div>
      <div className="carousel-buttons">
        <button className="carousel-button" onClick={moveToLeft}>
          {"<"}
        </button>
        <button className="carousel-button" onClick={moveToRight}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
