import React from 'react'
import classNames from 'classnames'

import './button.component.scss'

export default function Button(props) {
  const { buttonText, isDisabled, onClickCallback } = props
  return (
    <button
      className={classNames(['button', {
        'disabled': isDisabled
      }])}
      onClick={onClickCallback}
    >
      {buttonText}
    </button>
  );
}