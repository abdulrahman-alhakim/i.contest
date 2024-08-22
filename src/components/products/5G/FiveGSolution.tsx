import React from "react";
import FgT1 from "../../../images/FgT1.png";
import FgT2 from "../../../images/FgT2.png";

import ProductHighlights from "./ProductHighlights";
import ProductTechDetails from "./ProductTechDetails";

const FiveGSolution: React.FC = () => {
  return (
    <div className="card mx-auto bg-light" style={{ width: "100%", maxWidth: "75rem" }}>
      <div className="card-body">
        <h5 className="card-title">TELECOMMUNICATION TOWER POWER SUPPLY</h5>
        <p className="p-3">
          Typical System as Product – 48V Battery Module & Cabinet
        </p>
        <div className="row m-3 justify-content-between ">
          <div className="col-12 col-lx-6 d-flex justify-content-center mt-5">

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img src={FgT1} loading="lazy" className="img-fluid" width={300} />
                </div>
                <div className="carousel-item">
                  <img src={FgT2} loading="lazy" className="img-fluid" width={250} />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
          <div className="col-12 col-xl-10">
            <ProductHighlights />
          </div>
        </div>

        <div className="m-3">

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <ProductTechDetails />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolution;