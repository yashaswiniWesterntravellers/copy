import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Activity({ packages = [], setPackages }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { addedHotel, addedActivity, removeActivity, day, schedule } = location.state || {};

    useEffect(() => {
        if (!packages.length || typeof setPackages !== 'function') {
            return;
        }
        if ((addedHotel || addedActivity || removeActivity) && day && schedule) {
            const updatedPackages = [...packages];
            updatedPackages[0].country.destinations.forEach(destination => {
                destination.dayWiseList.forEach(dayItem => {
                    if (dayItem.day === day) {
                        dayItem.scheduleType.forEach(scheduleItem => {
                            if (scheduleItem.schedule === schedule) {
                                if (addedHotel) {
                                    scheduleItem.hotelDetails = addedHotel;
                                }
                                if (addedActivity) {
                                    scheduleItem.activityDetails = addedActivity;
                                }
                                if (removeActivity) {
                                    scheduleItem.activityDetails = null;
                                }
                            }
                        });
                    }
                });
            });
            setPackages(updatedPackages);
            navigate(location.pathname, { replace: true });
        }
    }, [addedHotel, addedActivity, removeActivity, day, schedule, packages, setPackages, navigate, location.pathname]);

    const packageData = packages.find(pkg => pkg.id === parseInt(id, 10));

    if (!packageData) {
        return <h1>Activity data not found</h1>;
    }

    return (
        <div className="Activity-listing">
            {packageData.Days.map((day, dayIndex) =>
                day.schedule.map(schedule =>
                    (schedule.Activities || []).map((activity) => (
                        <div key={activity.Activityid} className="Activity-content-information">
                            <div className="activity-content">
                                <img src={activity.Activityimage} alt={activity.ActivityName} />
                                <div className="activity-details">
                                    <div className="Date-actions">
                                        <h3>{activity.ActivityName}</h3>
                                        <div className="insurance-actions">
                                            <button
                                                className="change-action"
                                                onClick={() => {
                                                    navigate(`/view-activity/${schedule.Activities.Activityid}`, {
                                                        state: {
                                                            activity1: schedule.Activities,
                                                            day1: dayIndex + 1,
                                                            schedule1: schedule.scheduleType,
                                                        },
                                                    });
                                                }}
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() =>
                                                    navigate("/ActivityModal", {
                                                        state: {
                                                            activity: schedule.Activities,
                                                            day: dayIndex + 1,
                                                            schedule: schedule.scheduleType,
                                                        },
                                                    })
                                                }
                                                className="change-action"
                                            >
                                                Change
                                            </button>
                                            <button
                                                className="remove-action"
                                                onClick={() =>
                                                    navigate("/CreateItinerary", {
                                                        state: {
                                                            removeActivity: true,
                                                            day: dayIndex + 1,
                                                            schedule: schedule.scheduleType,
                                                        },
                                                    })
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <p style={{ margin: "0%" }}>Day {dayIndex + 1} : {schedule.scheduleType}</p>
                                    <ul className="activity-time-type-amount">
                                        <li>{activity.time}</li>
                                        <li>{activity.activitytype}</li>
                                        <li>{activity.Activityamount}</li>
                                    </ul>
                                    <ul className="Inclusions">
                                        Inclusions:
                                        {activity.Activityinclusions?.map((inclusion, index) => (
                                            <li key={index}>{inclusion}</li>
                                        ))}
                                    </ul>
                                    <ul className="Exclusions">
                                        Exclusions:
                                        {activity.Activityexclusions?.map((exclusion, index) => (
                                            <li key={index}>{exclusion}</li>
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
