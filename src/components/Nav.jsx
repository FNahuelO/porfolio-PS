import { Container } from '../../style/Container'
import { Button } from '../../style/Buttons'
import { Text } from '../../style/Text'
import { useTranslation } from 'react-i18next'
import es from '../assets/spain.svg'
import en from '../assets/gb.svg'
import Switch from './Switch'
import { useEffect, useState } from 'react'

export default function Nav() {
  const { t, i18n } = useTranslation()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const labels = [
    t('page.home.title'),
    t('page.us.title'),
    t('page.services.title'),
  ]
  const labels2 = [t('page.prices.title'), t('page.contact.title')]

  const cambiarIdioma = (idioma) => {
    i18n.changeLanguage(idioma)
  }

  return (
    <Container
      bg={scrolled ? '#ffffffb8' : 'none'}
      height="5vh"
      padding="1.5rem 0"
      justify="center"
      align="center"
      position="fixed"
      index="999"
      width="100%"
      gap="2rem"
    >
      <Container width="55%" align="center" gap="4rem">
        {labels.map((item, idx) => (
          <a href={`#${item}`} key={idx} style={{ textDecoration: 'none' }}>
            <Text key={idx} color="#4A4A4A" weight="500">
              {item}
            </Text>
          </a>
        ))}
      </Container>
      <Container width="15%" align="center" justify="space-evenly">
        {labels2.map((item, idx) => (
          <a href={`#${item}`} key={idx} style={{ textDecoration: 'none' }}>
            <Text
              key={idx}
              color={scrolled ? '#4A4A4A' : 'white'}
              weight="500"
              textShadow="0px 4px 4px #00000040"
            >
              {item}
            </Text>
          </a>
        ))}
      </Container>

      <Container gap="1.5rem" align="center">
        <Text
          color={scrolled ? '#4A4A4A' : 'white'}
          onClick={() => cambiarIdioma('es')}
        >
          ES
        </Text>
        <Switch color={scrolled ? '#4A4A4A' : 'white'} />
        <Text
          color={scrolled ? '#4A4A4A' : 'white'}
          onClick={() => cambiarIdioma('en')}
        >
          EN
        </Text>
      </Container>
    </Container>
  )
}
