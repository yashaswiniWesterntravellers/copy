import React, { useState } from 'react';
import './filter.css';

const ActivityFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    timeslot: [],
    ActivityDuration: [],
    transfer: [],
    groupType: [],
    interests: [],
    otherFilters: [],
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

  const clearFilters = () => {
    // Reset the filter state to empty arrays
    const clearedFilters = {
      timeslot: [],
      ActivityDuration: [],
      transfer: [],
      groupType: [],
      interests: [],
      otherFilters: [],
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
        <h2>Filter</h2>
        {/* Clear Filters Button */}
        <button className='textedbutton' onClick={clearFilters}>Clear</button>
      </div>
      <div className='filter-header'>
      <h4>Timeslot</h4>
      <div>
        <input type="checkbox" name="timeslot" value="Morning" onChange={handleCheckboxChange} /> Morning
      </div>
      <div>
        <input type="checkbox" name="timeslot" value="Afternoon" onChange={handleCheckboxChange} /> Afternoon
      </div>
      <div>
        <input type="checkbox" name="timeslot" value="Evening" onChange={handleCheckboxChange} /> Evening
      </div>
      </div> 
      <div className='filter-header'>
      <h4>Activity Duration</h4>
      <div>
        <input type="checkbox" name="ActivityDuration" value="Quarter day" onChange={handleCheckboxChange} /> Quarter day
      </div>
      <div>
        <input type="checkbox" name="ActivityDuration" value="Half day" onChange={handleCheckboxChange} /> Half day
      </div>
      <div>
        <input type="checkbox" name="ActivityDuration" value="Full day" onChange={handleCheckboxChange} /> Full day
      </div>
      </div>
      <div className='filter-header'>
      <h4>Transfer</h4>
      <div>
        <input type="checkbox" name="transfer" value="Included" onChange={handleCheckboxChange} /> Included
      </div>
      <div>
        <input type="checkbox" name="transfer" value="Not Included" onChange={handleCheckboxChange} /> Not Included
      </div>
      </div>
      <div className='filter-header'>
      <h4>Group Type</h4>
      <div>
        <input type="checkbox" name="groupType" value="Shared" onChange={handleCheckboxChange} /> Shared
      </div>
      <div>
        <input type="checkbox" name="groupType" value="Private" onChange={handleCheckboxChange} /> Private
      </div>
      </div>
      <div className='filter-header'>
      <h4>Interests</h4>
      <div>
        <input type="checkbox" name="interests" value="Art & Culture" onChange={handleCheckboxChange} /> Art & Culture
      </div>
      <div>
        <input type="checkbox" name="interests" value="Adventure & Outdoor" onChange={handleCheckboxChange} /> Adventure & Outdoor
      </div>
      <div>
        <input type="checkbox" name="interests" value="Food & Nightlife" onChange={handleCheckboxChange} /> Food & Nightlife
      </div>
      <div>
        <input type="checkbox" name="interests" value="Shopping & Leisure" onChange={handleCheckboxChange} /> Shopping & Leisure
      </div>
      </div>
      <div className='filter-header'>
      <h4>Other Filters</h4>
      <div>
        <input type="checkbox" name="otherFilters" value="Top Highlight" onChange={handleCheckboxChange} /> Top Highlight
      </div>
      <div>
        <input type="checkbox" name="otherFilters" value="Kid Friendly" onChange={handleCheckboxChange} /> Kid Friendly
      </div>
      <div>
        <input type="checkbox" name="otherFilters" value="Fast Selling" onChange={handleCheckboxChange} /> Fast Selling
      </div>
      <div>
        <input type="checkbox" name="otherFilters" value="Less explored gems" onChange={handleCheckboxChange} /> Less explored gems
      </div>
      <div>
        <input type="checkbox" name="otherFilters" value="Self Exploration" onChange={handleCheckboxChange} /> Self Exploration
      </div>
      </div>
    </div>
  );
};

export default ActivityFilter;
