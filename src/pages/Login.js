import React from 'react';
import { useHistory } from 'react-router-dom';
const Login = () => {
  let history = useHistory();
  return (
    <div>
      <h1>Login Page Works</h1>
      <button
        onClick={() => {
          history.push('/profile');
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
