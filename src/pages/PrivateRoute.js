import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import { Checkout } from '.';

const PrivateRoute = () => {
  const { myUser } = useUserContext();

  return myUser ? <Checkout /> : <Navigate to='/' />;
};
export default PrivateRoute;
