// components/Login.js

import React from 'react';
import styles from './styles/login.module.css';
import { useTranslation } from 'react-i18next';

function Login({ handleLogin, handleEmailChange, handlePasswordChange, handleSetIsSignUp }) {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.Login}>
      <h2>{t('Login')}</h2>
      <div className={styles.Signup}>
        <p>{t("Don't have an account yet?")}</p>
        <p style={{cursor: 'pointer', color: '#83A2FF', textDecoration: 'underline'}} onClick={handleSetIsSignUp}>{t("Sign Up")}</p>
      </div>
      <form onSubmit={handleLogin}>
        <span>{t('Email')}</span>
        <input type="email" onChange={handleEmailChange} required />
        <span>{t('Password')}</span>
        <input type="password" onChange={handlePasswordChange} required />
        <button type="submit">{t('Submit')}</button>
      </form>
    </div>
  );
}

export default Login;
