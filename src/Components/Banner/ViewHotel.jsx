import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from "../Navigation/NavBar";
import BackButton from '../BackButton/BackButton';
import RatingStars from '../Rating/RatingStars';
import Buttonwithicon from '../Button/ButtonwithIcon';
import { LuMapPin } from 'react-icons/lu';
import Packagelistingimages from '../Packagelistingimages/Packagelistingimages';
import { TbChartTreemap, TbCreditCardRefund } from 'react-icons/tb';
import { LiaUsersSolid } from 'react-icons/lia';
import { IoIosInformationCircle } from 'react-icons/io';
import BackfromListing from '../BackButton/BackfromListing';
export default function ViewHotel(){
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from;
    console.log("Navigate From", from);
    const hotel = location.state?.hotel1 ||location.state?.selectedHotel || location.state?.hotel; // Safely extract the hotel data
    const changeHotelData = {
        hotel: location.state?.hotel1,
        day: location.state?.day1,
        schedule: location.state?.schedule1,
        from: from,
      };
    const isHotelSelectedForSchedule = location.state?.day !== undefined && location.state?.schedule !== undefined && !location.state?.hotel1;

console.log("isHotelSelectedForSchedule", isHotelSelectedForSchedule);
        const hotelOverviewRef = useRef(null); // Renamed ref for clarity
        const hotelAmentiesRef= useRef(null);
        const hotelInclusionsExclusionsRef= useRef(null);
        const hotelNearbyAttractionsRef= useRef(null);
        const [activeTab, setActiveTab] = useState('HotelOverview');
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
    const handleMapView = () => {
        console.log("Map view action triggered");
    };
    const handleonClickChangeHotel = () =>{
       navigate(`/HotelModal`, {
  state: changeHotelData,
});

    }
    return(
        <div>
            <BackfromListing Modaltext={hotel?.Hotelname} hotel="hotel" />
            <div className="package-itinerary">
            <div className="change-hotel-container">
            <div className="change-hotel">
            <h3>{hotel?.Hotelname}</h3>
            <p className="Hotel-Rating">
                <RatingStars rating={hotel?.Hotelrating} /> Trip Advisor
            </p>
            <div className='Mapview'>
                <p>{hotel?.Hoteladdress ? hotel?.Hoteladdress : "Address not available"}</p>
                <Buttonwithicon 
                icon={<LuMapPin className='Mapview-button-icon' />}
                buttontext="Map View" 
                className="Mapview-button"
                onClick={handleMapView}
                />
            </div>
            </div>
            </div>
            <Packagelistingimages packageImages={hotel?.HotelheaderImages} />
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
                            <h3>Overview</h3>
                            <p className='Hotel-Overview'>{hotel?.HotelOverview}</p>
                        </div>
                        <div ref={hotelAmentiesRef} className='Hotel-section'>
                            <h3>Amenties</h3>
                            <ul className='Hotel-content-ul'>
  {hotel?.HotelAmenties?.length > 0 ? (
    hotel.HotelAmenties.map((item, index) => <li key={index}>{item}</li>)
  ) : (
    <p>No nearby attraction found.</p>
  )}
</ul>
                        </div>
                        <div ref={hotelInclusionsExclusionsRef} className='Hotel-section'>
                            <div className='Hotel-Inclusion-Exclusion'>
                                <div className='Hotel-Inclusion'>
                                    <h3>Inclusions</h3>
                                    <ul className='Hotel-Inclusioncontent-ul'>
  {hotel?.Hotelinclusions?.length > 0 ? (
    hotel.Hotelinclusions.map((item, index) => <li key={index}>{item}</li>)
  ) : (
    <p>No inclusions found.</p>
  )}
</ul>
                                </div>
                                <div className='Hotel-Exclusion'>
                                    <h3>Exclusions</h3>
                                    <ul className='Hotel-Exclusioncontent-ul'>
  {hotel?.Hotelexclusions?.length > 0 ? (
    hotel.Hotelexclusions.map((item, index) => <li key={index}>{item}</li>)
  ) : (
    <p>No Exclusions found.</p>
  )}
</ul>
                                </div>
                            </div>
                        </div>
                        <div ref={hotelNearbyAttractionsRef} className='Hotel-section'>
                            <h3>Nearby Attractions</h3>
                            <ul className='Hotel-content-ul'>
  {hotel?.HotelNearbyAttractions?.length > 0 ? (
    hotel.HotelNearbyAttractions.map((item, index) => <li key={index}>{item}</li>)
  ) : (
    <p>No Nearby attractions found.</p>
  )}
</ul>
                        </div>
                    </div>
                    <div className='itinerary-price'>
                        <div className="Hotel-summary-container">

                            <div className="changehotel-remove">
  <button className='change-hotel-button' onClick={handleonClickChangeHotel}>
    Change Hotel
  </button>

  {isHotelSelectedForSchedule && (
    <button
      className='change-hotel-button'
      onClick={() => {
        // Example: pass it back or call API
        navigate(from, {
          state: {
            addedHotel: hotel,
            day: location.state.day,
            schedule: location.state.schedule,
          },
        });
      }}
    >
      Add to Itinerary
    </button>
  )}
</div>

                            <hr />
                            <div className="changehotel-remove">
                                <h4>{hotel?.Hoteltype} Hotel </h4>
                                <p>Horizon City View</p>
                            </div>
                            <hr />
                            <div className="changehotel-remove">
                                <div className="Hotel-Details">
                                    <p>Check-in Time :</p>
                                    <h4>{hotel?.Hotelcheckintime}</h4>
                                </div>
                                <div className="Hotel-Details">
                                    <p>Check-out Time :</p>
                                    <h4>{hotel?.Hotelcheckouttime}</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="hotel-services">
                                <div className="hotel-Type">
                                    <span className="hotel-icon"><TbChartTreemap /></span>
                                    <p>{hotel?.Hotelarea}</p>
                                </div>
                                <div className="hotel-Type">
                                    <span className="hotel-icon"><TbCreditCardRefund /></span>
                                    <p>{hotel?.Hotelamount}</p>
                                </div>
                                <div className="hotel-Type">
                                    <span className="hotel-icon"><LiaUsersSolid /></span>
                                    <p>{hotel?.Hotelaccomodates}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="changehotel-remove">
                                <span><IoIosInformationCircle className='Hotel-info-icon' /></span>
                                <p>{hotel?.HotelInfo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}