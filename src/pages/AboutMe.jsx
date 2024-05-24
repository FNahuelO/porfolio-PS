import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Vector from '../assets/Circles'
import { useTranslation } from 'react-i18next'

export default function Nosotros() {
  const { t } = useTranslation()

  return (
    <Container
      bg="transparent"
      flex="column"
      height="100vh"
      align="center"
      justify="center"
      radius="0 0 15% 15%"
      id="Sobre Mi"
    >
      <Container position="absolute" width="80%">
        <Vector width="100rem" height="45rem" />
      </Container>
      <Container
        width="50%"
        flex="column"
        height="30%"
        gap="1rem"
        bg="#FFFFFF7A"
        padding="4rem"
        radius="1rem"
        transform="translate(0,5%)"
        style={{
          backdropFilter: 'blur(39.75px)',
        }}
      >
        <Text
          size="2.5rem"
          weight="700"
          align="start"
          color="#FFFFFF80"
          textShadow="-3px 3px 7.6px #F37008"
        >
          {t('page.us.title')}
        </Text>
        <Container flex="column" gap=".5rem" align="start">
          <Text
            size="1.5rem"
            color="#7F7676"
            textShadow="0px 4px 4px  #00000040"
          >
            {t('page.us.name')}
          </Text>
          <Text
            size="1.5rem"
            color="#7F7676"
            textShadow="0px 4px 4px  #00000040"
          >
            {t('page.us.text')}
          </Text>
        </Container>
      </Container>
    </Container>
  )
}
