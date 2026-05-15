import React from 'react';
import './Backbutton.css';
import { useNavigate, useLocation } from 'react-router-dom';  // Import useNavigate from react-router-dom
import Buttonwithicon from '../Button/ButtonwithIcon';
import { IoMdArrowDropleft } from "react-icons/io";
export default function BackButton({style}){
    const navigate = useNavigate();  // Initialize useNavigate hook
const location = useLocation();
    const handleBackClick = () => {
        const from = location.state?.from;
        if (from) {
          navigate(from);
        } else {
          // Fallback if no state is present
          console.warn("No 'from' in location.state");
        }
      };

    return(
        <Buttonwithicon 
        icon={<IoMdArrowDropleft className='back-button-icon' />} 
        buttontext="Back to Itinerary" 
        onClick={handleBackClick} 
        style={style}
        className="back-button" />
    )
}