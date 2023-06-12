// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(each => (
          <div key={each.id}>
            <PlanetItem planets={each} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
