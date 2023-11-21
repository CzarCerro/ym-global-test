import React from 'react';
import styles from './styles/message.module.css';

function Message({ message, handleShowMessage }) {
  return (
    <div className={styles.ErrorMessageContainer}>
      <div className={styles.DimmedBackground}></div>
      <div className={styles.ErrorMessagePopup}>
        <p>{message}</p>
        <button onClick={handleShowMessage}>Close</button>
      </div>
    </div>
  );
}

export default Message;
