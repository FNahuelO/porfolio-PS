import Carousel from './Carousel'
import Card from './cards/Slider'
import React, { useState, useEffect } from 'react'

function App({ cards }) {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <Carousel
      cards={cards}
      activeCard={activeCard}
      height="500px"
      width="55%"
      margin="0 auto"
      offset={1}
      showArrows={false}
      slides={cards}
    />
  )
}

export default App
