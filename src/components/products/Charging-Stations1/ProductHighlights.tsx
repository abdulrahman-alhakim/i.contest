import React from 'react'

const ProductHighlights = () => {
  return (
    <div>
      <p className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
        Highlights
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Simple electric architecture.
        </li>
        <li className="list-group-item">
          Plug-and-play installation, easy to relocate.
        </li>
        <li className="list-group-item">
          OEM / ODM possible. Minimal order quantity 500
          pcs.
        </li>
        <li className="list-group-item">
          Open protocol for local adaption.
        </li>
      </ul>
    </div>
  )
}

export default ProductHighlights