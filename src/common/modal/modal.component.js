import React from 'react'

import './modal.component.scss'

export default function Modal (props) {
 
    return (
        <>
            <div className='backdrop' />
                <div
                    className='modal'
                    style={{
                        transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity : props.show ? 1 : 0
                    }}
                >
                {props.children}
            </div>
        </>
    )
}