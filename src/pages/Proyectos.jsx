import { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Card from '../components/cards/Slider'
import Modal from '../components/modal/Modal'
import Slider from '../components/Slider'
import Vector from '../assets/VectorP'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'
import { Button } from '../../style/Buttons'
import styled from 'styled-components'
import ceppa from '../assets/ceppa.png'
import novatrip from '../assets/novatrip.png'
import dia from '../assets/dia.png'
import boda from '../assets/boda.png'
import barber from '../assets/barber.png'

const SpeechBubble = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 0;
  background: #f9b233;
  border-radius: 2rem;
  padding: 2rem 3rem;
  color: white;
  font-family: 'Josefin Sans', 
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

const cardsData = [
  {
    imagen: ceppa,
    title: 'Ceppa - Website',
    link: 'https://ceppa.com.ar/',
    design:
      'https://www.figma.com/design/IMF0TX81fyEBhVfUtARBms/Untitled?node-id=0-1&t=H0M8buu7QVPiAWgs-0',
    text: 'El objetivo principal fue crear una experiencia de usuario intuitiva y atractiva, facilitando la navegación y el acceso a la información para los pacientes. Incorporé elementos visuales calmantes y una estructura clara para transmitir confianza y profesionalismo, optimizando la interacción y satisfacción del usuario.',
  },
  {
    imagen: novatrip,
    title: 'Marketplace',
    design:
      'https://www.figma.com/design/FgAZO7uKOJzxM7KCjKAnCE/Market-place?node-id=1-3&t=d51fKW8Xf0Oc7jet-0',

    text: 'Estas páginas web facilitan transacciones comerciales, permitiendo a los clientes explorar catálogos de productos, agregar artículos al carrito de compras y finalizar la compra mediante métodos de pago en línea',
  },
  {
    imagen: dia,
    design:
      'https://www.figma.com/design/LqubeW6wzxAVfafmw6QdG5/Investigaci%25C3%25B3n-ux-ui-y-redise%25C3%25B1o-Dia-Online?node-id=0-1&t=vKJTpmTf4LAjviFc-0',
    title: 'Investigacion ux-ui y Rediseño Dia Online',
    text: 'Este proyecto tiene como objetivo principal mejorar la experiencia del usuario (UX) y la interfaz de usuario (UI) de nuestra plataforma de compras en línea, optimizando la navegación, accesibilidad y satisfacción del cliente.',
  },
  {
    imagen: barber,
    design:
      'https://www.figma.com/design/LqubeW6wzxAVfafmw6QdG5/Investigaci%25C3%25B3n-ux-ui-y-redise%25C3%25B1o-Dia-Online?node-id=0-1&t=vKJTpmTf4LAjviFc-0',
    title: 'Web App mobile para Agendar Citas en Barbería',
    text: 'Enfocada en facilitar la programación de citas, mediante la aplicación permite a los clientes reservar sus servicios de manera rápida y sencilla, seleccionando su barbero preferido, el tipo de servicio y el horario conveniente.',
  },
  {
    imagen: boda,
    title: 'Web App Interactiva para Invitación de Casamiento',
    design:
      'https://www.figma.com/design/voRBdKLbb0IpDxGmQNpFIW/Invitacion-casamiento?node-id=0-1&t=u9vfuwlmAapyu4DL-0',
    link: 'https://bodacrisyflor.vercel.app/',
    text: 'La aplicación permite a los usuarios explorar detalles del evento, confirmar su asistencia y personalizar sus respuestas de manera fácil y divertida. Diseñada con una estética elegante y funcionalidades intuitivas, la web app garantiza una navegación fluida y una interacción enriquecedora para todos los usuarios.',
  },
]

export default function Proyectos() {
  const { t } = useTranslation()
  const [view, setView] = useState(true)

  const cards = cardsData.map((card) => ({
    key: uuidv4(),
    content: (
      <Card
        imagen={card.imagen}
        title={card.title}
        link={card.link}
        design={card.design}
        text={card.text}
      />
    ),
  }))

  return (
    <Container
      bg="white"
      height="105vh"
      align="center"
      justify="center"
      gap="1rem"
      radius="0 0 15% 15%"
      flex="column"
      id="Proyectos"
      position="relative"
    >
      <Container flex="column" align="center" transform="translate(0,-50%)">
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
        <Slider cards={cards} />
      </Container>
      <Container position="absolute" bottom="5.5%" left="2.5%">
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
