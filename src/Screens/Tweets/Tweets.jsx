import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk, updateUserThunk } from '../../redux/user/userOperations';
import { selectUser } from '../../redux/user/userSelector';
import { Card } from '../../Components/Card/Card';
import { Button } from '../../Components/Button/Button';
// import { updateSubscription } from '../../redux/user/userSlice';

export const Tweets = () => {
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();

  const userList = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      console.log(userData.id, userData);
      dispatch(updateUserThunk({ id: userData.id, user: userData }))
        .unwrap()
        .then(() => dispatch(getUsersThunk()));
    }
  }, [dispatch, userData]);

  const onClick = id => {
    const user = userList.find(item => item.id === id);
    if (user) {
      // dispatch(updateSubscription({ id }));
      userList.map(item => {
        if (item.id === user.id) {
          const updatedUser = { ...item };
          updatedUser.subscription = !updatedUser.subscription;
          if (updatedUser.subscription) {
            updatedUser.followers += 1;
          } else {
            updatedUser.followers -= 1;
          }
          // return { ...item, subscription: !item.subscription, item.folower };
          setUserData(updatedUser);
        }
        return item;
      });
      //   console.log('id', user.id);
      //   dispatch(updateUserThunk({ id: user.id }, newUserList))
      //     .then(() => {
      //       console.log('User updated successfully');
      //       dispatch(getUsersThunk()); // Оновити userList після успішного оновлення
      //     })
      //     .catch(error => {
      //       console.log('Error updating user:', error);
      //     });
    }
  };

  return (
    <>
      {userList.length > 0 ? (
        userList.map(item => (
          <li key={item.id}>
            <Card img={item.avatar} tweets={item.tweets} followers={item.followers} />
            <Button
              textButton={item.subscription ? 'Following' : 'Follow'}
              onClick={() => onClick(item.id)}
            />
          </li>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
