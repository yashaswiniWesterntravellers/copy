import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 
import Select from "react-select";
import './ItineraryPrice.css'; // Import your CSS file for styling
import { useMediaQuery } from "react-responsive";
import { MdEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const BookingSummary = ({packages, setPackages}) => {
      const { id } = useParams();
      // Find the package by id
    const packageData = packages.find(pkg => pkg.id === parseInt(id));
  
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
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

  return (
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
  );
};

export default BookingSummary;
