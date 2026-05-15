import React from 'react';
import '../../Imageslider/Imageslider';
import { IoCloseSharp } from "react-icons/io5";




const CancellationPolicy = ({ onClose, title, description }) => {
  return (
    <div className="modal-overlay-mailQuote">
      <div className="modal-content-mailQuote">
        <div className='modal-title-close'>
        <h2>{title}</h2>
        <button className="close-button-mailQuote" onClick={onClose}><IoCloseSharp /></button>
        </div>
        <div className='modal-heading-paragraph'>
            <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
