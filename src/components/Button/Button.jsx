import React from 'react';

// ASSETS
import './Button.scss'; 

const Button = ({ buttonStyle, children, ...props }) => {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children}
        </button>
    );
};

export default Button; 