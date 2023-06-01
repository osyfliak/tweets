import axios from 'axios';

const usersService = axios.create({
  baseURL: 'http://6477a62b9233e82dd53bfde1.mockapi.io/',
});

export const getUsers = async () => {
  const { data } = await usersService.get('users/');
  // console.log(data);
  return data;
};

export const updateUsers = async (id, user) => {
  const { data } = await usersService.put(`users/${id}`, user);
  return data;
};
