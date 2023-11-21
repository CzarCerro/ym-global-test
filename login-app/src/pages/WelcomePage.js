import React from 'react';
import PageFrame from '../components/common/page/PageFrame';
import styles from './styles/welcomepage.module.css'
import ProfileCard from '../components/profile/ProfileCard';
import Navbar from '../components/common/navbar/Navbar';

function WelcomePage() {

  return (
    <PageFrame>
      <Navbar/>
        <div className={styles.WelcomePage}> 
          <div className={styles.WelcomeMessage}>
            <span>
                Welcome, NAME HERE
            </span>
          </div>
          <ProfileCard/>
        </div>
    </PageFrame>
  );
}

export default WelcomePage;