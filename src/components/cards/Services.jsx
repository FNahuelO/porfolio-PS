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
      width="15rem"
      height="30rem"
      bg="none"
      flex="column"
      align="center"
      justify="center"
      position="relative"
      radius="2rem"
      gap="1rem"
      hover={{
        boxShadow: '0px 7px 79.3px -23px' + color,
      }}
    >
      <img
        src={vectores[color.substring(1)]}
        style={{ width: 150, height: 150 }}
      />

      <Text weight="800" size="1.25rem" color="#4A4A4A">
        {title}
      </Text>
      <Text
        color="#8D8D8D"
        weight="600"
        align="center"
        width="70%"
        size=".75rem"
      >
        {text}
      </Text>
    </Container>
  )
}
