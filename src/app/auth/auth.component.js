import React, { useState, useEffect } from 'react'

import Button from '../../common/button/button.component'
import Divider from '../../common/divider/divider.component'
import InputField from '../../common/input-field/input-field.component'
import { validateEmail } from '../../utils/validation.util'

import './auth.component.scss'

export default function Auth(props) {
  const [email, setEmail] = useState('')
  const [enableButton, setButtonState] = useState(false)

  const handleInputChange = (event) => {
    setEmail(event.target.value)
  }

  const handleOnClick = () => {
    props.history.push('/doc-verify')
  }

  const renderOAuthFlow = () => {
    return(
      <div className='o-auth-wrapper'>
        <p className='o-auth-helper-text'>sanket@digio.in uses Gmail? <br /> Login using Gmail</p>
        <button className='google-sign-in-button'>Google</button>
      </div>
    )
  }

  const renderManualAuthFlow = () => {
    return(
      <div className='manual-auth-wrapper'>
        <p className='helper-text'>Proceed with your email address</p>
        
        <InputField
          inputValue={email}
          handleInputCallback={handleInputChange}
        />

        <p className='info-text'>
          By continuing, I confirm to the Terms and Service and Privacy Policy of Digio.in
        </p>

        <Button
          buttonText='Continue'
          isDisabled={!enableButton}
          onClickCallback={handleOnClick}
        />
      </div>
    )
  }

  useEffect(()=> {
    if(validateEmail(email)){
      setButtonState(true)
    } else {
      setButtonState(false)
    }
  }, [email])

  return (
    <div className='auth-wrapper'>
      
      {renderOAuthFlow()}

      <Divider />
      
      {renderManualAuthFlow()}
    </div>
  );
}