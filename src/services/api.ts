import { mockUsers } from './mockData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchUsers = async () => {
  await delay(800);
  return [...mockUsers];
};

export const fetchUserById = async (id) => {
  await delay(500);
  return mockUsers.find(user => user.id === id);
};
