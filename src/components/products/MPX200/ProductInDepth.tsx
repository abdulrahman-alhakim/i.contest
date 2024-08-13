import React from 'react';

const ProductInDepth = () => {
  return (
    <div>
      <button
        type="button"
        className="m-2 btn text-success-emphasis bg-success-subtle border border-success-subtle rounded-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        IN DEPTH
      </button>

      <div
        className="modal modal-xl fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="staticBackdropLabel"
              >
                ESS-MPX-200 Cabinet details:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="my-3">
                Up to 150 kW / 215 kWh Energy Unit
              </h5>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div>
                    <div>
                      <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                        CABINET GENERAL
                      </p>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="fw-bold">
                              Protection Class
                            </td>
                            <td>IP 54</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Operating Ambient Temp.
                            </td>
                            <td>-20°C to +50°C</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Operating Humidity
                            </td>
                            <td>5-90% RH</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Operating Altitude
                            </td>
                            <td>&lt; 3,000 meter</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Ventilation
                            </td>
                            <td>Fan ventilation</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Energy Management
                            </td>
                            <td>Included</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Wiring</td>
                            <td>
                              3P4W/3P5W, suitable for TN/TT system
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Dimensions (W x L x H)
                            </td>
                            <td>2,100 x 1,300 x 2,350 mm</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Cabinet Weight
                            </td>
                            <td>≤ 3.5 ton</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Communication
                            </td>
                            <td>
                              Modbus-RTU/-TCP for internal and
                              external communication
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Round Trip Efficiency
                            </td>
                            <td>≥ 88%</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Fire Safety System
                            </td>
                            <td>Included</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                        PHOTOVOLTAIC CONNECTION <sup>3</sup>
                      </p>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="fw-bold">
                              Rated Inlet Power PV
                            </td>
                            <td>150 kW</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              PV Panel Inlet Voltage
                            </td>
                            <td>300 ~ 650 Vdc</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              No. MPPT Channel
                            </td>
                            <td>Maximum 7 channels</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Cooling Type
                            </td>
                            <td>Forced air cooling</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              Certificates
                            </td>
                            <td>
                              IEC 62477, IEC 61000-6-2:2019, IEC
                              61000-6-4:2019
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              DC Voltage Ripple
                            </td>
                            <td>≤ 2%</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">
                              DC Current Ripple
                            </td>
                            <td>≤ 2%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                      POWER CONVERSION / AC STAGE
                    </p>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="fw-bold">
                            Rated AC Power
                          </td>
                          <td>125 kW 2</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Max Continous AC Power
                          </td>
                          <td>150 kW (≥ 20min) 2</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Rated AC Voltage
                          </td>
                          <td>315 ~ 450 (3-phase) Vac</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Frequency</td>
                          <td>50/60 ± 5 Hz</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Total Harmonic Distortion, Current
                            (THDi)
                          </td>
                          <td>&lt; 3% @ rated power</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Power Factor
                          </td>
                          <td>± 0.1</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Cooling Type
                          </td>
                          <td>Forced air cooling</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Certificates
                          </td>
                          <td>
                            IEC 62477, IEC 61000-6-2:2019, IEC
                            61000-6-4:2019
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            In-Grid Code
                          </td>
                          <td>
                            VDE-AR-N 4105:2018, VDE-AR-N 4110:2018
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                      BATTERY STORAGE / DC STAGE
                    </p>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="fw-bold">
                            Rated Useable Capacity
                          </td>
                          <td>200 kWh</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Rated DC voltage
                          </td>
                          <td>800 Vdc</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Depth of Discharge
                          </td>
                          <td>≥ 97%</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Nominal Charge/Discharge Rate
                          </td>
                          <td>0.5 P / 0.5 P</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Max Charge/Discharge Rate
                          </td>
                          <td>1.0 P / 1.0 P</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Nominal SOC at Delivery
                          </td>
                          <td>30%</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Chemical System
                          </td>
                          <td>Lithium-iron phosphate, LFP</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Cooling Type
                          </td>
                          <td>Liquid cooling</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">
                            Certificates
                          </td>
                          <td>
                            UN38.3, IEC62619, UL 1973, UL 9540A,
                            IEC62477-1 LVD, IEC61000-6-2/4 EMC
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInDepth