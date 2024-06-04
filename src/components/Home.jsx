import { Text } from '../../style/Text'
import { Button } from '../../style/Buttons'
import { Container } from '../../style/Container'
import Circle from '../assets/Circle'
import Vector from '../assets/VectorHome'
import LuzIzq from '../assets/Luz'
import Mail from '../assets/VectorMail'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Container
      align="center"
      bg="white"
      width="100%"
      height="100vh"
      id="Inicio"
      justify="center"
      position="relative"
      overflow="hidden"
    >
      <Container position="absolute" top="-1rem" left="-3rem">
        <LuzIzq />
      </Container>
      <Container
        position="absolute"
        bottom="-.5rem"
        right="-3rem"
        transform="rotate(180deg)"
      >
        <LuzIzq />
      </Container>
      <Container flex="column" width="40%" align="start" index="5" gap="1.5rem">
        <Text
          size="3.5rem"
          weight="800"
          color="#0B0A0F"
          transform="translateY(1.5rem)"
        >
          {t('page.home.name')}
        </Text>
        <Text
          size="2rem"
          style={{
            backgroundImage:
              'linear-gradient(91.01deg, #FB980F 2.15%, #FAC02C 30.61%, #F9F352 79.93%, #F9EC5C 105.1%, #F9EB68 140.34%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('page.home.desing')}
        </Text>
        <Text size="1.25rem" color="#666768" width="87%">
          {t('page.home.msg')}
        </Text>
        <Link to="/contacto">
          <Button
            color="white"
            bg="#FE7234"
            padding=".75rem 2rem"
            weight="700"
            radius="3rem"
            margin=".5rem 0"
            display="flex"
            align="center"
            gap="1rem"
            cursor="pointer"
            transition="background 0.3s, border-bottom 0.3s, box-shadow 0.03"
            hover={{
              background: '#5165D3',
            }}
          >
            {t('buttons.contact') + '!'} <Mail />
          </Button>
        </Link>
      </Container>
      <Container index="10" transform="translate(5rem,3rem)">
        <Vector width="50rem" height="45rem" />
      </Container>
      <Container position="absolute" right="0" top="-3rem">
        <Circle width="50rem" height="45rem" />
      </Container>
    </Container>
  )
}
