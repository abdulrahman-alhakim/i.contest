import overViewImage from "../images/Overview.webp";
import image2 from "../images/plattform.png";
import image3 from "../images/category-big-komplettset2.webp";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/stat.jpg";

interface SolutionProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Solution: React.FC<SolutionProps> = ({ theme, setTheme }) => {
  return (
    <section>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div
          className="py-3 py-md-5 border-top"
          style={{ borderColor: "#4a5568" }}
        >
          {/* Section header */}
          <div
            className="mx-auto text-center pb-3 pb-md-5"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="mb-2">An overview of our proposed solution</h2>
            <p className="lead" style={{ color: "#a0aec0" }}>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
          </div>

          {/* Testimonials 1 */}
          <div className="row">
            {/* 1st testimonial */}
            <div className="row g-23">
            <div className="col-lg-4 col-md-6 col-12 p-3" data-aos="fade-up">
                <blockquote className="blockquote">
                  <p className="mb-2 text-secondary">
                    An overview of our proposed solution
                  </p>
                  <div>
                    {/* Image and SVG icon */}
                    <img
                      src={overViewImage}
                      width={350}
                      alt="Image"
                      className="hover-scale bg-light"
                    />
                  </div>
                  <footer className="blockquote-footer mt-3 text-secondary">
                    The MPX system networks all energy sources and consumers
                    into a clean, smart and reliable{" "}
                    <cite title="Source Title" style={{ color: "#9f7aea" }}>
                      microgrid
                    </cite>
                  </footer>
                </blockquote>
              </div>

              {/* 2 testimonial */}
              <div className="col-lg-4 col-md-6 col-12 p-3" data-aos="fade-up">
                <blockquote className="blockquote">
                  <p className="mb-2 text-secondary">
                    Modularity and scalability of the proposed microgird system
                  </p>
                  <div>
                    {/* Image and SVG icon */}
                    <img
                      src={image2}
                      width={350}
                      alt="Image"
                      className="hover-scale bg-light"
                    />
                  </div>
                  <footer className="blockquote-footer mt-3 text-secondary">
                    The technology tailored to the needs of{" "}
                    <cite title="Source Title" style={{ color: "#9f7aea" }}>
                      small and medium-sized
                    </cite>{" "}
                    customers
                  </footer>
                </blockquote>
              </div>

              {/* 3 testimonial */}
              <div className="col-lg-4 col-md-6 col-12 p-3" data-aos="fade-up">
                <blockquote className="blockquote">
                  <p className="mb-2 text-secondary">MPX system in use</p>
                  <div>
                    {/* Image and SVG icon */}
                    <img
                      src={image3}
                      width={350}
                      height={250}
                      alt="Image"
                      className="hover-scale bg-light"
                    />
                  </div>
                  <footer className="blockquote-footer mt-3 text-secondary">
                    Case study of an independent and cost-effective{" "}
                    <cite title="Source Title" style={{ color: "#9f7aea" }}>
                      fast charging
                    </cite>{" "}
                    station with solar carports
                  </footer>
                </blockquote>
              </div>
              {/* Repeat for other testimonials */}
            </div>
          </div>
          <div className="row">
            {/* 4st testimonial */}
            <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12 p-3" data-aos="fade-up">
                <blockquote className="blockquote">
                  <p className="mb-2 text-secondary">
                    Turnkey service meets the needs of every customer
                  </p>
                  <div>
                    {/* Image and SVG icon */}
                    <img
                      src={image4}
                      width={350}
                      alt="Image"
                      className="hover-scale bg-light"
                    />
                  </div>
                  <footer className="blockquote-footer mt-3 text-secondary">
                    The comprehensive EPCM service accompanies a customer case
                    from conception to implementation
                  </footer>
                </blockquote>
              </div>

              {/* 5 testimonial */}
              <div className="col-lg-4 col-md-6 col-12 p-3" data-aos="fade-up">
                <blockquote className="blockquote">
                  <p className="mb-2 text-secondary">
                    Optimal investment decision for the energy transition{" "}
                  </p>
                  <div>
                    {/* Image and SVG icon */}
                    <img
                      src={image5}
                      width={350}
                      alt="Image"
                      className="hover-scale bg-light"
                    />
                  </div>
                  <footer className="blockquote-footer mt-3 text-secondary">
                    Sustainability and profitability of the investment due to
                    various attractive savings and income streams Your cost
                    levers at a glance:
                  </footer>
                </blockquote>
              </div>

              {/* 6 testimonial */}

              <div className="col-lg-4 col-md-6 col-12 p-3" data-aos="fade-up">
                <blockquote className="blockquote">
                  <p className="mb-2 text-secondary">
                    Rapidly increasing market demand for decentralized
                    microgrids
                  </p>
                  <div>
                    {/* Image and SVG icon */}
                    <img
                      src={image6}
                      width={350}
                      alt="Image"
                      className="hover-scale bg-light"
                    />
                  </div>
                  <footer className="blockquote-footer mt-3 text-secondary">
                    The global microgrid market size was estimated at USD 29.99
                    billion in 2022 and it is expected to surpass around USD
                    85.7 billion by the end of 2030, expanding at a registered
                    compound annual growth rate of 14.03% from 2022 to 2030.
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
