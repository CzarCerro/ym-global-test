import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/logoutbutton.module.css';
import { useTranslation } from 'react-i18next';

function LogoutButton() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className={styles.LogoutButton} onClick={handleClick}>
      <span>{t('Logout')}</span>
    </div>
  );
}

export default LogoutButton;
