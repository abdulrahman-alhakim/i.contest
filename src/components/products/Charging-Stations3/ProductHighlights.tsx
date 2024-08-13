import React from 'react'

const ProductHighlights = () => {
  return (
    <div>
      <p className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
        Highlights
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          High integration, system optimized by AI-EMS.
        </li>
        <li className="list-group-item">
          Weak grid infrastructure boost for HP charge.
        </li>
        <li className="list-group-item">
          Compact design, all storage units and power units
          within single housing.
        </li>
        <li className="list-group-item">
          Plug-and-play installation, easy to relocate.
        </li>
        <li className="list-group-item">
          Suitable for urban applications, especially for
          space-limiting, light usage demanding cases, e.g., 2
          charging ports in central business district.
        </li>
        <li className="list-group-item">
          Apparant coloring open for customization, open
          protocol for LED screen display.
        </li>
      </ul>
    </div>
  )
}

export default ProductHighlights