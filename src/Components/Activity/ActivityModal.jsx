import React from 'react';
import BackfromListing from '../BackButton/BackfromListing';
import ActivityFilter from '../Listingfilter/ActivityFilter';
import AllActivities from '../Activity/AllActivities';

export default function ActivityModal ({ handleFilterChange }){
  return(
    <div className="Hotel-modal-overlay">
    <div className="Hotel-modal-content"  style={{backgroundColor:"#f7f8fb"}}>
        <BackfromListing Modaltext="Change Activity"  showBackToListingButton={false} />
        <div className='children-content'>
            <ActivityFilter onFilterChange={handleFilterChange} />
            <AllActivities  /> {/* Activity Listing */}
        </div>
    </div>
  </div>
  );
};
