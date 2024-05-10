import React from 'react'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Carousel from '../components/Carousel'
import { useTranslation } from 'react-i18next'

export default function Portfolio() {
  const { t } = useTranslation()
  return (
    <Container
      bg="white"
      flex="column"
      height="100vh"
      align="center"
      justify="flex-end"
      overflow="hidden"
      id="Portafolio"
      gap="2rem"
    >
      <Text size="2rem" weight="800" borderBottom="1px solid">
        {t('page.portfolio.title')}
      </Text>
      <Container height="80vh">
        <Carousel />
      </Container>
    </Container>
  )
}
