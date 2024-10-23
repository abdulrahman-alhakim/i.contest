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
            <td>

            </td>
            <td className="fw-bold">Model ESS-CS-200-EU</td>
            <td className="fw-bold">Model ESS-CS-310-EU</td>

          </tr>
          <tr>
            <td className="fw-bold">
              Max. power delivery
            </td>
            <td>200 kW, flexible allocation</td>
            <td>310 kW, flexible allocation</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Rated power per DC gun
            </td>
            <td>160 kW</td>
            <td>190 kW</td>
          </tr>
          <tr>
            <td className="fw-bold">
              DC charging gun interface
            </td>
            <td>CCS2 x 2, EU standard</td>
            <td>

            </td>
          </tr>
          <tr>
            <td className="fw-bold">
              Charging protocol
            </td>
            <td>
              OCPP 1.6J
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="fw-bold">
              Dependency on AC grid
            </td>
            <td>
              40 kW, LV grid
            </td>
            <td>
              80 kW, LV grid
            </td>
          </tr>
          <tr>
            <td className="fw-bold">
              Battery capacity
            </td>
            <td>200 kWh, NMC-Type Li-ion battery</td>
            <td>560 kWh, LFP-Type Li-ion battery</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Battery cycle life @ 80% SOH
            </td>
            <td>3,500</td>
            <td>6000</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Protection level for outdoor
            </td>
            <td>IP54 overall / IP67 battery</td>
            <td></td>
          </tr>
          <tr>
            <td className="fw-bold">
              Ambient temperature
            </td>
            <td>-25 ~ +50 dgC, external shading necessary for hotter ambient</td>
            <td></td>
          </tr>
          <tr>
            <td className="fw-bold">
              Thermal management system
            </td>
            <td>Liquid cooling for battery and power conversion</td>
            <td></td>
          </tr>
          <tr>
            <td className="fw-bold">
              Total weight
            </td>
            <td>2,750 kg</td>
            <td>6,250 kg</td>
          </tr>
          <tr>
            <td className="fw-bold">
              Dimensions LxWxH
            </td>
            <td>1.3 x 1.1 x 2.2 m</td>
            <td>2.7 x 1.6 x 2.6 m</td>
          </tr>
          <tr>
            <td className="fw-bold">
              PV extension possibility
            </td>
            <td>PV inverter module not integrated, PV feed-in only possible from AC side</td>
            <td></td>
          </tr>
          <tr>
            <td className="fw-bold">
              Certification
            </td>
            <td>CE, Grid code VDE-AR-N 4105/4110 (Germany grid code)</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductTechDetails