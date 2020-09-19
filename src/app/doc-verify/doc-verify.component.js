import React, { useState } from 'react'

import docPreview from '../../assets/doc-preview.jpg'
import Modal from '../../common/modal/modal.component'
import aadhaarLogo from '../../assets/1200px-Aadhaar_Logo.svg.png'

import './doc-verify.component.scss'
import InputField from '../../common/input-field/input-field.component'
import Button from '../../common/button/button.component'
import Checkbox from '../../common/checkbox/checkbox.component'

export default function DocVerify(props) {
  const [showDocVerifyModal, setDocVerifyModal] = useState(true)

  const [aadhaarNumber, setAadhaarNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [isAgree, setAgree] = useState(false)

  const handleAadhaarChange = (event) => {
    setAadhaarNumber(event.target.value)
  }

  const handleOtpChange = (event) => {
    setOtp(event.target.value)
  }

  const renderRegisterAadhaarModalView = () => {
    return(
      <div className='register-aadhaar-view'>
        <div className='view-header'>Register Aadhaar</div>
        <div className='modal-content'>
          <div className='logo-wrapper'>
            <img src={aadhaarLogo} alt='Aadhaar Logo' />
          </div>
          <div className='info-wrapper'>
            <div className='aadhaar-input-container'>
              <InputField
                type='number'
                inputValue={aadhaarNumber}
                handleInputCallback={handleAadhaarChange}
              />
              <Button
                buttonText='Verify'
                isDisabled={aadhaarNumber.length !== 12}
              />
            </div>

            <Checkbox isSelected={isAgree} onChangeCallback={()=> setAgree(!isAgree)} />

            <div className='otp-input-container'>
              <InputField
                type='number'
                inputValue={otp}
                handleInputCallback={handleOtpChange}
              />
              <Button
                buttonText='Submit'
                isDisabled={otp.length !== 6}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className='doc-verify-wrapper'>
      <img
        src={docPreview}
        alt='Document Preview'
        className='document-preview'
      />
      <Modal show={showDocVerifyModal}>
        {renderRegisterAadhaarModalView()}
      </Modal>
    </div>
  );
}