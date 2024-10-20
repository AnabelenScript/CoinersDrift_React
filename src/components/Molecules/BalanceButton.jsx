import React from 'react';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import Paragraph from '../Atoms/Paragraph';

const BalanceButton = () => {
  return (
    <Button className="balance-button">
      <Icon iconClass="fa-brands fa-bitcoin" />
      <Paragraph text="999 999" />
    </Button>
  );
};

export default BalanceButton;
