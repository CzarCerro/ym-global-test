import React, { useState } from 'react';
import styles from './styles/credentialsframe.module.css'
import Login from './Login';
import axios from 'axios';

function CredentialsFrame() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8080/user/login', {
            email: email,
            password: password,
          });
    

          console.log('Response:', response.data);
        } catch (error) {

          console.error('Error:', error.message);
        }
      };

  return (
    <div className={styles.CredentialsFrame}>
        <Login handleLogin={handleLogin} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange}/>
    </div>
  );
}

export default CredentialsFrame;