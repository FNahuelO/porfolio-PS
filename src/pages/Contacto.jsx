import React, { useState } from 'react'
import LuzIzq from '../assets/Luz'
import Circle from '../assets/Circle'
import * as Yup from 'yup'
import { Input } from '../../style/Input'
import { Button } from '../../style/Buttons'
import { Form } from '../../style/Forms'
import { Container } from '../../style/Container'
import { useFormik } from 'formik'
import { Text } from '../../style/Text'
import styled from 'styled-components'
import Nav from '../components/Nav'

const fields = [
  { name: 'nombre', label: 'Nombre', type: 'text' },
  { name: 'apellido', label: 'Apellido', type: 'text' },
  { name: 'correo', label: 'Correo Electrónico', type: 'text' },
  { name: 'mensaje', label: 'Mensaje', type: 'textarea' },
]

const inputStyles = {
  bg: '#FFFFFF82',
  border: 'none',
  width: '90%',
  outline: 'none',
  color: '#2C16478A',
  padding: '1rem',
  fontSize: 'smaller',
  borderBottom: '.5px solid #00000036',
  borderRadius: '.5rem',
  boxShadow: '0px 4px 8.4px 0px #00000040',
}

const SpeechBubble = styled.div`
  position: absolute;
  top: 7rem;
  right: 0;
  transform: translateX(70%);
  background: #f9b233;
  border-radius: 2rem;
  padding: 3rem 2rem;
  color: white;
  font-size: 1.1rem;
  text-align: start;
  line-height: 1.4;
  width: 20rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
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
  const [modal, setModal] = useState({ form: true, confirm: false })
  const [buttonLabel, setButtonLabel] = useState('Enviar')

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
    <Container
      height="100vh"
      flex="column"
      align="center"
      justify="center"
      bg="#FFFFFF"
      width="100%"
      position="relative"
      overflow="hidden"
    >
      <Nav />
      <Container position="absolute" top="-1rem" left="-3rem">
        <LuzIzq />
      </Container>
      <Container
        position="absolute"
        bottom="-.5rem"
        right="-3rem"
        transform="rotate(180deg)"
        overflow="hidden"
      >
        <LuzIzq />
      </Container>
      <Container position="absolute" right="0" top="0">
        <Circle />
      </Container>
      <Container
        position="absolute"
        left="0"
        bottom="-5%"
        transform="rotate(180deg)"
      >
        <Circle color="#FB980F54" />
      </Container>

      <Container
        width="50%"
        height="65%"
        flex="column"
        index="99"
        radius=".5rem"
        position="relative"
      >
        <SpeechBubble>
          ¡Listos para hacer magia juntos! Contáctenme para dar vida a sus
          ideas.
        </SpeechBubble>
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
                        fontSize: 'smaller',
                        boxShadow: '0px 4px 8.4px 0px #00000040',
                      }}
                      {...inputStyles}
                    />
                  )}
                  {touched[field.name] && errors[field.name] ? (
                    <Text color="red" size=".7rem" padding="0 .5rem">
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
                radius=".5rem"
                color="white"
                // responsive={{ margin: '1rem 0 0 0', fontSize: '.8rem' }}
                disabled={buttonLabel !== 'Enviar'}
                hover={{
                  background: '#2F4A71',
                  color: 'white',
                  boxShadow: '0 4px 4px 0 #00000040',
                  border: 'none',
                }}
              >
                {buttonLabel}
              </Button>
            </Form>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
