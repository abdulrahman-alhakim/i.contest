import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import bgImage from "../images/12029.jpg";
import "../style.css";
import { Solution } from "../components/Solution";


interface HomePageProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ theme, setTheme }) => {
  return (
    <div>
      <div
        className="vh-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container h-100 d-flex justify-content-center">
          <div className="text-center mt-5">
            <h1 className="mb-4 text-light bg-with-opacity" data-aos="fade-up">
              Welcome to i.contest
            </h1>
            <p
              className="fs-4 mb-5 text-light bg-with-opacity"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              "Our commitment is to drive the global shift to clean, stable
              energy with resilient power solutions. We aim to lead in
              sustainable, secure, and cost-efficient microgrid technology,
              facilitating a smarter energy future."
            </p>
            <div
              className="d-flex justify-content-end flex-wrap"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                className="btn text-white mx-2"
                style={{ backgroundColor: "rgb(32,98,98)" }}
                href="/about"
              >
                About Us
              </a>
              <a className="btn bg-secondary text-white mx-2" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Carousel />
      <Card theme={theme} setTheme={setTheme} />

      <Solution theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default HomePage;
