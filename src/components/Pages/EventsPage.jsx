import React from 'react';
import Carousel from '../Organisms/Carousel';
import imagen1 from '../../assets/img/imagen1.png';
import imagen3 from '../../assets/img/image3.png';
import './EventsPage.css'

const images = [
  { src: imagen1, alt: 'Imagen 1' },
  { src: imagen3, alt: 'Imagen 2' }
];

const EventsPage = () => {

  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <>
    <div className='eventsPage'><button className="go-back-button" onClick={handleClick}>
        <i className='bx bxs-left-arrow' ></i>
      </button><div className='events'>
       <div className='titulo1'><h1>Novedades</h1></div> 
    <div className="eventsContainer">
      <Carousel images={images} />
      </div>
    </div></div></>
  );
};

export default EventsPage;
