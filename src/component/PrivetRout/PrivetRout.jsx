import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
      const {user} = useContext(AuthContext);
            if(user){
                  return children;
            }
      return <Navigate to="/login" replace={true}></Navigate>;
      
};

export default PrivetRout;