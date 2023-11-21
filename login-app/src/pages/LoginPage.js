import React from 'react';
import styles from './styles/loginpage.module.css'
import CredentialsFrame from '../components/login/CredentialsFrame';
import PageFrame from '../components/common/page/PageFrame';

function LoginPage() {
  return (
    <PageFrame>
      <div className={styles.LoginPage}>
          <CredentialsFrame/>
      </div>
    </PageFrame>
  );
}

export default LoginPage;