import React, { useState } from 'react';
import styles from './styles/credentialsframe.module.css'
import Login from './Login';

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

      const handleLogin = (e) => {
        e.preventDefault();
        // Add your logic for handling form submission here
        console.log('Email:', email);
        console.log('Password:', password);
      };

  return (
    <div className={styles.CredentialsFrame}>
        <Login handleLogin={handleLogin} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange}/>
    </div>
  );
}

export default CredentialsFrame;