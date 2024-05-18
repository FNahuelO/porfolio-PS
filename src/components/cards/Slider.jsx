import Styles from './Slider.module.css'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Text } from '../../../style/Text'

function Card({ imagen, title, text }) {
  const [show, setShown] = useState(false)

  const props3 = useSpring({
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  })
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <Text color="#78778A" size="1.25rem" align="start">
        {title}
      </Text>
      <Text color="#78778A" size=".7rem" align="start">
        {text}
      </Text>
    </animated.div>
  )
}

export default Card
