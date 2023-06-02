import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk, updateUserThunk } from '../../redux/user/userOperations';
import { selectUser } from '../../redux/user/userSelector';
import { Card } from '../../Components/Card/Card';
import { Button } from '../../Components/Button/Button';
import { Pagination } from '../../Components/Pagination/Pagination';
import { Block, Items,} from './tweets.styled';
// import { updateSubscription } from '../../redux/user/userSlice';

export const Tweets = () => {
  const [userData, setUserData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);

  const dispatch = useDispatch();

  const userList = useSelector(selectUser);

  const lastUserIndex = currentPage * userPerPage;
  const firtUserIndex = lastUserIndex - userPerPage;
  const currentUser = userList.slice(firtUserIndex, lastUserIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      dispatch(updateUserThunk({ id: userData.id, user: userData }))
        .unwrap()
        .then(() => dispatch(getUsersThunk()));
    }
  }, [dispatch, userData]);

  const onClick = id => {
    const user = userList.find(item => item.id === id);
    if (user) {
      userList.map(item => {
        if (item.id === user.id) {
          const updatedUser = { ...item };
          updatedUser.subscription = !updatedUser.subscription;
          if (updatedUser.subscription) {
            updatedUser.followers += 1;
          } else {
            updatedUser.followers -= 1;
          }

          setUserData(updatedUser);
        }
        return item;
      });
    }
  };

  return (
    <>
      <Block>
        {currentUser.map(item => (
          <Items key={item.id}>
            <Card img={item.avatar} tweets={item.tweets} followers={item.followers} />
            <Button
              textButton={item.subscription ? 'Following' : 'Follow'}
              onClick={() => onClick(item.id)}
            />
          </Items>
        ))}
      </Block>
      <Pagination userPerPage={userPerPage} totalUser={userList.length} paginate={paginate} />
    </>
  );
};
