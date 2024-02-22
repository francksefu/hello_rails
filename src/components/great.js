import React from 'react';
import { useSelector } from 'react-redux';

const Great = () => {
  const user = useSelector((state) => state.user);

  let valeur = '';

  if (user.status === 'succeeded') {
    valeur = user.data.message;
    return (
      <h1>{valeur}</h1>
    );
  }
  return (
    <h1>{user.status}</h1>
  );
};

export default Great;
