import React, { useState, useRef, useEffect } from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook
import './Itinerarytabs.css'; // Import your custom CSS
import Imageslider from '../Imageslider/Imageslider';
import { useMediaQuery } from "react-responsive";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const DaybydayTabs = ({packages}) => {
    const { id } = useParams();
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
    const packageData = packages.find(pkg => pkg.id === parseInt(id));
    const [selectedImages, setSelectedImages] = useState([]);
    const [showSlider, setShowSlider] = useState(false);
    const [activeTab, setActiveTab] = useState(0); // Track the active tab
    const dayRefs = useRef([]); // Create an array of refs for each day
    const tabContainerRef = useRef(null); // Ref for scrollable tab container
    const [showArrows, setShowArrows] = useState(false);
    const [visibleTabs, setVisibleTabs] = useState([]);

    useEffect(() => {
        if (packageData) {
            setVisibleTabs(packageData.Days.slice(0, 5)); // Show first 5 tabs initially
            setShowArrows(packageData.Days.length > 5); // Show arrows only if more than 5 tabs
        }
    }, [packageData]);
    // Check if packageData is defined
    if (!packageData) {
        return <div>Package or Days not found</div>;
    }

    // Function to handle image click for the slider
    const handleImageClick = (images) => {
        setSelectedImages(images);
        setShowSlider(true);  // Show the modal with the slider
    };

    // Function to change active tab and scroll to the corresponding day's content
    const handleTabClick = (index) => {
        setActiveTab(index);
        
        // First scroll into view
        if (dayRefs.current[index]) {
            dayRefs.current[index].scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            
            // Offset adjustment to account for any sticky header (optional)
            const yOffset = -200; // Adjust this value according to the height of your sticky header
            const y = dayRefs.current[index].getBoundingClientRect().top + window.pageYOffset + yOffset;
    
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
        // Scroll left or right inside the tab container
        const scrollTabs = (direction) => {
            if (!packageData) return;
            const totalTabs = packageData.Days.length;
            const currentIndex = packageData.Days.indexOf(visibleTabs[0]);
    
            if (direction === "right" && currentIndex + 5 < totalTabs) {
                setVisibleTabs(packageData.Days.slice(currentIndex + 1, currentIndex + 6));
            } else if (direction === "left" && currentIndex > 0) {
                setVisibleTabs(packageData.Days.slice(currentIndex - 1, currentIndex + 4));
            }
        };
    

    return (
        <div className="itinerary-container1">
            {/* Tabs for each day */}
            {/* {!isMobile && ( */}
                            {/* <div className="sticky-itinerary-tabs1">
                                {showArrows && (
                        <button className="scroll-btn left" onClick={() => scrollTabs("left")}>
                            <FaChevronLeft />
                        </button>
                    )}
                            <div className="tab-menu1"  ref={tabContainerRef}>
                                {visibleTabs.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTabClick(index)} // Change active tab and scroll on click
                                        className={activeTab === index ? 'active-tab1' : ''}
                                    >
                                        Day {packageData.Days.indexOf(_) + 1}
                                    </button>
                                ))}
                            </div>
                            {showArrows && (
                        <button className="scroll-btn right" onClick={() => scrollTabs("right")}>
                            <FaChevronRight />
                        </button>
                    )}
                        </div> */}
            {/* )} */}

            {/* Tab Content */}
            <div className="tab-content1">
                {packageData.Days.map((DayTabs, index) => (
                    <div 
                        key={index} 
                        ref={(el) => (dayRefs.current[index] = el)} // Assign ref for each day's section
                        className={`section1 ${activeTab === index ? 'active-content' : 'hidden-content'}`} // Show only active tab content
                    >
                        <h3 className='Days'>Day {index + 1} : {DayTabs.tittle}</h3>
                        <p>{DayTabs.Description}</p>
                        <ul className='testimonialimages'>
                            {/* Use DayTabs.DayImages instead of packageData.DayImages */}
                            {DayTabs.DayImages.slice(0, 3).map((image, imgIndex) => (
                                <li key={imgIndex}>
                                    <img 
                                        src={image} 
                                        alt="Itinerary Images" 
                                        className='testimonial-image' 
                                        onClick={() => handleImageClick(DayTabs.DayImages)} 
                                    />
                                </li>
                            ))}

                            {/* If there are more than 4 images, show the "+ more" on the 4th image */}
                            {DayTabs.DayImages.length > 4 ? (
                                <li className='more-images'>
                                    <div className='image-container'>
                                        <img 
                                            src={DayTabs.DayImages[3]} 
                                            alt="Itinerary Images"  
                                            className='testimonial-image' 
                                            onClick={() => handleImageClick(DayTabs.DayImages)} 
                                        />
                                        <div className="more-overlay" onClick={() => handleImageClick(DayTabs.DayImages)}>
                                            +{DayTabs.DayImages.length - 3} more
                                        </div>
                                    </div>
                                </li>
                            ) : (
                                DayTabs.DayImages.length === 4 && (
                                    <li>
                                        <img 
                                            src={DayTabs.DayImages[3]} 
                                            alt="Itinerary Images"  
                                            className='testimonial-image' 
                                            onClick={() => handleImageClick(DayTabs.DayImages)} 
                                        />
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Image Slider Modal */}
            {showSlider && (
                <Imageslider
                    images={selectedImages} 
                    onClose={() => setShowSlider(false)}
                />
            )}
        </div>
    );
};

export default DaybydayTabs;
