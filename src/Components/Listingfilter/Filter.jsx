import React, { useState } from 'react';
import './filter.css';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    noOfDays: [],
    budget: [],
    rating: [],
  });

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'noOfDays') {
      setFilters((prev) => ({
        ...prev,
        noOfDays: checked
          ? [...prev.noOfDays, value] // Add the day range if checked
          : prev.noOfDays.filter((range) => range !== value), // Remove the day range if unchecked
      }));
    } else if (name === 'budget') {
      setFilters((prev) => ({
        ...prev,
        budget: checked
          ? [...prev.budget, value] // Add budget range if checked
          : prev.budget.filter((priceRange) => priceRange !== value), // Remove budget range if unchecked
      }));
    }
    else if (name === 'rating') {
      setFilters((prev) => ({
        ...prev,
        rating: checked
          ? [...prev.rating, value] // Add rating if checked
          : prev.rating.filter((ratingValue) => ratingValue !== value), // Remove if unchecked
      }));
    }


    // Pass the updated filters to parent component
    onFilterChange({
      ...filters,
      [name]: checked
        ? [...filters[name], value]
        : filters[name].filter((range) => range !== value),
    });
  };

  const clearFilters = () => {
    // Reset the filter state
    setFilters({
      noOfDays: [],
      budget: [],
      rating: [],
    });

    // Notify parent component about the reset
    onFilterChange({
      noOfDays: [],
      budget: [],
      rating: [],
    });

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
      <h4>Budget</h4>
      <div>
        <input type="checkbox" name="budget" value="20000" onChange={handleCheckboxChange} /> Below ₹20,000
      </div>
      <div>
        <input type="checkbox" name="budget" value="30000" onChange={handleCheckboxChange} /> ₹20,000 - ₹30,000
      </div>
      <div>
        <input type="checkbox" name="budget" value="40000" onChange={handleCheckboxChange} /> ₹30,000 - ₹40,000
      </div>
      <div>
        <input type="checkbox" name="budget" value="50000" onChange={handleCheckboxChange} /> ₹40,000 - ₹50,000
      </div>
      <div>
        <input type="checkbox" name="budget" value="50001" onChange={handleCheckboxChange} /> Above ₹50,000
      </div>
      </div> 
      <div className='filter-header'>
      <h4>No of Days</h4>
      <div>
        <input type="checkbox" name="noOfDays" value="3-4" onChange={handleCheckboxChange} /> 3-4 days
      </div>
      <div>
        <input type="checkbox" name="noOfDays" value="5-8" onChange={handleCheckboxChange} /> 5-8 days
      </div>
      <div>
        <input type="checkbox" name="noOfDays" value="9-12" onChange={handleCheckboxChange} /> 9-12 days
      </div>
      <div>
        <input type="checkbox" name="noOfDays" value="13-16" onChange={handleCheckboxChange} /> 13-16 days
      </div>
      <div>
        <input type="checkbox" name="noOfDays" value="16+" onChange={handleCheckboxChange} /> Above 16 days
      </div>
      </div>
      <div className='filter-header'>
      <h4>Hotel Ratings</h4>
      <div>
        <input type="checkbox" name="rating" value="5" onChange={handleCheckboxChange} /> 5 Star
      </div>
      <div>
        <input type="checkbox" name="rating" value="4" onChange={handleCheckboxChange} /> 4 Star
      </div>
      <div>
        <input type="checkbox" name="rating" value="3" onChange={handleCheckboxChange} /> 3 Star
      </div>
      <div>
        <input type="checkbox" name="rating" value="2" onChange={handleCheckboxChange} /> 2 Star
      </div>
      <div>
        <input type="checkbox" name="rating" value="1" onChange={handleCheckboxChange} /> 1 Star
      </div>
      </div>
    </div>
  );
};

export default Filter;
