import React, { useState, useRef, useEffect } from 'react';
import './activitytabdetails.css';
import { ActivityInclusionsExclusions, ActivityOverview } from './ActivityContent'; // Make sure to import your HotelOverview component
import { useParams } from 'react-router-dom'; // Import useParams to get hotelId
import Activitychangeremoveotherdetails from './Activitychangeremoveotherdetails';

export default function ActivityTabDetails() {
    const activityOverviewRef = useRef(null); // Renamed ref for clarity
    const activityInclusionsExclusionsRef= useRef(null);
    const [activeTab, setActiveTab] = useState('ActivityOverview');
    const { activityId } = useParams(); // Extract hotelId from the route parameters

    const handleScroll = (ref, tab) => {
        if (ref.current) { // Check if ref is not null
            const topOffset = 200; // Offset for scrolling
            const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - topOffset,
                behavior: 'smooth',
            });
            setActiveTab(tab);
        }
    };

    const handleScrollHighlight = () => {
        const sections = [
            { ref: activityOverviewRef, name: 'ActivityOverview' },
            { ref: activityInclusionsExclusionsRef, name: 'ActivityInclusionsExclusions' },
        ];

        // Loop through sections and check if they're visible in the viewport
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].ref.current) { // Ensure the ref is valid
                const sectionTop = sections[i].ref.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // If the section is at least 50% visible in the viewport
                if (sectionTop >= 0 && sectionTop <= windowHeight * 0.5) {
                    setActiveTab(sections[i].name);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHighlight);
        return () => {
            window.removeEventListener('scroll', handleScrollHighlight);
        };
    }, []);

    return (
        <div className="Hoteltabs-container">
            <div className='sticky-Hotel-tabs'>
                <div className='Hoteltab-menu'>
                    <button
                        onClick={() => handleScroll(activityOverviewRef, "ActivityOverview")}
                        className={activeTab === 'ActivityOverview' ? 'active-tab' : ''}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => handleScroll(activityInclusionsExclusionsRef, "ActivityInclusionsExclusions")}
                        className={activeTab === 'ActivityInclusionsExclusions' ? 'active-tab' : ''}
                    >
                        Inclusions & Exclusions
                    </button>
                </div>
            </div>
            <div className='Hoteltab-content-pricing'>
                <div className='Hoteltab-content'>
                    <div ref={activityOverviewRef} className='Hotel-section'>
                        <ActivityOverview activityId={activityId} /> {/* Pass the hotelId prop to HotelOverview */}
                    </div>
                    <div ref={activityInclusionsExclusionsRef} className='Hotel-section'>
                        <ActivityInclusionsExclusions activityId={activityId} /> {/* Pass the hotelId prop to HotelOverview */}
                    </div>
                </div>
                <div className='itinerary-price'>
                    <Activitychangeremoveotherdetails activityId={activityId} />
                </div>
            </div>
        </div>
    );
}
