// components/Login.js

import React, { useState } from 'react';
import styles from './styles/register.module.css'
import Login from './Login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register({handleSetIsSignUp}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleRoleChange = (event) => {
        setRole(event.target.value);
      };
    
      const handleRegister = async (e) => {
        e.preventDefault();
      };

  return (
    <div className={styles.Register}>
      <h2>Register</h2>
      <div className={styles.Signup}>
        <p>Already have an account?</p>
        <p style={{cursor: 'pointer', color: '#83A2FF', textDecoration: 'underline'}} onClick={handleSetIsSignUp}>Login</p>
      </div>
      <form onSubmit={handleRegister}>
        <span>Email</span>
        <input type="email" onChange={handleEmailChange} required />
        <span>Name</span>
        <input type="name" onChange={handleEmailChange} required />
        <span>Password</span>
        <input type="password" onChange={handlePasswordChange} required />
        <span>Role</span>
        <select onChange={handleRoleChange} required>
          <option value="" disabled selected>
            Select a role
          </option>
          <option value="USER">User</option>
          <option value="MANAGER">Manager</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
