import React, { useEffect, useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

interface NavBarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ theme, setTheme }) => {
  const [textColor, setTextColor] = useState("light");
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();
  const navbarRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    setTextColor(theme === "light" ? "text-dark" : "text-light");
  }, [theme]);

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (
        expanded &&
        navbarRef.current &&
        toggleRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [expanded]);


  const scrollToSection = (sectionId: string) => {

    history.push('/'); // Navigate to the home page

    // Wait for the page to load
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 120; // Height of your fixed navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const sectionRect = section.getBoundingClientRect().top;
        const sectionPosition = sectionRect - bodyRect;
        const offsetPosition = sectionPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 0); // Timeout can be adjusted based on your needs
  }


  return (
    <Navbar
      bg="light" expand="lg" fixed="top"
      className="justify-content-center"
      style={{ height: "100px" }}
    >
      <Navbar.Brand as={Link} to="/" className="ms-3">
        <img
          src={require("../images/iconteststereo.png")}
          width="225"
          height="40"
          className="d-inline-block"
          alt="Logo"
        />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center custom-dropdown-menu">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link className="text-dark pe-auto mt-9" onClick={() => scrollToSection('turnkey')}>
            Services
          </Nav.Link>

          <Nav.Link as={Link} to="products" className="text-dark">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-dark">
            Contact Us
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-dark">
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </Navbar>
  );
};

export default NavBar;
