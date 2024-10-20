import React from 'react';
import Sidebar from '../Organisms/Sidebar';
import StartButton from '../Molecules/StartButton';
import homeImage from '../../assets/img/home.png';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="left">
        <Sidebar />
      </div>
      <div className="middle">
        <img src='' alt="Car image" />
      </div>
      <div className="right">
        <StartButton />
      </div>
    </div>
  );
};

export default MainLayout;
