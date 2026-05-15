import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate  } from "react-router-dom"; // Import the useParams hook
import './DayWiseItinerary.css';
import { TbTrekking } from 'react-icons/tb';

export default function ItineraryTimeSlotsComponent({ 
    time, 
    Hoteldescription, 
    Transferdescription, 
    Activitydescription, 
    morningIndex,
    morningAfternoonIndex,
    afternoonIndex,
    eveningIndex,
    afternooneveningIndex,
    fulldayIndex,
    style,
    packages
 }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const packageData = packages.find(pkg => pkg.id === parseInt(id));
    // Fetch the correct day based on dayIndex
    const MorningAfternoon = packageData?.Days[morningAfternoonIndex];
    const Morning = packageData?.Days[morningIndex];
    const Afternoon = packageData?.Days[afternoonIndex];
    const Evening = packageData?.Days[eveningIndex];
    const Fullday = packageData?.Days[fulldayIndex];
    const AfternoonEvening = packageData?.Days[afternooneveningIndex];
// State to store selected activities
const [morningActivity, setMorningActivity] = useState(null);
const [afternoonActivity, setAfternoonActivity] = useState(null);
const [eveningActivity, setEveningActivity] = useState(null);
const [morningafternoonActivity, setMorningafternoonActivity] = useState(null);
const [afternooneveningActivity, setAfternooneveningActivity] = useState(null);
const [fulldayActivity, setFulldayActivity] = useState(null);
// Load activity from location.state or localStorage
useEffect(() => {
    let storedActivities = JSON.parse(localStorage.getItem("selectedActivities")) || {};
    console.log("storedActivities", storedActivities);
    const getActivity = (day, slot) => {
        console.log(`🔍 Checking for: Day ${day}-${slot}`);
        return storedActivities[`${day}-${slot}`] || null;
    };

    setMorningActivity(getActivity(morningIndex + 1, "morning"));
    setAfternoonActivity(getActivity(afternoonIndex + 1, "afternoon"));
    setEveningActivity(getActivity(eveningIndex + 1, "evening"));
    setMorningafternoonActivity(getActivity(morningAfternoonIndex + 1, "morningafternoon"));
    setAfternooneveningActivity(getActivity(afternooneveningIndex + 1, "afternoonevening"));
    setFulldayActivity(getActivity(fulldayIndex + 1, "fullday"));
    if (location.state?.updatedActivity && location.state?.slot) {
        const { updatedActivity, slot, day } = location.state;
        // Update the specific slot while keeping the existing state
        const updatedActivities = {
            ...storedActivities,
            [slot]: { ...updatedActivity, slot, day: day || morningIndex + 1 } // Add slot & day index
        };
                // Save back to localStorage
                localStorage.setItem("selectedActivities", JSON.stringify(updatedActivities));
        setMorningActivity(updatedActivities.morning || null);
        setAfternoonActivity(updatedActivities.afternoon || null);
        setEveningActivity(updatedActivities.evening || null);
        setMorningafternoonActivity(updatedActivities.morningafternoon || null);
        setAfternooneveningActivity(updatedActivities.afternoonevening || null);
        setFulldayActivity(updatedActivities.fullday || null);


    } else {
        // Load from storage if state is empty
        setMorningActivity(storedActivities.morning || null);
        setAfternoonActivity(storedActivities.afternoon || null);
        setEveningActivity(storedActivities.evening || null);
        setMorningafternoonActivity(storedActivities.morningafternoon || null);
        setAfternooneveningActivity(storedActivities.afternoonevening || null);
        setFulldayActivity(storedActivities.fullday || null);
    }
}, [location.state]);
const handleAddActivity = (slot, dayIndex) => {
    if (dayIndex === undefined) {
        console.error(`Day index is undefined for slot: ${slot}`);
        return;
    }

    const activityData = { 
        slot, 
        day: `Day ${dayIndex + 1}` // Ensure correct day index
    };

    console.log("Navigating with:", activityData);
    navigate("/ActivityModal", { state: { ...activityData, id, redirectFrom: `/CreateItinerary/${id}`, } });
};





useEffect(() => {
    const loadActivities = () => {
        let storedActivities = JSON.parse(localStorage.getItem("selectedActivities")) || {};
        
        setMorningActivity(storedActivities.morning || null);
        setAfternoonActivity(storedActivities.afternoon || null);
        setEveningActivity(storedActivities.evening || null);
        setMorningafternoonActivity(storedActivities.morningafternoon || null);
        setAfternooneveningActivity(storedActivities.afternoonevening || null);
        setFulldayActivity(storedActivities.fullday || null);
    };

    // Load initially
    loadActivities();

    // Listen for changes in localStorage
    const handleStorageChange = () => {
        loadActivities();
    };

    window.addEventListener("activityRemoved", handleStorageChange);
    return () => window.removeEventListener("activityRemoved", handleStorageChange);
}, []);
const handleNavigateToActivity = (selectedActivity, slot) => {
    localStorage.setItem("selectedActivity", JSON.stringify(selectedActivity));
    navigate(`/view-activity/${selectedActivity.Activityid}`, { state: { activity: selectedActivity, slot } });
};

    return (
        <div className="timeSlotThree" style={style}>
            <div className='activity-time'>
                <div className='timeslot'>
                    <p className='time'>{time}</p>
                    {Morning?.schedule?.some(schedule => 
    schedule.scheduleType === "Morning" &&
    !schedule.Activities?.length &&
    !schedule.Transfer?.length &&
    !schedule.Hotels?.length
) && (
    <div className='activity-time1'>
        {morningActivity ? (
            <p className="selected-activity" onClick={() => handleNavigateToActivity(morningActivity, "morning")}><span style={{ width: '20px', height: '20px', marginRight: '5px' }}><TbTrekking className='Activityicon' /></span>{morningActivity.ActivityName}</p>
        ) : (
            <>
                <p className="time">At leisure.</p>
                <button onClick={() => handleAddActivity("morning", morningIndex)} className="addactivity">+ Add Activity</button>
            </>
        )}
    </div>
)}
                    {Morning?.schedule?.some(schedule => schedule.scheduleType === "Morning") && (
    <div className='timedescription'>
        <p>{Hoteldescription}</p>
        <p>{Transferdescription}</p>
        <p>{Activitydescription}</p>
    </div>
)}

                    {MorningAfternoon?.schedule?.some(schedule => 
    schedule.scheduleType === "MorningAfternoon" &&
    !schedule.Activities?.length &&
    !schedule.Transfer?.length &&
    !schedule.Hotels?.length
) && (
    <div className='activity-time1'>
        {morningafternoonActivity ? (
            <p className="selected-activity" onClick={() => handleNavigateToActivity(morningafternoonActivity, "morningafternoon")}>{morningafternoonActivity.ActivityName}</p>
        ) : (
            <>
                <p className="time">At leisure.</p>
                <button onClick={() => handleAddActivity("morningafternoon", morningAfternoonIndex)} className="addactivity">+ Add Activity</button>
            </>
        )}
    </div>
)}
{MorningAfternoon?.schedule?.some(schedule => schedule.scheduleType === "MorningAfternoon") && (
    <div className='timedescription'>
        <p>{Hoteldescription}</p>
        <p>{Transferdescription}</p>
        <p>{Activitydescription}</p>
    </div>
)}

{Afternoon?.schedule?.some(schedule => 
    schedule.scheduleType === "Afternoon" &&
    !schedule.Activities?.length &&
    !schedule.Transfer?.length &&
    !schedule.Hotels?.length
) && (
    <div className='activity-time1'>
        {afternoonActivity ? (
            <p className="selected-activity" onClick={() => handleNavigateToActivity(afternoonActivity, "afternoon")}>{afternoonActivity.ActivityName}</p>
        ) : (
            <>
                <p className="time">At leisure.</p>
                <button onClick={() => handleAddActivity("afternoon", afternoonIndex)} className="addactivity">+ Add Activity</button>
            </>
        )}
    </div>
)}
{Afternoon?.schedule?.some(schedule => schedule.scheduleType === "Afternoon") && (
    <div className='timedescription'>
        <p>{Hoteldescription}</p>
        <p>{Transferdescription}</p>
        <p>{Activitydescription}</p>
    </div>
)}
                   {Evening?.schedule?.some(schedule => 
    schedule.scheduleType === "Evening" &&
    !schedule.Activities?.length &&
    !schedule.Transfer?.length &&
    !schedule.Hotels?.length
) && (
    <div className='activity-time1'>
        {eveningActivity ? (
            <p className="selected-activity" onClick={() => handleNavigateToActivity(eveningActivity, "evening")}>{eveningActivity.ActivityName}</p>
        ) : (
            <>
                <p className="time">At leisure.</p>
                <button onClick={() => handleAddActivity("evening", eveningIndex)} className="addactivity">+ Add Activity</button>
            </>
        )}
    </div>
)}
{Evening?.schedule?.some(schedule => schedule.scheduleType === "Evening") && (
    <div className='timedescription'>
        <p>{Hoteldescription}</p>
        <p>{Transferdescription}</p>
        <p>{Activitydescription}</p>
    </div>
)}
                    {AfternoonEvening?.schedule?.some(schedule => 
    schedule.scheduleType === "AfternoonEvening" &&
    !schedule.Activities?.length &&
    !schedule.Transfer?.length &&
    !schedule.Hotels?.length
) && (
    <div className='activity-time1'>
        {afternooneveningActivity ? (
            <p className="selected-activity" onClick={() => handleNavigateToActivity(afternooneveningActivity, "afternoonevening")}>{afternooneveningActivity.ActivityName}</p>
        ) : (
            <>
                <p className="time">At leisure.</p>
                <button onClick={() => handleAddActivity("afternoonevening", afternooneveningIndex)} className="addactivity">+ Add Activity</button>
            </>
        )}
    </div>
)}
{AfternoonEvening?.schedule?.some(schedule => schedule.scheduleType === "AfternoonEvening") && (
    <div className='timedescription'>
        <p>{Hoteldescription}</p>
        <p>{Transferdescription}</p>
        <p>{Activitydescription}</p>
    </div>
)}
                    {Fullday?.schedule?.some(schedule => 
                    schedule.scheduleType === "Fullday" &&
                    !schedule.Activities?.length &&
                    !schedule.Transfer?.length &&
                    !schedule.Hotels?.length
                ) && (
                    <div className='activity-time1'>
                    {fulldayActivity ? (
                        <p className="selected-activity" onClick={() => handleNavigateToActivity(fulldayActivity, "fullday")}>{fulldayActivity.ActivityName}</p>
                    ) : (
                        <>
                            <p className="time">At leisure.</p>
                            <button onClick={() => handleAddActivity("fullday", fulldayIndex)} className="addactivity">+ Add Activity</button>
                        </>
                    )}
                </div>
            )}
            {Fullday?.schedule?.some(schedule => schedule.scheduleType === "Fullday") && (
    <div className='timedescription'>
        <p>{Hoteldescription}</p>
        <p>{Transferdescription}</p>
        <p>{Activitydescription}</p>
    </div>
)}
                </div>
            </div>
        </div>
    );
}
