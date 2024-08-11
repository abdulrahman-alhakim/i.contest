import React from "react";
import MPX200 from "../../images/mpx200.png";
import ProductHighlights from "./ProductHighlights";
import ProductUseCases from "./ProductUseCases";
import ProductTechDetails from "./ProductTechDetails";

const Product = () => {
  return (
    <div className="card" style={{ width: "75rem" }}>
      <div className="card-body">
        <h5 className="card-title">ENERGY UNIT CABINET ESS-MPX-200</h5>
        <p className="p-3">
          All-in-one cabinet integrating liquid-cooled Lithium ion LFP battery
          of 1st class with high performance power conversion system. Easy
          implementation in electrical grid.
        </p>

        <div className="row m-3">
          <div className="col-12 col-md-6">
            <img src={MPX200} className="card-img-top" alt="Product" />
          </div>
          <div className="col-12 col-md-6">
            <ProductHighlights />
          </div>
        </div>
        <div className="m-3">
          {/*<p className="d-inline-flex gap-1">
            <a
              className="btn btn-success"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              Technical Details
            </a>
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              Use Cases
            </button>
          </p>
          
           <div className="row">
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample1"
              >
                <div className="card card-body">
                  <div>                    
                   <ProductTechDetails />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample2"
              >
                <div className="card card-body">
                  <ProductUseCases />
                </div>
              </div>
            </div> 
          </div>*/}

          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
              Technical Details
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
              Use Cases
              </button>
            </li>
            
          </ul>
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
