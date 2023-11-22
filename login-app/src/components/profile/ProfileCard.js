import React from 'react';
import styles from './styles/profilecard.module.css'
import { useTranslation } from 'react-i18next';

function ProfileCard({username, email, name, role}) {
  const { t, i18n } = useTranslation();
  return (
      <div className={styles.ProfileCard}>
          <div className={styles.ProfilePicture}/>
          <div className={styles.Labels}>
            <span>{t('Username')}:</span>
            <span>{t('Email')}:</span>
            <span>{t('Name')}:</span>
            <span>{t('Role')}:</span>
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