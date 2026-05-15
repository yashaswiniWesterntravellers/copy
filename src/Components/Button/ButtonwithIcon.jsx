import React from 'react';

export default function Buttonwithicon({ onClick, 
  className, 
  icon,
  style,
  // icon: Icon, 
  buttontext }) {
  return (
    <div className={className} onClick={onClick} style={style}>
      {icon}
      {/* {Icon && <Icon />}   */}
      {/* Render the icon as a component */}
      <span>{buttontext}</span>
    </div>
  );
}
