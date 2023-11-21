import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageFrame from '../components/common/page/PageFrame';
import Navbar from '../components/navbar/Navbar';
import styles from './styles/managerpage.module.css';

function ManagerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user's role is 'MANAGER'
    const userRole = localStorage.getItem('role');

    // If the role is not 'MANAGER', navigate to the home page
    if (userRole !== 'MANAGER') {
      navigate('/');
    }
  }, [navigate]);

  const handleGoBack = () => {
    // Navigate to the '/welcome' route
    navigate('/welcome');
  };

  return (
    <PageFrame>
      <Navbar />
      <div className={styles.ManagerPage}>
        <div className={styles.WelcomeMessage}>
          <span>
            Welcome to the manager page
          </span>
        </div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </PageFrame>
  );
}

export default ManagerPage;
