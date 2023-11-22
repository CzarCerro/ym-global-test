import React from 'react';
import styles from './styles/message.module.css';
import { useTranslation } from 'react-i18next';

function Message({ message, handleShowMessage }) {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.ErrorMessageContainer}>
      <div className={styles.DimmedBackground}></div>
      <div className={styles.ErrorMessagePopup}>
        <p>{message}</p>
        <button onClick={handleShowMessage}>{t('Close')}</button>
      </div>
    </div>
  );
}

export default Message;
