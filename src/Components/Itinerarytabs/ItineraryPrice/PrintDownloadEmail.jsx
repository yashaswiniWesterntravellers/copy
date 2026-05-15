import React, { useState } from 'react';
import { FaEnvelope, FaDownload, FaPrint } from 'react-icons/fa'; // Import icons
import './ItineraryPrice.css';
import Buttonwithicon from '../../Button/ButtonwithIcon.jsx';
import Mailthisquote from './Mailthisquote.jsx'; // Import the popup component
import DownloadPDF from './DownloadPDF.jsx';
import { useMediaQuery } from "react-responsive";


const PrintDownloadEmail = () => {
      const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
  const [ShowSendEmail, setShowSendEmail] = useState(false); // State to control popup visibility
  const [ShowDownloadPDF, setShowDownloadPDF] = useState(false); // State to control popup visibility

  
  const handleSendEmail = () => {
    setShowSendEmail(true);
  };

  const handleDownloadPDF = () => {
    setShowDownloadPDF(true);
  };

  const handlePrintPDF = () => {
    // Add logic to print PDF here
    console.log('Print Itinerary PDF clicked');
    // Open the PrintItinerary component in a new window
    const newWindow = window.open('/print-itinerary', '_blank');
    newWindow.focus();
  };
  const closeSendEmail = () => {
    setShowSendEmail(false); // Close the popup
    setShowDownloadPDF(false);
  };

  return (
    <div className="Buttonwithicon">
<Buttonwithicon 
  icon={<FaEnvelope />}  // Pass the imported icon here
  buttontext='Send to Email' 
  className='texted-button' 
  onClick={handleSendEmail} 
/>
{!isMobile && (<hr className="separator" />)}
<Buttonwithicon 
  icon={<FaDownload />}  // Pass the imported icon here
  buttontext='Download PDF' 
  className='texted-button' 
  onClick={handleDownloadPDF} 
/>
{!isMobile && (<hr className="separator" />)}
<Buttonwithicon 
  icon={<FaPrint />}  // Pass the imported icon here
  buttontext='Print Itinerary PDF' 
  className='texted-button' 
  onClick={handlePrintPDF} 
/>

      {/* Render the CancellationPopup when showCancellationPopup is true */}
      {ShowSendEmail && (
        <Mailthisquote onClose={closeSendEmail} />
      )}
      {ShowDownloadPDF && (
        <DownloadPDF onClose={closeSendEmail} />
      )}
    </div>
  );
};

export default PrintDownloadEmail;
