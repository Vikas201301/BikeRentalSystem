/*import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children ,rol}) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('role');

  if (!isLoggedIn || userRole !== role) {
    return <Navigate to={role === 'admin' ? '/admin/login' : '/login'} />;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
*/

//working code



import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('role');
  const location = useLocation();

  if (!isLoggedIn) {
    // Not logged in → send to correct login page
    return <Navigate to={role === 'admin' ? '/admin/login' : '/login'} state={{ from: location }} replace />;
  }

  if (role && userRole !== role) {
    // Logged in but wrong role
    return <Navigate to={userRole === 'admin' ? '/admin/dashboard' : '/'} replace />;
  }

  return children;
};

export default PrivateRoute;




