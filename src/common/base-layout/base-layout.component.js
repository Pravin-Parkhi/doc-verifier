import React from 'react'

import Header from '../header/header.component'

import './base-layout.component.scss'

export default function BaseLayout (props) {
  return (
    <div className='base-layout-container'>
      <Header />
      <div className='content-wrapper'>
        {props.children}
      </div>
    </div>
  )
}