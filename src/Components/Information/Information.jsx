import React, { useState } from 'react';
import './Information.css';
import { IoInformationCircle } from "react-icons/io5";

export const Information=({ emi, tooltip })=>{
  const [hovered, setHovered] = useState(false); // Track hover state

  const handleMouseEnter = () => {
    setHovered(true); // Set hover state to true
  };

  const handleMouseLeave = () => {
    setHovered(false); // Reset hover state
  };

  return (
      <p className="EMI">
                <IoInformationCircle
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="Informationicon"
        />
        {emi} 
        {hovered && (
          <div className="tooltip">
            {tooltip}
          </div>
        )}
      </p>
  );
};




export const Loyality=({ loyality, loyalitytooltip })=>{
    const [hovered, setHovered] = useState(false); // Track hover state
  
    const handleMouseEnter = () => {
      setHovered(true); // Set hover state to true
    };
  
    const handleMouseLeave = () => {
      setHovered(false); // Reset hover state
    };
  
    return (
        <p className="loyality">
                    <IoInformationCircle
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="loyalityInformationicon"
          />
          {loyality} 
          {hovered && (
            <div className="loyalitytooltip">
              {loyalitytooltip}
            </div>
          )}
        </p>
    );
  };
