import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Vector from '../assets/VectorP'
import Instagram from '../assets/Instagram'
import Facebook from '../assets/Facebook'
import Twitter from '../assets/Twitter'
import Whatsapp from '../assets/Whatsapp'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './buttons/style.css'

export default function Contacto() {
  const { t } = useTranslation()
  const location = useLocation()
  const [isContactPage, setIsContactPage] = useState(false)

  const labels = [
    t('page.home.title'),
    t('page.us.title'),
    t('page.services.title'),
    t('page.prices.title'),
    t('page.contact.title'),
  ]

  const vectores = [
    <Facebook width="40%" height="40%" />,
    <Instagram width="40%" height="40%" />,
    <Whatsapp width="40%" height="40%" />,
    <Twitter width="40%" height="40%" />,
  ]

  useEffect(() => {
    if (location.pathname === '/contacto') {
      setIsContactPage(true)
    } else {
      setIsContactPage(false)
    }
  }, [location.pathname])

  return (
    <Container
      height="100vh"
      align="center"
      justify="center"
      flex="column"
      id="Footer"
      position="relative"
      overflow="hidden"
      bg="white"
      style={{
        backgroundImage: `url(/images/bg.svg)`,
        backgroundSize: 'cover',
        backgroundPositionY: '-35%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        flex="column"
        justify="center"
        height="75%"
        width="50%"
        align="center"
        gap="2rem"
      >
        <Vector width="200" />
        <Container
          flex="column"
          justify="center"
          align="center"
          gap="2rem"
          index="2"
        >
          <Text
            weight="700"
            size="2rem"
            color="#FFFFFF78"
            textShadow="0px 4px 6.4px #93939340"
          >
            Priscila Sarmiento
          </Text>
          <Container align="center" gap="4rem">
            {labels.map((item, idx) => {
              let link =
                item === t('page.contact.title') ? '/contacto' : `/#${item}`

              return (
                <a
                  href={link}
                  key={idx}
                  style={{ textDecoration: 'none' }}
                  className="text-hover"
                >
                  <Text key={idx} color="#FFFFFF" weight="500">
                    {item}
                  </Text>
                </a>
              )
            })}
          </Container>
          <Container className="wrapper">
            <a href="#" className="icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
