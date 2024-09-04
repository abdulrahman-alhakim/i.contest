import React from "react";
import { useTranslation } from "react-i18next";
import image2 from "../images/Overview.webp";
import image3 from "../images/product1.png";
import image4 from "../images/plattform.png";

const Solution: React.FC = () => {
  const { t } = useTranslation('pages-Solution'); // Use the correct namespace

  return (
    <section>
      <div className="container mb-5" style={{ maxWidth: "1200px" }}>
        <div className="py-3 py-md-5 border-top" style={{ borderColor: "#4a5568" }}>
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-up">
              <img
                className="img-fluid bg-light rounded p-3"
                src={image2}
                width={900}
                height={900}
                alt="Features 01"
              />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <div className="pr-md-2 pr-lg-4 pr-xl-5">
                <h3 className="h3 mb-2" style={{ color: 'rgb(32,98,98)' }}>{t('standAloneTitle')}</h3>
                <ul className="list-unstyled">
                  {(t('standAloneFeatures', { returnObjects: true }) as string[]).map((feature, index) => (
                    <li key={index} className="mb-2">• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr />

          <div className="row align-items-center mt-2">
            <div className="col-md-6" data-aos="fade-up">
              <img
                className="img-fluid"
                src={image3}
                width={400}
                height={400}
                alt="Features 01"
              />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <div className="pr-md-2 pr-lg-4 pr-xl-5">
                <h3 className="h3 mb-2" style={{ color: 'rgb(32,98,98)' }}>{t('chargingStationTitle')}</h3>
                <ul className="list-unstyled">
                  {(t('chargingStationFeatures', { returnObjects: true }) as string[]).map((feature, index) => (
                    <li key={index} className="mb-2">• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;
