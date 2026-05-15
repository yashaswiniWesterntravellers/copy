import React, { useState } from 'react';
import './Filterpackagelisting.css';
import { AllActivitiesdata } from '../Activity/Activity';
import ActivityFilter from '../Listingfilter/ActivityFilter';
import AllActivities from '../Activity/AllActivities';

export default function Filteractivitylisting() {
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
            <ActivityFilter onFilterChange={handleFilterChange} />
            <AllActivities AllActivitiesdata={AllActivitiesdata} filters={filters} />
        </div>
    );
}
