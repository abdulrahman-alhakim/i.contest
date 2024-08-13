import React from 'react'

const ProductHighlights = () => {
  return (
    <div>
      <p className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
        Highlights
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Simple electric architecture via transformer on
          MV connection. Parallel usage is possible.
        </li>
        <li className="list-group-item">
          Plug-and-play installation, easy to relocate.
        </li>
        <li className="list-group-item">
          Suitable for applications with strong grid
          connection.
        </li>
        <li className="list-group-item">
          Billing platform adaptable to local service.
        </li>
        <li className="list-group-item">
          Open protocol for LED screen display.
        </li>
      </ul>
    </div>
  )
}

export default ProductHighlights