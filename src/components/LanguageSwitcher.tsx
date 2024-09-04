import React from 'react';
import { useTranslation } from 'react-i18next';
import foto from '../images/special-figures/translateV3.png'
import foto2 from '../images/special-figures/translateV3Ar.png'


const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'; // Change text direction
  };



  return (
    <button type="button" className="btn" onClick={toggleLanguage}>
      {i18n.language === 'en' ?
        <img src={foto} width="30"
        height="30" className="" alt="EN" />
        :
        <img src={foto2} width="30"
        height="30" className="" alt="AR" />

      }
    </button>

  );

};


export default LanguageSwitcher;

