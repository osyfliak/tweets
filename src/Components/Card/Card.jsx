import React from 'react';

export const Card = ({ img, tweets, followers}) => {
  return (
    <>
      <img src={img} alt="avatar" />
      <p>{tweets} TWEETS</p>
      <p>{followers} FOLOWERS</p>
    </>
  );
};
