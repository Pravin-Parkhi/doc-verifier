import React from 'react'

import successIcon from '../../assets/success.png'

import './notification.component.scss'

export default function Notification(props) {
  
  return (
    <div className='notification-wrapper'>
      <div className='heading-info'>
        <p className='top-heading'>Signing..</p>
        <p className='heading-text'>Mutual Non-Disclosure Agreement</p>
      </div>
      <div className='status'>
        <img src={successIcon} alt='Success' />
        <p>Aadhaar verified successfully!</p>
      </div>
    </div>
  );
}