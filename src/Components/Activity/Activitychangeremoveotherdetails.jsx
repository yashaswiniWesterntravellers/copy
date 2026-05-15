import './Activitychangeremoveotherdetails.css';
import { packages } from '../Packagelisting/Packagelisting';
import { MdAccessTime } from "react-icons/md";
import { MdOutlineLocalActivity } from "react-icons/md";

export default function Activitychangeremoveotherdetails({ activityId }){
    const activities = packages.flatMap(pkg => pkg.Activities || []);
    const activityData = activities.find(activity => {
        return activity.Activityid === activityId; // Ensure correct comparison based on types
      });
    const handleonClickChangeActivity = () =>{
        console.log("change Activity");
    }
    const handleonClickRemoveActivity = () =>{
        console.log("remove Activity");
    }
    return(
        <div className="Activity-summary-container">
            <div className="changeactivity-remove">
                <button className='change-activity-button' onClick={handleonClickChangeActivity} >Change Activity</button>
                <button className='remove-button' onClick={handleonClickRemoveActivity} >Remove</button>
            </div>
            <hr />
            <div className="changeactivity-remove">
            <div className="Activity-Details" >
                <p>Activity Start Time</p>
                <h4>{activityData.Starttime}</h4>
            </div>
            <div className="Activity-Details">
                <p>Activity Date</p>
                <h4>{activityData.Date}</h4>
            </div>
            </div>
            <hr />
            <div className="changeactivity-remove">
                <div className="Activity-Type">
                    <span className="Activity-icon"><MdOutlineLocalActivity /></span>
                <p>Private Activity</p>
                </div>
                <div className="Activity-Type">
                    <span className="Activity-icon"><MdAccessTime /></span>
                <p>3 hrs duration</p>
                </div>
            </div>
        </div>
    );
}