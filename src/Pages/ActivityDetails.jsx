import React from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook
import BackButton from "../Components/BackButton/BackButton";
import NavBar from '../Components/Navigation/NavBar';
import Packagelistingimages from '../Components/Packagelistingimages/Packagelistingimages';
import { packages } from "../Components/Packagelisting/Packagelisting";
import ActivityTabDetails from '../Components/Activity/ActivityTabDetails';
import Activityviewdetails from '../Components/Activity/Activityviewdetails';




export default function ActivityDetails(){
    const { activityId } = useParams(); // Get the hotel ID from the URL

  // Find the correct hotel using hotelId from the packages array
  const activityData = packages
    .flatMap(pkg => pkg.Activities || [])  // Flatten the Hotels from each package
    .find(activity => activity.Activityid === activityId); // Find the hotel with the matching ID
    return(
        <div>
            <NavBar />
            <BackButton />
            <Activityviewdetails activityId={activityId} />
            <Packagelistingimages packageImages={activityData.ActivityheaderImages} />
            <ActivityTabDetails />
        </div>
    )
}