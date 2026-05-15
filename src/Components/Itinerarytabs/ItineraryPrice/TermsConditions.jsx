import React from 'react';
import '../../Imageslider/Imageslider';
import { IoCloseSharp } from "react-icons/io5";




const TermsConditions = ({ onClose }) => {
  return (
    <div className="modal-overlay-mailQuote">
      <div className="modal-content-mailQuote">
        <div className='modal-title-close'>
        <h2>Terms & Conditions</h2>
        <button className="close-button-mailQuote" onClick={onClose}><IoCloseSharp /></button>
        </div>
        <div className='modal-heading-paragraph'>
            <h3>Things to plan for before departure</h3>
            <ul>
                <li>The Campbell Inn in Singapore does not have an elevator</li>
                <li>Wifi is not included in the Campbell Inn in Singapore.</li>
                <li>Breakfast is not included for your booking in the Campbell Inn in Singapore.</li>
                <li>Your room in Campbell Inn in Singapore does not have air conditioning.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
