import React from 'react';
import '../../Imageslider/Imageslider';
import { IoCloseSharp } from "react-icons/io5";




const Mailthisquote = ({ onClose }) => {
  return (
    <div className="modal-overlay-mailQuote">
      <div className="modal-content-mailQuote">
        <div className='modal-title-close'>
        <h2>Important Holiday Alerts</h2>
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
            <h3>Things to know before departure</h3>
            <ul>
                <li>Hotels may charge a caution deposit on your credit card. It will be refunded within 10-15 days if there is no property damage.</li>
            </ul>
        </div>
        {/* <Primarybutton button="Acknowledge" /> */}
        <button className='Acknowledge-button'>Acknowledge</button>
      </div>
    </div>
  );
};

export default Mailthisquote;
