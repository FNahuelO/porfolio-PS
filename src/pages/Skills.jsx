import { useTranslation } from 'react-i18next'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Card from '../components/cards/Services'

export default function Skills() {
  const { t } = useTranslation()

  const cardTexts = [
    {
      title: t('page.services.cards.design.title'),
      text: t('page.services.cards.design.text'),
      color: '#FED20750',
    },
    {
      title: t('page.services.cards.seo.title'),
      text: t('page.services.cards.seo.text'),
      color: '#4B40F650',
    },
    {
      title: t('page.services.cards.redesign.title'),
      text: t('page.services.cards.redesign.text'),
      color: '#E1A1A450',
    },
  ]

  return (
    <Container
      height="100vh"
      align="center"
      justify="center"
      flex="column"
      id="My Skills"
    >
      <Container width="70%" gap="2rem" flex="column">
        <Text
          size="2rem"
          weight="800"
          align="center"
          color="#43ADB9"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), linear-gradient(180deg, #76B1E1 -7%, #FFFFFF -6.99%, #D5D5D5 31.95%, #F2F5F7 56.55%, #F7F7F7 75%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          {t('page.services.title')}
        </Text>
        <Container justify="space-evenly" height="65vh" align="center">
          {cardTexts.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </Container>
      </Container>
    </Container>
  )
}
