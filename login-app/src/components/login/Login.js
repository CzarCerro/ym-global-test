// components/Login.js

import React from 'react';
import styles from './styles/login.module.css';

function Login({ handleLogin, handleEmailChange, handlePasswordChange, handleSetIsSignUp }) {
  return (
    <div className={styles.Login}>
      <h2>Login</h2>
      <div className={styles.Signup}>
        <p>Don't have an account yet?</p>
        <p style={{cursor: 'pointer', color: '#83A2FF', textDecoration: 'underline'}} onClick={handleSetIsSignUp}>Sign up</p>
      </div>
      <form onSubmit={handleLogin}>
        <span>Email</span>
        <input type="email" onChange={handleEmailChange} required />
        <span>Password</span>
        <input type="password" onChange={handlePasswordChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
