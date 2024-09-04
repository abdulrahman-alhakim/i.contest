import React, { useEffect, useRef } from "react";
import { Carousel } from "../components/Carousel";
import Card from "../components/Card";
import backgroundVideo from "../videos/solar.mp4"; // Import your video file
import "../style.css";
import Solution from "../components/Solution";
import TurnKeyService from "../components/TurnKeyService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation('pages-HomePage');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Adjust playback speed if needed
    }
  }, []);

  return (
    <div>
      <div className="position-relative vh-100 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-50 start-50 translate-middle min-vw-100 min-vh-100 w-auto h-auto"
          style={{ objectFit: 'cover' }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start mobileMarginTop justify-content-center">
          <div className="text-center text-white p-4">
            <p
              className="my-4 display-4 text-light fw-bold fs-xl"
              data-aos="fade-up"
              style={{ textShadow: '2px 2px 8px #00796b, 0 0 25px #6A9C89, 0 0 5px #16423C' }}
            >
              {t('welcomeMessage')}
            </p>
            <p className="fs-3 text-light " data-aos="fade-up" data-aos-delay="200" style={{ textShadow: '1px 1px 4px #00796b, 0 0 25px #6A9C89, 0 0 5px #16423C' }}
            >
              {t('commitment')}
            </p>
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <Carousel />

      <button
        onClick={scrollToTop}
        className="position-fixed bottom-0 end-0 mb-4 me-4 bg-transparent border-0"
        style={{ zIndex: 99 }}
      >
        <FontAwesomeIcon icon={faCircleArrowUp} size="2xl" style={{ color: "#309191" }} />
      </button>

      <TurnKeyService theme={theme} setTheme={setTheme} />

      <Card />

      <Solution />

    </div>
  );
};

export default HomePage;