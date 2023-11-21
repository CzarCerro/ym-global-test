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
            <span>{username}</span>
            <span>{email}</span>
            <span>{name}</span>
            <span>{role}</span>
          </div>
      </div>
  );
}

export default ProfileCard;