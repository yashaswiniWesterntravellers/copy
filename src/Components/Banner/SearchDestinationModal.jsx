import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./searchdestinationmodal.css"; 
import image from "../../Assets/Bhutan.jpg";

export default function DestinationModal({ isOpen, onClose }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [step, setStep] = useState(1);
    const [showRoomModal, setShowRoomModal] = useState(false); 
    const [showCityModal, setShowCityModal] = useState(false);
    const [roomConfig, setRoomConfig] = useState({ adults: 0, children: 0, infants: 0, rooms: 1 });
    const [tempRoomConfig, setTempRoomConfig] = useState({ adults: 0, children: 0, infants: 0, rooms: 1 });
    const [selectedCity, setSelectedCity] = useState([]);
    const [totalDaysSelected, setTotalDaysSelected] = useState(0);
const [maxDays, setMaxDays] = useState(5); // User-defined max days
const [errorMessage, setErrorMessage] = useState("");
    const [citySearch, setCitySearch] = useState("");
    const [childAges, setChildAges] = useState([]);
    const [destinations] = useState([
        { name: "Maldives", tag: "Honeymoon", tagClass: "search-honeymoon" },
        { name: "Europe", tag: "Trending", tagClass: "search-trending" },
        { name: "Singapore", tag: "Popular", tagClass: "search-popular" },
        { name: "Bali", tag: "In Season", tagClass: "search-in-season" },
        { name: "Thailand", tag: "Budget", tagClass: "search-budget" },
        { name: "Abu Dhabi", tag: "Popular", tagClass: "search-popular" },
        { name: "Dubai", tag: "", tagClass: "" },
        { name: "UK", tag: "", tagClass: "" },
        { name: "US", tag: "", tagClass: "" },
    ]);
    const [durations] = useState([
        { label: "3-5 Days", icon: "🌒", recommended: false },
        { label: "6-8 Days", icon: "🌓", recommended: false },
        { label: "9-11 Days", icon: "🌔", recommended: true },
        { label: "12-15 Days", icon: "🌕", recommended: false },
    ]);
        // Travel companions options
        const [companions] = useState([
            { label: "Couple", icon: "❤️" },
            { label: "Family", icon: "👨‍👩‍👧" },
            { label: "Friends", icon: "🎉" },
            { label: "Solo", icon: "🎒" },
        ]);
        const [citiesByDestination] = useState([
                { name: "Innsbruck", description: "Swarovski Shopping Spree", tag: "PRICEY", tags: ["Must See", "Zoo"] },
                { name: "Vienna", description: "Opera Houses and Museums", tag: "PRICEY", tags: ["Theme Parks", "Must See"] },
                { name: "Salzburg", description: "Mozart's birthplace", tag: "PRICEY", tags: ["Must See", "Cruise"] },
                { name: "Zell am See", description: "Lakes and Scenery", tag: "PRICEY", tags: ["Caves", "Glacier Walk"] },
                { name: "bruck", description: "Swarovski Shopping Spree", tag: "PRICEY", tags: ["Must See", "Zoo"] },
                { name: "nna", description: "Opera Houses and Museums", tag: "PRICEY", tags: ["Theme Parks", "Must See"] },
                { name: "zburg", description: "Mozart's birthplace", tag: "PRICEY", tags: ["Must See", "Cruise"] },
                { name: "Zell", description: "Lakes and Scenery", tag: "PRICEY", tags: ["Caves", "Glacier Walk"] },
            ]);
            const [availableCities, setAvailableCities] = useState(citiesByDestination);
            const navigate = useNavigate();

    if (!isOpen) return null;

    // Handle Destination Click
    const handleDestinationClick = (destination) => {
            setSelectedDestination(destination);
            setStep(1);
    };
    // Handle Duration Click -> Move to Step 2
    const handleDurationClick = (duration) => {
        setSelectedDuration(duration);
        setStep(2); // Move to step 2
    };
    // Handle Back Click (Handles Both Cases)
    const handleBackClick = (type) => {
        if (type === "destination") {
            setSelectedDestination(null); // Go back to search
            setSelectedDuration(null);
            setRoomConfig({ adults: 0, children: 0, infants: 0, rooms: 1 });
            setStep(1);
        } else if (type === "duration") {
            setStep(1); // Go back to duration selection
            setSelectedDuration(null);
            setRoomConfig({ adults: 0, children: 0, infants: 0, rooms: 1 });
        } else if (type === "room") {
            setRoomConfig({ adults: 0, children: 0, infants: 0, rooms: 1 });
            setStep(2); // Go back to duration selection
        }
    };
    const handleCompanionClick = (companion) => {
        if (companion.label === "Couple") {
            setRoomConfig({ adults: 2, children: 0, rooms: 1 });
            setStep(3);
        } else if (companion.label === "Solo") {
            setRoomConfig({ adults: 1, children: 0, rooms: 1 });
            setStep(3);
        } else {
            setShowRoomModal(true); // Show room selection popup
        }
    };
    // Update temporary room config
    const handleRoomConfigChange = (field, value) => {
        const numValue = parseInt(value);
        
        if (field === "children") {
            setTempRoomConfig({ ...tempRoomConfig, children: numValue });
            setChildAges((prevAges) => {
                if (numValue > prevAges.length) {
                    return [...prevAges, ...new Array(numValue - prevAges.length).fill(1)]; // Default age 1
                }
                return prevAges.slice(0, numValue);
            });
        } else {
            setTempRoomConfig({ ...tempRoomConfig, [field]: numValue });
        }
    };
    
// Confirm Room Selection
const confirmRoomSelection = () => {
    if (tempRoomConfig.adults + tempRoomConfig.children + tempRoomConfig.infants <= 6) {
        setRoomConfig(tempRoomConfig); // Only update when confirmed
        setShowRoomModal(false);
        setStep(3);
    }
};
// Handle City Selection
const handleCityClick = (city) => {
    // Ensure adding this city does not exceed max days
    if (totalDaysSelected + 1 > maxDays) {
        setErrorMessage(`You cannot select more than ${maxDays} days.`);
        return;
    }

    setSelectedCity((prevSelected) => [...prevSelected, { ...city, duration: "1D" }]);
    setAvailableCities((prevAvailable) => prevAvailable.filter((c) => c.name !== city.name));
    
    setTotalDaysSelected(totalDaysSelected + 1);
    setErrorMessage(""); // Clear any previous error
};


const handleRemoveCity = (city) => {
    const durationValue = parseInt(city.duration.replace("D", ""), 10);

    // Update total days
    const updatedTotalDays = totalDaysSelected - durationValue;

    // Remove the city from the selected list
    const updatedCities = selectedCity.filter((c) => c.name !== city.name);
    setSelectedCity(updatedCities);

    // **Add the removed city back to the available cities list**
    setAvailableCities((prevCities) => [...prevCities, city]);

    // Update total days
    setTotalDaysSelected(updatedTotalDays);

    // **Fix:** Clear error message if total days are within the limit
    if (updatedTotalDays <= maxDays) {
        setErrorMessage("");
    }

    // **Fix:** Close the popup if no cities are left
    if (updatedCities.length === 0) {
        setShowCityModal(false);
    }
};





const handleDurationChange = (cityName, newDuration) => {
    const newDurationValue = parseInt(newDuration.replace("D", ""), 10);
    
    // Find the existing city
    const currentCity = selectedCity.find(city => city.name === cityName);
    const currentCityDuration = parseInt(currentCity.duration.replace("D", ""), 10);

    // Calculate the new total duration
    const updatedTotalDays = totalDaysSelected - currentCityDuration + newDurationValue;

    // Prevent exceeding max days
    if (updatedTotalDays > maxDays) {
        setErrorMessage(`You cannot select more than ${maxDays} days.`);
        return;
    }

    setErrorMessage(""); // Clear error if within limit
    setTotalDaysSelected(updatedTotalDays);

    // Update the city's duration in the list
    setSelectedCity((prevSelected) =>
        prevSelected.map((city) =>
            city.name === cityName ? { ...city, duration: newDuration } : city
        )
    );
};

  // Filter cities based on search term
  const filteredCities = availableCities.filter((city) =>
    city.name.toLowerCase().includes(citySearch.toLowerCase())
  );
  const handleEditClick = () => {
    setShowCityModal(true);
};

    return (
        <div className="search-modal-overlay" onClick={onClose}>
            <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="search-close-button" onClick={onClose}>×</button>
                {!selectedDestination ? (
                    <>
                <h2 className="search-modal-heading">What's <span className="search-highlight">your pick</span> for your next vacation?</h2>
                <div className="search-bar">
                    <i className="pi pi-search search-modal-icon"></i>
                    <input 
                    type="text" 
                    placeholder="Pick your destination" 
                    className="search-modal-input" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <ul className="search-destination-list">
                {destinations.filter(destination =>
                                destination.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map((destination, index) => (
                            <li key={index} onClick={() => handleDestinationClick(destination)}>
                                {destination.name} 
                                {destination.tag && <span className={`search-tag ${destination.tagClass}`}>{destination.tag}</span>}
                            </li>
                        ))}
                </ul>
                </>
                ) : (
<div className="planner-container">
                {/* Country Selection */}
                <div className="header">
                <span className="label">NOW PLANNING YOUR HOLIDAY TO</span>
                <div className="selected-tags">
                <p className="selected-tag" onClick={() => handleBackClick("destination")}>{selectedDestination.name}</p>
                {selectedDuration && <p className="selected-tag" onClick={() => handleBackClick("duration")}>{selectedDuration}</p>}
                {roomConfig && roomConfig.adults > 0 && (
                                <p className="selected-tag" onClick={() => handleBackClick("room")}>
                                    PAX: {roomConfig.adults} Adults, {roomConfig.children} Children 
                                    {roomConfig.children > 0 && ` (${childAges.join(", ")} years)`}, {roomConfig.infants} Infants, {roomConfig.rooms} Room(s)
                                </p>
                            )}
                            </div>
            </div>
            {/* Progress Bar */}
            <div className="progress-bar">
                <div className="progress-filled" style={{ width: step === 1 ? "25%" : step === 2 ? "50%" : step === 3 ? "75%" : "100%" }}></div>
            </div>

                        {/* Step 1: Choose Duration */}
                        {step === 1 && (
                            <>

            {/* Step Title */}
            <h2 className="step-title">What's the duration of your holiday?</h2>

            {/* Duration Selection */}
            <div className="duration-options">
                {durations.map((item, index) => (
                    <div
                        key={index}
                        className={`duration-card ${selectedDuration === item.label ? "selected" : ""}`}
                        onClick={() => handleDurationClick(item.label)}
                    >
                        <div className="duration-icon">{item.icon}</div>
                        <p>{item.label}</p>
                        {item.recommended && <span className="recommended-badge">OUR PICK</span>}
                    </div>
                ))}
            </div>
            </>
                )}
                {/* Step 2: Choose Who's Traveling */}
                {step === 2 && (
                            <>
                                <h2 className="step-title">Who is travelling with you?</h2>
                                <div className="companion-options">
                                    {companions.map((item, index) => (
                                        <div key={index} className="companion-card" onClick={() => handleCompanionClick(item)}>
                                            <div className="companion-icon">{item.icon}</div>
                                            <p>{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {step === 3 && (
    <div className="city-selection-container">
        <div className="city-search-bar">
        <i className="pi pi-search search-modal-icon"></i>
            <input 
                type="text" 
                placeholder="Find a city" 
                value={citySearch}
                className="search-modal-input"
                onChange={(e) => setCitySearch(e.target.value)}
            />
        </div>
        <div className="heading-arrows">
        <h3 className="popular-heading">Or, start with these popular choices</h3>
    </div>
        <div className="city-list-container">
        {filteredCities.length > 0 ? (
        <div className="city-list">
        {filteredCities.slice(0, 4).map((item, index) => (
        <div key={index} className="city-card" onClick={() => handleCityClick(item)}>
            <img src={image} alt={item.name} />
            <h4>{item.name}, {selectedDestination.name}</h4>
            <p>{item.description}</p>
            <span className="price-tag">{item.tag}</span>
            <div className="city-tags">
                {item.tags.map((tag, i) => <span key={i} className="city-tag">{tag}</span>)}
            </div>
        </div>
    ))}
     {filteredCities.length === 0 && (
                <p className="All-Cities-Selected">All cities have been selected.</p>
              )}
</div>
) : (
    <p className="All-Cities-Selected">No cities found/All Cities Selected</p>
)}
        </div>

{/* Selected Cities Section */}
<div className="selected-cities">
    <div className="selected-cities-image">
        {selectedCity.slice(0, 3).map((city, index) => (
            <img 
                key={index} 
                src={image} 
                alt={city.name} 
                className="selected-city-img"
            />
        ))}
    </div>

    {selectedCity.length > 3 && (
        <div className="more-cities">+{selectedCity.length - 3}</div>
    )}

    <p>Too much to see, Too little time</p>
    <div className="edit-build">
    <button className="edit-button" onClick={handleEditClick}>Edit</button>
    <button 
  className="build-button"  
  onClick={() => 
    navigate("/CreateItinerary", {
      state: { selectedDestination, selectedDuration, roomConfig, selectedCity }
    })
  }
>
  Build Itinerary
</button>

    </div>
</div>


    </div>
)}

{/* Room Selection Popup */}
{showRoomModal && (
    <div className="room-modal-overlay">
        <div className="room-modal">
            <button className="close-modal-btn" onClick={() => setShowRoomModal(false)}>×</button>
            <h2 className="step-title">How to configure your rooms?</h2>
            
            <div className="room-config-inputs">
                <div className="room-config-field">
                    <label className="room-config-label">Adults:</label>
                    <select 
    value={tempRoomConfig.adults} 
    onChange={(e) => handleRoomConfigChange("adults", e.target.value)}>
    {[...Array(7).keys()].map(num => (
        <option key={num} value={num}>{num}</option>
    ))}
</select>

                </div>

                <div className="room-config-field">
                    <label className="room-config-label">Children:</label>
                    <select 
                        value={tempRoomConfig.children} 
                        onChange={(e) => handleRoomConfigChange( "children", e.target.value )}>
                        {[...Array(7).keys()].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                {tempRoomConfig.children > 0 && (
    <div className="room-config-field">
        <label className="room-config-label">Children's Age:</label>
        {childAges.map((age, index) => (
            <select 
                key={index} 
                value={age} 
                onChange={(e) => {
                    const newAges = [...childAges];
                    newAges[index] = parseInt(e.target.value);
                    setChildAges(newAges);
                }}
            >
                {[...Array(18).keys()].map(num => (
                    <option key={num} value={num + 1}>{num + 1} years</option>
                ))}
            </select>
        ))}
    </div>
)}


                <div className="room-config-field">
                    <label className="room-config-label">Infants:</label>
                    <select 
                        value={tempRoomConfig.infants} 
                        onChange={(e) => handleRoomConfigChange("infants",e.target.value)}>
                        {[...Array(7).keys()].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>

                <div className="room-config-field">
                    <label className="room-config-label">Rooms:</label>
                    <select 
                        value={tempRoomConfig.rooms} 
                        onChange={(e) => handleRoomConfigChange("room", e.target.value)}>
                        {[...Array(5).keys()].map(num => (
                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Validation: Total People Cannot Exceed 6 */}
            {roomConfig.adults + roomConfig.children + roomConfig.infants > 6 && (
                <p className="error-message">Total number of travelers cannot exceed 6.</p>
            )}

            <button 
                className="confirm-btn" 
                onClick={confirmRoomSelection}
                disabled={roomConfig.adults + roomConfig.children + roomConfig.infants > 6}>
                Confirm
            </button>
        </div>
    </div>
)}
{showCityModal && (
    <div className="room-modal-overlay">
        <div className="room-modal">
            <button className="close-modal-btn" onClick={() => setShowCityModal(false)}>×</button>
            {selectedCity.length > 0 && (
    <div className="selected-cities-modal">
        <h2 className="selected-cities-heading">Cities you will be visiting</h2>
        <p className="city-tag-line">Too much to see, Too little time</p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {selectedCity.map((city, index) => (
            <div key={index} className="selected-city-card">
                <div className="selected-city-img-info">
                <img src={image} alt={city.name} className="selected-city-img1" />
                <div className="city-info">
                    <h3>{city.name}, {selectedDestination.name}</h3>
                    <p>{city.description}</p>
                </div>
                </div>
                                {/* Dropdown to change duration */}
                                <select 
                    className="duration-dropdown"
                    value={city.duration}
                    onChange={(e) => handleDurationChange(city.name, e.target.value)}
                >
                    <option value="1D">1D</option>
                    <option value="2D">2D</option>
                    <option value="3D">3D</option>
                    <option value="4D">4D</option>
                    <option value="5D">5D</option>
                </select>
                <button className="remove-city-btn" onClick={() => handleRemoveCity(city)}>×</button>
            </div>
        ))}
    </div>
)}

        </div>
    </div>
)}

                        </div>
                )}
            </div>
        </div>
    );
}
