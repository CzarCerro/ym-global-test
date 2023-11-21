import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/logoutbutton.module.css';


function LogoutButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className={styles.LogoutButton} onClick={handleClick}>
      <span>Logout</span>
    </div>
  );
}

export default LogoutButton;
