import React from 'react'

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
              power delivery
            </td>
            <td>Rated 145 kW module, max. 160 kW</td>
          </tr>
          <tr>
            <td className="fw-bold">
              AC delivery
            </td>
            <td>Rated 145 kW, 400V LV grid</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Scalability
            </td>
            <td>Up to 1,160 kW (8 modules)</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Battery capacity
            </td>
            <td>Optional</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Hydrogen inlet pressure
            </td>
            <td>
              13 bar
            </td>
          </tr>
          <tr>
            <td className="fw-bold">
              Hydrogen inlet flow-rate
            </td>
            <td>≤ 1530L/min</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Protection level for outdoor
            </td>
            <td>IP54 overall / IP67 battery</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Ambient temperature
            </td>
            <td>-25 ~ +60 dgC, external shading necessary for hotter ambient</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Thermal management system
            </td>
            <td>Liquid cooling</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Total weight
            </td>
            <td>&lt; 450 kg per module</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Dimensions LxWxH
            </td>
            <td>Module 0.9 x 0.9 x 1.8m, possible to deliver in standard 10/20 ft
              container, accessory extension not included</td>
          </tr>
          <tr>
            <td className="fw-bold">
              System energy efficiency
            </td>
            <td>&lt; 52%, i.e. 1kg H2 equivalent &lt; 16.6 kWh</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Lifecycle
            </td>
            <td>≥ 40000h</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Certification
            </td>
            <td>CE, Grid code VDE-AR-N 4105/4110 (Germany grid code)</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductTechDetails