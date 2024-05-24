import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import { useTranslation } from 'react-i18next'

import Switch from './Switch'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isContactPage, setIsContactPage] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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

  useEffect(() => {
    if (location.pathname === '/contacto') {
      setIsContactPage(true)
    } else {
      setIsContactPage(false)
    }
  }, [location.pathname])

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
      top="0"
    >
      <Container
        width={isContactPage ? '60%' : '55%'}
        align="center"
        justify={isContactPage ? 'center' : 'flex-start'}
        transform={isContactPage ? 'translateX(15%)' : null}
        gap="4rem"
      >
        {labels.map((item, idx) => (
          <a
            href={isContactPage ? `/#${item}` : `#${item}`}
            key={idx}
            style={{ textDecoration: 'none' }}
          >
            <Text key={idx} color="#4A4A4A" weight="500" size="1.25rem">
              {item}
            </Text>
          </a>
        ))}
      </Container>
      <Container width="15%" align="center" justify="space-evenly">
        <a
          href={isContactPage ? `/#${labels2[0]}` : `#${labels2[0]}`}
          style={{ textDecoration: 'none' }}
        >
          <Text
            color={scrolled ? '#4A4A4A' : 'white'}
            weight="500"
            size="1.25rem"
            textShadow="0px 4px 4px #00000040"
          >
            {labels2[0]}
          </Text>
        </a>
        {!isContactPage && (
          <Link to={`${labels2[1].toLowerCase()}`}>
            <Text
              color={scrolled ? '#4A4A4A' : 'white'}
              weight="500"
              size="1.25rem"
              textShadow="0px 4px 4px #00000040"
            >
              {labels2[1]}
            </Text>
          </Link>
        )}
      </Container>

      <Container gap="1.5rem" align="center">
        <Text
          color={scrolled ? '#4A4A4A' : 'white'}
          size="1.25rem"
          onClick={() => cambiarIdioma('es')}
        >
          ES
        </Text>
        <Switch color={scrolled ? '#4A4A4A' : 'white'} />
        <Text
          color={scrolled ? '#4A4A4A' : 'white'}
          size="1.25rem"
          onClick={() => cambiarIdioma('en')}
        >
          EN
        </Text>
      </Container>
    </Container>
  )
}
