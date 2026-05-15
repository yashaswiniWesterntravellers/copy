import React, {useState, useEffect} from 'react';
import { TiLocation } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './packageslider.css';
const PackagesSlider =({packagesheading, packagedestination, style}) => {
    // State to track the starting index of visible items
    const [startIndex, setStartIndex] = useState(0);
    const [visibleItemsCount, setVisibleItemsCount] = useState(5); // Default visible 5 items
    // State to handle touch events
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    // Function to adjust visible items count based on screen size
    const updateVisibleItems = () => {
        if (window.innerWidth <= 540) {
            setVisibleItemsCount(3); // Mobile view
        } else if (window.innerWidth <= 1024) {
            setVisibleItemsCount(4); // Tablet view
        } else {
            setVisibleItemsCount(5);
        }
    };
    // Use effect to update count on resize
    useEffect(() => {
        updateVisibleItems(); // Set initial value
        window.addEventListener("resize", updateVisibleItems);
        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);
    // Reset startIndex if destinations are updated
    useEffect(() => {
        if (startIndex + visibleItemsCount > packagedestination.length) {
            setStartIndex(Math.max(0, packagedestination.length - visibleItemsCount));
        }
    }, [packagedestination, visibleItemsCount]);
    // Function to scroll left
    const ScrollLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    }
    // Function to scroll right
    const ScrollRight = () => {
        if (startIndex + visibleItemsCount < packagedestination.length) {
            setStartIndex(startIndex + 1);
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
            if (startIndex + visibleItemsCount < packagedestination.length) setStartIndex(startIndex + 1);
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
        <div className='d-m-packages' style={style}>
            <div className='d-m-packages-header'>
                <h2>{packagesheading}</h2>
                <div className='d-m-packages-arrow-icons'>
                <MdOutlineKeyboardArrowLeft onClick={ScrollLeft} className={`arrow-icon ${startIndex === 0 ? 'disabled' : ''}`}  />
                <MdOutlineKeyboardArrowRight onClick={ScrollRight} className={`arrow-icon ${startIndex + visibleItemsCount >= packagedestination.length ? 'disabled' : ''}`}  />
                </div>
            </div>
            <div 
            className='d-m-packages-listing'
            onTouchStart={handleTouchStart}  // Add touchstart event
            onTouchMove={handleTouchMove}   // Add touchmove event
            onTouchEnd={handleTouchEnd}     // Add touchend event
            >
                {packagedestination.slice(startIndex, startIndex + visibleItemsCount).map((destination) => (
                    <div key={destination.id} className='d-m-packages-listing-items' style={{ backgroundImage: `url(${destination.image})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='d-m-packages-listing-items-location-tagline'>
                            <div className='d-m-packages-listing-items-location'>
                                <TiLocation className='d-m-packages-listing-items-location-icon' />
                                {destination.location}
                            </div>
                            <div className='d-m-packages-listing-items-tagline'>{destination.tagline}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PackagesSlider;