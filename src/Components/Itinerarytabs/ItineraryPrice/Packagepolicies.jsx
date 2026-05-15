import React, { useState } from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook
import { FaFileAlt, FaCreditCard, FaLock, FaTimesCircle, FaSearch, FaSyncAlt } from 'react-icons/fa';
import './ItineraryPrice.css';
import { IoCloseSharp } from "react-icons/io5";
import Buttonwithicon from '../../Button/ButtonwithIcon.jsx';
const Packagepolicies = ({packages}) => {
  const { id } = useParams();
      // Find the package by id
      const packageData = packages.find(pkg => pkg.id === parseInt(id));

      if (!packageData) {
        return <h1>Exclusion data not found</h1>;
      }
  const [ShowTermsConditions, setShowTermsConditions] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });
    const handleTerms = (title, body) => {
        console.log('Open Terms when clicked');
        setModalContent({ title, body });
        setShowTermsConditions(true);
      };
      const closeCacellationPolicy = () => {
        setShowTermsConditions(false);
      };


  return (
                            <div className="Buttonwithicon">
  <div>
  {[
  { icon: <FaFileAlt />, text: 'Terms & Conditions', body: packages[0].itineraryAdditionalInfo.termsConditions },
  { icon: <FaCreditCard />, text: 'Payment Policy', body: packages[0].itineraryAdditionalInfo.paymentPolicy },
  { icon: <FaLock />, text: 'Privacy Policy', body: packages[0].itineraryAdditionalInfo.privacyPolicy },
  { icon: <FaTimesCircle />, text: 'Cancellation Policy', body: packages[0].itineraryAdditionalInfo.cancellationPolicy },
  { icon: <FaSearch />, text: 'Our Scope of Service', body: packages[0].itineraryAdditionalInfo.scopeOfService },
  { icon: <FaSyncAlt />, text: 'Amendment of Booking of Guest', body: packages[0].itineraryAdditionalInfo.amendmentPolicy },
].map(({ icon, text, body }, index, arr) => (
  <React.Fragment key={index}>
    <Buttonwithicon
      icon={icon}
      buttontext={text}
      onClick={() => handleTerms(text, body)}
      className="texted-button1"
    />
    {index < arr.length - 1 && <hr className="separator" />}
  </React.Fragment>
))}

    {ShowTermsConditions && (
            <div className="modal-overlay-mailQuote">
              <div className="modal-content-mailQuote">
                <div className='modal-title-close'>
                <h2>{modalContent.title}</h2>
                <button className="close-button-mailQuote" onClick={closeCacellationPolicy}><IoCloseSharp /></button>
                </div>
                <div className='modal-heading-paragraph'>
                    <p>{modalContent.body}</p>
                </div>
              </div>
            </div>
    )}
  </div>
</div>
  );
};

export default Packagepolicies;
