import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk, updateUserThunk } from '../../redux/user/userOperations';
import { selectUser } from '../../redux/user/userSelector';
import { Card } from '../../Components/Card/Card';
import { Button } from '../../Components/Button/Button';

import { Block, Items, Line } from './tweets.styled';
import line from '../../images/line.svg';
import { Dropdown } from '../../Components/Dropdown/Dropdown';
import { ButtonLoadMore } from '../../Components/ButtonLoadMore/ButtonLoadMore';

export const Tweets = () => {
  const [userData, setUserData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);
  const [filterType, setFilterType] = useState('show all');
  const [currentUser, setСurrentUser] = useState([]);

  const dispatch = useDispatch();

  const userList = useSelector(selectUser);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const nextUsers = userList.slice(nextPage * userPerPage, (nextPage + 1) * userPerPage);
    const uniqueUsers = nextUsers.filter(
      user => !currentUser.find(existingUser => existingUser.id === user.id)
    );
    setСurrentUser(prevUsers => [...prevUsers, ...uniqueUsers]);
    setCurrentPage(nextPage);
  };

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
    const updatedUserList = userList.map(item => {
      if (item.id === id) {
        const updatedUser = { ...item };
        updatedUser.subscription = !updatedUser.subscription;
        if (updatedUser.subscription) {
          updatedUser.followers += 1;
        } else {
          updatedUser.followers -= 1;
        }
        setUserData(updatedUser);
        return updatedUser;
      }
      return item;
    });
    setСurrentUser(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? updatedUserList.find(updatedUser => updatedUser.id === id) : user
      )
    );
  };

  const filterUsers = () => {
    if (filterType === 'follow') {
      const followedUsers = currentUser.filter(user => user.subscription);
      return followedUsers;
    } else if (filterType === 'followings') {
      const followingUsers = currentUser.filter(user => !user.subscription);
      return followingUsers;
    } else if (filterType === 'show all') {
      return currentUser;
    }
  };

  const handleFilterChange = event => {
    setFilterType(event.target.value);
    setCurrentPage(1);
  };

  const filteredUsers = filterUsers();
  return (
    <>
      <Dropdown value={filterType} onChange={handleFilterChange}>
        <option value="show all">Show All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </Dropdown>
      <Block>
        {filteredUsers.map(item => (
          <Items key={item.id}>
            <Card img={item.avatar} tweets={item.tweets} followers={item.followers} />
            <Line src={line} alt="" />
            <Button
              subscription={item.subscription}
              textButton={item.subscription ? 'Following' : 'Follow'}
              onClick={() => onClick(item.id)}
            />
          </Items>
        ))}
      </Block>
      <ButtonLoadMore onClick={loadMore} />
    </>
  );
};
