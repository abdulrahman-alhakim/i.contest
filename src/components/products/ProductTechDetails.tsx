import React from 'react'
import ProductInDepth from './ProductInDepth'

const ProductTechDetails = () => {
  return (
    <div>
    <p className="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                      GENERAL DETAILS
                    </p>
                    <div className="row">
                      <ul className="col-12 col-md-6 px-3 list-group list-group-flush">
                        <li className="list-group-item">Protection Class</li>
                        <li className="list-group-item">
                          Operating Ambient Temp.
                        </li>
                        <li className="list-group-item">Operating Humidity</li>
                        <li className="list-group-item">
                          Dimensions (W x L x H)
                        </li>
                        <li className="list-group-item">Rated AC Power</li>
                        <li className="list-group-item">Rated AC Voltages</li>
                        <li className="list-group-item">Frequency</li>
                        <li className="list-group-item">
                          Rated Inlet Power PV
                        </li>
                        <li className="list-group-item">
                          Rated Useable Capacity
                        </li>
                        <li className="list-group-item">Chemical System</li>
                      </ul>
                      <ul className="col-12 col-md-6 px-3 list-group list-group-flush">
                        <li className="list-group-item">IP 54</li>
                        <li className="list-group-item">-20°C to +50°C</li>
                        <li className="list-group-item">5-90% RH</li>
                        <li className="list-group-item">
                          2,100 x 1,300 x 2,350 mm
                        </li>
                        <li className="list-group-item">
                          125 kW <sup>2</sup>
                        </li>
                        <li className="list-group-item">
                          315 ~ 450 (3-phase) Vac
                        </li>
                        <li className="list-group-item">50/60 ± 5 Hz</li>
                        <li className="list-group-item">
                          150 kW <sup>1</sup>
                        </li>
                        <li className="list-group-item">200 kWh</li>
                        <li className="list-group-item">
                          Lithium-iron phosphate, LFP
                        </li>
                      </ul>
                    </div>
                    <ProductInDepth />
    </div>
  )
}

export default ProductTechDetails