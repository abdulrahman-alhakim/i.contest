import { useEffect } from "react";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import bgImage from "../images/landingpage.webp";
import "../style.css";
import { Solution } from "../components/Solution";
import TurnKeyService from "../components/TurnKeyService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#turnkey") {
      const section = document.getElementById("turnkey");
      if (section) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const sectionRect = section.getBoundingClientRect().top;
        const sectionPosition = sectionRect - bodyRect;
        const offsetPosition = sectionPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, []);
  return (
    <div>
      <div className="vh-100">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            {/* Text Column */}
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-4 custom-font-large" data-aos="fade-up" style={{color:"rgb(32,98,98)", fontSize:'6rem'}}>
                Welcome to i.contest
              </p>
              <p className="fs-4 mb-5 " data-aos="fade-up" data-aos-delay="200" style={{color:"rgb(32,98,98)"}}>
                Our commitment is to drive the global shift to clean, stable energy with resilient power solutions...
              </p>
              {/* Buttons */}
              <div className="d-flex justify-content-center justify-content-md-start flex-wrap" data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white mx-2" style={{ backgroundColor: "rgb(32,98,98)" }} href="/about">About Us</a>
                <a className="btn bg-secondary text-white mx-2" href="/contact">Contact Us</a>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-md-6 d-flex align-items-center justify-content-center ">
              <img src={bgImage} width={1000}  alt="Custom" className="img-fluid" />
            </div>
          </div>
        </div>
        </div>

      <Carousel />

      <button onClick={scrollToTop} style={{
        position: 'fixed',
        bottom: '40px',
        right: '50px',
        zIndex: '99',
        cursor: 'pointer',
        border: 'none',
        background: 'none'
      }}>
        <FontAwesomeIcon icon={faArrowUp} style={{ color: "#206262", }} />
      </button>

      <TurnKeyService />

      <Card theme={theme} setTheme={setTheme} />

      <Solution theme={theme} setTheme={setTheme} />
      <hr />

      <div className="container-fluid">
  <div className="row">
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
  </div>
</div>


    </div >
  );
};

export default HomePage;
