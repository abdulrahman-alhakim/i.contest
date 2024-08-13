import React from 'react'

const ProductTechDetails = () => {
  return (
    <div className="container" style={{ maxWidth: "100%" }}>
      <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
        GENERAL DETAILS
      </p>
      <table className="table">
        <tbody>
          <tr>
            <td className="fw-bold">
              power delivery
            </td>
            <td>Rated 500 kW, max. 800 kW</td>
          </tr>
          <tr>
            <td className="fw-bold">
              AC grid connection
            </td>
            <td>Rated 500 kW, LV/MV grid</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Useable battery capacity
            </td>
            <td>1,000 kWh @ BOL, LFP-Type Li-ion battery</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Battery cycle life @ 80% SOH
            </td>
            <td>3,500 for 1.0C applications,
              6,000 for 0.5C applications</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Protection level for outdoor
            </td>
            <td>
              IP55 container / IP67 battery
            </td>
          </tr>
          <tr>
            <td className="fw-bold">
              Ambient temperature
            </td>
            <td>-25 ~ +60 dgC, external shading recommended for hotter ambient</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Thermal management system
            </td>
            <td>Liquid cooling for battery and power conversion</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Dimensions LxWxH
            </td>
            <td>Standard 20 ft HQ container, accessory extension not included.
              Standard 10 ft container design on demand, limited to 600kWh</td>
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
            <td>&lt; 15,000 kg</td>
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