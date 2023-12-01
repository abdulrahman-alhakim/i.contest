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
      expand="lg"
      className="justify-content-center"
      style={{ height: "100px" }}
    >
      <Navbar.Brand as={Link} to="/" className="ms-3">
        <img
          src={require("../images/icontest-logo.png")}
          width="40"
          height="40"
          className="d-inline-block border rounded-circle"
          alt="Logo"
          style={{ backgroundColor: "white" }}
        />
        <span className="ms-2 fs-3 align-top">
          <b className={textColor}>I.CONTEST</b>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/i.contest" className={textColor}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className={textColor}>
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className={textColor}>
            Contact Us
          </Nav.Link>
          <Nav.Link disabled as={Link} to="/" className={textColor}>
            About Us
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </Navbar>
  );
};

export default NavBar;
