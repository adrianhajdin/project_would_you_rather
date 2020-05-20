import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard/UserCard';

const Leaderboard = () => {
  const { users } = useSelector((store) => store.users);

  return Object.values(users).map((user) => (
    <UserCard key={user.id} user={user} />
  ));
};

export default Leaderboard;
