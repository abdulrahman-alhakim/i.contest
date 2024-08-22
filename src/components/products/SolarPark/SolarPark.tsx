import React from "react";
import solar from "../../../images/bigSolar.png";
import ProductHighlights from "./ProductHighlights";
import ProductTechDetails from "./ProductTechDetails";
import ProductUseCases from "./ProductUseCases";

const SolarPark: React.FC = () => {
  return (
    <div className="card mx-auto" style={{ width: "100%", maxWidth: "75rem" }}>
      <div className="card-body">
        <h5 className="card-title">PV & ESS Integrated Carport   </h5>
        <p className="p-3">
          PV & ESS Integrated Carport
        </p>

        <div className="row m-3 justify-content-between ">
          <div className="col-12 col-lx-6 d-flex justify-content-center mt-5">
            <img src={solar} loading="lazy" className="img-fluid" width={450} alt="MPX200" />
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
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <ProductUseCases />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarPark;
