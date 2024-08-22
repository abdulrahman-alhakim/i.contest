import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavBarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ theme, setTheme }) => {
  const [textColor, setTextColor] = useState("light");
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("/");
  const location = useLocation();

  useEffect(() => {
    setTextColor(theme === "light" ? "text-dark" : "text-light");
  }, [theme]);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const linkClass = (path: string) =>
    `nav-link ${activeLink === path ? "active-link" : ""}`;

  return (
    <>
      <Navbar
        bg="light" expand="md"
        className={`custom-navbar fixed-top ${expanded ? "expanded" : ""}`}
      ><Navbar.Brand as={Link} to="/" className=" ms-3 ">
          <img
            src={require("../images/iconteststereo.png")}
            width="225"
            height="40"
            className="d-inline-block"
            alt="Logo"
            onClick={() => (window.scrollTo(0, 0))}
          />
        </Navbar.Brand>
        <div className="container d-flex flex-row m-2 justify-content-Between align-items-center d-md-none">

          <div>
            <Nav.Link as={Link} to="/" className={linkClass("/")} onClick={() => { handleLinkClick("/"); window.scrollTo(0, 0); }}>
              Home
            </Nav.Link>
          </div>
          <div>
            <Nav.Link as={Link} to="/products" className={linkClass("/products")} onClick={() => { handleLinkClick("/products"); window.scrollTo(0, 0); }}>
              Products
            </Nav.Link>
          </div>
          <div>
            <Nav.Link as={Link} to="/about" className="text-center" onClick={() => { handleLinkClick("/about"); window.scrollTo(0, 0); }}>
              About Us
            </Nav.Link>
          </div>
          <div>
            <Nav.Link as={Link} to="/contact" className="text-center" onClick={() => { handleLinkClick("/contact"); window.scrollTo(0, 0); }}>
              Contact Us
            </Nav.Link>
          </div>
        </div>

        <Navbar.Collapse id="basic-navbar-nav " className="custom-dropdown-menu px-2 justify-content-center">
          <Nav className="mr-auto nav nav-pills" style={{ border: "1px solid #206262", borderRadius: "10px", width: "auto", padding: "3px" }}>
            <Nav.Link as={Link} to="/" className={linkClass("/")} onClick={() => { handleLinkClick("/"); window.scrollTo(0, 0); }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className={linkClass("/products")} onClick={() => { handleLinkClick("/products"); window.scrollTo(0, 0); }}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={linkClass("/about")} onClick={() => { handleLinkClick("/about"); }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={linkClass("/contact")} onClick={() => { handleLinkClick("/contact"); }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <ThemeToggle theme={theme} setTheme={setTheme} /> */}
      </Navbar>
    </>
  );
};

export default NavBar;
