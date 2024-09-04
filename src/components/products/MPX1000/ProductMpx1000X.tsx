import React from "react";
import { useTranslation } from "react-i18next";
import ProductHighlights from "./ProductHighlights";
import ProductTechDetails from "./ProductTechDetails";
import ProductUseCases from "./ProductUseCases";
import mpx from "../../../images/mpx1000X.png";

const ProductMpx1000X: React.FC = () => {
  const { t } = useTranslation('pages-ProductMpx1000X'); // Use the ProductMpx1000X namespace

  return (
    <div className="card mx-auto bg-light" style={{ width: "100%", maxWidth: "75rem" }}>
      <div className="card-body">
        <h5 className="card-title">{t('title')}</h5>
        <p className="p-3">
          {t('description')}
        </p>

        <div className="row m-3 justify-content-between">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={mpx} loading="lazy" className="img-fluid" height={300} width={300} alt="MPX200" />
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

export default ProductMpx1000X;
