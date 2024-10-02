import React from 'react';
import "./AboutUsPage.css";
import AboutUsAcc from '../components/AboutUsAcc';
import { useTranslation } from 'react-i18next';

const people = [
  {
    name: 'Eng. Faisal Hakim',
    role: 'CEO',
    imageUrl: require('../images/faisall.png')
  },
];

interface AboutUsPageProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ theme, setTheme }) => {
  const { t } = useTranslation('pages-AboutUsPage'); // Use the AboutUs namespace

  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <div className="mobileMarginTop" style={{ maxWidth: '1200px', width: '100%' }}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mx-auto">
              <h2 className="h2 fw-bold my-4">{t('meetLeadershipTitle')}</h2>

              <p className="fs-4 mb-4 p-1">
                {t('companyDescription')}
              </p>
            </div>
            <ul className="mt-4 row g-4">
              {people.map((person) => (
                <li key={person.name} className="col-12" style={{ listStyleType: 'none' }}>
                  <div className="d-flex align-items-center gap-2">
                    <img className="rounded-circle img-fluid" src={person.imageUrl} alt={person.name} style={{ width: '74px', height: '74px', objectFit: 'cover' }} />
                    <div>
                      <h3 className="h5 mb-0 fw-semibold" style={{ color: theme === 'light' ? 'rgb(32,98,98)' : '#E0FFFF' }}>{person.name}</h3>
                      <p className="small fw-semibold">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6 align-content-center justify-items-center my-2">
            <AboutUsAcc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
