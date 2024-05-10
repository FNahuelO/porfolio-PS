import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import { Button } from '../../style/Buttons'
import Vector from '../assets/VectorP'
import vector from '../assets/about-svg.svg'
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
    <Facebook width="30%" height="30%" />,
    <Instagram width="30%" height="30%" />,
    <Whatsapp width="30%" height="30%" />,
    <Twitter width="30%" height="30%" />,
  ]

  return (
    <Container
      height="100vh"
      align="center"
      justify="center"
      flex="column"
      id="Contacto"
      bgImg={vector}
      bgRepeat="no-repeat"
      bgPosition="right -20%"
    >
      <Container
        flex="column"
        justify="flex-end"
        height="75%"
        width="50%"
        align="center"
        gap="5rem"
      >
        <Vector />
        <Container flex="column" justify="center" align="center" gap="2rem">
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
          <Container align="center" gap="4rem">
            {vectores.map((item, idx) => (
              <Container
                width="3.5rem"
                height="3.5rem"
                radius="50%"
                bg="white"
                align="center"
                justify="center"
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
