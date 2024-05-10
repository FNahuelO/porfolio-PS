import { useTranslation } from 'react-i18next'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Card from '../components/cards/Services'

export default function Services() {
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
      height="99vh"
      align="center"
      gap="4rem"
      justify="center"
      flex="column"
      id="My Skills"
    >
      <Text
        size="2rem"
        weight="800"
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), linear-gradient(180deg, #76B1E1 -7%, #FFFFFF -6.99%, #D5D5D5 31.95%, #F2F5F7 56.55%, #F7F7F7 75%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          textShadow:
            ' 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 7px 10.2px rgba(0, 0, 0, 0.28)',
        }}
      >
        {t('page.services.title')}
      </Text>
      <Container width="80%" justify="space-around">
        {cardTexts.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </Container>
    </Container>
  )
}
