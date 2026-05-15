import React, { useState } from 'react';
import './filter.css';
import RatingStars from '../Rating/RatingStars';

const HotelFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    Inclusions: [],
    rating: [],
    CancellationPolicy: [],
    HotelType: [],
    HotelCategory: [],
    WTRecommended:null,
  });

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    const updatedFilter = filters[name].includes(value)
      ? filters[name].filter((item) => item !== value) // Remove if already selected
      : [...filters[name], value]; // Add if not selected

    // Update state
    setFilters({
      ...filters,
      [name]: updatedFilter,
    });

    // Notify parent about the change
    onFilterChange({
      ...filters,
      [name]: updatedFilter,
    });
  };

  const handleWTRecommendedChange = (e) => {
    const isChecked = e.target.checked;
    const updatedFilter = isChecked ? true : false;

    setFilters({
      ...filters,
      WTRecommended: updatedFilter,
    });

    onFilterChange({
      ...filters,
      WTRecommended: updatedFilter,
    });
  };

  const clearFilters = () => {
    // Reset the filter state to empty arrays
    const clearedFilters = {
      Inclusions: [],
      rating: [],
      CancellationPolicy: [],
      HotelType: [],
      HotelCategory: [],
      WTRecommended:null,
    };

    setFilters(clearedFilters);

    // Notify parent component about the reset
    onFilterChange(clearedFilters);

    // Uncheck all checkboxes
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  return (
    <div className="filter-sidebar">
      <div className='clearfilter'>
        {/* Filter Title */}
        <h2 style={{backgroundColor:"#fff", color:"#000"}}>Filter</h2>
        {/* Clear Filters Button */}
        <button className='textedbutton' onClick={clearFilters}>Clear</button>
      </div>
      <div className='filter-header'>
      <h4>Inclusions</h4>
      <div className='filter-selection'>
        <input type="checkbox" name="Inclusions" value="Wifi" onChange={handleCheckboxChange} /> Free Wifi
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="Inclusions" value="Room with Breakfast" onChange={handleCheckboxChange} /> Free Breakfast
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="Inclusions" value="Air Conditioner" onChange={handleCheckboxChange} /> Air Conditioning
      </div>
      </div> 
      <div className='filter-header'>
      <h4>Hotel Ratings</h4>
      <div className='filter-selection'>
        <input type="checkbox" name="rating" value="5" onChange={handleCheckboxChange} /><RatingStars rating="5" />
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="rating" value="4" onChange={handleCheckboxChange} /><RatingStars rating="4" />
      </div>
      <div  className='filter-selection'>
        <input type="checkbox" name="rating" value="3" onChange={handleCheckboxChange} /><RatingStars rating="3" />
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="rating" value="2" onChange={handleCheckboxChange} /><RatingStars rating="2" />
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="rating" value="1" onChange={handleCheckboxChange} /><RatingStars rating="1" />
      </div>
      </div>
      <div className='filter-header'>
      <h4>Cancellation Policy</h4>
      <div className='filter-selection'>
        <input type="checkbox" name="CancellationPolicy" value="Refundable" onChange={handleCheckboxChange} /> Refundable
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="CancellationPolicy" value="Non Refundable" onChange={handleCheckboxChange} /> Non Refundable
      </div>
      </div>
      <div className='filter-header'>
      <h4>Hotel Type</h4>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelType" value="5 Star" onChange={handleCheckboxChange} /> 5 Star
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelType" value="4 Star" onChange={handleCheckboxChange} /> 4 Star
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelType" value="3 Star" onChange={handleCheckboxChange} /> 3 Star
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelType" value="2 Star" onChange={handleCheckboxChange} /> 2 Star
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelType" value="1 Star" onChange={handleCheckboxChange} /> 1 Star
      </div>
      </div>
      <div className='filter-header'>
      <h4>Hotel Category</h4>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelCategory" value="Villa" onChange={handleCheckboxChange} /> Villa
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelCategory" value="Hotel" onChange={handleCheckboxChange} /> Hotel
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelCategory" value="Apartment" onChange={handleCheckboxChange} /> Apartment
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelCategory" value="Budget" onChange={handleCheckboxChange} /> Budget
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelCategory" value="Unique Stays" onChange={handleCheckboxChange} /> Unique Stays
      </div>
      <div className='filter-selection'>
        <input type="checkbox" name="HotelCategory" value="Private Pool Villa" onChange={handleCheckboxChange} /> Private Pool Villa
      </div>
      </div>
      {/* <div className='filter-header'>
        <h4>WT Recommended</h4>
        <div className='filter-selection'>
          <input type="checkbox" name="WTRecommended" value="true" onChange={handleCheckboxChange} /> Recommended
        </div>
        <div className='filter-selection'>
          <input type="checkbox" name="WTRecommended" value="false" onChange={handleCheckboxChange} /> Not Recommended
        </div>
      </div> */}
      <div className='filter-header'>
        <h4>WT Recommended</h4>
        <div className='filter-selection'>
          <input
            type="checkbox"
            name="WTRecommended"
            checked={filters.WTRecommended === true}
            onChange={handleWTRecommendedChange}
          /> Recommended
        </div>
      </div>
    </div>
  );
};

export default HotelFilter;
