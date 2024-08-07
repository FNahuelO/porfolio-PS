import React, { useEffect, useState } from 'react'
import Circle from '../assets/Circle'
import * as Yup from 'yup'
import { Input } from '../../style/Input'
import { Button } from '../../style/Buttons'
import { Form } from '../../style/Forms'
import { Container } from '../../style/Container'
import { useFormik } from 'formik'
import { Text } from '../../style/Text'
import Vector from '../assets/VectorP'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { useTranslation } from 'react-i18next'

const fields = [
  { name: 'nombre', label: 'Nombre', type: 'text' },
  { name: 'apellido', label: 'Apellido', type: 'text' },
  { name: 'correo', label: 'Correo Electrónico', type: 'text' },
  { name: 'mensaje', label: 'Mensaje', type: 'textarea' },
]

const inputStyles = {
  bg: '#FFFFFF82',
  width: '90%',
  outline: 'none',
  color: '#2C16478A',
  padding: '1rem',
  fontSize: 'smaller',
  border: '.5px solid #0000000f',
  borderRadius: '1rem',
}

const SpeechBubble = styled.div`
  position: absolute;
  top: 7rem;
  right: 1rem;
  transform: translateX(70%);
  background: #f9b233;
  border-radius: 2rem;
  padding: 3rem 2rem;
  color: white;
  font-size: 1.1rem;
  text-align: start;
  line-height: 1.4;
  width: 20rem;
  box-shadow: 14px 9px 7.7px 0px #68009940;
  z-index: 99;

  &:after {
    content: '';
    position: absolute;
    bottom: -22px;
    transform: rotate(14deg);
    left: 65px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 30px solid #f9b233;
  }
`

export default function Contacto() {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const [buttonLabel, setButtonLabel] = useState('Enviar')

  useEffect(() => {
    if (language === 'en') {
      setButtonLabel('Send')
    }
  }, [language])

  const labels = [
    t('page.home.title'),
    t('page.us.title'),
    t('page.services.title'),
    t('page.prices.title'),
    t('page.contact.title'),
  ]

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    handleReset,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      correo: '',
      mensaje: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Este campo es obligatorio'),
      apellido: Yup.string().required('Este campo es obligatorio'),
      correo: Yup.string()
        .email('Formato de correo inválido')
        .required('Este campo es obligatorio'),
      mensaje: Yup.string().required('Este campo es obligatorio'),
    }),
    onSubmit: async (values) => {
      setButtonLabel(<ClipLoader size={20} color="white" />)
      console.log(values)
    },
  })
  return (
    <>
      <Container
        height="100vh"
        flex="column"
        align="center"
        justify="center"
        bg="#FFFFFF"
        width="100%"
        position="relative"
      >
        <Nav />

        <Container position="absolute" right="0" top="0">
          <Circle width="40rem" height="40rem" />
        </Container>
        <Container
          position="absolute"
          left="-10%"
          bottom="-20%"
          transform="rotate(180deg)"
          index="10"
        >
          <Circle color="#FB980F54" width="65rem" height="65rem" />
        </Container>

        <Container
          width="50%"
          height="65%"
          flex="column"
          index="35"
          radius=".5rem"
          position="relative"
        >
          <SpeechBubble>{t('page.contact.bubble')}</SpeechBubble>
          <Container
            width="100%"
            bg="#EF7D13"
            radius="1rem 1rem 0 0"
            height="8%"
          ></Container>
          <Container
            style={{
              height: '90%',
              backgroundColor: '#FFFFFF82',
              backdropFilter: 'blur(39.75px)',
              borderRadius: '0 0 1rem 1rem',
            }}
          >
            <Container
              flexDirection="column"
              width="50%"
              align="center"
              justify="center"
              padding="2rem 1rem"
            >
              <Form
                onSubmit={handleSubmit}
                width="100%"
                height="100%"
                display="flex"
                flex="column"
                justify="space-around"
                align="center"
                gap=".5rem"
                padding="0 1rem"
              >
                {fields.map((field) => (
                  <Container
                    key={field.name}
                    flex="column"
                    align="flex-start"
                    gap=".5rem"
                    width="90%"
                  >
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        placeholder={field.label}
                        style={{
                          ...inputStyles,
                          height: '5rem',
                          background: '#FFFFFF82',
                          resize: 'none',
                          color: '#2C16478A',
                          fontFamily: 'Josefin Sans',
                          fontSize: '1.1rem',
                        }}
                      />
                    ) : (
                      <Input
                        type={field.type}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        placeholder={field.label}
                        style={{
                          borderRadius: '1rem',
                          fontSize: '1.1rem',
                        }}
                        {...inputStyles}
                      />
                    )}
                    {touched[field.name] && errors[field.name] ? (
                      <Text color="red" size=".8rem" padding="0 .5rem">
                        {errors[field.name]}
                      </Text>
                    ) : null}
                  </Container>
                ))}
                <Button
                  type="submit"
                  bg="#EF7D13"
                  width="90%"
                  weight="700"
                  radius="2rem"
                  color="white"
                  disabled={buttonLabel !== 'Enviar'}
                  hover={{
                    background: '#2F4A71',
                    color: 'white',
                    boxShadow: '0 4px 4px 0 #00000040',
                  }}
                >
                  {buttonLabel}
                </Button>
              </Form>
            </Container>
          </Container>
        </Container>
      </Container>
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
          backgroundPositionY: '-30%',
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
              {labels.map((item, idx) => {
                let link =
                  item === t('page.contact.title') ? '/contacto' : `/#${item}`

                return (
                  <a
                    href={link}
                    key={idx}
                    style={{ textDecoration: 'none' }}
                    className="text-hover"
                  >
                    <Text key={idx} color="#FFFFFF" weight="500">
                      {item}
                    </Text>
                  </a>
                )
              })}
            </Container>
            <Container className="wrapper">
              <a href="#" className="icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  )
}
