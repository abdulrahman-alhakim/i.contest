import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSwitcher from "./LanguageSwitcher";
import '../index.css';
interface NavBarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ theme, setTheme }) => {
  const { t } = useTranslation('pages-NavBar'); // Use the NavBar namespace
  const [textColor, setTextColor] = useState("light");
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("/");
  const location = useLocation();

  useEffect(() => {
    setTextColor(theme === "light" ? "text-dark" : "text-light");
  }, [theme]);

  useEffect(() => {
    setActiveLink(location.pathname);
    linkClass(location.pathname);
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
    `nav-link ${activeLink === path ? "active-link px-2 fw-bold" : ""}`;

  return (
    <>
      <Navbar
        expand="md"
        className={`custom-navbar light-mode fixed-top ${expanded ? "expanded" : ""}`}
      >

        <Navbar.Brand as={Link} to="/" className=" ms-3 mb-2">
          <img
            src={require("../images/iconteststereo.png")}
            width="225"
            height="40"
            className="d-inline-block"
            alt="Logo"
            onClick={() => (window.scrollTo(0, 0))}
          />
        </Navbar.Brand>
        <div className="align-items-end d-md-none mx-1">
          <LanguageSwitcher />
        </div>

        <div className="container d-flex flex-row justify-content-between align-items-center d-md-none mb-1">
          <div>
            <Nav.Link as={Link} to="/" className={linkClass("/")} onClick={() => { handleLinkClick("/"); window.scrollTo(0, 0); }}>
              {t('home')}
            </Nav.Link>
          </div>
          <div>
            <Nav.Link as={Link} to="/products" className={linkClass("/products")} onClick={() => { handleLinkClick("/products"); window.scrollTo(0, 0); }} >
              {t('products')}
            </Nav.Link>
          </div>
          <div>
            <Nav.Link as={Link} to="/about" className={linkClass("/about")} onClick={() => { handleLinkClick("/about"); window.scrollTo(0, 0); }} >
              {t('aboutUs')}
            </Nav.Link>
          </div>
          <div>
            <Nav.Link as={Link} to="/contact" className={linkClass("/contact")} onClick={() => { handleLinkClick("/contact"); window.scrollTo(0, 0); }}>
              {t('contactUs')}
            </Nav.Link>
          </div>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="custom-dropdown-menu light-mode px-2 justify-content-center">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              {/* Navigation Links */}
              <div className="col-auto">
                <Nav
                  className="nav nav-pills"
                  style={{ padding: "3px" }}
                >
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={linkClass("/")}
                    onClick={() => {
                      handleLinkClick("/");
                      window.scrollTo(0, 0);
                    }}
                  >
                    {t('home')}
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/products"
                    className={linkClass("/products")}
                    onClick={() => {
                      handleLinkClick("/products");
                      window.scrollTo(0, 0);
                    }}
                  >
                    {t('products')}
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    className={linkClass("/about")}
                    onClick={() => {
                      handleLinkClick("/about");
                    }}
                  >
                    {t('aboutUs')}
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    className={linkClass("/contact")}
                    onClick={() => {
                      handleLinkClick("/contact");
                    }}
                  >
                    {t('contactUs')}
                  </Nav.Link>
                  <LanguageSwitcher />
                </Nav>
              </div>

              {/* Language Switcher */}
              <div className="col-auto">
              </div>
            </div>
          </div>
        </Navbar.Collapse>

      </Navbar>
    </>
  );
};

export default NavBar;
