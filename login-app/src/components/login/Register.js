import React, { useState } from 'react';
import styles from './styles/register.module.css';
import axios from 'axios';

function Register({ handleSetIsSignUp, handleMessage, handleShowMessage }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    name: '',
    password: '',
    role: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/register', formData);

      if (response.status === 200) {
        handleMessage("User successfully created");
        handleShowMessage();
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      if (error.response) {
        handleMessage(error.response.data);
        handleShowMessage();
       } else {
        handleMessage("Error. Ensure that the spring boot server is up.")
        handleShowMessage()
        }
    }
  };

  return (
    <div className={styles.Register}>
      <h2>Register</h2>
      <div className={styles.Signup}>
        <p>Already have an account?</p>
        <p style={{ cursor: 'pointer', color: '#83A2FF', textDecoration: 'underline' }} onClick={handleSetIsSignUp}>
          Login
        </p>
      </div>
      <form onSubmit={handleRegister}>
        <span>Username</span>
        <input type="text" name="username" onChange={handleInputChange} value={formData.username} required />
        <span>Email</span>
        <input type="email" name="email" onChange={handleInputChange} value={formData.email} required />
        <span>Name</span>
        <input type="text" name="name" onChange={handleInputChange} value={formData.name} required />
        <span>Password</span>
        <input type="password" name="password" onChange={handleInputChange} value={formData.password} required />
        <span>Role</span>
        <select name="role" onChange={handleInputChange} value={formData.role} required>
          <option value="" disabled>
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
