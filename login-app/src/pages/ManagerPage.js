import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageFrame from '../components/common/page/PageFrame';
import Navbar from '../components/navbar/Navbar';
import styles from './styles/managerpage.module.css';
import { useTranslation } from 'react-i18next';

function ManagerPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Check if the user's role is 'MANAGER'
    const userRole = localStorage.getItem('role');

    // If the role is not 'MANAGER', navigate to the home page
    if (userRole !== 'MANAGER') {
      navigate('/');
    }
  }, [navigate]);

  const handleClick = () => {
    navigate('/welcome');
  };

  return (
    <PageFrame>
      <Navbar />
      <div className={styles.ManagerPage}>
        <div className={styles.WelcomeMessage}>
          <span>
            {t('Welcome to the manager page')}
          </span>
        </div>
        <button onClick={handleClick}>{t('Go Back')}</button>
      </div>
    </PageFrame>
  );
}

export default ManagerPage;
