import React, { useState } from 'react';
import { packages } from '../Packagelisting/Packagelisting';
import { useParams, useNavigate } from "react-router-dom"; 
import RatingStars from '../Rating/RatingStars';
import { IoIosInformationCircle } from "react-icons/io";
import HotelListing1 from '../Hotel/HotelListing1';
import BackfromListing from '../BackButton/BackfromListing';
import HotelFilter from '../Listingfilter/HotelFilter';

// Modal component for full-screen or overlay behavior
const Modal = ({ children, onClose, handleFilterChange }) => (
  <div className="Hotel-modal-overlay">
    <div className="Hotel-modal-content" style={{backgroundColor:"#f7f8fb"}}>
      <BackfromListing onClick={onClose} />
      <div className="children-content" >
        {/* Pass handleFilterChange to HotelFilter */}
        <HotelFilter onFilterChange={handleFilterChange}  />
        {children}
      </div>
    </div>
  </div>
);

export default function Hotel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(packages.find(pkg => pkg.id === parseInt(id)));
  const [changingHotelId, setChangingHotelId] = useState(null); // Track which hotel is being changed
  const [showModal, setShowModal] = useState(false);
  
  // Filters state
  const [filters, setFilters] = useState({
    Inclusions: [],
    rating: [],
    CancellationPolicy: [],
    HotelType: [],
    HotelCategory: [],
    WTRecommended:null,
  });

  // Updated handleFilterChange function
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters, // Keep previous filter values
      ...newFilters,  // Merge with new filter values
    }));
  };

  if (!packageData) {
    return <h1>Hotel data not found</h1>;
  }

  const handleChange = (hotelId) => {
    setChangingHotelId(hotelId);
    setShowModal(true); // Show the listing
  };

  const handleSelectHotel = (selectedHotel) => {
    const updatedHotels = packageData.Hotels.map(hotel => 
      hotel.Hotelid === changingHotelId ? selectedHotel : hotel
    );

    // Update the package data with the new hotels list
    setPackageData({
      ...packageData,
      Hotels: updatedHotels
    });
    setChangingHotelId(null); // Add new hotel to the list
    setShowModal(false); // Hide the listings when a hotel is selected
  };

  const handleView = (hotelId) => {
    navigate(`/HotelDetails/${hotelId}`);
  };

  // Filter hotels based on the applied filters
  const filteredHotels = packageData.Hotels.filter(hotel => {
    let matches = true;

    if (filters.Inclusions.length > 0 && !filters.Inclusions.includes(hotel.Hotelinclusions)) {
      matches = false;
    }
    if (filters.rating.length > 0 && !filters.rating.includes(hotel.Hotelrating)) {
      matches = false;
    }
    if (filters.CancellationPolicy.length > 0 && !filters.CancellationPolicy.includes(hotel.Hotelamount)) {
      matches = false;
    }
    if (filters.HotelType.length > 0 && !filters.HotelType.includes(hotel.Hoteltype)) {
      matches = false;
    }
    if (filters.HotelCategory.length > 0 && !filters.HotelCategory.includes(hotel.HotelCategory)) {
      matches = false;
    }
     // Check for WTRecommended
     if (filters.WTRecommended !== null) {
      // If WTRecommended is true or false, check against the hotel's WTRecommended value
      matches = matches && hotel.WTRecommended === filters.WTRecommended;
  }

    return matches;
  });

  return (
    <div className="Activity-listing">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} handleFilterChange={handleFilterChange}>
          <HotelListing1 filters={filters} onSelectHotel={handleSelectHotel}/>
        </Modal>
      )}
      

      {filteredHotels.map((Hotel) => (
        <div key={Hotel.Hotelid} className='Hotel-content-information'>
          <div className='Hotel-content'>
            <div className='Hotel-Image-Badge'>
              <img src={Hotel.Hotelimage} alt={Hotel.Hotelname} />
              {Hotel.WTRecommended && (
                <div className="wt-recommended-badge">
                  <span>WT RECOMMENDED</span>
                </div>
              )}
            </div>

            <div className='activity-details'>
            <div className='Date-actions'>
            <p className='Date'>{Hotel.HotelDate}</p>
              <div className="insurance-actions">
              <button className="change-action" onClick={() => handleView(Hotel.Hotelid)} >View</button>
              <button className="change-action" onClick={() => handleChange(Hotel.Hotelid)}>Change</button>
            </div>
            </div>
              <h3>{Hotel.Hotelname}</h3>
              <p className="Hotel-Rating">
                <RatingStars rating={Hotel.Hotelrating} /> Trip Advisor
              </p>

              <ul className='activity-time-type-amount'>
                <li>{Hotel.Hotelaccomodates}</li>
                <li>{Hotel.Hotelamount}</li>
                <li>{Hotel.Hotelarea}</li>
                <li>{Hotel.Hoteltype}</li>
              </ul>

              <ul className="Inclusions">
                Inclusions:
                {Hotel.Hotelinclusions?.map((Inclusion, index) => (
                  <li key={index}>{Inclusion}</li>
                ))}
              </ul>

              <ul className="Exclusions">
                Exclusions:
                {Hotel.Hotelexclusions?.map((Exclusion, index) => (
                  <li key={index}>{Exclusion}</li>
                ))}
              </ul>
            </div>


          </div>
          <hr />
          <div className="Hotel-price-info">
            <span className='Hotel-info-icon'><IoIosInformationCircle /></span>
            <p>{Hotel.HotelInfo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
