import axios from 'axios';

const usersService = axios.create({
  baseURL: 'http://6477a62b9233e82dd53bfde1.mockapi.io/users',
});

export const getUsers = async () => {
  const { data } = await usersService.get('');
  // console.log(data);
  return data;
  
};

export const updateUsers = async id => {
  const { data } = await usersService.put(`${id}`);
  return data;
};
