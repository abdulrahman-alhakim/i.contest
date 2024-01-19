import { faCar, faSignsPost, faSolarPanel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Carousel = () => {
  return (
    <section>
      <div className="container" style={{ maxWidth: "1280px" }}>
        <div className="py-3 py-md-5">
          {/* Section header */}
          <div
            className="mx-auto text-center pb-3 pb-md-5"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="mb-2">
            We offer our customers meticulously crafted, high-quality, customized EV charging solutions designed to meet the unique requirements of diverse scenarios.
            </h2>
            <p className="lead">
              In parallel, we launch our own innovative products or those
              developed through/with our partners
            </p>
          </div>

          <div className="row g-4">
            <div
              className="col-md-6 d-flex flex-column align-items-center text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <FontAwesomeIcon icon={faSolarPanel} beatFade size="2xl" />
              <h4 className="mb-2">Energy</h4>
              <p className="mt-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
            <div
              className="col-md-6 d-flex flex-column align-items-center text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <FontAwesomeIcon icon={faCar} beatFade size="2xl" />
              <h4 className="mb-2">Automotive</h4>
              <p className="mt-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
