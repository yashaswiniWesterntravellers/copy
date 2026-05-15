import React from 'react';
import ButtonWithIcon from '../Button/ButtonwithIcon';
import './Hoteladdress.css';
import { LuMapPin } from "react-icons/lu";

export default function Hoteladdress({ address }) { // Destructure the address prop
    const handleMapView = () => {
        console.log("Map view action triggered");
    };

    return (
        <div className='Mapview'>
            <p>{address ? address : "Address not available"}</p> {/* Conditional rendering */}
            <ButtonWithIcon 
                icon={<LuMapPin className='Mapview-button-icon' />} 
                buttontext="Map View" 
                onClick={handleMapView} 
                className="Mapview-button" 
            />
        </div>
    );
}
