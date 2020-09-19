import React from 'react'

import './input-field.component.scss'

export default function InputField(props) {
  
  const { type, inputValue, handleInputCallback } = props

  return (
    <input
      type={type}
      value={inputValue}
      className='input-field'
      onChange={handleInputCallback}
    />
  )
}