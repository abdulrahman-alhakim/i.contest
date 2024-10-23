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
              Charge power
            </td>
            <td>60 - 240 kW</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Rated power per DC gun
            </td>
            <td>Up to 160 kW</td>
          </tr>
          <tr>
            <td className="fw-bold">
              DC charging gun interface
            </td>
            <td>Max. CCS2 x 8, EU standard</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Output voltage
            </td>
            <td>150 - 950V</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Charging protocol
            </td>
            <td>
              OCPP 1.6J (upgrade to OCPP 2.0.1 or later possible)
            </td>
          </tr>
          <tr>
            <td className="fw-bold">
              Grid dependency
            </td>
            <td>3-phase 400V AC±10%, 50Hz</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Earthing system
            </td>
            <td>3P, N, PE</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Protection level
            </td>
            <td>IP54, IK 10</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Ambient temperature
            </td>
            <td>-35 ~ +55 dgC, external shading recommended</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Screen type
            </td>
            <td>27-inch LCD touch screen (1920*1080)</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Total weight
            </td>
            <td>Up to 15,000 kg</td>
          </tr>
          <tr>
            <td className="fw-bold">
              PV extension possibility
            </td>
            <td>Yes. Up to 210 kWp ~ 1,500m<sup>2</sup> free surface for PV panels</td>
          </tr>

          <tr>
            <td className="fw-bold">
              Certification
            </td>
            <td>IEC 61851-1; IEC 61851-23; IEC 61851-21-2; ISO 15118
              CE, EMC Class A, Eichrecht conform (Germany)</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductTechDetails