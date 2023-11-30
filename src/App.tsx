import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

import lightBackground from './images/topography.svg';
import darkBackground from './images/topography2.svg';

import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Services } from './pages/Services';

const App: React.FC = () => {

  const[theme, setTheme] = useState<string>('light');

  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  },[]);

  useEffect(()=>{
    localStorage.setItem('theme', theme);
    document.body.style.backgroundImage = `url(${theme === 'light' ? lightBackground : darkBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
  },[theme])

  return (
    <Router>
      <div className={`App ${theme}-mode`}>
        <NavBar theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" component={Services} />

          <Route path="/about" component={AboutUsPage} />
          <Route path="/contact" component={ContactUsPage} />
        </Switch>
        <footer>
        <Footer/>  
      </footer>
      </div>
    </Router>
  );
};

export default App;
