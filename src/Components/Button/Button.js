import React from 'react';
import {string, func} from 'prop-types';
import './Button.css';

const Button = ({
    children,
    onClick
}) => (
    <button className="Button" onClick={onClick}>
        {children}
    </button>
);

Button.propTypes = {
    children: string,
    onClick: func
};

export default Button;