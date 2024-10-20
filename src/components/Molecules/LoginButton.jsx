import React from 'react';
import Button from '../Atoms/Button';
import Text from '../Atoms/Text';

const LoginButton = () => {
  return (
    <Button className="login-button">
      <Text text="Log in" />
    </Button>
  );
};

export default LoginButton;
