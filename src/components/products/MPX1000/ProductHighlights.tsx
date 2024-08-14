import React from 'react'

const ProductHighlights: React.FC = () => {
  return (
    <div>
      <p className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
      Highlights
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Compact design, all storage units and power units
          within container.
        </li>
        <li className="list-group-item">
          Incorporate new energy source. DC connection to
          PV pannel array up to 210kWp is reserved.
        </li>
        <li className="list-group-item">
          System parameters (power & energy capcity) are
          configurable within technical boundaries.
        </li>
        <li className="list-group-item">
          Plug-and-play installation, easy to relocate.
        </li>
        <li className="list-group-item">
          Apparant coloring open for customization.
        </li>

      </ul>
    </div>
  )
}

export default ProductHighlights