import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import AllActivities from '../Activity/AllActivities';
import ActivityModal from '../Activity/ActivityModal';

export default function Activities({packages}) {
    const { id } = useParams(); // Get the package ID from the URL
    const navigate = useNavigate();
    const [packageData, setPackageData] = useState(packages.find(pkg => pkg.id === parseInt(id)));

    const [activities, setActivities] = useState(
        packageData ? packageData.Activities.map(activity => ({
            ...activity,
            manuallyAdded: activity.manuallyAdded || false, // Check if the activity is manually added
        })) : []
    );


    const [selectedActivityId, setSelectedActivityId] = useState(null); // State for selected activity
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    // Filters state
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

    const handleSelectActivity = (selectedactivities) => {
        const updatedActivities = packageData.Activities.map(activity => 
          activity.Activityid === selectedActivityId ? selectedactivities : activity
        );
    
        // Update the package data with the new hotels list
        setPackageData({
          ...packageData,
          Activities: updatedActivities
        });
        setSelectedActivityId(null); // Add new hotel to the list
        setIsModalOpen(false); // Hide the listings when a hotel is selected
      };

    // Open modal
    const handleChange = (activity) => {
        setSelectedActivityId(activity);
        setIsModalOpen(true);
    };


    const handleView = (activityId) => {
        navigate(`/ActivityDetails/${activityId}`);
    };

    const handleRemove = (activityId) => {
        const updatedActivities = activities.filter(activity => activity.Activityid !== activityId);
        setActivities(updatedActivities);
    };

    // Filter hotels based on the applied filters
  const filteredActivities = packageData.Activities.filter(activity => {
    let matches = true;

    if (filters.timeslot.length > 0 && !filters.timeslot.includes(activity.TimeSlot)) {
      matches = false;
    }
    if (filters.ActivityDuration.length > 0 && !filters.ActivityDuration.includes(activity.ActivityDuration)) {
      matches = false;
    }
    if (filters.transfer.length > 0 && !filters.transfer.includes(activity.Transfer)) {
      matches = false;
    }
    if (filters.groupType.length > 0 && !filters.groupType.includes(activity.GroupType)) {
      matches = false;
    }
    if (filters.interests.length > 0 && !filters.interests.includes(activity.Interests)) {
      matches = false;
    }
    if (filters.otherFilters.length > 0 && !filters.otherFilters.includes(activity.OtherFilter)) {
      matches = false;
    }

    return matches;
  });

    return (
        <div className="Activity-listing">
            {filteredActivities.length === 0 ? (
                <p className='Activity-content-information'>No activity data available.</p>
            ) : (
                filteredActivities.map((Activity) => (
                    <div key={Activity.Activityid} className='Activity-content-information'>
                        <div className='activity-content'>
                            <img src={Activity.Activityimage} alt={Activity.ActivityName} />
                            <div className='activity-details'>
                              <div className='Date-actions'>
                              <p className='Date'>{Activity.Date}</p>
                              <div className="insurance-actions">
                                <>
                                    <button className="change-action" onClick={() => handleView(Activity.Activityid)}>View</button>
                                    <button className="change-action" onClick={() => handleChange(Activity.Activityid)}>Change</button>
                                    {Activity.manuallyAdded && (
                                        <button className="remove-action" onClick={() => handleRemove(Activity.Activityid)}>Remove</button>
                                    )}
                                </>
                            </div>
                              </div>
                                <h3>{Activity.ActivityName}</h3>
                                <ul className='activity-time-type-amount'>
                                    <li>{Activity.time}</li>
                                    <li>{Activity.activitytype}</li>
                                    <li>{Activity.Activityamount}</li>
                                </ul>
                                <ul className="Inclusions">
                                    Inclusions:
                                    {Activity.Activityinclusions?.map((Inclusion, index) => (
                                        <li key={index}>{Inclusion}</li>
                                    ))}
                                </ul>
                                <ul className="Exclusions">
                                    Exclusions:
                                    {Activity.Activityexclusions?.map((Exclusion, index) => (
                                        <li key={index}>{Exclusion}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            )}

            {isModalOpen && (
                <ActivityModal onClose={() => setIsModalOpen(false)} handleFilterChange={handleFilterChange}>
                    <AllActivities
                    filters={filters}
                            onSelectActivity={handleSelectActivity} // Handle activity selection
                        />
                </ActivityModal>
            )}





        </div>
    );
}
