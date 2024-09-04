import React from "react";
import FeatImage01 from '../images/xyz.png'
import FeatImage02 from '../images/solar-panels-on-skyscrapers.png'
import FeatImage03 from '../images/clean-city.png'
import { useTranslation } from "react-i18next";

const Card: React.FC = () => {
  const { t } = useTranslation('components-Card'); // Use the Card namespace

  // Helper function to safely get list items
  const getListItems = (key: string): string[] => {
    const items = t(key, { returnObjects: true });
    return Array.isArray(items) ? items : [];
  };

  return (
    <section id="first-card">
      <div className="container" style={{ maxWidth: "1280px" }}>
        <div className="py-3 py-md-5">
          <div className="mx-auto" style={{ maxWidth: "600px" }}>
            <h1 className="h2 mb-2 text-center pb-3 pb-md-4">{t('sectionTitle')}</h1>
            <br />
          </div>

          {/* Item 1 */}
          <div className="row g-4 align-items-center">
            <div className="col-md-6" data-aos="fade-up">
            <img
                className="img-fluid"
                src={FeatImage03}
                width={480}
                height={405}
                alt="Features 01"
              />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <div className="pr-md-2 pr-lg-4 pr-xl-5">
                <h3 className="h3 mb-2">{t('keepProjectsOnScheduleTitle')}</h3>
                <br />
                <ul className="list-unstyled">
                  {getListItems('keepProjectsOnScheduleList').map((item: string, index: number) => (
                    <li key={index} className="mb-2">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="row g-4 align-items-center mt-4">
            <div className="col-md-6 order-md-2" data-aos="fade-up">
            <img
                className="img-fluid"
                src={FeatImage02}
                width={480}
                height={405}
                alt="Features 01"
              />
            </div>
            <div className="col-md-6 order-md-1" data-aos="fade-right">
              <div className="pr-md-2 pr-lg-4 pr-xl-5">
                <h3 className="h3 mb-2">{t('viewToClimateChangeTitle')}</h3>
                <br />
                <ul className="list-unstyled">
                  {getListItems('viewToClimateChangeList').map((item: string, index: number) => (
                    <li key={index} className="mb-2">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <br />
    </section>
  );
};

export default Card;