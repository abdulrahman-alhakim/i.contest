import React from 'react'

const ProductTechDetails = () => {
  return (
    <div className="container" style={{ maxWidth: "100%" }}>
      <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
        TECHNICAL DETAILS
      </p>

      <div className="col-12 col-md-6" >
        <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
          Battery Module
        </p>
        <table className='table table-striped'>
          <tbody>
            <tr>
              <td>
                Model
              </td>
              <td className="fw-bold">CS48100T</td>
              <td className="fw-bold">CS48150T</td>

            </tr>
            <tr>
              <td className="fw-bold">
                Connection Method
              </td>
              <td>1P15S</td>
              <td>1P15S</td>
            </tr>
            <tr>
              <td className="fw-bold">
                Rated Capacity
              </td>
              <td>4800 WH</td>
              <td>7200 WH</td>
            </tr>
            <tr>
              <td className="fw-bold">
                Rated Voltage
              </td>
              <td>
                48 V
              </td>
              <td>
                48 V
              </td>
            </tr>
            <tr>
              <td className="fw-bold">
                Voltage Range
              </td>
              <td>
                42 V ~ 58 V
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="fw-bold">
                Charging Current
              </td>
              <td>
                50 A
              </td>
              <td>
                50 A
              </td>
            </tr>
            <tr>
              <td className="fw-bold">
                Discharging Current
              </td>
              <td>100 A</td>
              <td>100 A</td>
            </tr>
            <tr>
              <td className="fw-bold">
                Operating Temperature
              </td>
              <td>Charge: 0~50°C , Discharge: -20~55°C ; Storage: -30~45°C </td>
              <td></td>
            </tr>
            <tr>
              <td className="fw-bold">
                Self-discharging Rate            </td>
              <td>≤ 3% (0~30°C/ 3Months)</td>
              <td></td>
            </tr>
            <tr>
              <td className="fw-bold">
                Size
              </td>
              <td>440x410x130 mm</td>
              <td>440x525x130 mm</td>
            </tr>
            <tr>
              <td className="fw-bold">
                Weight
              </td>
              <td>42 kg</td>
              <td>59 kg</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className="col-12 col-md-6">
        <div>
          <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
            System parameters
          </p>
          <table className="table">
            <tbody>
              <tr>
                <td className="fw-bold">
                  System capacity

                </td>
                <td>-48V/300A</td>
              </tr>
              <tr>
                <td className="fw-bold">
                  Solar module
                </td>
                <td>
                  6*50A
                </td>
              </tr>
              <tr>
                <td className="fw-bold">
                  Rectifier module
                </td>
                <td>
                  5*50A
                </td>
              </tr>
              <tr>
                <td className="fw-bold">Main power input</td>
                <td>2*63A/3P ,1*SPD</td>
              </tr>
              <tr>
                <td className="fw-bold">
                  Solar input
                </td>
                <td>6*63A/2P ,6*SPD</td>
              </tr>
              <tr>
                <td className="fw-bold">
                  DC output
                </td>
                <td>LLVD: 2*16A, 2*32A, 2*63A <br />
                  BLVD: 2*16A, 2*32A, 2*63A
                </td>
              </tr>
              <tr>
                <td className="fw-bold">
                  AC output
                </td>
                <td>5kW (2P*32A)</td>
              </tr>
              <tr>
                <td className="fw-bold">
                  Battery configuration
                </td>
                <td>
                  2*300A insurance
                </td>
              </tr>
              <tr>
                <td className="fw-bold">
                  System efficiency
                </td>
                <td>
                  Pure PV mode &gt; 96%

                </td>
              </tr>
              <tr>
                <td className="fw-bold">
                  Protection level
                </td>
                <td>
                  IP55
                </td>
              </tr>
              <tr>
                <td className="fw-bold">
                  Dimensions / mm (W x D x H)
                </td>
                <td>
                  600x600x2000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductTechDetails