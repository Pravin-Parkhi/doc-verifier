import React from 'react'

import './checkbox.component.scss'

export default function Checkbox (props) {
    const { isSelected, onChangeCallback } = props

    return (
        <div className="checkbox-wrapper" onClick={onChangeCallback}>
            {isSelected ? <span className='filter-icon selected'></span> : <span className='filter-icon unselected'></span>}
            <span className='filter-name'>I agree to eSign this KYC document to get started.</span>
        </div>
    )
}
