import axios from 'axios';

const usersService = axios.create({
  baseURL: 'https://6477a62b9233e82dd53bfde1.mockapi.io/',
});

export const getUsers = async () => {
  const { data } = await usersService.get('users/');
  return data;
};

export const updateUsers = async (id, user) => {
  const { data } = await usersService.put(`users/${id}`, user);
  return data;
};
