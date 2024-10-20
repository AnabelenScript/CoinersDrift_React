import React from 'react';
import UserButton from '../Molecules/UserButton';
import BalanceButton from '../Molecules/BalanceButton';
import GarageButton from '../Molecules/GarageButton';
import DealershipButton from '../Molecules/DealershipButton';
import PartsStoreButton from '../Molecules/PartsStoreButton';
import EventsButton from '../Molecules/EventsButton';
import AboutUsButton from '../Molecules/AboutUsButton';
import LoginButton from '../Molecules/LoginButton';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <UserButton />
        <BalanceButton />
      </div>
      <div className="btmLeft">
        <div className="bipart">
          <GarageButton />
          <DealershipButton />
        </div>
        <PartsStoreButton />
        <EventsButton />
        <div className="btnIInf">
          <AboutUsButton />
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
