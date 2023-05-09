import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../App';


export const PrivateRoute = ({children}) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const location = useLocation();
  if(!loggedInUser.email) {
    return <Navigate to="/login"  state={{from: location }} replace/>
  }
  else{
    return children;
  }
 
}

export default PrivateRoute;