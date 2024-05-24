import { Text } from '../../style/Text'
import { Button } from '../../style/Buttons'
import { Container } from '../../style/Container'
import Circle from '../assets/Circle'
import Vector from '../assets/VectorHome'
import LuzIzq from '../assets/Luz'
import Mail from '../assets/VectorMail'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const text = t('page.home.msg')
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
      <Container flex="column" width="40%" gap=".5rem" align="start">
        <Text size="2.5rem" weight="800" color="#0B0A0F">
          {t('page.home.name')}
        </Text>
        <Text
          size="1.5rem"
          style={{
            backgroundImage:
              'linear-gradient(91.01deg, #FB980F 2.15%, #FAC02C 30.61%, #F9F352 79.93%, #F9EC5C 105.1%, #F9EB68 140.34%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('page.home.desing')}
        </Text>
        <Text size="1rem" color="#666768">
          {t('page.home.msg')}
        </Text>

        <Button
          bg="#FE7234"
          color="white"
          padding=".75rem 2rem"
          weight="700"
          radius="3rem"
          borderBottom="5px solid #BF4109FC"
          shadow="5px 6px 3.9px 0px #00000040"
          margin=".5rem 0"
          display="flex"
          align="center"
          gap="1rem"
        >
          {t('buttons.contact') + '!'} <Mail />
        </Button>
      </Container>
      <Container index="10" transform="translate(0,3rem)">
        <Vector width="50rem" height="45rem" />
      </Container>
      <Container position="absolute" right="0" top="0">
        <Circle width="50rem" height="50rem" />
      </Container>
    </Container>
  )
}
