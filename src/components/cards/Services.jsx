import React from 'react'
import { Container } from '../../../style/Container'
import { Text } from '../../../style/Text'
import UIVector from '../../assets/ui-vector.png'
import UXVector from '../../assets/ux-vector.png'
import UEVector from '../../assets/ue-vector.png'
export default function Services({ title, text, color }) {
  const vectores = {
    FED20750: UIVector,
    '4B40F650': UEVector,
    E1A1A450: UXVector,
  }
  return (
    <Container
      width="20%"
      height="90%"
      bg="none"
      flex="column"
      align="center"
      justify="center"
      position="relative"
      radius="2rem"
      gap="1rem"
      transition="transform 0.3s, box-shadow 0.3s"
      hover={{
        transform: 'scale(1.05)',
        boxShadow: '0px 0px 10px 5px ' + color,
      }}
    >
      <img
        src={vectores[color.substring(1)]}
        style={{ width: '10rem', height: '10rem' }}
      />

      <Text weight="800" size="1.5rem" color="#4A4A4A">
        {title}
      </Text>
      <Text
        color="#8D8D8D"
        weight="600"
        align="center"
        width="70%"
        size=".8rem"
      >
        {text}
      </Text>
    </Container>
  )
}
