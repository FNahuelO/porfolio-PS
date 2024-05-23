import React from 'react'
import { Container } from '../../../style/Container'
import Coin from '../../assets/Coin'
import Liston from '../../assets/Liston'
import Check from '../../assets/check'
import Colombia from '../../assets/Colombia'
import { Text } from '../../../style/Text'
import { Button } from '../../../style/Buttons'
import { useTranslation } from 'react-i18next'

export default function Proyectos({ data, index, onClick }) {
  const { t } = useTranslation()
  const formatted = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  })

  const text = `Hola TDW! Estoy interesado en comprar el Plan ${data.title}. ¿Puedes proporcionarme más información? Muchas Gracias.`
  const textoModificado = text.replace(/ /g, '%20')

  return (
    <Container
      width="20rem"
      flex="column"
      radius="2rem"
      shadow="0px 5px 10px 0px rgb(0,0,0,0.25)"
      padding="0 1rem"
      justify="space-between"
    >
      <Container justify="space-between" align="center">
        <Coin />
        <Container position="relative">
          <Liston />
          <Text
            position="absolute"
            top="40%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            size="2rem"
            weight="700"
          >
            {index}
          </Text>
        </Container>
      </Container>
      <Container flex="column" padding="0 1rem">
        <Text weight="800" color="black" align="start" size="1.5rem">
          {data.title.toUpperCase()}
        </Text>
        <Text weight="800" color="black" align="start" size=".75rem">
          {data.text.toUpperCase()}
        </Text>
        <Text
          weight="700"
          color="black"
          align="start"
          size="1.5rem"
          display="flex"
          alignItems="center"
        >
          {formatted.format(data.amount)}
        </Text>
        <Text
          weight="700"
          color="black"
          align="start"
          size="1.5rem"
          display="flex"
          alignItems="center"
          gap=".5rem"
        >
          COP <Colombia />
        </Text>
      </Container>
      <Container flex="column" gap="1rem" align="flex-start" padding="1rem 0">
        {data?.list.map((item, idx) => {
          if (item === t('buttons.more')) {
            return (
              <a href={`#Precios`} key={idx} style={{ textDecoration: 'none' }}>
                <Button
                  key="0"
                  display="flex"
                  align="center"
                  bg="transparent"
                  color="black"
                  border="none"
                  padding="0"
                  gap="1rem"
                  weight="700"
                  decoration="underline"
                  cursor="pointer"
                  onClick={() => onClick(data)}
                >
                  <Check /> {item.toUpperCase()}
                </Button>
              </a>
            )
          }
          return (
            <Text key={idx} display="flex" gap="1rem" align="start">
              <Check /> {item.toUpperCase()}
            </Text>
          )
        })}
      </Container>
      <a
        href={`https://wa.me/+573137722292?text=${textoModificado}`}
        target="_blank"
        rel="noreferrer"
      >
        <Button
          color="white"
          bg="#FF6600"
          align="center"
          width="50%"
          margin="1rem auto"
          radius="1rem"
          padding=".5rem"
          weight="700"
        >
          COMPRAR
        </Button>
      </a>
    </Container>
  )
}
