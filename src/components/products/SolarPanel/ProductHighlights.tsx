import React from 'react'

const ProductHighlights = () => {
  return (
    <div>
      <p className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
        Highlights
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Our PV modules are designed with better technology in mind,
          made from robust product components, under stringent quality control steps and high-tech manufacturing processes.
        </li>
        <li className="list-group-item">
          PERC, half-cut, multi-busbar, and large cell designs enables
          our PV modules to pack more power per module, capture more
          photons, produce more energy, and provide reliable, dependable
          system performance under different installations requirements,
          difficult weather, or environmental conditions. Whether you are
          EPC, installer, contractor, or project developer, we have the right
          and better PV module for your residential, commercial, industrial,
          and utility scale solar projects.
        </li>

      </ul>
    </div>
  )
}

export default ProductHighlights;