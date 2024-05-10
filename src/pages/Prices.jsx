import { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Card from '../components/cards/Price'
import Modal from '../components/modal/Modal'
import Slider from '../components/Slider'
import Vector from '../assets/ProyectVector'
import { useTranslation } from 'react-i18next'

export default function Prices() {
  const { t } = useTranslation()
  const [modal, setModal] = useState({ view: false, payload: null })
  const textList = [
    t('page.prices.services.hosting'),
    t('page.prices.services.domain'),
    t('page.prices.services.design'),
  ]
  const cardTexts = [
    {
      title: t('page.prices.cards.basic.title'),
      text: t('page.prices.cards.basic.text'),
      amount: '450000',
      list: [
        ...textList,
        t('page.prices.services.tabThree'),
        t('page.prices.services.portfolio'),
      ],
    },

    {
      title: t('page.prices.cards.intermediate.title'),
      text: t('page.prices.cards.intermediate.text'),
      amount: '750000',
      list: [...textList, t('page.prices.services.tab'), t('buttons.more')],
    },
    {
      title: t('page.prices.cards.pro.title'),
      text: t('page.prices.cards.pro.text'),
      amount: '1300000',
      list: [...textList, t('page.prices.services.tab'), t('buttons.more')],
    },
  ]
  useEffect(() => {
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
  }, [modal])
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
      gap="5rem"
    >
      <Container flex="column" gap="1rem" align="center" margin="4rem 0 0 0">
        <Text
          size="2rem"
          weight="800"
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
      <Container position="absolute" bottom="0" left="5%">
        <Vector />
      </Container>
    </Container>
  )
}
