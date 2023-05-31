import axios from 'axios';

const userService = axios.create({
  baseURL: 'http://6477a62b9233e82dd53bfde1.mockapi.io/',
});

export const getUsers = async () => {
  const { data } = await userService.get('users/');
  // console.log(data);
  return data;
  
};

export const updateUsers = async id => {
  const { data } = await userService.put(`users/${id}`);
  return data;
};
