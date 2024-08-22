import { useEffect } from "react";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import bgImage from "../images/landpage.webp";
import "../style.css";
import { Solution } from "../components/Solution";
import TurnKeyService from "../components/TurnKeyService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

interface HomePageProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const HomePage: React.FC<HomePageProps> = ({ theme, setTheme }) => {
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash === "#turnkey") {
  //     const section = document.getElementById("turnkey");
  //     if (section) {
  //       const offset = 120;
  //       const bodyRect = document.body.getBoundingClientRect().top;
  //       const sectionRect = section.getBoundingClientRect().top;
  //       const sectionPosition = sectionRect - bodyRect;
  //       const offsetPosition = sectionPosition - offset;

  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: "smooth"
  //       });
  //     }
  //   }
  // }, []);


  return (
    <div>
      <div className="vh-100">
        <div className="container h-100 mobileMarginTop" >
          <div className="row align-items-center h-100">

            {/* Text Column */}
            <div className="col-md-6 text-center text-md-start">
              <p
                className="mb-4 display-4"
                data-aos="fade-up"
                style={{ color: theme === 'light' ? 'rgb(32,98,98)' : '#7FFFD4' }}
              >
                <span>Welcome to I.CONTEST</span>
              </p>
              <p className="fs-4 " data-aos="fade-up" data-aos-delay="200" style={{ color: theme === 'light' ? 'rgb(32,98,98)' : '#E0FFFF' }}>
                Our commitment is to drive the global shift to clean and stable energy with resilient power solutions...
              </p>
              {/* <div className="d-flex justify-content-center justify-content-md-start flex-wrap" data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white mx-2 mb-2"
                  style={{ backgroundColor: "rgb(32,98,98)" }}
                  href="/about"
                >
                  About Us
                </a>
                <a
                  className="btn bg-secondary text-white mx-2 mb-2"
                  href='/contact'
                >
                  Contact Us
                </a>
              </div> */}
            </div>

            {/* Image Column */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src={bgImage} alt="Custom" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>


      <Carousel />

      <button onClick={scrollToTop} style={{
        position: 'fixed',
        bottom: '50px',
        right: '30px',
        zIndex: '99',
        cursor: 'pointer',
        border: 'none',
        background: 'none'
      }}>
        <FontAwesomeIcon icon={faCircleArrowUp} size="2xl" style={{ color: "#309191", }} />
      </button>

      <TurnKeyService theme={theme} setTheme={setTheme} />

      <Card theme={theme} setTheme={setTheme} />

      <Solution theme={theme} setTheme={setTheme} />


      <div className="container-fluid">
        {/* <div className="row">
    <div className="col-12 col-md-8 d-flex align-items-center justify-content-end">
      <p>Contact us here please</p>
    </div>
    <div className="col-12 col-md-4 d-flex align-items-center justify-content-start">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => window.location.href='/contact'}>
        Contact Us
      </button>
    </div>
  </div> */}
      </div>


    </div >
  );
};

export default HomePage;
