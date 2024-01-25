import { Link } from "react-router-dom";

import logo from "../images/icontest-logo.png";
import { Button } from "react-bootstrap";
import CookieConsent from "react-cookie-consent";
import ImpressumModal from "./ImpressumModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

export const Footer = () => {
  return (
    <section id='footer'>
      <footer className="card-footer">
        <div className="py-3 py-md-5 bg-secondary">
          <div className="container">
            {/* Top area: Blocks */}
            <div className="row mb-3 mb-md-4">
              {/* 1st block */}
              <div className="col-md-4 col-lg-5">
                <div className="mb-2">
                  <Link aria-label="Cruip" to={"/"}>
                    <img
                      src={require("../images/iconteststereo.png")}
                      width="225"
                      height="40"
                      loading="lazy"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="text-light">
                  Make yourself more independent with our Systems, we will accompany you from the consultation to the commissioning
                </div>
                <div className="row mb-sm-0 text-md-start">
                  <div className="d-flex justify-content-center justify-content-md-start col-12 col-md-auto mb-2 mb-md-0">
                    <PrivacyPolicyModal />
                  </div>
                  <div className="d-flex justify-content-center justify-content-md-start col-12 col-md-auto mb-2 mb-md-0">
                    <ImpressumModal />
                  </div>
                  <div className="d-none d-md-block col-md-auto">
                    {/* This empty div is used to create spacing on desktop */}
                  </div>
                </div>
              </div>


              {/* 2nd and 3rd blocks wrapper */}
              <div className="col-md-8 col-lg-7">
                <div className="row justify-content-md-end">
                  {/* 2nd block */}
                  <div className="col-sm-3 mb-3 me-1 mb-sm-0 text-center text-md-start">
                    <h6 className="font-weight-bold text-light mb-3">Contact</h6>
                    <ul className="list-unstyled text-light">
                      <li>info@i-contest.eu</li>
                      <li>Tel: +49 157 5171551</li>
                    </ul>
                  </div>

                  {/* 3rd block */}
                  <div className="col-sm-3 mb-3 me-1 mb-sm-0 text-center text-md-start">
                    <a style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} href="https://www.google.com/maps/place/Hauptstraße+30a,+38446+Wolfsburg,+Germany" target="_blank" rel="noopener noreferrer">
                      <h6 className="text-light font-weight-bold mb-3">
                        Location
                      </h6>
                      I-CONTEST UG<br />
                      Hauptstraße 30a<br />
                      38446 Wolfsburg<br />
                      Germany
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom area */}
            <div className="row text-center">
              {/* Copyright Notice */}
              <div className="text-light text-center">
                &copy; www.i-contest.eu. All rights reserved.
              </div>
            </div>



          </div>
        </div>
      </footer>
    </section>
  );
};
