import React from 'react'

import './input-field.component.scss'

export default function InputField(props) {
  
  const { inputValue, handleInputCallback } = props

  return (
    <input
      type='text'
      value={inputValue}
      className='input-field'
      onChange={handleInputCallback}
    />
  )
}