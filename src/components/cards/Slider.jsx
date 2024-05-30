import Styles from './Slider.module.css'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Text } from '../../../style/Text'
import { Container } from '../../../style/Container'
import { Button } from '../../../style/Buttons'

function Card({ imagen, title, text, design, link }) {
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
      <Container
        width="90%"
        flex="column"
        margin="0 auto"
        gap=".5rem"
        height="38%"
      >
        <Text
          color="#78778A"
          size="1.25rem"
          align="center"
          margin=".5rem 0 0 0"
        >
          {title}
        </Text>
        <Text color="#78778A" size=".7rem" align="justify" padding="0 1.5rem">
          {text}
        </Text>
      </Container>
      <Container
        justify="center"
        gap="1rem"
        position="absolute"
        bottom="2rem"
        width="100%"
      >
        {design && (
          <Button
            padding="1rem 1.5rem .5rem 1.5rem"
            bg="#FFFFFF"
            color="#5EA3C0"
            radius="1rem"
            display="flex"
            align="center"
            justify="center"
            border="none"
            shadow="0px 4px 0px 0px #CDCDCD40, 0px 4px 0px 0px #ACACAC40 inset, 0px 4px 4px 0px #00000040"
            onClick={() => window.open(design, '_blank')}
            hover={{
              backgroundColor: '#4A82EC',
              color: 'white',
              boxShadow:
                '0px 4px 0px 0px #CDCDCD40, 0px 4px 0px 0px #ACACAC40 inset, 0px 4px 4px 0px #00000040',
            }}
          >
            Ver diseño
          </Button>
        )}
        {link && (
          <Button
            padding="1rem 1.5rem .5rem 1.5rem"
            bg="#FFFFFF"
            color="#5EA3C0"
            radius="1rem"
            display="flex"
            align="center"
            border="none"
            justify="center"
            shadow="0px 4px 0px 0px #CDCDCD40, 0px 4px 0px 0px #ACACAC40 inset, 0px 4px 4px 0px #00000040"
            onClick={() => window.open(link, '_blank')}
            hover={{
              backgroundColor: '#4A82EC',
              color: 'white',
            }}
          >
            Ver proyecto
          </Button>
        )}
      </Container>
    </animated.div>
  )
}

export default Card
