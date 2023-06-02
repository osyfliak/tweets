import React from 'react';
import imageMessage from '../../images/image-messages.svg';
import logo from '../../images/logo.png';
import {ImageMessage, Avatar, Div, Logo } from './card.styled';

export const Card = ({ img, tweets, followers }) => {
  const NumberFormat = value => {
    const formattedValue = Number(value).toLocaleString('en', { useGrouping: true });
    return formattedValue;
  };

  return (
    <Div>
      <Logo src={logo} alt="logo" />
      <ImageMessage src={imageMessage} alt="phot" />
      <Avatar src={img} alt="avatar" />
      <p>{NumberFormat(tweets)} TWEETS</p>
      <p>{NumberFormat(followers)} FOLOWERS</p>
    </Div>
  );
};
