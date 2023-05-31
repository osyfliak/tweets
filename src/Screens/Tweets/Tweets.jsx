import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getUsersThunk } from '../../redux/user/userOperations';
import { selectUser } from '../../redux/user/userSelector';
import { Card } from '../../Components/Card/Card';

export const Tweets = () => {
  const dispatch = useDispatch();
const userList = useSelector(selectUser)
  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);
  // console.log(userList);
  return (
    <>
      {userList.map(item => (
        <Card img={item.avatar}/>
      ))}
    </>
  );
};
