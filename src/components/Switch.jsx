import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

// Estilos para el interruptor
const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 2px;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 0;
    bottom: -6px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`

const SwitchInput = styled.input`
  display: none;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(50px);
  }
`

// Componente Switch
const Switch = ({ onChange, checked }) => {
  const { i18n } = useTranslation()
  const [isChecked, setIsChecked] = useState(checked || false)

  const handleChange = () => {
    setIsChecked(!isChecked)
    i18n.changeLanguage(isChecked ? 'es' : 'en')
  }

  return (
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <Slider />
    </SwitchWrapper>
  )
}

export default Switch
