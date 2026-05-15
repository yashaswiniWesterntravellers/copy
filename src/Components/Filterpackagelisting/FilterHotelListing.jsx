import React, { useState } from 'react';
import './Filterpackagelisting.css';
import HotelFilter from '../Listingfilter/HotelFilter';
import HotelListing from '../Hotel/HotelListing';
import { hotelData } from '../Hotel/hotelData';

export default function Filterhotellisting() {
    const [filters, setFilters] = useState({
        timeslot: [],
        ActivityDuration: [],
        transfer: [],
        groupType: [],
        interests: [],
        otherFilters: [],
    });

    // Updated handleFilterChange function
    const handleFilterChange = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters, // Keep previous filter values
            ...newFilters,  // Merge with new filter values
        }));
    };

    return (
        <div className="packagefilter" style={{marginBottom:"0%"}}>
            <HotelFilter onFilterChange={handleFilterChange} />
            <HotelListing hotelData={hotelData} filters={filters} />
        </div>
    );
}
