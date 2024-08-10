import image2 from "../images/Overview.webp";
import image3 from "../images/product1.png";
import image4 from "../images/plattform.png";


interface SolutionProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Solution: React.FC<SolutionProps> = ({ theme, setTheme }) => {
  return (
    <section>
      <div className="container mb-5" style={{ maxWidth: "1200px" }}>
        <div
          className="py-3 py-md-5 border-top"
          style={{ borderColor: "#4a5568" }}
        >
          {/* Section header */}
         
            <h2 className="text-center">An overview of our proposed solution</h2>

          


          <div className="py-3 py-md-5">
            {/* Section header */}

            <div className="row g-4">
              <div
                className="col-md-12 d-flex flex-column align-items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <img
                  className="img-fluid bg-light rounded p-3"
                  src={image2}
                  width={900}
                  height={900}
                  alt="Features 01"
                />

              </div>
              <div
                className="mx-auto text-center pb-3 pb-md-5"
                style={{ fontSize: '1rem', fontWeight: 'normal' }}
              >
                A microgrid system that integrates renewable energy sources and smart management to create a clean, efficient, and reliable network.              </div>

            </div>
            <hr />
          </div>

          <div className="row align-items-center">
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
                <h3 className="h3 mb-2" style={{ color: 'rgb(32,98,98' }}></h3>
                <div
                  className="text-purple-600 mb-2"
                  style={{ fontSize: "2rem", color: theme === 'light' ? 'rgb(32,98,98)' : '#E0FFFF'  }}
                >
                  Stand-alone Integrated Charging Container
                </div>


                <ul className='list-unstyled'>
                  <li className="mb-2">• High integration, system optimized by AI-EMS.</li>
                  <li className="mb-2">• Weak grid infrastructure boost for HP charge.</li>
                  <li className="mb-2">• Compact design, all storage units and power units within single housing.</li>
                  <li className="mb-2">• Plug-and-play installation, easy to relocate.</li>
                  <li className="mb-2">• Suitable for urban applications, especially for space-limiting, light usage demanding cases, e.g., 2
                    charging ports in central business district.
                  </li>
                  <li className="mb-2">
                    • Apparant coloring open for customization, open protocol for LED screen display.
                  </li>


                </ul>
              </div>
            </div>
          </div>


          <hr className="d-block d-sm-none" />

          <div className="row align-items-center mt-2">
            <div className="col-md-6" data-aos="fade-up">
              <img
                className="img-fluid"
                src={image4}
                width={400}
                height={400}
                alt="Features 01"
              />
            </div>

            <div className="col-md-6" data-aos="fade-right">
              <div className="pr-md-2 pr-lg-4 pr-xl-5">
                <h3 className="h3 mb-2" style={{ color: 'rgb(32,98,98' }}></h3>
                <div
                  className="text-purple-600 mb-2"
                  style={{ fontSize: "2rem", color: theme === 'light' ? 'rgb(32,98,98)' : '#E0FFFF'  }}
                >
                  Charging Station with Discrete Facility
                </div>

                <ul className='list-unstyled'>
                  <li className="mb-2">• Total flexibility with system configuration, adaptable to various requirements.</li>
                  <li className="mb-2">• Modular design suitable for station retrofit or extension, especially important during e-auto
                    ramping-up phase as new life style.</li>
                  <li className="mb-2">• Equipment room provides extra protection against extreme temperature conditions.</li>
                  <li className="mb-2">• Plug-and-play installation, easy to relocate.</li>
                  <li className="mb-2">• Centralized energy and power arrangement makes station qualified for energy trading, extra
                    profitting mechanism.
                  </li>

                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


//                
