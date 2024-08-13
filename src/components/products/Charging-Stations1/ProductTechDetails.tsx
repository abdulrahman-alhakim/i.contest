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
              Charge power
            </td>
            <td>7 / 11 / 22 kW</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Output voltage
            </td>
            <td>150 – 950 V</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Charging protocol
            </td>
            <td>OCPP 1.6J (upgrade to OCPP 2.0.1 or later possible)</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Grid dependency
            </td>
            <td>1/3-phase AC±10%, 50Hz</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Earthing system
            </td>
            <td>
              3P, N, PE
            </td>
          </tr>
          <tr>
            <td className="fw-bold">
              Protection level
            </td>
            <td>IP65, IK 10</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Ambient temperature
            </td>
            <td>-35 ~ + 50 dgC, external shading recommended</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Screen type
            </td>
            <td>Optional</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Certification
            </td>
            <td>IEC61851-1, IEC61851-22,
              CE, EMC Class A, Eichrecht conform (Germany)</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default ProductTechDetails