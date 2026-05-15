import React from 'react';
import RatingStars from '../Rating/RatingStars.jsx';
import { hotelData } from './hotelData.js';
import Noresultsfound from '../../Assets/Noresultsfound.svg';


export default function HotelListing1({ onSelectHotel, filters ={} }) {
        // Provide default values for filters to avoid undefined errors
        const {
            Inclusions = [],
            rating= [],
            CancellationPolicy = [],
            HotelType = [],
            HotelCategory = [],
            WTRecommended =null,
        } = filters;
            // Filter activities based on the provided filters
    const applyFilters = (hotel) => {
        if (Inclusions.length > 0 && !Inclusions.some(inclusion => hotel.Hotelinclusions.includes(inclusion))) {
            return false;
        }
        if (rating.length > 0 && !rating.includes(String(Math.floor(hotel.Hotelrating)))) return false;
        if (CancellationPolicy.length > 0 && !CancellationPolicy.includes(hotel.Hotelamount)) return false;
        if (HotelType.length > 0 && !HotelType.includes(hotel.Hoteltype)) return false;
        if (HotelCategory.length > 0 && !HotelCategory.includes(hotel.HotelCategory)) return false;
        if (WTRecommended !== null && hotel.WTRecommended !== WTRecommended) return false;
        return true;
    };

    // Get filtered activities
    const filteredHotels = hotelData.filter(applyFilters);


     // Check if no activities match the filters
     if (filteredHotels.length === 0) {
        return (
            <div className="no-results" style={{ width:"80%", height:"auto"}}>
                <img
                    src={Noresultsfound}
                    alt="No results found"
                    className="no-results-illustration"
                />
                <h2>No results found</h2>
                <p>Try adjusting your filters to find Hotels.</p>
            </div>
        );
    }
    return (
        <div className="Activity-listing" style={{display:"flex", flexDirection:"column", gap:"10px", width:"80%"}}>
            {filteredHotels.map((hotel) => ( 
                <div key={hotel.Hotelid} className='Hotel-content-information' style={{backgroundColor:"#ffffff", margin:"0%"}}>
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
                            <p className='Date'>{hotel.HotelDate}</p>
                            <h3>{hotel.Hotelname}</h3>
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

                        <div className="insurance-actions">
                            <button onClick={() => onSelectHotel(hotel)} >Select</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
