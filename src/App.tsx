import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

import lightBackground from './images/topography.svg';
import darkBackground from './images/topography2.svg';

import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';

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
  }, [theme])
  

  return (
    <Router>
      <div className={`d-flex flex-column min-vh-100 App ${theme}-mode`}>
        <NavBar theme={theme} setTheme={setTheme} />
        <div className="flex-grow-1" >
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route path="/products" component={ProductPage} /> */}
            <Route path="/contact" component={ContactUsPage} />
            <Route path="/about" component={AboutUsPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
