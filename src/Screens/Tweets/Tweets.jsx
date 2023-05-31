import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/userSelector';
import { Card } from '../../Components/Card/Card';

export const Tweets = () => {
  const userList = useSelector(selectUser);
  return (
    <>
    <p>,,,,,,,</p>
      {userList.map(item => (
        <Card src={item.avatar} />
      ))}
    </>
  );
};
