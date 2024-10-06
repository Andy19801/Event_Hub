import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, userRole, requiredRole, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/login" />; // Redirect if user role doesn't match
  }

  return children;
};

export default ProtectedRoute;









// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//   const isLoggedIn = useSelector((state) => state.auth.token !== null);

//   return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
