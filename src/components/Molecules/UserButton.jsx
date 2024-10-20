import React from 'react';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import Paragraph from '../Atoms/Paragraph';

const UserButton = () => {
  return (
    <Button className="user-button">
      <Icon iconClass="fa-solid fa-user" />
      <Paragraph text="Username" />
    </Button>
  );
};

export default UserButton;
