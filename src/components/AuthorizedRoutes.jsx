/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const AuthorizedRoute = ({ element: Component, requiredKey }) => {
  const sessionData = JSON.parse(localStorage.getItem('sessionData') || '{}');
  const isAuthorized = sessionData[requiredKey] === true;

  return isAuthorized ? Component : <Navigate to="/access-denied" />;
};

export default AuthorizedRoute;
