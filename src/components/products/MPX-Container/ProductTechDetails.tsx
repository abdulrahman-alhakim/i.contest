import React from 'react'

const ProductTechDetails = () => {
  return (
    <div className="container" style={{ maxWidth: "100%" }} dir="ltr">
      <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
        TECHNICAL DETAILS
      </p>

      <table className="table">
        <tbody>
          <tr>
            <td className="fw-bold">
              Max. power delivery
            </td>
            <td>800 kW, flexible allocation</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Rated power per dispenser
            </td>
            <td>160 kW DC charge</td>
          </tr>
          <tr>
            <td className="fw-bold">
              DC charging gun interface
            </td>
            <td>Recommend 4, Max. 8. EU CCS2 default, US/CN standards on request.</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Charging protocol
            </td>
            <td>OCPP 1.6J</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Dependency on AC grid
            </td>
            <td>
              Rated 60 kW, up to 120 kW on LV grid
            </td>
          </tr>
          <tr>
            <td className="fw-bold">
              Useable battery capacity
            </td>
            <td>Up to 1,000 kWh @ BOL, LFP-Type Li-ion battery</td>
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
            <td>-25 ~ +60 dgC, external shading recommended</td>
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
            <td>&lt; 18,000 kg</td>
          </tr>
          <tr>
            <td className="fw-bold">
              PV extension possibility
            </td>
            <td>7 (MPPT) x 30 kW (optional) ~ 1,500m2 surface for PV panels</td>
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
              Grid code VDE-AR-N 4105/4110 (Germany)</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductTechDetails