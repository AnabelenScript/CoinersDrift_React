import React from 'react';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import Text from '../Atoms/Text';

const EventsButton = () => {
  const handleClick = () => {
    window.location.href = '/events';
  };

  return (
    <Button className="events-button" onClick={handleClick}>
      <Icon iconClass="fa-regular fa-calendar" />
      <Text text="Events" />
    </Button>
  );
};

export default EventsButton;
