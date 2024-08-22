import React from "react";
import cs1 from "../../../images/cs1.png";
import ProductHighlights from "./ProductHighlights";
import ProductTechDetails from "./ProductTechDetails";
import ProductUseCases from "./ProductUseCases";

const Product: React.FC = () => {
  return (
    <div className="card mx-auto" style={{ width: "100%", maxWidth: "75rem" }}>
      <div className="card-body">
        <h5 className="card-title">ENERGY UNIT CABINET ESS-MPX-200</h5>
        <p className="p-3">
          AC Charger
        </p>

        <div className="row m-3 justify-content-between">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={cs1} loading="lazy" className="img-fluid" width={350} alt="MPX200" />
          </div>
          <div className="col-12 col-md-6">
            <ProductHighlights />
          </div>
        </div>

        <div className="m-3">

          {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item me-2" role="presentation">
              <button
                className="nav-link active text-white"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{ backgroundColor: "#00796b", borderRadius: "10px" }}

              >
                Technical Details
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-white"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                style={{ backgroundColor: "#00796b", borderRadius: "10px" }}

              >
                Use Cases
              </button>
            </li> 

          </ul>*/}
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
