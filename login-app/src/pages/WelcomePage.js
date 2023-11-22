import React, { useState, useEffect } from 'react';
import PageFrame from '../components/common/page/PageFrame';
import styles from './styles/welcomepage.module.css'
import ProfileCard from '../components/profile/ProfileCard';
import Navbar from '../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function WelcomePage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedRole = localStorage.getItem('role');

    if (storedName && storedUsername && storedEmail && storedRole){
      setName(storedName);
      setUsername(storedUsername);
      setEmail(storedEmail);
      setRole(storedRole);
    } else {
      navigate('/');
    }

  }, [navigate]); 

  const handleClick = () => {
    navigate('/manager');
  };

  return (
    <PageFrame>
      <Navbar/>
        <div className={styles.WelcomePage}> 
          <div className={styles.WelcomeMessage}>
            <span>
                {t('Welcome')}, {name}
            </span>
          </div>
          <ProfileCard username={username} email={email} name={name} role={role}/>
          {role === "MANAGER" && <button onClick={handleClick}>{t('Go to manager page')}</button>}
        </div>
    </PageFrame>
  );
}

export default WelcomePage;