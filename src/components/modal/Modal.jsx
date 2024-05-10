import React from 'react'
import { MainModal } from '../../../style/Main'
import { Container } from '../../../style/Container'
import { Text } from '../../../style/Text'
import { Button } from '../../../style/Buttons'
import Check from '../../assets/check'
import X from '../../assets/ButtonX'
import { useTranslation } from 'react-i18next'

export default function Modal({ data, close }) {
  const { t } = useTranslation()
  let labels
  labels = data?.list.filter((item) => item !== 'VER MÁS')
  labels = [
    ...labels,
    t('page.prices.services.galery'),
    t('page.prices.services.portfolio'),
    t('page.contact.title'),
    t('page.prices.services.chat'),
    t('page.prices.services.maps'),
    t('page.prices.services.position'),
  ]
  if (data.title === 'Pro') {
    labels = [
      ...labels,
      t('page.prices.services.catolog'),
      t('page.prices.services.payd'),
    ]
  }
  return (
    <MainModal>
      <Container
        flex="column"
        gap="1rem"
        width="20rem"
        height="40rem"
        align="center"
        bg="white"
        radius="2rem"
        justify="flex-end"
        padding="1rem 2rem"
        position="relative"
      >
        <Container flex="column" gap=".5rem">
          <Button
            position="absolute"
            top="1.5rem"
            right="1.5rem"
            border="none"
            bg="none"
            padding="0"
            onClick={() => close()}
          >
            <X />
          </Button>
          <Text>{data?.text.toUpperCase()}</Text>
          <Text weight="800" size="1.5rem">
            {data?.title.toUpperCase()}
          </Text>
        </Container>
        <Container flex="column" gap=".5rem">
          {labels.map((item, idx) => (
            <Text key={idx} display="flex" gap="1rem" align="start">
              <Check /> {item.toUpperCase()}
            </Text>
          ))}
        </Container>
        <Button
          color="white"
          bg="#FF6600"
          align="center"
          width="50%"
          margin="1rem auto"
          radius="1rem"
          padding=".5rem"
          weight="700"
        >
          {t('buttons.contact').toUpperCase()}
        </Button>
      </Container>
    </MainModal>
  )
}
