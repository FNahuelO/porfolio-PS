import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

// Estilos para el interruptor
const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 2px;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4a4a4a;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    left: 0;
    bottom: -4px;
    background-color: ${({ color }) => color || 'white'};
    transition: 0.4s;
    border-radius: 50%;
  }
`

const SwitchInput = styled.input`
  display: none;

  &:checked + ${Slider}:before {
    transform: translateX(15px);
  }
`

// Componente Switch
const Switch = ({ onChange, checked, color }) => {
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
      <Slider color={color} />
    </SwitchWrapper>
  )
}

export default Switch
