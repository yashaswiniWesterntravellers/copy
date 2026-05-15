import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook
import RatingStars from '../Rating/RatingStars';
import { IoIosInformationCircle } from "react-icons/io";
export default function Hotels({packages}) {
    const { id } = useParams();
     // Find the package by id
     const packageData = packages.find(pkg => pkg.id === parseInt(id));
     if (!packageData) {
         return <h1>Activity data not found</h1>;
     }
     // Extracting all hotel data across all days and schedules
     const allHotels = packageData.Days.flatMap((day, dayIndex) =>
        day.schedule.flatMap(schedule => 
            (schedule.Hotels || []).map(hotel => ({
            ...hotel,
        })))
    );
    // Remove duplicates based on Transferid
    const uniqueHotels = Array.from(new Map(allHotels.map(hotel => [hotel.Hotelid, hotel])).values());
    // Local state to track the transfer type changes
        const [hotels, setHotels] = useState([]);
                 // Update state if packageData changes
            useEffect(() => {
                setHotels(uniqueHotels);
            }, []);
    return(
        <div className="Activity-listing">
            {hotels.map((hotel) => (
                <div key={hotel.Hotelid} className='Hotel-content-information'>
                    <div className='Hotel-content'>
                        <div className='Hotel-Image-Badge'>
                            <img src={hotel.Hotelimage} alt={hotel.Hotelname} />
                            {hotel.WTRecommended && (
                                <div className="wt-recommended-badge">
                                    <span>WT RECOMMENDED</span>
                                </div>
                            )}
                        </div>
                        <div className='activity-details'>
                            <div className='Date-actions'>
                            <h3>{hotel.Hotelname}</h3>
                                {/* <p className='Date'>{hotel.HotelDate}</p> */}
                                <div className="insurance-actions">
                                    <button className="change-action">View</button>
                                    <button className="change-action">Change</button>
                                </div>
                            </div>
                            {/* <h3>{hotel.Hotelname}</h3> */}
                            <p className="Hotel-Rating">
                                <RatingStars rating={hotel.Hotelrating} /> Trip Advisor
                            </p>
                            <ul className='activity-time-type-amount'>
                                <li>{hotel.Hotelaccomodates}</li>
                                <li>{hotel.Hotelamount}</li>
                                <li>{hotel.Hotelarea}</li>
                                <li>{hotel.Hoteltype}</li>
                            </ul>
                            <ul className="Inclusions">
                                Inclusions:
                                {hotel.Hotelinclusions?.map((Inclusion, index) => (
                                    <li key={index}>{Inclusion}</li>
                                ))}
                            </ul>
                            <ul className="Exclusions">
                                Exclusions:
                                {hotel.Hotelexclusions?.map((Exclusion, index) => (
                                    <li key={index}>{Exclusion}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="Hotel-price-info">
                        <span className='Hotel-info-icon'><IoIosInformationCircle /></span>
                        <p>{hotel.HotelInfo}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}