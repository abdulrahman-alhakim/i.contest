import { faCar, faSolarPanel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export const Carousel = () => {
  const { t } = useTranslation('pages-Carousel'); // Use the Carousel namespace

  return (
    <section>
      <div className="container" style={{ maxWidth: "1280px" }}>
        <div className="py-3 py-md-5">
          {/* Section header */}
          <div
            className="mx-auto text-center pb-3 pb-md-5"
            style={{ maxWidth: "600px" }}
          >
            <h3 className="mb-2">
              {t('sectionHeader')}
            </h3>
          </div>

          <div className="row g-4">
            <div
              className="col-md-6 d-flex flex-column align-items-center text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <FontAwesomeIcon icon={faSolarPanel} beatFade size="2xl" />
              <h4 className="mb-2">{t('energyTitle')}</h4>
              <p className="mt-2">
                {t('energyDescription')}
              </p>
            </div>
            <div
              className="col-md-6 d-flex flex-column align-items-center text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <FontAwesomeIcon icon={faCar} beatFade size="2xl" />
              <h4 className="mb-2">{t('automotiveTitle')}</h4>
              <p className="mt-2">
                {t('automotiveDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
