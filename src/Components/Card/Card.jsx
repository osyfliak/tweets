import React from 'react';
import imageMessage from '../../images/image-messages.svg';
import logo from '../../images/logo.png';
import elips from '../../images/elips.svg';

import {
  ImageMessage,
  Avatar,
  AvatarContainer,
  Logo,
  Div,
  Elips,
  Tweets,
  Followers,
} from './card.styled';

export const Card = ({ img, tweets, followers }) => {
  const NumberFormat = value => {
    const formattedValue = Number(value).toLocaleString('en', { useGrouping: true });
    return formattedValue;
  };

  return (
    <Div>
      <Logo src={logo} alt="logo" />
      <ImageMessage src={imageMessage} alt="icon" />
      <AvatarContainer>
        <Avatar src={img} alt="avatar" />
        <Elips src={elips} alt="elips" />
      </AvatarContainer>
      <Tweets>{NumberFormat(tweets)} TWEETS</Tweets>
      <Followers>{NumberFormat(followers)} FOLOWERS</Followers>
    </Div>
  );
};
