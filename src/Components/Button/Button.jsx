import React from 'react';
import { FollowButton } from './button.styled';

export const Button = ({ className, textButton, onClick }) => {
  return (
    <FollowButton className={className} onClick={onClick}>
      {textButton}
    </FollowButton>
  );
};
