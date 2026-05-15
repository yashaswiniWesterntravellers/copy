import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Noresultsfound from '../../Assets/Noresultsfound.svg';
import Australia1 from '../../Assets/Australia1.jpg';
import Insurance from '../../Assets/Insurance.png';

export default function AllActivities({ filters = {}  }) {
      const navigate = useNavigate();
      const location = useLocation();
    // Provide default values for filters to avoid undefined errors
    const {
        timeslot = [],
        ActivityDuration = [],
        transfer = [],
        groupType = [],
        interests = [],
        otherFilters = [],
    } = filters;

        // Filter activities based on the provided filters
        const applyFilters = (activity) => {
            if (timeslot.length > 0 && !timeslot.includes(activity.TimeSlot)) return false;
            if (ActivityDuration.length > 0 && !ActivityDuration.includes(activity.ActivityDuration)) return false;
            if (transfer.length > 0 && !transfer.includes(activity.Transfer)) return false;
            if (groupType.length > 0 && !groupType.includes(activity.activitytype)) return false;
            if (interests.length > 0 && !interests.includes(activity.TypeofActivity)) return false;
            if (otherFilters.length > 0 && !otherFilters.includes(activity.KindofActivity)) return false;
            return true;
        };
         const [allActivitiesdata, setAllActivitiesdata]=useState([
            {
                Activityid:'1',
                ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                ActivityOverview: "Activity Overview",
                Activityimage: Insurance,
                ActivityName:"Activity1", 
                Date:"12/04/2024", 
                Starttime: "10:00 AM",
                time:"7 hrs", 
                activitytype:'Private', 
                Activityamount:'Refundable', 
                Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                Activityexclusions:["Elevator","Bathtub"],
                TimeSlot:"Morning",
                ActivityDuration:"Quarter day",
                Transfer:"Included",
                TypeofActivity:"Art & Culture",
                KindofActivity:"Top Highlight",
              },
              {
                  Activityid:'2',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity2", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Shared', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Afternoon",
                ActivityDuration:"Half day",
                Transfer:"Not Included",
                TypeofActivity:"Adventure & Outdoor",
                KindofActivity:"Kid Friendly",
                },
                {
                  Activityid:'3',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity3", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Private', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Evening",
                ActivityDuration:"Full day",
                Transfer:"Not Included",
                TypeofActivity:"Food & Nightlife",
                KindofActivity:"Fast Selling",
                },
                {
                  Activityid:'4',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity4", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Private', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Morning",
                ActivityDuration:"Quarter day",
                Transfer:"Included",
                TypeofActivity:"Shopping & Leisure",
                KindofActivity:"Less explored gems",
                },
                {
                  Activityid:'5',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity5", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Private', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Afternoon",
                ActivityDuration:"Half day",
                Transfer:"Not Included",
                TypeofActivity:"Adventure & Outdoor",
                KindofActivity:"Self Exploration",
                },
                {
                  Activityid:'6',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity6", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Private', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Afternoon",
                ActivityDuration:"Half day",
                Transfer:"Not Included",
                TypeofActivity:"Adventure & Outdoor",
                KindofActivity:"Kid Friendly",
                },
                {
                  Activityid:'7',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity7", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Private', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Morning",
                ActivityDuration:"Quarter day",
                Transfer:"Included",
                TypeofActivity:"Art & Culture",
                KindofActivity:"Top Highlight",
                },
                {
                  Activityid:'8',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity8", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Private', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Evening",
                ActivityDuration:"Full day",
                Transfer:"Not Included",
                TypeofActivity:"Food & Nightlife",
                KindofActivity:"Fast Selling",
                },
                {
                  Activityid:'9',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity9", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Private', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Morning",
                ActivityDuration:"Quarter day",
                Transfer:"Included",
                TypeofActivity:"Shopping & Leisure",
                KindofActivity:"Less explored gems",
                },
                {
                  Activityid:'10',
                  ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                  ActivityOverview: "Activity Overview",
                  Activityimage: Insurance,
                  ActivityName:"Activity10", 
                  Date:"12/04/2024",
                  Starttime: "11:00 AM", 
                  time:"7 hrs", 
                  activitytype:'Private', 
                  Activityamount:'Refundable', 
                  Activityinclusions:["Elevator","Bathtub"], 
                  Activityexclusions:["Elevator","Bathtub"],
                  TimeSlot:"Afternoon",
                ActivityDuration:"Half day",
                Transfer:"Not Included",
                TypeofActivity:"Adventure & Outdoor",
                KindofActivity:"Kid Friendly",
                },
                {
                    Activityid:'11',
                    ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                    ActivityOverview: "Activity Overview",
                    Activityimage: Insurance,
                    ActivityName:"Activity11", 
                    Date:"12/04/2024", 
                    Starttime: "10:00 AM",
                    time:"7 hrs", 
                    activitytype:'Private', 
                    Activityamount:'Refundable', 
                    Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                    Activityexclusions:["Elevator","Bathtub"],
                    TimeSlot:"Morning",
                    ActivityDuration:"Quarter day",
                    Transfer:"Included",
                    TypeofActivity:"Art & Culture",
                    KindofActivity:"Top Highlight",
                  },
                  {
                      Activityid:'12',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity12", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Shared', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Afternoon",
                    ActivityDuration:"Half day",
                    Transfer:"Not Included",
                    TypeofActivity:"Adventure & Outdoor",
                    KindofActivity:"Kid Friendly",
                    },
                    {
                      Activityid:'13',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity13", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Private', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Evening",
                    ActivityDuration:"Full day",
                    Transfer:"Not Included",
                    TypeofActivity:"Food & Nightlife",
                    KindofActivity:"Fast Selling",
                    },
                    {
                      Activityid:'14',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity14", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Private', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Morning",
                    ActivityDuration:"Quarter day",
                    Transfer:"Included",
                    TypeofActivity:"Shopping & Leisure",
                    KindofActivity:"Less explored gems",
                    },
                    {
                      Activityid:'15',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity15", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Private', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Afternoon",
                    ActivityDuration:"Half day",
                    Transfer:"Not Included",
                    TypeofActivity:"Adventure & Outdoor",
                    KindofActivity:"Self Exploration",
                    },
                    {
                      Activityid:'16',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity16", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Private', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Afternoon",
                    ActivityDuration:"Half day",
                    Transfer:"Not Included",
                    TypeofActivity:"Adventure & Outdoor",
                    KindofActivity:"Kid Friendly",
                    },
                    {
                      Activityid:'17',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity17", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Private', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Morning",
                    ActivityDuration:"Quarter day",
                    Transfer:"Included",
                    TypeofActivity:"Art & Culture",
                    KindofActivity:"Top Highlight",
                    },
                    {
                      Activityid:'18',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity18", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Private', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Evening",
                    ActivityDuration:"Full day",
                    Transfer:"Not Included",
                    TypeofActivity:"Food & Nightlife",
                    KindofActivity:"Fast Selling",
                    },
                    {
                      Activityid:'19',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity19", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Private', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Morning",
                    ActivityDuration:"Quarter day",
                    Transfer:"Included",
                    TypeofActivity:"Shopping & Leisure",
                    KindofActivity:"Less explored gems",
                    },
                    {
                      Activityid:'20',
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: Insurance,
                      ActivityName:"Activity20", 
                      Date:"12/04/2024",
                      Starttime: "11:00 AM", 
                      time:"7 hrs", 
                      activitytype:'Private', 
                      Activityamount:'Refundable', 
                      Activityinclusions:["Elevator","Bathtub"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      TimeSlot:"Afternoon",
                    ActivityDuration:"Half day",
                    Transfer:"Not Included",
                    TypeofActivity:"Adventure & Outdoor",
                    KindofActivity:"Kid Friendly",
                    },
          ]);
            // Get filtered activities
    const filteredActivities = allActivitiesdata.filter(applyFilters);

    // Check if AllActivitiesdata is undefined or empty and return early if true
    if (!allActivitiesdata || allActivitiesdata.length === 0) {
        return <p>No activities available.</p>; // Fallback content for undefined or empty data
    }


     // Check if no activities match the filters
     if (filteredActivities.length === 0) {
        return (
            <div className="no-results" style={{ width:"80%", height:"auto"}}>
                <img
                    src={Noresultsfound}
                    alt="No results found"
                    className="no-results-illustration"
                />
                <h2>No results found</h2>
                <p>Try adjusting your filters to find packages.</p>
            </div>
        );
    }
    
const onSelectActivity=(selectedActivity) => {
          // Log the selected hotel to ensure data is being passed correctly
          console.log("Navigating from:", location.state?.from);
                  // Pass the hotel data with navigate, using the correct state structure
        navigate(`/view-activity/${selectedActivity.Activityid}`, { state: { selectedActivity,activity: selectedActivity, day: location.state?.day,
          schedule: location.state?.schedule,
          from: location.state?.from, } });
}
    return (
        <div className="Activity-Listing" style={{display:"flex", flexDirection:"column",gap:"10px", width:"80%", height:"fit-content"}}>
           {filteredActivities.map((activity) => (
                <div key={activity.Activityid} className="Activity-content-information" style={{ margin: "0%", backgroundColor: "white", height:"auto" }}>
                    <div className="activity-content">
                        <img src={activity.Activityimage} alt="Activityimage" />
                        <div className="activity-details">
                            <div className='Date-actions'>
                            {/* <p className='Date'>{activity.Date}</p> */}
                            <h3>{activity.ActivityName}</h3>
                            <div className='insurance-actions'>
                            {/* Select button to choose this activity */}
                            <button className="select" onClick={() => {
                                console.log("Selected Activity:", activity); // ✅ Debugging log
                                onSelectActivity (activity)}} >Select</button>
                        </div>
                            </div>
                            
                            {/* <h3>{activity.ActivityName}</h3> */}
                            <ul className='activity-time-type-amount'>
                                <li>{activity.time}</li>
                                <li>{activity.activitytype}</li>
                                <li>{activity.Activityamount}</li>
                            </ul>
                            <ul className='Inclusions'>
                                Inclusions:
                                {activity.Activityinclusions?.map((Inclusion, index) => (
                                    <li key={index}>{Inclusion}</li>
                                ))}
                            </ul>
                            <ul className="Exclusions">
                                Exclusions:
                                {activity.Activityexclusions?.map((Exclusion, index) => (
                                    <li key={index}>{Exclusion}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
