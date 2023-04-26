import React from 'react';

function Button({ children, disabled, type }) {
    return (
        <button type={type} disabled={disabled}>
            { children }
        </button>
    );
}

export default Button;
