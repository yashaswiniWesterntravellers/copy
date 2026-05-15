import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useMediaQuery } from "react-responsive";
import './DayWiseItinerary.css';
import { useParams } from "react-router-dom"; // Import the useParams hook
import ItineraryTimeSlotsComponent from './ItineraryTimeSlots';
import { TbTrekking } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";

export default function DayWiseItinerary({packages}){
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [updatedPackages, setUpdatedPackages] = useState(packages);
    const packageData = updatedPackages.find(pkg => pkg.id === parseInt(id));
    useEffect(() => {
        const handleActivityRemoval = (event) => {
            const removedActivityId = event.detail.Activityid;
    
            setUpdatedPackages(prevPackages =>
                prevPackages.map(pkg => {
                    if (pkg.id === parseInt(id)) {
                        return {
                            ...pkg,
                            Days: pkg.Days.map(day => ({
                                ...day,
                                schedule: day.schedule.map(schedule => ({
                                    ...schedule,
                                    Activities: schedule.Activities
                                        ? schedule.Activities.filter(activity => activity.Activityid !== removedActivityId)
                                        : []
                                }))
                            }))
                        };
                    }
                    return pkg;
                })
            );
        };
    
        window.addEventListener("activityRemoved", handleActivityRemoval);
    
        return () => {
            window.removeEventListener("activityRemoved", handleActivityRemoval);
        };
    }, [id]);
    
    useEffect(() => {
        const handleActivityUpdate = (event) => {
            const { updatedActivity, slot, day } = event.detail;
    
            setUpdatedPackages(prevPackages => 
                prevPackages.map(pkg => {
                    if (pkg.id === parseInt(id)) {
                        return {
                            ...pkg,
                            Days: pkg.Days.map(d => {
                                if (d.DayNumber === day) {
                                    return {
                                        ...d,
                                        schedule: d.schedule.map(scheduleItem => {
                                            if (scheduleItem.scheduleType === slot) {
                                                return {
                                                    ...scheduleItem,
                                                    Activities: scheduleItem.Activities.map(activity => 
                                                        activity.Activityid === updatedActivity.Activityid
                                                            ? updatedActivity  // Update the existing activity
                                                            : activity
                                                    )
                                                };
                                            }
                                            return scheduleItem;
                                        })
                                    };
                                }
                                return d;
                            })
                        };
                    }
                    return pkg;
                })
            );
        };
    
        window.addEventListener("activityUpdate", handleActivityUpdate);
    
        return () => {
            window.removeEventListener("activityUpdate", handleActivityUpdate);
        };
    }, [id]);
    
    
    const renderIconWithDescription1 = (IconComponent, condition, description, className, activity, navigate, scheduleItem) => {
        return condition ? (
            <div 
            style={{ display: 'flex', alignItems: 'flex-start', gap:"0.2rem" }}
            onClick={() => {
                console.log("Clicked Activity ID:", scheduleItem.Activities?.[0]?.Activityid);
                console.log("Slot Passed:", scheduleItem.scheduleType); // Log the slot type
                navigate(`/view-activity/${scheduleItem.Activities?.[0]?.Activityid}`, { 
                    state: { 
                        activity: scheduleItem.Activities?.[0], 
                        slot: scheduleItem.scheduleType // Ensure slot is passed
                    } 
                });
            }}
            >
                <span style={{ width: '20px', height: '20px', marginRight: '5px' }}><IconComponent className={`${className}`} /></span>
                {description}
            </div>
        ) : null;
    };
    
    return(
        <div className='dayWise-itinerary'>
            {packageData.Days.map((Day, index) => (
                <div className='days-itinerary' key={index}>
                    {isMobile && (
                        <div className='daywise-p-box-line'>
                        {/* <p className="dayWise-p">Day {index + 1}</p> */}
                    <div className='box-line'>
                        <div className='ellipse' />
                        {index !== packageData.Days.length - 1 && (
                            <div className='vertical-line' />
                        )}
                    </div>
                        </div>
                         )}
                    <div className="dayWise-activity">
                        <div className="textfield_itinerary">
                            <div className='timeSlotThree'>
                            {!isMobile && (<p className="dayWise">Day {index + 1}</p>)}
                    {isMobile && (<h3 className="dayWise">Day {index + 1}</h3>)}
                    </div>
                    {Day.schedule && Array.isArray(Day.schedule) && Day.schedule.map((scheduleItem, scheduleIndex) => (
    scheduleItem.scheduleType === "Morning" && (
        <ItineraryTimeSlotsComponent
            key={scheduleIndex}
            packages={packages}
            time="MORNING"
            Activitydescription={
                renderIconWithDescription1(
                    TbTrekking, 
                    scheduleItem.Activities?.length > 0, 
                    scheduleItem.Activities?.map(activity => activity.ActivityName).join(", "), 
                    "Activityicon",
                    scheduleItem.Activities?.[0]?.Activityid, // Pass activity ID
                    navigate, // Pass navigate function
                    scheduleItem
                )
            }
            Transferdescription={
                renderIconWithDescription1(
                    FaCarSide, 
                    scheduleItem.Transfer?.length > 0, 
                    scheduleItem.Transfer?.map(transfer => transfer.TransferTitle).join(", "), 
                    "Transfericon"
                )
            }
            Hoteldescription={
                renderIconWithDescription1(
                    RiHotelFill, 
                    scheduleItem.Hotels?.length > 0, 
                    scheduleItem.Hotels?.map(hotel => hotel.HotelTitle).join(", "), 
                    "Hotelicon"
                )
            }
            morningIndex={index}
            style={isMobile ? { width: "100%" } : { width: "33.3%" }}
        />
    )
))}
{Day.schedule && Array.isArray(Day.schedule) && Day.schedule.map((scheduleItem, scheduleIndex) => (
    scheduleItem.scheduleType === "MorningAfternoon" && (
        <ItineraryTimeSlotsComponent
            key={scheduleIndex}
            packages={packages}
            time="MORNING & AFTERNOON"
            Activitydescription={
                renderIconWithDescription1(
                    TbTrekking, 
                    scheduleItem.Activities?.length > 0, 
                    scheduleItem.Activities?.map(activity => activity.ActivityName).join(", "), 
                    "Activityicon",
                    scheduleItem.Activities?.[0]?.Activityid, // Pass activity ID
                    navigate, // Pass navigate function
                    scheduleItem
                )
            }
            Transferdescription={
                renderIconWithDescription1(
                    FaCarSide, 
                    scheduleItem.Transfer?.length > 0, 
                    scheduleItem.Transfer?.map(transfer => transfer.TransferTitle).join(", "), 
                    "Transfericon"
                )
            }
            Hoteldescription={
                renderIconWithDescription1(
                    RiHotelFill, 
                    scheduleItem.Hotels?.length > 0, 
                    scheduleItem.Hotels?.map(hotel => hotel.HotelTitle).join(", "), 
                    "Hotelicon"
                )
            }
            morningAfternoonIndex={index}
            style={isMobile ? { width: "100%" } : { width: "66.6%" }}
        />
    )
))}
    {Day.schedule && Array.isArray(Day.schedule) && Day.schedule.map((scheduleItem, scheduleIndex) => (
    scheduleItem.scheduleType === "Afternoon" && (
        <ItineraryTimeSlotsComponent
            key={scheduleIndex}
            packages={packages}
            time="AFTERNOON"
            Activitydescription={
                renderIconWithDescription1(
                    TbTrekking, 
                    scheduleItem.Activities?.length > 0, 
                    scheduleItem.Activities?.map(activity => activity.ActivityName).join(", "), 
                    "Activityicon",
                    scheduleItem.Activities?.[0]?.Activityid, // Pass activity ID
                    navigate, // Pass navigate function
                    scheduleItem
                )
            }
            Transferdescription={
                renderIconWithDescription1(
                    FaCarSide, 
                    scheduleItem.Transfer?.length > 0, 
                    scheduleItem.Transfer?.map(transfer => transfer.TransferTitle).join(", "), 
                    "Transfericon"
                )
            }
            Hoteldescription={
                renderIconWithDescription1(
                    RiHotelFill, 
                    scheduleItem.Hotels?.length > 0, 
                    scheduleItem.Hotels?.map(hotel => hotel.HotelTitle).join(", "), 
                    "Hotelicon"
                )
            }
            afternoonIndex={index}
            style={isMobile ? { width: "100%" } : { width: "33.3%" }}
        />
    )
))}
    {Day.schedule && Array.isArray(Day.schedule) && Day.schedule.map((scheduleItem, scheduleIndex) => (
    scheduleItem.scheduleType === "Evening" && (
        <ItineraryTimeSlotsComponent
            key={scheduleIndex}
            packages={packages}
            time="EVENING"
            Activitydescription={
                renderIconWithDescription1(
                    TbTrekking, 
                    scheduleItem.Activities?.length > 0, 
                    scheduleItem.Activities?.map(activity => activity.ActivityName).join(", "), 
                    "Activityicon",
                    scheduleItem.Activities?.[0]?.Activityid, // Pass activity ID
                    navigate, // Pass navigate function
                    scheduleItem
                )
            }
            Transferdescription={
                renderIconWithDescription1(
                    FaCarSide, 
                    scheduleItem.Transfer?.length > 0, 
                    scheduleItem.Transfer?.map(transfer => transfer.TransferTitle).join(", "), 
                    "Transfericon"
                )
            }
            Hoteldescription={
                renderIconWithDescription1(
                    RiHotelFill, 
                    scheduleItem.Hotels?.length > 0, 
                    scheduleItem.Hotels?.map(hotel => hotel.HotelTitle).join(", "), 
                    "Hotelicon"
                )
            }
            eveningIndex={index}
            style={isMobile ? { width: "100%" } : { width: "33.3%" }}
        />
    )
))}
                                {Day.schedule && Array.isArray(Day.schedule) && Day.schedule.map((scheduleItem, scheduleIndex) => (
    scheduleItem.scheduleType === "AfternoonEvening" && (
        <ItineraryTimeSlotsComponent
            key={scheduleIndex}
            time="AFTERNOON & EVENING"
            packages={packages}
            Activitydescription={
                renderIconWithDescription1(
                    TbTrekking, 
                    scheduleItem.Activities?.length > 0, 
                    scheduleItem.Activities?.map(activity => activity.ActivityName).join(", "), 
                    "Activityicon",
                    scheduleItem.Activities?.[0]?.Activityid, // Pass activity ID
                    navigate, // Pass navigate function
                    scheduleItem
                )
            }
            Transferdescription={
                renderIconWithDescription1(
                    FaCarSide, 
                    scheduleItem.Transfer?.length > 0, 
                    scheduleItem.Transfer?.map(transfer => transfer.TransferTitle).join(", "), 
                    "Transfericon"
                )
            }
            Hoteldescription={
                renderIconWithDescription1(
                    RiHotelFill, 
                    scheduleItem.Hotels?.length > 0, 
                    scheduleItem.Hotels?.map(hotel => hotel.HotelTitle).join(", "), 
                    "Hotelicon"
                )
            }
            afternooneveningIndex={index}
            style={isMobile ? { width: "100%" } : { width: "66.6%" }}
        />
    )
))}
{Day.schedule && Array.isArray(Day.schedule) && Day.schedule.map((scheduleItem, scheduleIndex) => (
    scheduleItem.scheduleType === "Fullday" && (
        <ItineraryTimeSlotsComponent
            key={scheduleIndex}
            time="FULL DAY"
            packages={packages}
            Activitydescription={
                renderIconWithDescription1(
                    TbTrekking, 
                    scheduleItem.Activities?.length > 0, 
                    scheduleItem.Activities?.map(activity => activity.ActivityName).join(", "), 
                    "Activityicon",
                    scheduleItem.Activities?.[0]?.Activityid, // Pass activity ID
                    navigate, // Pass navigate function
                    scheduleItem
                )
            }
            Transferdescription={
                renderIconWithDescription1(
                    FaCarSide, 
                    scheduleItem.Transfer?.length > 0, 
                    scheduleItem.Transfer?.map(transfer => transfer.TransferTitle).join(", "), 
                    "Transfericon"
                )
            }
            Hoteldescription={
                renderIconWithDescription1(
                    RiHotelFill, 
                    scheduleItem.Hotels?.length > 0, 
                    scheduleItem.Hotels?.map(hotel => hotel.HotelTitle).join(", "), 
                    "Hotelicon"
                )
            }
            fulldayIndex={index}
            style={{ width: "100%" }}
        />
    )
))}

                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}