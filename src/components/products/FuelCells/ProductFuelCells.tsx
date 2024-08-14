import React from "react";
import ProductHighlights from "./ProductHighlights";
import ProductTechDetails from "./ProductTechDetails";
import ProductUseCases from "./ProductUseCases";
import fuelcell from "../../../images/fuelcell.png";

const ProductFuelCells: React.FC = () => {
  return (
    <div className="card mx-auto" style={{ width: "100%", maxWidth: "75rem" }}>
      <div className="card-body">
        <h5 className="card-title">ENERGY UNIT CABINET ESS-MPX-200</h5>
        <p className="p-3">
          Stand-alone Storage Power Container
        </p>

        <div className="row m-2">

          <div className="col-12 col-md-6">
            <ProductHighlights />
          </div>
          <div className="col-12 col-md-4">
            <img src={fuelcell} className="card-img-top" alt="Product" />
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

          </ul> */}
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

export default ProductFuelCells;
