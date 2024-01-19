import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

interface NavBarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ theme, setTheme }) => {
  const [textColor, setTextColor] = useState("light");

  useEffect(() => {
    setTextColor(theme === "light" ? "text-dark" : "text-light");
  }, [theme]);

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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center custom-dropdown-menu">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="services" className="text-dark">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="products" className="text-dark">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-dark">
            Contact Us
          </Nav.Link>
          <Nav.Link  as={Link} to="/about" className="text-dark">
            About Us
          </Nav.Link>          
        </Nav>
      </Navbar.Collapse>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </Navbar>
  );
};

export default NavBar;
