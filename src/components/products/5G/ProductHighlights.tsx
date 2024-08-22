import React from 'react'

const ProductHighlights = () => {
  return (
    <div>
      <p className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
        Background and Highlights
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Electricity consumption accounts for more than 80% of the energy consumption of communication operators, and the base station electricity bill accounts for more than 60% of the entire electricity consumption. Energy-saving is an actual issue.</li>
        <li className="list-group-item">
          Research on emission reduction technologies, especially research on photovoltaic complementarity, peak shaving and valley filling, and energy storage technology, is of great significance to communication operators in energy conservation, emission reduction, and improvement of electricity bill management.
        </li>
        <li className="list-group-item">
          Most communication base stations are in the countryside and some stations have unstable mains power supply. Due to long distance from main grid, the power supply cable construction is either costly or not at all practical.
        </li>
        <li className="list-group-item">
          Diesel generator and fuel transportation are also costly and difficult to secure in remote areas. The diesel generator is only suitable as a short-term emergency power supply.
        </li>
        <li className="list-group-item">
          Solar power generation has become the fastest and most effective way, which does not require the installation of power lines, and it’s a one-time investment without paying electricity bills.
        </li>
        <li className="list-group-item">
          Solar power generation is easy to operate. It is economical, energy-saving and environmentally friendly. And solar power is a clean energy source that neither consumes resources nor emits pollutions. It has a long service life, stable performance, and maintenance costs are lower.
        </li>
      </ul>

    </div>
  )
}

export default ProductHighlights