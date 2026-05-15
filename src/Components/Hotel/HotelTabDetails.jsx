import React, { useState, useRef, useEffect } from 'react';
import './hoteltabdetails.css';
import { HotelAmenties, HotelInclusionsExclusions, HotelNearbyAttractions, HotelOverview } from './HotelContent'; // Make sure to import your HotelOverview component
import { useParams } from 'react-router-dom'; // Import useParams to get hotelId
import Hotelchangeremoveotherdetails from './Hotelchangeremoveotherdetails';

export default function HotelTabDetails() {
    const hotelOverviewRef = useRef(null); // Renamed ref for clarity
    const hotelAmentiesRef= useRef(null);
    const hotelInclusionsExclusionsRef= useRef(null);
    const hotelNearbyAttractionsRef= useRef(null);
    const [activeTab, setActiveTab] = useState('HotelOverview');
    const { hotelId } = useParams(); // Extract hotelId from the route parameters

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
            { ref: hotelOverviewRef, name: 'HotelOverview' },
            { ref: hotelAmentiesRef, name: 'HotelAmenties' },
            { ref: hotelInclusionsExclusionsRef, name: 'HotelInclusionsExclusions' },
            { ref: hotelNearbyAttractionsRef, name: 'HotelNearbyAttractions' },
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
                        onClick={() => handleScroll(hotelOverviewRef, "HotelOverview")}
                        className={activeTab === 'HotelOverview' ? 'active-tab' : ''}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => handleScroll(hotelAmentiesRef, "HotelAmenties")}
                        className={activeTab === 'HotelAmenties' ? 'active-tab' : ''}
                    >
                        Amenties
                    </button>
                    <button
                        onClick={() => handleScroll(hotelInclusionsExclusionsRef, "HotelInclusionsExclusions")}
                        className={activeTab === 'HotelInclusionsExclusions' ? 'active-tab' : ''}
                    >
                        Inclusions & Exclusions
                    </button>
                    <button
                        onClick={() => handleScroll(hotelNearbyAttractionsRef, "HotelNearbyAttractions")}
                        className={activeTab === 'HotelNearbyAttractions' ? 'active-tab' : ''}
                    >
                        Near by Attractions
                    </button>
                </div>
            </div>
            <div className='Hoteltab-content-pricing'>
                <div className='Hoteltab-content'>
                    <div ref={hotelOverviewRef} className='Hotel-section'>
                        <HotelOverview hotelId={hotelId} /> {/* Pass the hotelId prop to HotelOverview */}
                    </div>
                    <div ref={hotelAmentiesRef} className='Hotel-section'>
                        <HotelAmenties hotelId={hotelId} /> {/* Pass the hotelId prop to HotelOverview */}
                    </div>
                    <div ref={hotelInclusionsExclusionsRef} className='Hotel-section'>
                        <HotelInclusionsExclusions hotelId={hotelId} /> {/* Pass the hotelId prop to HotelOverview */}
                    </div>
                    <div ref={hotelNearbyAttractionsRef} className='Hotel-section'>
                        <HotelNearbyAttractions hotelId={hotelId} /> {/* Pass the hotelId prop to HotelOverview */}
                    </div>
                </div>
                <div className='itinerary-price'>
                    <Hotelchangeremoveotherdetails hotelId={hotelId} />
                </div>
            </div>
        </div>
    );
}
