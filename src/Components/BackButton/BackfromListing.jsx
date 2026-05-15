import React from 'react';
import { Link, useNavigate, useLocation  } from 'react-router-dom';
import './Backbutton.css';
import WesternTravellersLogo from "../../Assets/Logo.svg";
import { IoMdArrowDropleft } from "react-icons/io";
export default function BackfromListing({activity, showBackToListingButton = true, hotel, Modaltext}){
    const navigate = useNavigate(); // Hook for navigation
const location = useLocation();
    const handleBack = () => {

        const from = location.state?.from;
        if (from) {
          navigate(from);
        } else {
          // Fallback if no state is present
          console.warn("No 'from' in location.state");
        }
    };
    const isAddToItineraryActive = location.state?.day !== undefined && location.state?.schedule !== undefined && !location.state?.activity1 && !location.state?.hotel1;
    const handleBackToListing = () => {
        console.log("Modaltext:", Modaltext);
        if (activity?.toLowerCase().includes("activity")) {
          navigate("/ActivityModal", { state: location.state });
        } else if (hotel?.toLowerCase().includes("hotel")) {
          navigate("/HotelModal", { state: location.state });
        } else {
          console.warn("Unknown Modaltext for navigation:", Modaltext);
        }
      };
    
    return(
        <div className='nav-back-button'>
            <div className="d-m-navbar-logo">
            <Link to="/" className="d-m-navbar-logo-link">
            <img alt="Western Travellers" src={WesternTravellersLogo} />
            </Link>
            </div>
            <h3 className='change-activity'>{Modaltext}</h3>
            <div style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
            <button className="back-button" onClick={handleBack}><IoMdArrowDropleft className='back-button-icon' />Back to Itinerary</button>
            {showBackToListingButton && isAddToItineraryActive && (
            <button className="back-button" onClick={handleBackToListing}><IoMdArrowDropleft className='back-button-icon' />Back to Listing</button>
            )}
            </div>
        </div>
    )
}