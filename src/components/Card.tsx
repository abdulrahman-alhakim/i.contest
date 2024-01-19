
import FeatImage01 from '../images/xyz.png'
import FeatImage02 from '../images/solar-panels-on-skyscrapers.png'
import FeatImage03 from '../images/clean-city.png'
import { useEffect, useState } from 'react';


interface CardProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Card: React.FC<CardProps> = ({ theme, setTheme }) => {


  const [textColor, setTextColor] = useState('text-light');

  useEffect(() => {
    const theme = localStorage.getItem('dark') || 'light';

    setTextColor(theme === 'light' ? 'text-dark' : 'text-light');

  }, [theme]);


  return (
    <section id="first-card">
      <div className="container" style={{ maxWidth: "1280px" }}>
        <div
          className="py-3 py-md-5 border-top mt-5"
          style={{ borderColor: "#4a5568" }}
        >
          {/* Section header */}
          <div
            className="mx-auto text-center pb-3 pb-md-4"
            style={{ maxWidth: "600px" }}
          >

            <h1 className="h2 mb-2">Energy challenges for companies</h1>

            <br />
            <br />

          </div>

          {/* Item */}
          <div className="row g-4 align-items-center">
            <div className="col-md-6" data-aos="fade-up">
              <img
                className="img-fluid"
                src={FeatImage01}
                width={400}
                height={400}
                alt="Features 01"
              />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <div className="pr-md-2 pr-lg-4 pr-xl-5">
                <div
                  className="text-purple-600 mb-2"
                  style={{ fontSize: "1.25rem" }}
                >
                  More speed. Less spend
                </div>
                <h3 className="h3 mb-2">Keep projects on schedule</h3>

                <br />

                <ul className='list-unstyled'>
                  <li className="mb-2">• High energy costs are weighing heavily on businesses, particularly small and medium enterprises, due to the global energy crisis.</li>
                  <li className="mb-2">• Volatile markets make long-term energy supply planning difficult.</li>
                  <li className="mb-2">• Increased consumption combined with a lack of overview and control over own energy supply.</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-center mt-4">

            <div className="col-md-6" data-aos="fade-right">
              <div className="pr-md-2 pr-lg-4 pr-xl-5">
                <div
                  className="text-purple-600 mb-2"
                  style={{ fontSize: "1.25rem" }}
                >
                  More speed. Less spend
                </div>
                <h3 className="h3 mb-2">A view to climate change</h3>

                <br />


                <ul className="list-unstyled">
                  <li className="mb-2">• With a view to climate change, legislators are pushing ahead with the electrification of mobility at full speed.</li>
                  <li className="mb-2">• More and more employees are looking for a recharging infrastructure at their workplace.</li>
                  <li className="mb-2">• Countless options and a continuously changing range of charging infrastructure make the situation confusing for confusing for newcomers.</li>

                </ul>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <img
                className="img-fluid"
                src={FeatImage02}
                width={540}
                height={405}
                alt="Features 01"
              />
            </div>
          </div>
          <div className="row g-4 align-items-center mt-3">
            <div className="col-md-6" data-aos="fade-up">
              <img
                className="img-fluid"
                src={FeatImage03}
                width={540}
                height={405}
                alt="Features 01"
              />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <div className="pr-md-2 pr-lg-4 pr-xl-5">
                <div
                  className="text-purple-600 mb-2"
                  style={{ fontSize: "1.25rem" }}
                >
                  More speed. Less spend
                </div>
                <h3 className="h3 mb-2">Keep projects on schedule</h3>
                <br />

                <ul className="list-unstyled">
                  <li className="mb-2">• Renewable energy generation plants and recharging infrastructure must be approved by the grid operator.</li>
                  <li className="mb-2">• The complex processes are time- consuming and tie up internal resources.</li>
                  <li className="mb-2">• In the worst case, the network test leads to a construction cost surcharge.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
