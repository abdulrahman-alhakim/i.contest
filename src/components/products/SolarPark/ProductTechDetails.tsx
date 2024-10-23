import React from 'react'

const ProductTechDetails = () => {
  return (
    <div className="container" style={{ maxWidth: "100%" }} dir="ltr">
      <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
        TECHNICAL DETAILS
      </p>

      <div className="row">
        <div className="col-12 col-md-12">
          <div>
            <div>
              <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
                Solar Panel      </p>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="fw-bold">
                      No. of vehicle places                    </td>
                    <td>2 – 20 places and more, flexible configuration</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      PV power
                    </td>
                    <td>
                      3-30 kW, flexible configuration
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      PV panels
                    </td>
                    <td>
                      High effciency dual glass module from tier1 suppliers
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      Inverter
                    </td>
                    <td>
                      Multiple MPPT string inverter, free configuration
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">

                      Grid connection
                    </td>
                    <td>
                      3-phase 400V AC±10%, 50Hz
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      Frame structure
                    </td>
                    <td>
                      Steel with fluorocarbon coating
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      AC charger extension
                    </td>
                    <td>
                      Possible
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      DC charger extension
                    </td>
                    <td>Possible</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      Energy storage extension
                    </td>
                    <td>Possible</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      Certification
                    </td>
                    <td>
                      CE, UN38.3, IEC/EN62109-1/-2, IEC/EN 62477-1, IEC/EN 61000-6-2/4
                      Grid code VDE-AR-N 4105 (Germany)
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTechDetails