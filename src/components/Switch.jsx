import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Switch = ({ checked, color }) => {
  const { i18n } = useTranslation()
  const [isChecked, setIsChecked] = useState(checked || false)

  const handleChange = () => {
    setIsChecked(!isChecked)
    i18n.changeLanguage(isChecked ? 'es' : 'en')
  }

  return (
    <label className="relative inline-block w-[2.5rem] h-[0.2rem]">
      <input
        type="checkbox"
        className="peer hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        className="absolute inset-0 cursor-pointer bg-[#4a4a4a] rounded-[34px] transition-all duration-[400ms] ease-[ease] before:absolute before:content-[''] before:h-[1rem] before:w-[1rem] before:left-0 before:bottom-[-0.4rem] before:rounded-full before:bg-[color:var(--switch-color)] before:transition-all before:duration-[400ms] before:ease-[ease] peer-checked:before:translate-x-[1.5rem]"
        style={{ '--switch-color': color || 'white' }}
      />
    </label>
  )
}

export default Switch
