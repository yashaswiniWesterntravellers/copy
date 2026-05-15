import React, { useState, useRef, useEffect } from 'react';
import {useLocation, useNavigate } from "react-router-dom";
import './viewactivity.css';
import Packagelistingimages from '../../Packagelistingimages/Packagelistingimages';
import { useMediaQuery } from "react-responsive";
import { MdOutlineLocalActivity, MdAccessTime } from "react-icons/md";
import { TiArrowSortedDown, TiArrowSortedUp  } from "react-icons/ti";
import { IoCarOutline } from "react-icons/io5";
import BackfromListing from '../../BackButton/BackfromListing';
export const ViewActivity = () =>{
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
    const location = useLocation();
    const navigate = useNavigate();
    const fromAddActivity = location.state?.fromAddActivity;
    const activity = location.state?.activity1 ||location.state?.selectedActivity || location.state?.activity; // Safely extract the hotel data
    const from = location.state?.from;
    const changeActivityData = {
        activity: location.state?.activity1,
        day: location.state?.day1,
        schedule: location.state?.schedule1,
        from: from,
      };
    const isActivitySelectedForSchedule = location.state?.day !== undefined && location.state?.schedule !== undefined && !location.state?.activity1;
        const overviewRef = useRef(null);
        const inclusionRef = useRef(null);
        const exclusionRef = useRef(null);
        const additionalinfoRef = useRef(null);
        const [activeTab, setActiveTab] = useState('overview');
            // State to track visibility of each section
            const [isOpen, setIsOpen] = useState(null);
                // Function to toggle each section
                const toggleSection = (section) => {
                    if (!isMobile) return; // No toggling on desktop
                    setIsOpen((prevSection) => (prevSection === section ? null : section));
                };

                const handleChangeActivity = () => { 
                    navigate(`/ActivityModal`, { state: changeActivityData }); 
                  };

                  
    
    return(
        <div>
          <BackfromListing Modaltext={activity?.ActivityName} activity="activity" />
                
                <div className="package-itinerary"> 
                {/* <BackButton style={{padding:"20px 160px"}} />  */}
                    <div className="package-t-d">
                        <h2 className="Itinerarytittle">{activity?.ActivityName}</h2>
                        <Packagelistingimages packageImages={activity?.ActivityheaderImages}/>
                    </div>
                    <div className="itinerary-container">
                        {/* Sticky Tab Menu */}
                        {!isMobile && (
                            <div className="sticky-activity-itinerary-tabs">
                            <div className="tab-menu-activity">
                                <button className={activeTab === 'overview' ? 'active-tab' : ''}>
                                    Overview
                                </button>
                                <button className={activeTab === 'inclusion' ? 'active-tab' : ''}>
                                    Inclusions
                                </button>
                                <button className={activeTab === 'exclusion' ? 'active-tab' : ''}>
                                    Exclusions
                                </button>
                                <button className={activeTab === 'additionalinfo' ? 'active-tab' : ''}>
                                    Additional Info
                                </button>
                            </div>
                        </div>
            )}
            <div className='tab-content-pricing'>
                {/* Tab Content */}
                <div className="tab-content">
                    {/* Day by Day Section */}
                    <div ref={overviewRef} className="section">
                        <h2 onClick={() => toggleSection("overview")}>
                            <span className="itinerary-text">Overview</span>
                            {isMobile && (
                                <span className="dropdown-arrow">
                                {isOpen === "overview" ? <TiArrowSortedUp /> : <TiArrowSortedDown />} 
                            </span>
                            )}
                        </h2>
                        {!isMobile || isOpen === "overview" ?  // Show content only if state is true
                        <>
                        <div className="day-itinerary">
                        {activity?.ActivityOverview}
                        </div>
                        </>
                         : null 
                        }
                    </div>
                    {/* Inclusions Section */}
                    <div ref={inclusionRef} className="section">
                        <h2 onClick={() => toggleSection("inclusion")}><span className="itinerary-text">Inclusions</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "inclusion" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {!isMobile || isOpen === "inclusion" ? 
                                <div>
                                <ul className="day-itinerary">
                                {activity?.Activityinclusions?.map((inclusion, index) => (
                                            <li key={index}>{inclusion}</li>
                                        )) || <li>No inclusions listed.</li>}
                                </ul>
                              </div>
                        : null }
                    </div>

                    {/* Exclusions Section */}
                    <div ref={exclusionRef} className="section">
                        <h2 onClick={() => toggleSection("exclusion")}><span className="itinerary-text">Exclusions</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "exclusion" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {!isMobile || isOpen === "exclusion" ? 
                                <div>
                                <ul className="day-itinerary">
                                {activity?.Activityexclusions?.map((exclusion, index) => (
                                            <li key={index}>{exclusion}</li>
                                        )) || <li>No exclusions listed.</li>}
                                </ul>
                              </div>
                        : null }
                    </div>
                    {/* Additionalinfo Section */}
                    <div ref={additionalinfoRef} className="section">
                        <h2  onClick={() => toggleSection("additionalinfo")}><span className="itinerary-text">Additional Information</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "additionalinfo" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {!isMobile || isOpen === "additionalinfo" ? 
                        <ul className="day-itinerary">
                        {activity?.Additionalinfo?.map((info, index) => (
                                            <li key={index}>{info}</li>
                                        )) || <li>No info listed.</li>}
                    </ul>
                         : null }
                    </div>
                </div>
                                    <div className='itinerary-price'>
                                    <div className="Activity-view-summary-container">
            <div className="changeactivity-view-remove">
            {!fromAddActivity && (
              <button
                className="change-activity-button"
                onClick={handleChangeActivity}
              >Change Activity</button>
            )}
{isActivitySelectedForSchedule ? (
  <button
    className='change-hotel-button'
    onClick={() => {
      // Log the 'from' value to see what it's set to
    console.log("Navigating from:", from);
      navigate(from, {
        state: {
          addedActivity: activity,
          day: location.state.day,
          schedule: location.state.schedule,
        },
      });
    }}
  >
    Add to Itinerary
  </button>
) : (
    <>
    {!fromAddActivity && (
  <button
    className="remove-button"
    onClick={() => {
      navigate('/CreateItinerary', {
        state: {
          removeActivity: true,
          day: location.state?.day1 || location.state?.day,
          schedule: location.state?.schedule1 || location.state?.schedule,
        },
      });
    }}
  >
    Remove
  </button>
)}
</>
)}

            </div>
            <hr />
            <div className="changeactivity-remove">
              <div className="Activity-Details">
                <p>Activity Start Time</p>
                <h6>08:30 pm</h6>
              </div>
              <div className="Activity-Details">
                <p>Day</p>
                <h6>Day 1</h6>
              </div>
            </div>
            <hr />
            <div className="changeactivity-remove">
              <div className="Activity-Type">
                <span className="Activity-icon">
                  <MdOutlineLocalActivity />
                </span>
                <p>Private Activity</p>
              </div>
              <div className="Activity-Type">
                <span className="Activity-icon">
                  <MdAccessTime />
                </span>
                <p>3 hrs duration</p>
              </div>
              <div className="Activity-Type">
                <span className="Activity-icon">
                <IoCarOutline />
                </span>
                <p>Transfer Included</p>
              </div>
            </div>
          </div>
                                </div>
            </div>
        </div>
                </div>
            </div>
    );
}