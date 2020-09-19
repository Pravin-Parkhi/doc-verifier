import React from 'react'

import brandLogo from '../../assets/generic-logo-hi.png'

import './header.component.scss'

export default function Header(props) {

  return (
    <div className='header-wrapper'>
      <img src={brandLogo} alt='Company Logo' />
    </div>
  );
}