import React from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook
import BackButton from "../Components/BackButton/BackButton";
import Hotelviewdetails from '../Components/Hotel/Hotelviewdetails';
import Packagelistingimages from '../Components/Packagelistingimages/Packagelistingimages';
import { packages } from "../Components/Packagelisting/Packagelisting";
import HotelTabDetails from '../Components/Hotel/HotelTabDetails';
import NavBar from '../Components/Navigation/NavBar';




export default function HotelDetails(){
    const { hotelId } = useParams(); // Get the hotel ID from the URL

  // Find the correct hotel using hotelId from the packages array
  const hotelData = packages
    .flatMap(pkg => pkg.Hotels || [])  // Flatten the Hotels from each package
    .find(hotel => hotel.Hotelid === hotelId); // Find the hotel with the matching ID

  if (!hotelData) {
    return <h1>Hotel not found</h1>; // Show an error if no matching hotel is found
  }
    return(
        <div>
            <NavBar />
            <BackButton />
            <Hotelviewdetails hotelId={hotelId} />
            <Packagelistingimages packageImages={hotelData.HotelheaderImages} />
            <HotelTabDetails />
        </div>
    )
}