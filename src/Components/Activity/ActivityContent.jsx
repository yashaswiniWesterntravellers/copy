import { packages } from '../Packagelisting/Packagelisting';
import './ActivityContent.css';

export const ActivityOverview = ({ activityId }) => {
    const activities = packages.flatMap(pkg => pkg.Activities || []);
    const activityData = activities.find(activity => {
        return activity.Activityid === activityId; // Ensure correct comparison based on types
      });
    return(
        <div>
            <h3>Overview</h3>
            <p className='Hotel-Overview'>{activityData.ActivityOverview}</p>
        </div>
        
    )
}


export const ActivityInclusionsExclusions = ({activityId}) => {
    const activities = packages.flatMap(pkg => pkg.Activities || []);
    const activityData = activities.find(activity => activity.Activityid === activityId);

    // Assuming hotelData.HotelNearbyAttractions is an array of attractions
    const Inclusions = activityData?.Activityinclusions || []; // Fallback to an empty array if not found
    const Exclusions = activityData?.Activityexclusions || []; // Fallback to an empty array if not found
    return(
        <div className='Hotel-Inclusion-Exclusion'>
        <div className='Hotel-Inclusion'>
        <h3>Inclusions</h3>
        {Inclusions.length > 0 ? (
            <ul className='Hotel-Inclusioncontent-ul'>
                {Inclusions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                ))}
            </ul>
        ) : (
            <p>No nearby attractions found.</p>
        )}
    </div>
    <div className='Hotel-Exclusion'>
    <h3>Exclusions</h3>
    {Exclusions.length > 0 ? (
        <ul className='Hotel-Exclusioncontent-ul'>
            {Exclusions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
            ))}
        </ul>
    ) : (
        <p>No nearby attractions found.</p>
    )}
</div>
</div>
    )
}
