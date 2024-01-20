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
            <h3 className="mb-2">
              We offer our customers meticulously crafted, high-quality, customized EV charging solutions designed to meet the unique requirements of diverse scenarios.
            </h3>
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
                Revolutionizing the energy landscape with sustainable, high-efficiency EV charging solutions tailored to modern energy needs and environmental conservation.
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
                Leading the automotive electrification era with bespoke, advanced EV charging systems, enhancing the electric vehicle experience for all users.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
