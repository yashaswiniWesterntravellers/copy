import React from 'react';
import './ButtonWithIcon.css'; // External CSS for button styling
import { FaArrowRight } from 'react-icons/fa'; // You can choose any icon

const ButtonWithIcon = ({ text, iconPosition }) => {
    return (
        <div variant="text" className={`button-with-icon ${iconPosition}`}>
            {iconPosition === 'left' && <FaArrowRight className="icon" />} 
            {text}
            {iconPosition === 'right' && <FaArrowRight className="icon" />}
        </div>
    );
};

export default ButtonWithIcon;

