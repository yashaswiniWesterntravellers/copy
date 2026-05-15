import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import RatingStars from '../Rating/RatingStars.jsx';
import Australia1 from '../../Assets/Australia1.jpg';
import Insurance from '../../Assets/Insurance.png';

export default function HotelListing({ filters = {} }) {
    const navigate = useNavigate();
    const location = useLocation();
    const hotelData=[
        {
          Hotelid:'1',
          HotelOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
          Hotelimage: Insurance,
          WTRecommended: true,  // Add this field to determine if the insurance is excluded
          Hotelrating: 3,
          Hotelamount:'Refundable', 
          HotelDate:"12/04/2024", 
          Hotelarea:"Area 538 sqft", 
          Hoteltype:'5 Star',
          Hotelcheckintime:'14:00',
          Hotelcheckouttime:'14:00', 
          Hotelname:'Pucket Yotel1',
          Hotelaccomodates:'Accommodates 3 Adults', 
          Hotelinclusions:["Wifi","Room with Breakfast",'Air Conditioner'],
          Hotelexclusions:["Elevator","Bathtub"],
          HotelNearbyAttractions:[
            "Silom Complex Shopping Mall - 0.7 km / 0.5 mi",
            "Lumphini Park - 0.8 km / 0.5 mi",
            'Thaniya Plaza - 1.1 km / 0.7 mi',
            "Chulalongkorn Hospital - 1.2 km / 0.7 mi",
            "Chulalongkorn University - 1.4 km / 0.9 mi",
            'King Power MahaNakhon - 1.4 km / 0.9 mi',
            "Wat Hua Lamphong - 1.7 km / 1.1 mi",
            "Embassy of the United States - 1.9 km / 1.2 mi",
            'Samyan Mitrtown - 1.9 km / 1.2 mi',
            "Stock Exchange of Thailand - 2.7 km / 1.6 mi",
            "Siam Square - 2.7 km / 1.7 mi",
            'Erawan Shrine - 2.8 km / 1.7 mi',
          ],
          HotelAmenties:[
            "Elevator facility",
            "Concierge Service",
            'Laundry facility',
            "Common storage facility",
            "Pool accessories",
            'Locker Facility',
            "Gym/Fitness Centre",
            "Parking Facility",
            'Shuttle Service',
            "Spa facility",
            "Childcare Supervision",
          ],
          HotelInfo:'Hotels may charge a caution deposit on your credit card. It will be refunded within 10-15 days if there is no property damage.',
          Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
          HotelCategory:"Villa"
        },
        {
          Hotelid:'2',
          HotelOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          HotelheaderImages: [Insurance, Insurance, Insurance, Insurance, Insurance, Insurance, Insurance, Insurance,],
          Hotelimage: Insurance,
          WTRecommended: false,  // Add this field to determine if the insurance is excluded
          Hotelrating: 4.5,
          Hotelamount:'Refundable', 
          HotelDate:"12/04/2024", 
          Hotelarea:"Area 538 sqft", 
          Hoteltype:'5 Star', 
          Hotelname:'Pucket Yotel2',
          Hotelaccomodates:'Accommodates 3 Adults', 
          Hotelinclusions:["Wifi","Room with Breakfast",'Air Conditioner'],
          Hotelexclusions:["Elevator","Bathtub"], 
          HotelInfo:'Hotels may charge a caution deposit on your credit card. It will be refunded within 10-15 days if there is no property damage.',
          Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
        },
        {
            Hotelid:'3',
            HotelOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
            Hotelimage: Insurance,
            WTRecommended: true,  // Add this field to determine if the insurance is excluded
            Hotelrating: 4.5,
            Hotelamount:'Refundable', 
            HotelDate:"12/04/2024", 
            Hotelarea:"Area 538 sqft", 
            Hoteltype:'5 Star',
            Hotelcheckintime:'14:00',
            Hotelcheckouttime:'14:00', 
            Hotelname:'Pucket Yotel3',
            Hotelaccomodates:'Accommodates 3 Adults', 
            Hotelinclusions:["Wifi","Room with Breakfast",'Air Conditioner'],
            Hotelexclusions:["Elevator","Bathtub"],
            HotelNearbyAttractions:[
              "Silom Complex Shopping Mall - 0.7 km / 0.5 mi",
              "Lumphini Park - 0.8 km / 0.5 mi",
              'Thaniya Plaza - 1.1 km / 0.7 mi',
              "Chulalongkorn Hospital - 1.2 km / 0.7 mi",
              "Chulalongkorn University - 1.4 km / 0.9 mi",
              'King Power MahaNakhon - 1.4 km / 0.9 mi',
              "Wat Hua Lamphong - 1.7 km / 1.1 mi",
              "Embassy of the United States - 1.9 km / 1.2 mi",
              'Samyan Mitrtown - 1.9 km / 1.2 mi',
              "Stock Exchange of Thailand - 2.7 km / 1.6 mi",
              "Siam Square - 2.7 km / 1.7 mi",
              'Erawan Shrine - 2.8 km / 1.7 mi',
            ],
            HotelAmenties:[
              "Elevator facility",
              "Concierge Service",
              'Laundry facility',
              "Common storage facility",
              "Pool accessories",
              'Locker Facility',
              "Gym/Fitness Centre",
              "Parking Facility",
              'Shuttle Service',
              "Spa facility",
              "Childcare Supervision",
            ],
            HotelInfo:'Hotels may charge a caution deposit on your credit card. It will be refunded within 10-15 days if there is no property damage.',
            Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
        },
        {
            Hotelid:'4',
            HotelOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            HotelheaderImages: [Insurance, Insurance, Insurance, Insurance, Insurance, Insurance, Insurance, Insurance,],
            Hotelimage: Insurance,
            WTRecommended: false,  // Add this field to determine if the insurance is excluded
            Hotelrating: 4.5,
            Hotelamount:'Refundable', 
            HotelDate:"12/04/2024", 
            Hotelarea:"Area 538 sqft", 
            Hoteltype:'5 Star', 
            Hotelname:'Pucket Yotel4',
            Hotelaccomodates:'Accommodates 3 Adults', 
            Hotelinclusions:["Wifi","Room with Breakfast",'Air Conditioner'],
            Hotelexclusions:["Elevator","Bathtub"], 
            HotelInfo:'Hotels may charge a caution deposit on your credit card. It will be refunded within 10-15 days if there is no property damage.',
            Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
        },
      ];

     // Provide default values for filters to avoid undefined errors
     const {
        timeslot = [],
        transfer = [],
        groupType = [],
        interests = [],
        otherFilters = [],
    } = filters;

    const handleSelectHotel = (selectedHotel) => {
        // Log the selected hotel to ensure data is being passed correctly
        console.log("Hotel selected for update:", location.state?.from);
    
        // Pass the hotel data with navigate, using the correct state structure
        navigate(`/ViewHotel/${selectedHotel.Hotelid}`, { state: { selectedHotel,hotel: selectedHotel, day: location.state?.day,
            schedule: location.state?.schedule,
            from: location.state?.from,
         } });

    };

    // Filter activities based on the provided filters
    const applyFilters = (activity) => {
        if (timeslot.length > 0 && !timeslot.includes(activity.timeSlot)) return false;
        if (transfer.length > 0 && !transfer.includes(activity.transferIncluded ? 'Included' : 'Not Included')) return false;
        if (groupType.length > 0 && !groupType.includes(activity.groupType)) return false;
        if (interests.length > 0 && !activity.interests.some(interest => interests.includes(interest))) return false;
        if (otherFilters.length > 0 && !otherFilters.every(filter => activity.filters.includes(filter))) return false;
        return true;
    };
    

    return (
        <div className="Activity-listing" style={{display:"flex", flexDirection:"column",gap:"10px", width:"80%", height:"fit-content"}}>
            {hotelData.filter(applyFilters).map((hotel) => ( 
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
                            {/* <p className='Date'>{hotel.HotelDate}</p> */}
                            <div className='Date-actions'>
                            <h3>{hotel.Hotelname}</h3>
                            <div className="insurance-actions">
                            <button className='select' onClick={() => handleSelectHotel(hotel)} >Select</button>
                        </div>
                            </div>

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
                </div>
            ))}
        </div>
    );
}
