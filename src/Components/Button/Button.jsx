import React from 'react';
import { FollowButton } from './button.styled';

export const Button = ({ subscription, textButton, onClick }) => {
  return (
    <FollowButton onClick={onClick} subscription={subscription}>
      {textButton}
    </FollowButton>
  );
};
