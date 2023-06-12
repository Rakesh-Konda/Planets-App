// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planets} = props

  return (
    <div>
      <h1 className="h1">PLANETS</h1>
      <div>
        <img
          src={planets.imageUrl}
          alt={`planet ${planets.name}`}
          className="img"
        />
        <h1 className="wh">{planets.name}</h1>
        <p className="wh">{planets.description}</p>
      </div>
    </div>
  )
}
export default PlanetItem
