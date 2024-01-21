import { Link } from "react-router-dom";

import logo from "../images/icontest-logo.png"

export const Footer = () => {
  return (
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
            </div>

            {/* 2nd, 3rd, and 4th blocks */}
            <div className="col-md-8 col-lg-7">
              <div className=" row justify-content-end">
                {/* 2nd block  */}
                <div className="col-sm-4 mb-3 me-1 mb-sm-0 text-center text-md-end">
                  <h6 className="font-weight-bold text-light m-2 mb-3">Contact Us</h6>
                  <ul className="list-unstyled text-light">
                    <li>info@i-contest.net</li>
                    <li>Tel: +49 157 5171551</li>
                  </ul>
                </div>

                {/* 3rd block */}
                <div className="col-sm-6 mb-3 mb-sm-0 text-center text-md-end">
                  <h6 className="m-2 text-light font-weight-bold mb-3">
                    Location
                  </h6>
                  <a style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} href="https://www.google.com/maps/place/Hauptstraße+30a,+38446+Wolfsburg,+Germany" target="_blank" rel="noopener noreferrer">
                    i.contest UG<br />
                    Hauptstraße 30a<br />
                    38446 Wolfsburg<br />
                    Germany
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="row d-flex d-md-flex text-center">
            <div className="text-light text-center">
              &copy; www.i-contest.eu. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
