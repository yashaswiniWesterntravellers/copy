import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import './Itinerarytabs.css'; // Custom CSS
import { FaCalendarAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";
import { TbTrekking } from "react-icons/tb";
import { FaCcVisa } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { IoIosInformationCircle, IoMdCheckmark } from "react-icons/io";
import Transfer from './Transfer';
import PrintDownloadEmail from './ItineraryPrice/PrintDownloadEmail.jsx';
import DaybydayTabs from './DaybydayTabs.jsx';
import DayWiseItinerary from './DayWiseItinerary.jsx';
import { useMediaQuery } from "react-responsive";
import { TiArrowSortedDown, TiArrowSortedUp  } from "react-icons/ti";
import Hotels from './Hotels.jsx';
import Activity from './Activity.jsx';
import Buttonwithicon from '../Button/ButtonwithIcon.jsx';
import { IoCloseSharp } from "react-icons/io5";
import { FaFileAlt, FaCreditCard, FaLock, FaTimesCircle, FaSearch, FaSyncAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Select from "react-select";
import '../Itinerarytabs/ItineraryPrice/travelexpert.css'; // Import your CSS file for styling
import { AddChangeRemove, InsuranceModal } from './AddChangeRemove.jsx';

const ItineraryTabs = ({packages, setPackages}) => {
      const {
        isInsuranceAdded, handleInsuranceAdd, handleInsuranceRemove, handleChange, isModalOpen, closeModal, selectedPlan, setSelectedPlan, appliedPlan, setAppliedPlan,  isVisaAdded, handleVisaRemove, handleVisaAdd } = AddChangeRemove(); // Track if the visa is added
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
    const dayByDayRef = useRef(null);
    const transferRef = useRef(null);
    const hotelRef = useRef(null);
    const actvitiesRef = useRef(null);
    const visaRef = useRef(null);
    const insuranceRef = useRef(null);
    const inclusionRef = useRef(null);
    const exclusionRef = useRef(null);

    const [activeTab, setActiveTab] = useState('dayByDay');
    const { id } = useParams();
    
    const [packageData, setPackageData] = useState(() => {
      // Initial state setup, assuming packages is the original data source
      return packages.find(pkg => pkg.id === parseInt(id));
  });
  const location = useLocation();

  // Check for hotel update
  useEffect(() => {
      if (location.state && location.state.updatedHotel && location.state.hotelToUpdateId) {
          const updatedHotel = location.state.updatedHotel;
          const hotelToUpdateId = location.state.hotelToUpdateId;

          // Update the hotel data in packageData state
          setPackageData(prevPackageData => {
            return {
                ...prevPackageData,
                Hotels: prevPackageData.Hotels.map(h =>
                    h.id === hotelToUpdateId ? updatedHotel : h // Here hotel.id is compared to hotelToUpdateId
                )
            };
        });
      }
  }, [location.state]);

    // Function to scroll to the specific section and set active tab
    const handleScroll = (ref, tab) => {
        const topOffset = 200; // Adjust this offset based on the height of your sticky header
        const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - topOffset,
            behavior: 'smooth',
        });
        setActiveTab(tab); // Set the clicked tab as active
    };

    // Function to detect scroll and highlight the tab accordingly
    const handleScrollHighlight = () => {
        const sections = [
            { ref: dayByDayRef, name: 'dayByDay' },
            { ref: transferRef, name: 'transfer' },
            { ref: hotelRef, name: 'hotel' },
            { ref: actvitiesRef, name: 'activity' },
            { ref: visaRef, name: 'visa' },
            { ref: insuranceRef, name: 'insurance' },
            { ref: inclusionRef, name: 'inclusion' },
            { ref: exclusionRef, name: 'exclusion' },
        ];

        // Loop through sections and check if they're visible in the viewport
        for (let i = 0; i < sections.length; i++) {
            const sectionTop = sections[i].ref.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // If the section is at least 50% visible in the viewport
            if (sectionTop >= 0 && sectionTop <= windowHeight * 0.5) {
                setActiveTab(sections[i].name);
                break;
            }
        }
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScrollHighlight);
        return () => {
            window.removeEventListener('scroll', handleScrollHighlight);
        };
    }, []);

// State to track visibility of each section
const [isOpen, setIsOpen] = useState(null);
    // Function to toggle each section
    const toggleSection = (section) => {
        if (!isMobile) return; // No toggling on desktop
        setIsOpen((prevSection) => (prevSection === section ? null : section));
    };



















          if (!packageData) {
            return <h1>Exclusion data not found</h1>;
          }
      const [ShowTermsConditions, setShowTermsConditions] = useState(false);
      const [modalContent, setModalContent] = useState({ title: '', body: '' });
        const handleTerms = (title, body) => {
            console.log('Open Terms when clicked');
            setModalContent({ title, body });
            setShowTermsConditions(true);
          };
          const closeCacellationPolicy = () => {
            setShowTermsConditions(false);
          };

          const Expert = packageData.Travelexpert; // Access travel expert object



          const [airportOptions, setAirportOptions] = useState([
              { value: "BLR", label: "Bangalore (BLR)" },
              { value: "DEL", label: "Delhi (DEL)" },
              { value: "BOM", label: "Mumbai (BOM)" },
              { value: "MAA", label: "Chennai (MAA)" },
              { value: "HYD", label: "Hyderabad (HYD)" },
              { value: "CCU", label: "Kolkata (CCU)" },
              { value: "GOI", label: "Goa (GOI)" },
              { value: "DXB", label: "Dubai (DXB)" },
              { value: "LHR", label: "London Heathrow (LHR)" },
              { value: "JFK", label: "New York (JFK)" },
            ]);
            const [isModalOpenpricing, setIsModalOpenpricing] = useState(false);
            const [formData, setFormData] = useState({ ...packageData });
          
              // Handle Dropdown Change
              const handleInputChange = (selectedOption) => {
                setFormData({ ...formData, TravellingFrom: selectedOption });
              };
          
            // Save Changes
            const handleSave = () => {
              // Update the first package with the new form data
              setPackages([formData]);
              setIsModalOpenpricing(false);
            };
            const calculateTripCosts = (packageData) => {
              let hotelTotal = 0;
              let transferTotal = 0;
              let activityTotal = 0;
            
              // Loop over destinations and their dayWiseList
              if (packageData?.Days) {
                packageData.Days.forEach((day, dayIndex) => {
                  const daySchedules = day?.schedule || [];
              
                  daySchedules.forEach(schedule => {
              
                    // --- Hotel ---
                    if (Array.isArray(schedule.Hotels)) {
                      schedule.Hotels.forEach(hotel => {
                        const hotelAmount = hotel?.Hotelprice;
                        const isValidHotelAmount = hotelAmount && !isNaN(Number(hotelAmount));
              
                        if (isValidHotelAmount) {
                          // Count how many nights this hotel stays the same across days
                          let stayNights = 1;
                          for (let i = dayIndex + 1; i < packageData.Days.length; i++) {
                            const nextDaySchedules = packageData.Days[i]?.schedule || [];
                            const hasSameHotel = nextDaySchedules.some(sch =>
                              sch.Hotels?.some(h => h?.Hotelid === hotel?.Hotelid)
                            );
              
                            if (hasSameHotel) {
                              stayNights++;
                            } else {
                              break;
                            }
                          }
              
                          hotelTotal += Number(hotelAmount) * stayNights;
                        }
                      });
                    }
              
                    // --- Transfer ---
                    if (Array.isArray(schedule.Transfer)) {
                      schedule.Transfer.forEach(transfer => {
                        const amount = transfer?.Transferamount;
                        if (!isNaN(Number(amount))) {
                          transferTotal += Number(amount);
                        }
                      });
                    }
              
                    // --- Activity ---
                    if (Array.isArray(schedule.Activities)) {
                      schedule.Activities.forEach(activity => {
                        const amount = activity?.Activityprice;
                        if (!isNaN(Number(amount))) {
                          activityTotal += Number(amount);
                        }
                      });
                    }
              
                  });
                });
              };
              
            
              // Insurance
              const insuranceCost = packageData.itineraryAdditionalInfo?.insurance?.insurancePrice || 0;
            
              // Visa
              const visaCost = packageData.itineraryAdditionalInfo?.visa?.visaIncluded ? 2500 : 0;
            
              // Total travelers
              const totalTravelers = (packageData.NoofAdults || 0) + (packageData.NoofChildren || 0) + (packageData.NoofInfants || 0);
            
              // Final cost calculation
              const baseCost = hotelTotal + transferTotal + activityTotal + insuranceCost + visaCost;
              const totalTripCost = baseCost * totalTravelers;
            
              // TCS
              const tcsPercentage = totalTripCost > 700000 ? 0.2 : 0.05;
              const tcsAmount = totalTripCost * tcsPercentage;
            
              const totalPrice = totalTripCost + tcsAmount;
            
              return {
                totalTripCost,
                tcsAmount,
                totalPrice
              };
            };
            const { totalTripCost, tcsAmount, totalPrice } = calculateTripCosts(packageData);
            const discount = packageData.DiscountedPrice;
            const discountType =
              typeof discount === "string" && discount.toString().includes("%")
                ? "PERCENT"
                : "AMOUNT";
            let discountedAmount = 0; 
            if (discountType === "PERCENT") {
              const discountValue = parseFloat(discount.toString().replace("%", "").trim());
              discountedAmount = (totalPrice * discountValue) / 100;
            } else {
              discountedAmount = Number(discount);
            }  
            const totalPayableAmount = totalPrice - discountedAmount;
          
            const Insurance = packageData.Insurance; // Access the visa object directly

            const visa = packageData.visa; // Access the visa object directly
    return (
        <div className="itinerary-container">
            {/* Sticky Tab Menu */}
            {!isMobile && (
                        <div className="sticky-itinerary-tabs">
                            <div className="tab-menu">
                                <button onClick={() => handleScroll(dayByDayRef, 'dayByDay')} className={activeTab === 'dayByDay' ? 'active-tab' : ''}>
                                    Day by Day
                                </button>
                                <button onClick={() => handleScroll(transferRef, 'transfer')} className={activeTab === 'transfer' ? 'active-tab' : ''}>
                                    Transfer
                                </button>
                                <button onClick={() => handleScroll(hotelRef, 'hotel')} className={activeTab === 'hotel' ? 'active-tab' : ''}>
                                    Hotel
                                </button>
                                <button onClick={() => handleScroll(actvitiesRef, 'activity')} className={activeTab === 'activity' ? 'active-tab' : ''}>
                                    Activity
                                </button>
                                <button onClick={() => handleScroll(visaRef, 'visa')} className={activeTab === 'visa' ? 'active-tab' : ''}>
                                    Visa
                                </button>
                                <button onClick={() => handleScroll(insuranceRef, 'insurance')} className={activeTab === 'insurance' ? 'active-tab' : ''}>
                                    Insurance
                                </button>
                                <button onClick={() => handleScroll(inclusionRef, 'inclusion')} className={activeTab === 'inclusion' ? 'active-tab' : ''}>
                                    Inclusions
                                </button>
                                <button onClick={() => handleScroll(exclusionRef, 'exclusion')} className={activeTab === 'exclusion' ? 'active-tab' : ''}>
                                    Exclusions
                                </button>
                            </div>
                        </div>
            )}
            <div className='tab-content-pricing'>
                {/* Tab Content */}
                <div className="tab-content">
                    {/* Day by Day Section */}
                    <div ref={dayByDayRef} className="section">
                        <h2 onClick={() => toggleSection("dayByDay")}>
                            <FaCalendarAlt />
                            <span className="itinerary-text">Day by Day Itinerary</span>
                            {isMobile && (
                                <span className="dropdown-arrow">
                                {isOpen === "dayByDay" ? <TiArrowSortedUp /> : <TiArrowSortedDown />} 
                            </span>
                            )}
                        </h2>
                        {!isMobile || isOpen === "dayByDay" ?  // Show content only if state is true
                        <>
                        <div className="day-itinerary">
                            <DayWiseItinerary packages={packages} />
                        </div>
                        <div>
                            <DaybydayTabs packages={packages} />
                        </div>
                        </>
                         : null 
                        }
                    </div>

                    {/* Transfer Section */}
                    <div ref={transferRef} className="section">
                        <h2  onClick={() => toggleSection("transfer")}><FaCarSide /> <span className="itinerary-text">Transfer Information</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "transfer" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {!isMobile || isOpen === "transfer" ? <Transfer packages={packages} /> : null }
                    </div>

                    {/* Hotel Section */}
                    <div ref={hotelRef} className="section">
                        <h2 onClick={() => toggleSection("hotel")}><RiHotelFill /> <span className="itinerary-text">Hotel Information</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "hotel" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {/* {!isMobile || isOpen === "hotel" ? <Hotel hotelData={packageData.Hotels} /> : null } */}
                        {!isMobile || isOpen === "hotel" ? <Hotels packages={packages} /> : null }
                    </div>

                    {/* Activities Section */}
                    <div ref={actvitiesRef} className="section">
                        <h2 onClick={() => toggleSection("activity")}><TbTrekking /> <span className="itinerary-text">Activities Information</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "activity" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {/* {!isMobile || isOpen === "activity" ? <Activities packages={packages} /> : null } */}
                        {!isMobile || isOpen === "activity" ? <Activity packages={packages} /> : null }
                    </div>

                    {/* Visa Section */}
                    <div ref={visaRef} className="section">
                        <h2 onClick={() => toggleSection("visa")}><FaCcVisa /> <span className="itinerary-text">Visa Information</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "visa" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {!isMobile || isOpen === "visa" ? 
                                <div className="Visa-content">
                                <img 
                                  src={visa.visaImage} 
                                  alt="Visa Plan" 
                                  className="insurance-image" 
                                />
                                            {visa.visaExcluded && (
                              <div className="excluded-badge">
                                <span>Excluded</span>
                              </div>
                            )}
                                {visa.visaIncluded && (
                              <div className="included-badge">
                                <span>Included</span>
                              </div>
                            )}
                        
                                <div className="insurance-details">
                                    <h2 className="insurance-plan">{visa.visaTitle}</h2>
                                    <p>{visa.visaDescription}</p>
                                </div>
                                <div className="insurance-actions">
                                    {isVisaAdded ? (
                                        <button className="remove-action" onClick={handleVisaRemove}>Remove</button>
                                    ) : (
                                        <button className="add-button" onClick={handleVisaAdd} >Add</button>
                                    )}
                                </div>
                            </div>
                        : null }
                    </div>

                    {/* Insurance Section */}
                    <div ref={insuranceRef} className="section">
                        <h2 onClick={() => toggleSection("insurance")}><FaAddressCard /> <span className="itinerary-text">Insurance Information</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "insurance" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {!isMobile || isOpen === "insurance" ? 
                                <div className="day-itinerary">
                                    <div className="insurance-content">
                                <img 
                                  src={Insurance.insuranceImage} 
                                  alt="Insurance Plan" 
                                  className="insurance-image" 
                                />
                                {Insurance.insuranceExcluded && (
                                  <div className="excluded-badge">
                                    <span>Excluded</span>
                                  </div>
                                )}
                                        {Insurance.insuranceIncluded && (
                                  <div className="included-badge">
                                    <span>Included</span>
                                  </div>
                                )}
                                <div className="insurance-details">
                                  <div className='insurance-title-plan-actions'>
                                  {isInsuranceAdded  ? (
                                  <div className='insurance-title-plan'>
                                  <h4 className="insurance-tittle">{appliedPlan.insuranceTitle}</h4>
                                  <h2 className="insurance-plan">{appliedPlan.insurancePlanType}</h2>
                                  </div>
                                  ) : (
                                  <span className="insuranceInfoMessage">{Insurance.insuranceInfoMessage}</span>
                                  )}
                                  <div className="insurance-actions">
                                {isInsuranceAdded ? (
                                        <>
                                          <button className="change-action" onClick={handleChange} >Change</button>
                                          <button className="remove-action" onClick={handleInsuranceRemove} >Remove</button>
                                        </>
                                      ) : (
                                        <button className="add-button" onClick={handleInsuranceAdd} >Add</button>
                                      )}
                                      {isModalOpen && <InsuranceModal selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setAppliedPlan={setAppliedPlan} closeModal={closeModal} />}
                                </div>
                                  </div>
                                  {isInsuranceAdded  && (
                                  <p>{Insurance.insuranceDescription}</p>
                                )}
                                </div>
                              </div>
                              <hr />
                        
                              <div className="insurance-price-info">
                              <span className='insurance-info-icon'><IoIosInformationCircle /></span>
                                <p>{Insurance.insuranceInformation}</p>
                              </div>
                                </div>
                        : null }
                    </div>

                    {/* Inclusions Section */}
                    <div ref={inclusionRef} className="section">
                        <h2 onClick={() => toggleSection("inclusion")}><IoMdCheckmark /> <span className="itinerary-text">Inclusions Information</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "inclusion" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {!isMobile || isOpen === "inclusion" ? 
                                <div>
                                <ul className="day-itinerary">
                                  {packageData.Inclusions.map((inclusion, index) => (
                                    <li className='inclusion' key={index}>{inclusion.inclusionName}</li>
                                  ))}
                                </ul>
                              </div>
                        : null }
                    </div>

                    {/* Exclusions Section */}
                    <div ref={exclusionRef} className="section">
                        <h2 onClick={() => toggleSection("exclusion")}><IoCloseSharp /> <span className="itinerary-text">Exclusions Information</span>
                        {isMobile && (
                            <span className="dropdown-arrow">
                                {isOpen === "exclusion" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        )}
                        </h2>
                        {!isMobile || isOpen === "exclusion" ? 
                                <div>
      <ul className="day-itinerary">
        {packageData.Exclusions.map((exclusion, index) => (
          <li key={index} className='exclusion'>{exclusion.exclusionName}</li>
        ))}
      </ul>
    </div>
                        : null }
                    </div>
                </div>
                                    <div className='itinerary-price'>
                                    {!isMobile && (
                                            <div className="booking-summary-container">
                                                <div>
                                                <div className="trip-details">
                                                  <span className="trip-date">
                                                    {packageData.TravellingDate} . {packageData.TravellingFrom.label} . {packageData.NoofAdults} Adults . {packageData.NoofChildren} Children . {packageData.NoofInfants} Infants . {packageData.Rooms} Room
                                                  </span>
                                                  <span className="edit-icon" onClick={() => setIsModalOpenpricing(true)}>
                                                    <MdEdit />
                                                  </span>
                                                </div>
                                        
                                              <div className='price-container'>
                                                <div className="price-section">
                                                  <div className="total-price1">
                                                    <span>Total Payable Amount</span>
                                                    <div className="total-price">
                                                      <span className="price">₹ {totalPayableAmount.toLocaleString('en-IN')}/-</span>
                                                      <span className="discounted-price">₹ {discountedAmount.toLocaleString('en-IN')}/-</span>
                                                    </div>
                                                  </div>
                                                  {!isMobile && (<hr />)}
                                                  {!isMobile && (
                                                    <div className="cost-breakdown">
                                                      <div className="trip-cost">
                                                        <span>Trip Cost :</span>
                                                        <span>₹ {totalTripCost.toLocaleString()}/-</span>
                                                      </div>
                                                      <div className="tcs-cost">
                                                        <span>TCS ({totalTripCost > 700000 ? '20%' : '5%'}) :</span>
                                                        <span>₹{tcsAmount.toLocaleString('en-IN')}-</span>
                                                      </div>
                                                      <hr />
                                                      <div className="total-payable">
                                                        <span>Total Price :</span>
                                                        <span>₹{totalPrice.toLocaleString('en-IN')}/-</span>
                                                      </div>
                                                    </div>
                                                  )}
                                                </div>
                                                <button className="book-now-btn">Book {!isMobile && "Now"}</button>
                                              </div>
                                              </div>
                                              {/* Modal Popup */}
                                              {isModalOpenpricing && (
                                                <div className="modal-overlay" onClick={() => setIsModalOpenpricing(false)}>
                                                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                    <div className="modal-header">
                                                      <h2>What is your travel plan like?</h2>
                                                      <IoClose className="close-icon" onClick={() => setIsModalOpenpricing(false)} />
                                                    </div>
                                                    <div className="modal-body">
                                                      <label>Departing from</label>
                                                      <Select
                                                        options={airportOptions}
                                                        value={formData.TravellingFrom}
                                                        onChange={handleInputChange}
                                                        isSearchable
                                                        placeholder="Search Airport..."
                                                      />
                                                      <label>Departure date</label>
                                                      <input
                                                        type="date"
                                                        name="TravellingDate"
                                                        value={formData.TravellingDate}
                                                        onChange={(e) => setFormData({ ...formData, TravellingDate: e.target.value })}
                                                      />
                                                      <label>Number of Adults</label>
                                                      <input
                                                        type="number"
                                                        name="NoofAdults"
                                                        value={formData.NoofAdults}
                                                        onChange={(e) => setFormData({ ...formData, NoofAdults: parseInt(e.target.value) })}
                                                      />
                                                      <label>Number of Children</label>
                                                      <input
                                                        type="number"
                                                        name="NoofChildren"
                                                        value={formData.NoofChildren}
                                                        onChange={(e) => {
                                                          const value = parseInt(e.target.value);
                                                          setFormData({
                                                            ...formData,
                                                            NoofChildren: value,
                                                            ChildrenAges: Array(value).fill('') // reset ages when number of children changes
                                                          });
                                                        }}
                                                      />
                                                              {/* Age fields for each child */}
                                                {formData.NoofChildren > 0 &&
                                                  formData.ChildrenAges?.map((age, index) => (
                                                    <div key={index}>
                                                      <label>Age of Child {index + 1}</label>
                                                      <input
                                                        type="number"
                                                        min="0"
                                                        name={`ChildAge_${index}`}
                                                        value={age}
                                                        onChange={(e) => {
                                                          const newAges = [...formData.ChildrenAges];
                                                          newAges[index] = e.target.value;
                                                          setFormData({ ...formData, ChildrenAges: newAges });
                                                        }}
                                                      />
                                                    </div>
                                                  ))}
                                                          <label>Number of Infants</label>
                                                <input
                                                  type="number"
                                                  name="NoofInfants"
                                                  value={formData.NoofInfants}
                                                  onChange={(e) => setFormData({ ...formData, NoofInfants: parseInt(e.target.value) })}
                                                />
                                                      <label>Rooms</label>
                                                      <input
                                                        type="number"
                                                        name="Rooms"
                                                        value={formData.Rooms}
                                                        onChange={(e) => setFormData({ ...formData, Rooms: parseInt(e.target.value) })}
                                                      />
                                                    </div>
                                                    <button className="save-btn" onClick={handleSave}>
                                                      Save Changes
                                                    </button>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                    )}

                                        <div className="chat-expert-card">
                                          <h2 className="chat-title">Chat with our Travel Expert</h2>
                                          <div className="expert-info">
                                            <img
                                              src={Expert.Travelexpertimage} // Replace with your expert image link
                                              alt="Travel Expert"
                                              className="expert-image"
                                            />
                                            <div className="expert-details">
                                              <h4 className="expert-name">{Expert.Travelexpertname}</h4>
                                              <p className="expert-trips">Planned {Expert.Tripsplannedsofar} trips so far</p>
                                            </div>
                                            <div className="contact-icons">
                                              <FaPhone className="phoneicon" />
                                              <IoLogoWhatsapp className="whatsapp-icon" />
                                            </div>
                                          </div>
                                        </div>
                                        

                                                                <div className="Buttonwithicon">
                                      <div>
                                      {[
                                      { icon: <FaFileAlt />, text: 'Terms & Conditions', body: packages[0].itineraryAdditionalInfo.termsConditions },
                                      { icon: <FaCreditCard />, text: 'Payment Policy', body: packages[0].itineraryAdditionalInfo.paymentPolicy },
                                      { icon: <FaLock />, text: 'Privacy Policy', body: packages[0].itineraryAdditionalInfo.privacyPolicy },
                                      { icon: <FaTimesCircle />, text: 'Cancellation Policy', body: packages[0].itineraryAdditionalInfo.cancellationPolicy },
                                      { icon: <FaSearch />, text: 'Our Scope of Service', body: packages[0].itineraryAdditionalInfo.scopeOfService },
                                      { icon: <FaSyncAlt />, text: 'Amendment of Booking of Guest', body: packages[0].itineraryAdditionalInfo.amendmentPolicy },
                                    ].map(({ icon, text, body }, index, arr) => (
                                      <React.Fragment key={index}>
                                        <Buttonwithicon
                                          icon={icon}
                                          buttontext={text}
                                          onClick={() => handleTerms(text, body)}
                                          className="texted-button1"
                                        />
                                        {index < arr.length - 1 && <hr className="separator" />}
                                      </React.Fragment>
                                    ))}
                                    
                                        {ShowTermsConditions && (
                                                <div className="modal-overlay-mailQuote">
                                                  <div className="modal-content-mailQuote">
                                                    <div className='modal-title-close'>
                                                    <h2>{modalContent.title}</h2>
                                                    <button className="close-button-mailQuote" onClick={closeCacellationPolicy}><IoCloseSharp /></button>
                                                    </div>
                                                    <div className='modal-heading-paragraph'>
                                                        <p>{modalContent.body}</p>
                                                    </div>
                                                  </div>
                                                </div>
                                        )}
                                      </div>
                                    </div>
                                    <PrintDownloadEmail />
                                </div>
            </div>
        </div>
    );
};

export default ItineraryTabs;
