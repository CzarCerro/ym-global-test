import React from 'react';
import styles from './styles/profilecard.module.css'


function ProfileCard({username, email, name, role}) {
  return (
      <div className={styles.ProfileCard}>
          <div className={styles.ProfilePicture}/>
          <div className={styles.Labels}>
            <span>Username:</span>
            <span>Email:</span>
            <span>Name:</span>
            <span>Role:</span>
          </div>
          <div className={styles.Details}>
            <span>PLACEHOLDER</span>
            <span>PLACEHOLDER</span>
            <span>PLACEHOLDER</span>
            <span>USER</span>
          </div>
      </div>
  );
}

export default ProfileCard;