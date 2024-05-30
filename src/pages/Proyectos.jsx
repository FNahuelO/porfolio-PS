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
  font-size: 1.1rem;
  text-align: start;
  line-height: 1.4;
  width: 20rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 20px; /* Ajusta la posición horizontal del triángulo aquí */
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 30px solid #f9b233;
  }
`

export default function Proyectos() {
  const { t } = useTranslation()
  const [view, setView] = useState(true)

  const cardsData = [
    {
      imagen: ceppa,
      title: t('page.prices.ceppa.title'),
      link: 'https://ceppa.com.ar/',
      design:
        'https://www.figma.com/design/IMF0TX81fyEBhVfUtARBms/Untitled?node-id=0-1&t=H0M8buu7QVPiAWgs-0',
      text: t('page.prices.ceppa.text'),
    },
    {
      imagen: novatrip,
      title: t('page.prices.novatrip.title'),
      design:
        'https://www.figma.com/design/FgAZO7uKOJzxM7KCjKAnCE/Market-place?node-id=1-3&t=d51fKW8Xf0Oc7jet-0',

      text: t('page.prices.novatrip.text'),
    },
    {
      imagen: dia,
      design:
        'https://www.figma.com/design/LqubeW6wzxAVfafmw6QdG5/Investigaci%25C3%25B3n-ux-ui-y-redise%25C3%25B1o-Dia-Online?node-id=0-1&t=vKJTpmTf4LAjviFc-0',
      title: t('page.prices.dia.title'),
      text: t('page.prices.dia.text'),
    },
    {
      imagen: barber,
      design:
        'https://www.figma.com/design/LqubeW6wzxAVfafmw6QdG5/Investigaci%25C3%25B3n-ux-ui-y-redise%25C3%25B1o-Dia-Online?node-id=0-1&t=vKJTpmTf4LAjviFc-0',
      title: t('page.prices.barber.title'),
      text: t('page.prices.barber.text'),
    },
    {
      imagen: boda,
      title: t('page.prices.boda.title'),
      design:
        'https://www.figma.com/design/voRBdKLbb0IpDxGmQNpFIW/Invitacion-casamiento?node-id=0-1&t=u9vfuwlmAapyu4DL-0',
      link: 'https://bodacrisyflor.vercel.app/',
      text: t('page.prices.boda.text'),
    },
  ]

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
      radius="0 0 15% 15%"
      flex="column"
      id="Proyectos"
      position="relative"
    >
      <Container
        flex="column"
        align="center"
        transform="translateY(-2rem)"
        index="55"
      >
        <Text
          size="2rem"
          weight="800"
          color="#D1A14A"
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
      <Container width="80vw" justify="center" height="75vh">
        <Slider cards={cards} />
      </Container>
      <Container position="absolute" bottom="7.5%" left="4%">
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
          {view && <SpeechBubble>{t('page.prices.bubble')}</SpeechBubble>}
        </Container>
      </Container>
    </Container>
  )
}
