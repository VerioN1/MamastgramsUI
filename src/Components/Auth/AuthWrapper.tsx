import React from 'react';
import Authentication from '../../Pages/Authentication/Authentication';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';


const AuthWrapper : React.FC = (props) => {
 
  const authState = useSelector((state: RootState) => state.userData);

  if (!authState.isAuth) 
  {
    return (
      <Authentication />
    );
  }
  return (
    <>
      {props.children}
    </>
  );
};

export default AuthWrapper;

