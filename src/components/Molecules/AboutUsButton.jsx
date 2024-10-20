import React from 'react';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import Text from '../Atoms/Text';

const AboutUsButton = () => {
  return (
    <Button className="aboutus-button">
      <Icon iconClass="fa-solid fa-users" />
      <Text text="About us" />
    </Button>
  );
};

export default AboutUsButton;
