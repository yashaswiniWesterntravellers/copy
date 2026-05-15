import React, {useState} from 'react';
import BackfromListing from '../BackButton/BackfromListing';
import HotelFilter from '../Listingfilter/HotelFilter';
import HotelListing from '../Hotel/HotelListing';
export default function HotelModal (){
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
    return(
        <div className="Hotel-modal-overlay">
            <div className="Hotel-modal-content"  style={{backgroundColor:"#f7f8fb"}}>
                <BackfromListing Modaltext="Change Hotel"  showBackToListingButton={false} />
                <div className='children-content'>
                <HotelFilter onFilterChange={handleFilterChange} />
                <HotelListing filters={filters} />
            </div>
            </div>
        </div>
    );
}