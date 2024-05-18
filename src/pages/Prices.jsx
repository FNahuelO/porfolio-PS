import { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Card from '../components/cards/Price'
import Modal from '../components/modal/Modal'
import Slider from '../components/Slider'
import Vector from '../assets/VectorP'
import { useTranslation } from 'react-i18next'
import { Button } from '../../style/Buttons'
import styled from 'styled-components'

const SpeechBubble = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 0;
  background: #f9b233;
  border-radius: 2rem;
  padding: 3rem 2rem;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: start;
  line-height: 1.4;
  width: 20rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

  &:after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 35px; /* Ajusta la posición horizontal del triángulo aquí */
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 30px solid #f9b233;
  }
`

export default function Prices() {
  const { t } = useTranslation()
  const [view, setView] = useState(true)

  /* useEffect(() => {
    // Habilitar o deshabilitar el scroll del cuerpo cuando se muestra o se cierra el modal
    const html = document.documentElement
    const body = document.body
    if (modal.view) {
      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
    } else {
      html.style.overflow = 'auto'
      body.style.overflow = 'auto'
    }

    return () => {
      // Restaurar el scroll del cuerpo al desmontar el modal
      html.style.overflow = 'auto'
      body.style.overflow = 'auto'
    }
  }, [modal]) */
  const handleClick = (data) => {
    setModal({ view: true, payload: data })
  }

  const handleCloseModal = () => {
    setModal({ view: false, payload: null })
  }

  return (
    <Container
      bg="white"
      height="99vh"
      align="center"
      radius="0 0 15% 15%"
      flex="column"
      id="Proyectos"
      position="relative"
    >
      <Container flex="column" gap="1rem" align="center" margin="2rem 0">
        <Text
          size="2rem"
          weight="800"
          color="#43ADB9"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), linear-gradient(180deg, #76B1E1 -7%, #FFFFFF -6.99%, #D5D5D5 31.95%, #F2F5F7 56.55%, #F7F7F7 75%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textShadow:
              ' 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 7px 10.2px rgba(0, 0, 0, 0.28)',
          }}
        >
          {t('page.prices.title')}
        </Text>
      </Container>
      <Container width="80vw" justify="center">
        <Slider />
      </Container>
      <Container position="absolute" bottom="2%" left="5%">
        <Container position="relative">
          <Button
            width="5rem"
            height="5rem"
            bg="white"
            radius="50%"
            shadow="0px 4px 4px 0px #C7DAF278 inset,0px 4px 4px 0px #00000026"
            padding=".5rem 0 0 0"
            onClick={() => setView(!view)}
          >
            <Vector width="2rem" height="2rem" />
          </Button>
          {view && (
            <SpeechBubble>
              Utilizo metodologías de investigación y análisis para informar
              cada paso del proceso de diseño
            </SpeechBubble>
          )}
        </Container>
      </Container>
    </Container>
  )
}
