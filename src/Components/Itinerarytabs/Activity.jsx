import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom"; // Import the useParams hook
export default function Activity({packages}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
     // Find the package by id
     const packageData = packages.find(pkg => pkg.id === parseInt(id));
     if (!packageData) {
         return <h1>Activity data not found</h1>;
     }
         const { addedHotel, addedActivity, removeActivity, day, schedule } = location.state || {};
         useEffect(() => {
           if ((addedHotel || addedActivity || removeActivity) && day && schedule) {
             const updatedPackages = [...packages];
             console.log("Before update:", JSON.stringify(updatedPackages, null, 2));
             updatedPackages[0].country.destinations.forEach(destination => {
               destination.dayWiseList.forEach(dayItem => {
                 if (dayItem.day === day) {
                   dayItem.scheduleType.forEach(scheduleItem => {
                     if (scheduleItem.schedule === schedule) {
                       // Update hotel if exists
                   if (addedHotel) {
                     scheduleItem.hotelDetails = addedHotel;
                   }
     
                   // Update activity if exists
                   if (addedActivity) {
                     scheduleItem.activityDetails = addedActivity;
                   }
                   // Remove activity if flagged
                   if (removeActivity) {
                     scheduleItem.activityDetails = null; // or [] if it's an array
                   }
                     }
                   });
                 }
               });
             });
             console.log("After update:", JSON.stringify(updatedPackages, null, 2));
             setPackages(updatedPackages);
             // Reset the state so it doesn't apply again on refresh
             navigate(location.pathname, { replace: true });
           }
         }, [addedHotel, addedActivity, removeActivity, day, schedule]);
    
    return(
        <div className="Activity-listing">
                  {packageData.Days.map((day, dayIndex) =>
        day.schedule.map(schedule =>
          (schedule.Activities || []).map((Activity) => (
                    <div key={Activity.Activityid} className='Activity-content-information'>
                    <div className='activity-content'>
                        <img src={Activity.Activityimage} alt={Activity.ActivityName} />
                        <div className='activity-details'>
                          <div className='Date-actions'>
                          <h3>{Activity.ActivityName}</h3>
                          <div className="insurance-actions">
                            <>
                                <button 
                                className="change-action" 
                                onClick={() =>{
                                    console.log("Add to itinerary clicked", {
                                        activity1: schedule.Activities,
                                        day1: dayIndex+1,
                                        schedule1: schedule.scheduleType,
                                      });
                                    navigate(`/view-activity/${schedule.Activities.Activityid}`, {
                                      state: { activity1: schedule.Activities,
                                        day1: dayIndex+1,
                                        schedule1: schedule.scheduleType
                                       },
                                    })
                                  }}
                                >View</button>
                                <button 
                                onClick={() =>
                                    navigate("/ActivityModal", {
                                        state: {
                                            activity: schedule.Activities,
                                            day: dayIndex+1,
                                            schedule: schedule.scheduleType,
                                          }
                                    })
                                  } 
                                className="change-action">Change</button>
                                <button 
                                className="remove-action"  
                                onClick={() =>
                                    navigate("/CreateItinerary", {
                                      state: {
                                        removeActivity: true,
                                        day: dayIndex+1,
                                        schedule: schedule.scheduleType,
                                      },
                                    })
                                  }
                                >Remove</button>
                            </>
                        </div>
                          </div>
                          <p style={{margin:"0%"}}>Day {dayIndex + 1}  : {schedule.scheduleType}</p>
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
        )
      )}
        </div>
    );
}