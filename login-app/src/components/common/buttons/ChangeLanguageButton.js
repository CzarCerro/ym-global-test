import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';


function ChangeLanguageButton() {
    const { t, i18n } = useTranslation();

  const handleClick = () => {
    if (i18n.language === 'en') {
        i18n.changeLanguage('spa');
    } else {
        i18n.changeLanguage('en');
    }
  };

  return (
    <div>
    <p style={{cursor: 'pointer', color: '#83A2FF', textDecoration: 'underline', paddingLeft: '1rem', width: '0%', display: 'inline'}} onClick={handleClick} >{t('Change Language')}</p>
    </div>
  );
}

export default ChangeLanguageButton;
