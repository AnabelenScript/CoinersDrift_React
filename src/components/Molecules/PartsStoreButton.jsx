import React from 'react';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import Text from '../Atoms/Text';

const PartsStoreButton = () => {
  return (
    <Button className="partsstore-button">
      <Icon iconClass="fa-solid fa-turn-up" />
      <Text text="Parts Store" />
    </Button>
  );
};

export default PartsStoreButton;
