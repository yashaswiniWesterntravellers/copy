import React from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook
import { FaPhone } from 'react-icons/fa6';
import { IoLogoWhatsapp } from "react-icons/io";
import './travelexpert.css'; // Import your CSS file for styling

const ChatExpertCard = ({packages}) => {
    const { id } = useParams();
    // Find the package by id
  const packageData = packages.find(pkg => pkg.id === parseInt(id));

  if (!packageData) {
    return <h1>Activity data not found</h1>;
  }
  const Expert = packageData.Travelexpert; // Access travel expert object

  return (
    <div className="chat-expert-card">
      <h2 className="chat-title">Chat with our Travel Expert</h2>
      <div className="expert-info">
        <img
          src={Expert.Travelexpertimage} // Replace with your expert image link
          alt="Travel Expert"
          className="expert-image"
        />
        <div className="expert-details">
          <h4 className="expert-name">{Expert.Travelexpertname}</h4>
          <p className="expert-trips">Planned {Expert.Tripsplannedsofar} trips so far</p>
        </div>
        <div className="contact-icons">
          <FaPhone className="phoneicon" />
          <IoLogoWhatsapp className="whatsapp-icon" />
        </div>
      </div>
    </div>
  );
};

export default ChatExpertCard;
