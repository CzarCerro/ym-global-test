import React, { useState } from 'react';
import styles from './styles/credentialsframe.module.css'
import Login from './Login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import Message from '../error/Message';

function CredentialsFrame() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSetIsSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    const handleShowMessage = () => {
        setShowMessage(!showMessage);
    };

    const handleMessage = (message) => {
        setMessage(message);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/user/login', {
                email: email,
                password: password,
            });

            if (response.status === 200) {

                const { email, username, name, role } = response.data;

                // Store data in localStorage
                localStorage.setItem('email', email);
                localStorage.setItem('username', username);
                localStorage.setItem('name', name);
                localStorage.setItem('role', role);

                navigate('/welcome');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data)
                handleShowMessage()
            }
        }
    };

    return (
        <div className={styles.CredentialsFrame}>
            {showMessage && <Message handleShowMessage={handleShowMessage} message={message} />}
            {!isSignUp ? <Login handleLogin={handleLogin} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleSetIsSignUp={handleSetIsSignUp} />
                :
                <Register handleSetIsSignUp={handleSetIsSignUp} handleErrorMessage={handleMessage} handleShowPopup={handleShowMessage} />}
        </div>
    );
}

export default CredentialsFrame;