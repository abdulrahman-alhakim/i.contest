import React from 'react'
import chart from '../../../images/special-figures/chart2.png'
import chart1 from '../../../images/special-figures/chart3.png'
import chart2 from '../../../images/special-figures/chart.png'

const ProductTechDetails = () => {
  return (
    <div className="container" style={{ maxWidth: "100%" }} dir="ltr">
      <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
        TECHNICAL DETAILS
      </p>
      <div className='row'>
        <div className='col-12 overflow-x-auto'>
          <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
            ELECTRICAL CHARACTERISTICS I STC
          </p>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Maximum Power Current (Imp)</th>
                <th scope="col">
                  405W
                </th>
                <th scope="col">
                  410W
                </th>
                <th scope="col">
                  415W
                </th>
                <th scope="col">
                  420W
                </th>
                <th scope="col">
                  425W
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Maximum Power Current (Imp)</th>
                <td>12.95A</td>
                <td>13.05A</td>
                <td>13.14A</td>
                <td>13.24A</td>
                <td>13.33A</td>
              </tr>
              <tr>
                <th scope="row">Maximum Power Voltage (Vmp)</th>
                <td>31.31V</td>
                <td>31.44V</td>
                <td>31.60V</td>
                <td>31.74V</td>
                <td>31.91V</td>

              </tr>
              <tr>
                <th scope="row">Short Circuit Current (Isc)</th>
                <td>13.91A</td>
                <td>13.98A</td>
                <td>14.06A</td>
                <td>14.14A</td>
                <td>14.22A</td>
              </tr>
              <tr>
                <th scope="row">Open Circuit Voltage (Voc)</th>
                <td>37.19V</td>
                <td>37.33V</td>
                <td>37.48V</td>
                <td>37.63V</td>
                <td>37.79V</td>
              </tr>
              <tr>
                <th scope="row">Module Efficiency</th>
                <td>20.7%</td>
                <td>21.0%</td>
                <td>21.2%</td>
                <td>21.5%</td>
                <td>21.7%</td>
              </tr>
              <tr>
                <th scope="row">Power Tolerance</th>
                <td>0~+5W</td>
                <td>0~+5W</td>
                <td>0~+5W</td>
                <td>0~+5W</td>
                <td>0~+5W</td>
              </tr>

            </tbody>
            <caption>STC: AM1.5 Irradiance 1000W/m, 25° C</caption>

          </table>

        </div>
        <div className='col-12 overflow-x-auto'>
          <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
            ELECTRICAL CHARACTERISTICS NOCT
          </p>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Maximum Power (Pmax)</th>
                <th scope="col">
                  405W
                </th>
                <th scope="col">
                  410W
                </th>
                <th scope="col">
                  415W
                </th>
                <th scope="col">
                  420W
                </th>
                <th scope="col">
                  425W
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Maximum Power (Pmax)</th>
                <td>301W</td>
                <td>305W</td>
                <td>309W</td>
                <td>312W</td>
                <td>316W</td>
              </tr>
              <tr>
                <th scope="row">Maximum Power Current (Imp)</th>
                <td>10.14A</td>
                <td>10.23A</td>
                <td>10.32A</td>
                <td>10.37A</td>
                <td>10.45A</td>

              </tr>
              <tr>
                <th scope="row">Maximum Power Voltage (Vmp)</th>
                <td>29.68V</td>
                <td>29.80V</td>
                <td>29.95V</td>
                <td>30.08V</td>
                <td>30.24V</td>
              </tr>
              <tr>
                <th scope="row">Short Circuit Current (Isc)</th>
                <td>11.23A</td>
                <td>11.28A</td>
                <td>11.35A</td>
                <td>11.41A</td>
                <td>11.48A</td>
              </tr>
              <tr>
                <th scope="row">Open Circuit Voltage (Voc)</th>
                <td>35.25V</td>
                <td>35.38V</td>
                <td>35.52V</td>
                <td>35.67V</td>
                <td>35.82V</td>
              </tr>

            </tbody>
            <caption>NOCT: AM 1.5 Irradiance 800/m² , 20° C, Wind speed 1m/s</caption>

          </table>
        </div>
        <div className='col-12'>
          <p className="p-2 text-success fw-bold bg-success-subtle border border-success-subtle rounded-3">
            MECHANICAL CHARACTERISTICS
          </p>
          <table className="table hover">

            <tbody>
              <tr>
                <th scope="row">Solar Cell</th>
                <td>Monocrystalline I PERC PV Cells
                  182mm Cell I Half-cut I10 Busbar I 108 (6x18) pcs in series</td>

              </tr>
              <tr>
                <th scope="row">Solar Modules</th>
                <td>Monofacial I 1724 x 1134 x 30mm I Weight: 21.0kg</td>

              </tr>
              <tr>
                <th scope="row">Module Glass</th>
                <td>3.2 mm (0.13 inch)
                  High transmission tempered glass</td>
              </tr>
              <tr>
                <th scope="row">Module Frame</th>
                <td>Frame 30 mm
                  Anodized aluminum alloy</td>
              </tr>
              <tr>
                <th scope="row">Module Junction Box</th>
                <td>Ip68 rated I 3 bypass diodes</td>
              </tr>
              <tr>
                <th scope="row">Module Output Cable</th>
                <td>4mm²(IEC) Length:(+)1200mm, (-)1200mm</td>
              </tr>
              <tr>
                <th scope="row">Module Connector</th>
                <td>Multi contact (MC4) compatible connectors</td>
              </tr>
              <tr>
                <th scope="row">Module Encapsulant</th>
                <td>EVA (ethyl vinyl acetate)</td>
              </tr>
              <tr>
                <th scope="row">Module Backsheet</th>
                <td>FFC backsheet</td>
              </tr>
              <tr>
                <th scope="row">Module Fire Type</th>
                <td>Type 1 Fire rated</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-12'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                MAXIMUM RATING
              </p>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="fw-bold">
                      Operating
                      Temperature
                    </td>
                    <td>-40~+85°C</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      Maximum Series
                      Fuse Rating
                    </td>
                    <td>25A</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      Isc Temperature
                      Coefficient
                    </td>
                    <td>1500V DC</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-12 col-md-6'>
              <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                THERMAL CHARACTERISTICS
              </p>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="fw-bold">
                      Pmax Temperature
                      Coefficient
                    </td>
                    <td>-0.39%/°C</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      Voc Temperature
                      Coefficient
                    </td>
                    <td>-0.29%/°C</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      Isc Temperature
                      Coefficient
                    </td>
                    <td>+0.049%/°C</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">
                      NOCT
                    </td>
                    <td>45±2°C</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-around">
            <div className="col-12 col-md-6 card m-2 p-2" style={{ width: '18rem' }}>
              <img src={chart} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  PV Module: IV Curve
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 card m-2 p-2" style={{ width: '18rem' }}>
              <img src={chart1} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  PV Module: IV Curve
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="col-12">
          <div className="row justify-content-around">
            <div className="col-12 col-md-6 card m-2 p-2">
              <div className="card-body">
                <p className="card-text">
                  PV Module: IV Curve
                </p>
              </div>
              <img src={chart2} className="card-img-top mb-3" alt="..." />
              <ul>
                <li>
                  <p className="card-text">Output Linear Warranty: 1 (12) years product warranty</p>
                </li>
                <li>
                  <p className="card-text">
                    Standard Warranty:
                    Out linear warranty with 2.5% degradation in the 1st year and
                    less than 0.6% degradation each year from 2nd year to 25th year
                  </p>
                </li>
              </ul>

            </div>
            <div className="col-12 col-md-6 card m-2 p-2" style={{ maxWidth: '18rem' }}>

              <div className="card-body">
                <h5 className="card-title">WARRANTY</h5>
                <p className="card-text">25- Year linear power warranty <br />
                  12 -Year product warranty</p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default ProductTechDetails