import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Vector from '../assets/VectorP'
import Instagram from '../assets/Instagram'
import Facebook from '../assets/Facebook'
import Twitter from '../assets/Twitter'
import Whatsapp from '../assets/Whatsapp'
import { useTranslation } from 'react-i18next'

export default function Contacto() {
  const { t } = useTranslation()
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
        backgroundPositionY: '-40%',
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
            {labels.map((item, idx) => (
              <a href={`#${item}`} key={idx} style={{ textDecoration: 'none' }}>
                <Text key={idx} color="#FFFFFF" weight="500">
                  {item}
                </Text>
              </a>
            ))}
          </Container>
          <Container align="center" gap="2rem">
            {vectores.map((item, idx) => (
              <Container
                width="2.5rem"
                height="2.5rem"
                radius="50%"
                bg="white"
                align="center"
                justify="center"
                key={idx}
              >
                {item}
              </Container>
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
