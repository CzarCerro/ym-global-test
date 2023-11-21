// ErrorMessage.js

import React from 'react';
import styles from './styles/errormessage.module.css';

function ErrorMessage({ errorMessage = 'An error occurred.', handleSetShowError }) {
  return (
    <div className={styles.ErrorMessageContainer}>
      <div className={styles.DimmedBackground}></div>
      <div className={styles.ErrorMessagePopup}>
        <p>{errorMessage}</p>
        <button onClick={handleSetShowError}>Close</button>
      </div>
    </div>
  );
}

export default ErrorMessage;
