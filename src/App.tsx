import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import lightBackground from './images/topography.svg';
import darkBackground from './images/topography2.svg';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import CookieConsent from 'react-cookie-consent';
import { Button } from 'react-bootstrap';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.style.backgroundImage = `url(${theme === 'light' ? lightBackground : darkBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
  }, [theme]);

  return (
    <Router>
      <div className={`d-flex flex-column min-vh-100 App ${theme}-mode`}>
        <NavBar theme={theme} setTheme={setTheme}/>
        <div className="flex-grow-1 mt-5">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <HomePage {...props} theme={theme} setTheme={setTheme} />}
            />
            <Route
              path="/about"
              render={(props) => <AboutUsPage {...props} theme={theme} setTheme={setTheme} />}
            />
            <Route
              path="/products"
              render={(props) => <ProductsPage {...props} theme={theme} setTheme={setTheme} />}
            />
            <Route
              path="/contact"
              render={(props) => <ContactUsPage {...props} theme={theme} setTheme={setTheme} />}
            />
          </Switch>
        </div>
        {/* <PrivacyPolicyModal /> */}
        <CookieConsent
          location="bottom"
          buttonText="Agree"
          cookieName="userConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
          <span style={{ fontSize: "12px" }}>
            Agree to<Button variant="link" onClick={() => (document.querySelector("#privacy-policy-btn") as HTMLElement)?.click()}>Privacy Policy</Button>.
          </span>
        </CookieConsent>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
