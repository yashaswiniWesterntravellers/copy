import React from 'react';
import { packages } from '../Packagelisting/Packagelisting';




export default function Activityviewdetails({ activityId }) {


  // Use flatMap to extract all hotels from packages
  const activities = packages.flatMap(pkg => pkg.Activities || []);

  // Find hotel data using the hotels array
  const activityData = activities.find(activity => {
    return activity.Activityid === activityId; // Ensure correct comparison based on types
  });



  return (
    <div className="change-hotel-container">
      <div className="change-hotel" key={activityData.Activityid}>
        <h3>{activityData.ActivityName}</h3>
      </div>
    </div>
  );
}
