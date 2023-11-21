import React from 'react';
import styles from './styles/login.module.css'

function Login({ handleLogin, handleEmailChange, handlePasswordChange }) {
    return (
        <div className={styles.Login}>
            <h2>Login</h2>
            <div>
                <p>Don't have an account yet?</p>
                <p>Sign up</p>
            </div>
            <form onSubmit={handleLogin}>
                <span>Email</span>
                <input type="email" onChange={handleEmailChange} required />
                <br />
                <span>Password</span>
                <input type="password" onChange={handlePasswordChange} required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;