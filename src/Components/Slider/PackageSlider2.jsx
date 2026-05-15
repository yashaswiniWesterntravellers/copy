import React, {useState, useEffect} from 'react';
import { TiLocation } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './packageslider2.css';
const PackagesSlider2 =({packagesheading,packagedestination}) => {
    // State to track the starting index of visible items
    const [startIndex, setStartIndex] = useState(0);
    // State to handle touch events
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    // Function to scroll left
    const ScrollLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 5);
        }
    }
    // Function to scroll right
    const ScrollRight = () => {
        if (startIndex + 5 < packagedestination.length) {
            setStartIndex(startIndex + 5);
        }
    }
    // Function to handle touch start
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX); // Record touch start position
    };
    // Function to handle touch end (determine swipe direction)
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 100) {
            // Swipe left (scroll right)
            if (startIndex + 5 < packagedestination.length) setStartIndex(startIndex + 1);
        }
        if (touchEnd - touchStart > 100) {
            // Swipe right (scroll left)
            if (startIndex > 0) setStartIndex(startIndex - 1);
        }
    };
    // Function to handle touch move
    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX); // Record touch end position
    };
    return(
        <div className='d-m-packages-1'>
            <div className='d-m-packages-header-1'>
                <h2>{packagesheading}</h2>
                <div className='d-m-packages-arrow-icons-1'>
                <MdOutlineKeyboardArrowLeft onClick={ScrollLeft} className={`arrow-icon-1 ${startIndex === 0 ? 'disabled-1' : ''}`}  />
                <MdOutlineKeyboardArrowRight onClick={ScrollRight} className={`arrow-icon-1 ${startIndex + 5 >= packagedestination.length ? 'disabled-1' : ''}`}  />
                </div>
            </div>
            <div 
            className='d-m-packages-listing-1'
            onTouchStart={handleTouchStart}  // Add touchstart event
            onTouchMove={handleTouchMove}   // Add touchmove event
            onTouchEnd={handleTouchEnd}     // Add touchend event
            >
                <div className='d-m-packages-listing-items-horizontal'>
                {packagedestination.slice(startIndex, startIndex + 2).map((destination) => (
                                    <div key={destination.id} className='d-m-packages-listing-items-1'  style={{ backgroundImage: `url(${destination.image})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='d-m-packages-listing-items-location-tagline-1'>
                                        <div className='d-m-packages-listing-items-location-1'>
                                            <TiLocation className='d-m-packages-listing-items-location-icon-1' />
                                            {destination.location}
                                        </div>
                                        <div className='d-m-packages-listing-items-tagline-1'>From ₹{destination.from}</div>
                                    </div>
                                </div>
                ))}
                </div>
                <div className='d-m-packages-listing-items-horizontal'>
                {packagedestination.slice(startIndex + 2, startIndex + 3).map((destination) => (
                                    <div key={destination.id} className='d-m-packages-listing-items-1'  style={{ backgroundImage: `url(${destination.image})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='d-m-packages-listing-items-location-tagline-1'>
                                        <div className='d-m-packages-listing-items-location-1'>
                                            <TiLocation className='d-m-packages-listing-items-location-icon-1' />
                                            {destination.location}
                                        </div>
                                        <div className='d-m-packages-listing-items-tagline-1'>From ₹{destination.from}</div>
                                    </div>
                                </div>
                ))}
                </div>
                <div className='d-m-packages-listing-items-horizontal'>
                {packagedestination.slice(startIndex + 3, startIndex + 5).map((destination) => (
                                    <div key={destination.id} className='d-m-packages-listing-items-1'  style={{ backgroundImage: `url(${destination.image})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='d-m-packages-listing-items-location-tagline-1'>
                                        <div className='d-m-packages-listing-items-location-1'>
                                            <TiLocation className='d-m-packages-listing-items-location-icon-1' />
                                            {destination.location}
                                        </div>
                                        <div className='d-m-packages-listing-items-tagline-1'>From ₹{destination.from}</div>
                                    </div>
                                </div>
                ))}
                </div>
            </div>
        </div>
    );
};
export default PackagesSlider2;