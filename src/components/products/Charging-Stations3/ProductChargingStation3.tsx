import React from "react";
import cs3 from "../../../images/cs3.png";
import ProductHighlights from "./ProductHighlights";
import ProductTechDetails from "./ProductTechDetails";
import ProductUseCases from "./ProductUseCases";

const Product: React.FC = () => {
  return (
    <div className="card mx-auto" style={{ width: "100%", maxWidth: "75rem" }}>
      <div className="card-body">
        <h5 className="card-title">ENERGY UNIT CABINET ESS-MPX-200</h5>
        <p className="p-3">
          Model ESS-CS-200-EU & Model ESS-CS-310-EU
        </p>

        <div className="row m-3 justify-content-between">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={cs3} loading="lazy" className="img-fluid" width={350} alt="MPX200" />
          </div>
          <div className="col-12 col-md-6">
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

export default Product;
