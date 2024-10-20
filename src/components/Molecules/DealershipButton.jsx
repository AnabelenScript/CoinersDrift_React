import React from 'react';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import Text from '../Atoms/Text';

const DealershipButton = () => {
  return (
    <Button className="dealership-button">
      <Icon iconClass="fa-brands fa-opencart" />
      <Text text="Dealership" />
    </Button>
  );
};

export default DealershipButton;
