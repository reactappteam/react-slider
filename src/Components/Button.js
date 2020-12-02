import React from 'react'

import './Button.css'
const STYLES = ['btn--primary','btn--outline','btn--special','btn--search','btn--search--place','btn--tour'];
const SIZES = ['btn--medium', 'btn--large'];
function Button(props) {
    const{ children, buttonStyle, buttonSize, handler} = props
    const ButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const ButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
 
            <button
                className={`btn ${ButtonStyle} ${ButtonSize}` }
                onClick={handler}
            >
                    {children}
                </button>
        
    )
}

export default Button
