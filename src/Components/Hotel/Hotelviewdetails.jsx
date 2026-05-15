import React from 'react';
import './hotelviewdetails.css';
import { packages } from '../Packagelisting/Packagelisting';
import RatingStars from '../Rating/RatingStars';
import Hoteladdress from './Hoteladdress';




export default function Hotelviewdetails({ hotelId }) {
  console.log('hotelId:', hotelId); // Check the hotelId
  
  // Log the packages data to check its structure
  console.log('Packages data:', packages);

  // Use flatMap to extract all hotels from packages
  const hotels = packages.flatMap(pkg => pkg.Hotels || []);
  
  // Log the extracted hotels to check their structure
  console.log('Available Hotels:', hotels);

  // Find hotel data using the hotels array
  const hotelData = hotels.find(hotel => {
    console.log(`Comparing hotelId: ${hotelId} with Hotelid: ${hotel.Hotelid}`); // Log comparison
    return hotel.Hotelid === hotelId; // Ensure correct comparison based on types
  });

  console.log('hotelData:', hotelData);

  if (!hotelData) {
    return <h1>Hotel details not found</h1>;
  }

  return (
    <div className="change-hotel-container">
      <div className="change-hotel" key={hotelData.Hotelid}>
        <h3>{hotelData.Hotelname}</h3>
        <p className="Hotel-Rating">
          <RatingStars rating={hotelData.Hotelrating} /> Trip Advisor
        </p>
        <Hoteladdress address={hotelData.Hoteladdress} />
      </div>
    </div>
  );
}
