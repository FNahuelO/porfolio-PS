import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import { Button } from '../../style/Buttons'
import Circle from '../assets/Circle'
import Vector from '../assets/VectorHome'
import LuzIzq from '../assets/Luz'
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
      justify="space-evenly"
      position="relative"
    >
      <Container position="absolute" top="0" left="0">
        <LuzIzq />
      </Container>
      <Container
        position="absolute"
        bottom="0"
        right="0"
        transform="rotate(180deg)"
      >
        <LuzIzq />
      </Container>
      <Container flex="column" width="30%" gap=".5rem" align="start">
        <Text size="3rem" weight="800" color="#0B0A0F">
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
        <Text size="1rem" color="#666768">
          {t('page.home.msg')}
        </Text>
        <a
          href={`https://wa.me/+573137722292?text=${text}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            bg="#FE7234"
            color="white"
            padding=".75rem 4rem"
            weight="700"
            radius="3rem"
            borderBottom="5px solid #BF4109FC"
            shadow="5px 6px 3.9px 0px #00000040"
            margin=".5rem 0"
          >
            {t('buttons.contact') + '!'}
          </Button>
        </a>
      </Container>
      <Container index="10">
        <Vector />
      </Container>
      <Container position="absolute" right="0" top="0">
        <Circle />
      </Container>
    </Container>
  )
}
