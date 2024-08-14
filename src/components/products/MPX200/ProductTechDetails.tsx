import React from 'react';
import ProductInDepth from './ProductInDepth';

const ProductTechDetails = () => {
  return (
    <div className="container" style={{ maxWidth: "100%" }}>
      <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
        TECHNICAL DETAILS
      </p>
      
      <table className="table">
        <tbody>
          <tr>
            <td className="fw-bold">
            Power delivery            
            </td>
            <td>Rated 125 kW, max. 200 kW</td>
          </tr>
          <tr>
            <td className="fw-bold">
            AC grid connection
            </td>
            <td>Rated 125 kW, LV grid</td>
          </tr>
          <tr>
            <td className="fw-bold">
            PV panel connection
            </td>
            <td>4 (MPPT) x 30 kW (optional) ~ 900m2 surface for PV panels</td>
          </tr>
          <tr>
            <td className="fw-bold">
            Useable battery capacity
            </td>
            <td>200 kWh @ BOL, LFP-Type Li-ion battery</td>
          </tr>
          <tr>
            <td className="fw-bold">
            Battery cycle life @ 80% SOH
            </td>
            <td>
            3,500 for 1.0C applications, 
            6,000 for 0.5C applications
            </td>
          </tr>
          <tr>
            <td className="fw-bold">
            Protection level for outdoor
            </td>
            <td>IP54 cabinet / IP67 battery</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Protection level for outdoor
            </td>
            <td>IP55 container/ IP67 battery / IP55 charge station</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Ambient temperature
            </td>
            <td>-25 ~ +50 dgC, external shading necessary for hotter ambient</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Thermal management system
            </td>
            <td>Liquid cooling for battery and power conversion</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Total weight
            </td>
            <td>&lt; 3,500 kg</td>
          </tr>
          <tr>
            <td className="fw-bold">
            Dimensions LxWxH
            </td>
            <td>2.1 x 1.3 x 2.35 m</td>
          </tr>
          <tr>
            <td className="fw-bold">
            PV extension possibility
            </td>
            <td>Yes. PV feed-in on AC and/or DC side</td>
          </tr>
          <tr>
            <td className="fw-bold">
            EMS availability
            </td>
            <td>Yes. Recommended for multi-purpose tasks</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Windmill extension possibility
            </td>
            <td>7 MPPT. Totally or partially Interchangeable with PV channel</td>
          </tr>

          <tr>
            <td className="fw-bold">
              Certification
            </td>
            <td>CE, UN38.3, IEC62619, IEC62477
            Grid code VDE-AR-N 4105 (Germany)</td>
          </tr>
        </tbody>
      </table>
      <ProductInDepth />
    </div>
  );
};

export default ProductTechDetails;
