import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../Navigation/NavBar";
import Packagelistingimages from "../Packagelistingimages/Packagelistingimages";
import image from "../../Assets/Bhutan.jpg";
import Thailand from '../../Assets/Thailand.jpg';
import Abudhabi from '../../Assets/Abudhabi.jpg';
import Australia1 from '../../Assets/Australia1.jpg';
import { FaAddressCard, FaCalendarAlt, FaCarSide, FaCcVisa, FaCreditCard, FaFileAlt, FaLock, FaSearch, FaSyncAlt, FaTimesCircle } from "react-icons/fa";
import { TbTrekking } from "react-icons/tb";
import { RiHotelFill } from "react-icons/ri";
import { IoIosInformationCircle, IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import PrintDownloadEmail from "../Itinerarytabs/ItineraryPrice/PrintDownloadEmail";
import Insurance from '../../Assets/Insurance.png';
import { AddChangeRemove, InsuranceModal } from "../Itinerarytabs/AddChangeRemove";
import RatingStars from "../Rating/RatingStars";
import { FaPhone } from 'react-icons/fa6';
import { IoLogoWhatsapp } from "react-icons/io";
import Buttonwithicon from "../Button/ButtonwithIcon";
import { MdEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Select from "react-select";
import Imageslider from "../Imageslider/Imageslider";
export default function CreateItinerary() {
    const navigate = useNavigate();
    const location = useLocation();
    const getTodayDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
      };
    const [packages, setPackages]= useState([
        {
            id: 1,
            packageImage: [image,Thailand,Abudhabi,Australia1,Thailand,Abudhabi,Australia1],
            customerName:"Manimala",
            country:{
                countryId:31,
                countryName:"Thailand",
                destinations:[
                    {
                        id:1,
                        destinationName:"Bangkok",
                        dayWiseList:[
                            {
                                day:1,
                                tittle: "Arrival in Bangkok",
                                Description: "Arrive in Bangkok and transfer to the hotel.",
                                DayImages: [Insurance, Insurance, Insurance, Insurance, Insurance],
                                scheduleType:[
                                    {
                                        schedule:"Morning",
                                        hotelDetails:
                                        {
                                            Hotelid:'1',
                                            HotelTitle:"Morning hotel1 description",
                                            HotelOverview: "Lorem.",
                                            HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                                            Hotelimage: Insurance,
                                            WTRecommended: true,  // Add this field to determine if the insurance is excluded
                                            Hotelrating: 4.5,
                                            Hotelamount:'Refundable', 
                                            HotelDate:"12/04/2024", 
                                            Hotelarea:"Area 538 sqft", 
                                            Hoteltype:'5 Star',
                                            Hotelcheckintime:'14:00',
                                            Hotelcheckouttime:'14:00', 
                                            Hotelname:'Pucket Yotel1',
                                            Hotelaccomodates:'Accommodates 3 Adults', 
                                            Hotelinclusions:["Wifi","Room with Breakfast",'Air Conditioner'],
                                            Hotelexclusions:["Elevator","Bathtub"],
                                            HotelNearbyAttractions:[
                                              "Silom Complex Shopping Mall - 0.7 km / 0.5 mi",
                                              "Lumphini Park - 0.8 km / 0.5 mi",
                                              'Thaniya Plaza - 1.1 km / 0.7 mi',
                                            ],
                                            HotelAmenties:[
                                              "Elevator facility",
                                              "Concierge Service",
                                              'Laundry facility',
                                              "Common storage facility",
                                            ],
                                            HotelInfo:'Hotelsdamage.',
                                            Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                                            Hotelprice:"1500",
                                          },
                                        transferDetails:
                                        {
                                            Transferid:'1',
                                            TransferTitle:"Morning transfer1 description",
                                            Transferimage: Insurance,
                                            Transferfromto:"Pataya Yotel - Pucket Yotel", 
                                            TransferDate:"12/04/2024", 
                                            Transfernoofpeople:"2 No.s", 
                                            Transfertype:'Private', 
                                            Transfername:'Sedan', 
                                            Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                                            Transferamount:"1500",
                                          },
                                           activityDetails: 
                                           {
                                                          Activityid:'1',
                                                          ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                                                          ActivityOverview: "Activity Overview",
                                                          Activityimage: Insurance,
                                                          ActivityName:"Activity1", 
                                                          Date:"12/04/2024", 
                                                          Starttime: "10:00 AM",
                                                          time:"7 hrs", 
                                                          activitytype:'Private', 
                                                          Activityamount:'Refundable', 
                                                          Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                                                          Activityexclusions:["Elevator","Bathtub"],
                                                          TimeSlot:"Morning",
                                                          ActivityDuration:"Quarter day",
                                                          Transfer:"Included",
                                                          TypeofActivity:"Art & Culture",
                                                          KindofActivity:"Top Highlight",
                                                          Activityprice:"1000",
                                                        },
                                    },
                                    {
                                        schedule:"Afternoon",
                                        transferDetails:
                                        {
                                            Transferid:'1',
                                            TransferTitle:"Morning transfer1 description",
                                            Transferimage: Insurance,
                                            Transferfromto:"Pataya Yotel - Pucket Yotel", 
                                            TransferDate:"12/04/2024", 
                                            Transfernoofpeople:"2 No.s", 
                                            Transfertype:'Private', 
                                            Transfername:'Sedan', 
                                            Transferamount:"1500",
                                            Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                                        },
                                    },
                                    {
                                        schedule:"Evening",
                                    }
                                ]
                            },
                            {
                                day:2,
                                tittle: "Arrival in Bangkok",
                                Description: "Arrive in Bangkok and transfer to the hotel.",
                                DayImages: [Insurance, Insurance, Insurance, Insurance, Insurance],
                                scheduleType:[
                                    {
                                        schedule:"Fullday",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:2,
                        destinationName:"Pattaya",
                        dayWiseList:[
                            {
                                day:3,
                                tittle: "Arrival in Bangkok",
                                Description: "Arrive in Bangkok and transfer to the hotel.",
                                DayImages: [Insurance, Insurance, Insurance, Insurance, Insurance],
                                scheduleType:[
                                    {
                                        schedule:"Morning",
                                        hotelDetails:
                                        {
                                            Hotelid:'2',
                                            HotelTitle:"Morning hotel1 description",
                                            HotelOverview: "Lorem.",
                                            HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                                            Hotelimage: Insurance,
                                            WTRecommended: true,  // Add this field to determine if the insurance is excluded
                                            Hotelrating: 4.5,
                                            Hotelamount:'Refundable', 
                                            HotelDate:"12/04/2024", 
                                            Hotelarea:"Area 538 sqft", 
                                            Hoteltype:'5 Star',
                                            Hotelcheckintime:'14:00',
                                            Hotelcheckouttime:'14:00', 
                                            Hotelname:'Pucket Yotel2',
                                            Hotelaccomodates:'Accommodates 3 Adults', 
                                            Hotelinclusions:["Wifi","Room with Breakfast",'Air Conditioner'],
                                            Hotelexclusions:["Elevator","Bathtub"],
                                            HotelNearbyAttractions:[
                                              "Silom Complex Shopping Mall - 0.7 km / 0.5 mi",
                                              "Lumphini Park - 0.8 km / 0.5 mi",
                                              'Thaniya Plaza - 1.1 km / 0.7 mi',
                                            ],
                                            HotelAmenties:[
                                              "Elevator facility",
                                              "Concierge Service",
                                              'Laundry facility',
                                              "Common storage facility",
                                            ],
                                            HotelInfo:'Hotelsdamage.',
                                            Hotelprice:"1000",
                                            Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                                          },
                                    },
                                    {
                                        schedule:"Afternoon & Evening"
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        id:3,
                        destinationName:"Phuckett",
                        dayWiseList:[
                            {
                                day:4,
                                tittle: "Arrival in Bangkok",
                                Description: "Arrive in Bangkok and transfer to the hotel.",
                                DayImages: [Insurance, Insurance, Insurance, Insurance, Insurance],
                                scheduleType:[
                                    {
                                        schedule:"Morning & Afternoon",
                                        hotelDetails:
                                        {
                                            Hotelid:'3',
                                            Hotelprice:"1000",
                                            HotelTitle:"Morning hotel1 description",
                                            HotelOverview: "Lorem.",
                                            HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                                            Hotelimage: Insurance,
                                            WTRecommended: true,  // Add this field to determine if the insurance is excluded
                                            Hotelrating: 4.5,
                                            Hotelamount:'Refundable', 
                                            HotelDate:"12/04/2024", 
                                            Hotelarea:"Area 538 sqft", 
                                            Hoteltype:'5 Star',
                                            Hotelcheckintime:'14:00',
                                            Hotelcheckouttime:'14:00', 
                                            Hotelname:'Pucket Yotel3',
                                            Hotelaccomodates:'Accommodates 3 Adults', 
                                            Hotelinclusions:["Wifi","Room with Breakfast",'Air Conditioner'],
                                            Hotelexclusions:["Elevator","Bathtub"],
                                            HotelNearbyAttractions:[
                                              "Silom Complex Shopping Mall - 0.7 km / 0.5 mi",
                                              "Lumphini Park - 0.8 km / 0.5 mi",
                                              'Thaniya Plaza - 1.1 km / 0.7 mi',
                                            ],
                                            HotelAmenties:[
                                              "Elevator facility",
                                              "Concierge Service",
                                              'Laundry facility',
                                              "Common storage facility",
                                            ],
                                            HotelInfo:'Hotelsdamage.',
                                            Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                                          },
                                    },
                                    {
                                        schedule:"Evening",
                                        activityDetails: 
                                        {
                                                       Activityid:'1',
                                                       ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                                                       ActivityOverview: "Activity Overview",
                                                       Activityimage: Insurance,
                                                       ActivityName:"Activity1", 
                                                       Date:"12/04/2024", 
                                                       Starttime: "10:00 AM",
                                                       time:"7 hrs", 
                                                       activitytype:'Private', 
                                                       Activityamount:'Refundable', 
                                                       Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                                                       Activityexclusions:["Elevator","Bathtub"],
                                                       TimeSlot:"Morning",
                                                       ActivityDuration:"Quarter day",
                                                       Transfer:"Included",
                                                       Activityprice:"500",
                                                       TypeofActivity:"Art & Culture",
                                                       KindofActivity:"Top Highlight",
                                                     },
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        id:4,
                        destinationName:"Krabi",
                        dayWiseList:[
                            {
                                day:5,
                                tittle: "Arrival in Bangkok",
                                Description: "Arrive in Bangkok and transfer to the hotel.",
                                DayImages: [Insurance, Insurance, Insurance, Insurance, Insurance],
                                scheduleType:[
                                    {
                                        schedule:"Morning & Afternoon",
                                    },
                                    {
                                        schedule:"Evening",
                                        transferDetails:
                                        {
                                            Transferid:'1',
                                            TransferTitle:"Morning transfer1 description",
                                            Transferimage: Insurance,
                                            Transferfromto:"Pataya Yotel - Pucket Yotel", 
                                            TransferDate:"12/04/2024", 
                                            Transfernoofpeople:"2 No.s", 
                                            Transfertype:'Private', 
                                            Transfername:'Sedan', 
                                            Transferamount:"1000",
                                            Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                                          },
                                    }
                                ]
                            }
                        ],
                    },
                ]
            },
            itineraryAdditionalInfo: {
                "id": 1,
                termsConditions: `Please read the following terms and conditions carefully before proceeding with your booking. By confirming your booking, you agree to comply with and be bound by these terms.`,

                paymentPolicy: `Full payment must be made at the time of booking unless otherwise stated. We accept all major credit and debit cards. In case of payment failure, your booking may be cancelled.`,
            
                privacyPolicy: `We respect your privacy. All personal data collected will be used solely for booking and communication purposes and will not be shared with third parties without your consent.`,
            
                cancellationPolicy: `Cancellations made 7 days before the travel date are eligible for a full refund. Cancellations within 7 days of the travel date will incur a 50% cancellation fee. No refunds for same-day cancellations.`,
            
                scopeOfService: `Our services include accommodation booking, itinerary planning, and customer support. We do not provide visa processing or flight bookings unless specified.`,
            
                amendmentPolicy: `Any changes to guest details or dates must be made at least 48 hours before check-in. Amendments are subject to availability and may incur additional charges.`,
                insurance:{
                    id:1,
                    insuranceTitle: "50K Excl-Silver",
                    insurancePlanType: "50K Excl-Silver for 1 people",
                    insuranceDescription: "This is the average cost. Depending on the actual age of the travellers, the final cost will vary. We will update you when it does,be rest assured.",
                    insuranceInformation: "Insurance prices are purely based on the age band you fall under. Prices might change once you input your age details in the next screen.",
                    insuranceImage: Insurance,
                    insuranceIncluded: false,
                    insuranceExcluded: true,
                    insurancePrice:50000,
                    insuranceInfoMessage: "Add Insurance to save on un-planned emergencies like lost passport, medical emergency, lost baggage, etc. On an average, it costs less than 20 Euros per person. Make a smart choice now."
                },
                visa:{
                    visaIncluded: true,
                    visaExcluded: false,
                    visaTitle: "Visa Title",
                    visaImage: Insurance,
                    visaDescription: "Arrive at Suvarnabhumi Airport or Don Mueang Airport, Bangkok.Meet Greet",
                },
                inclusions: [
                    {
                        id: 8,
                        inclusionName: "Ticket Included",
                    },
                    {
                        id: 3,
                        inclusionName: "Mini Fridge",
                    }
                ],
                exclusions: [
                    {
                        id: 6,
                        exclusionName: "Additional Fees",
                        "exclusionType": "ACTIVITY"
                    },
                    {
                        id: 2,
                        exclusionName: "Other Charges",
                    }
                ]
            },
            Travelexpert:{
                Travelexpertid:1,
                Travelexpertname:"Manimala",
                Tripsplannedsofar:10,
                Travelexpertimage:Insurance,
              },
            TravellingDate: getTodayDate(),
            TravellingFrom: { value: "BLR", label: "Bangalore (BLR)" }, // Example default value
            NoofAdults: 2,
            NoofChildren: 1,
            ChildrenAges: [3, 8],
            NoofInfants: 0,
            Rooms: 1,
            TCS:5,
            DiscountedPrice: "10%",
        }
    ]);
    const { addedHotel, addedActivity, removeActivity, day, schedule } = location.state || {};
    useEffect(() => {
      if ((addedHotel || addedActivity || removeActivity) && day && schedule) {
        const updatedPackages = [...packages];
        console.log("Before update:", JSON.stringify(updatedPackages, null, 2));
        updatedPackages[0].country.destinations.forEach(destination => {
          destination.dayWiseList.forEach(dayItem => {
            if (dayItem.day === day) {
              dayItem.scheduleType.forEach(scheduleItem => {
                if (scheduleItem.schedule === schedule) {
                  // Update hotel if exists
              if (addedHotel) {
                scheduleItem.hotelDetails = addedHotel;
              }

              // Update activity if exists
              if (addedActivity) {
                scheduleItem.activityDetails = addedActivity;
              }
              // Remove activity if flagged
              if (removeActivity) {
                scheduleItem.activityDetails = null; // or [] if it's an array
              }
                }
              });
            }
          });
        });
        console.log("After update:", JSON.stringify(updatedPackages, null, 2));
        setPackages(updatedPackages);
        // Reset the state so it doesn't apply again on refresh
        navigate(location.pathname, { replace: true });
      }
    }, [addedHotel, addedActivity, removeActivity, day, schedule]);
    console.log("Removing activity for", { day, schedule });
            
    const { isVisaAdded, handleVisaAdd, handleVisaRemove, 
        isInsuranceAdded, handleInsuranceAdd, handleInsuranceRemove, handleChange, isModalOpen, closeModal, selectedPlan, setSelectedPlan, appliedPlan, setAppliedPlan } = AddChangeRemove(); // Track if the visa is added
        const dayByDayRef = useRef(null);
        const transferRef = useRef(null);
        const hotelRef = useRef(null);
        const actvitiesRef = useRef(null);
        const visaRef = useRef(null);
        const insuranceRef = useRef(null);
        const inclusionRef = useRef(null);
        const exclusionRef = useRef(null);
    const [activeTab, setActiveTab] = useState('dayByDay');
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
    const handleTransferTypeToggle = (day, slot) => {
        const updatedPackages = packages.map(pkg => {
            if (pkg.id === 1) {
                return {
                    ...pkg,
                    country: {
                        ...pkg.country,
                        destinations: pkg.country.destinations.map(destination => {
                            return {
                                ...destination,
                                dayWiseList: destination.dayWiseList.map(dayItem => {
                                    if (dayItem.day === day) {
                                        return {
                                            ...dayItem,
                                            scheduleType: dayItem.scheduleType.map(schedule => {
                                                if (schedule.schedule === slot && schedule.transferDetails) {
                                                    return {
                                                        ...schedule,
                                                        transferDetails: {
                                                            ...schedule.transferDetails,
                                                            Transfertype: schedule.transferDetails.Transfertype === "Private" ? "Public" : "Private"
                                                        }
                                                    };
                                                }
                                                return schedule;
                                            })
                                        };
                                    }
                                    return dayItem;
                                })
                            };
                        })
                    }
                };
            }
            return pkg;
        });
    
        setPackages(updatedPackages);
    };
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

      const [isModalOpenpricing, setIsModalOpenpricing] = useState(false);
const [showSlider, setShowSlider] = useState(false);
const allDays = packages[0]?.country?.destinations?.flatMap(dest => dest.dayWiseList || []);
   const [selectedImages, setSelectedImages] = useState([]);
    // Function to handle image click for the slider
    const handleImageClick = (images) => {
        setSelectedImages(images);
        setShowSlider(true);  // Show the modal with the slider
    };
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
      const [formData, setFormData] = useState({ ...packages[0] });
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
      const calculateTripCosts = (pkg) => {
        let hotelTotal = 0;
        let transferTotal = 0;
        let activityTotal = 0;
      
        // Loop over destinations and their dayWiseList
        pkg.country.destinations.forEach(dest => {
          const dayWiseList = dest.dayWiseList;
      
          dayWiseList.forEach((day, dayIndex) => {
            day.scheduleType.forEach(schedule => {
              // --- Hotel ---
              const hotelAmount = schedule?.hotelDetails?.Hotelprice;
              const isValidHotelAmount = hotelAmount && !isNaN(Number(hotelAmount));
      
              if (isValidHotelAmount) {
                // Check how many nights this hotel lasts (current to next day with hotel)
                let stayNights = 1;
      
                for (let i = dayIndex + 1; i < dayWiseList.length; i++) {
                  const nextDaySchedules = dayWiseList[i]?.scheduleType || [];
                  const hasSameHotel = nextDaySchedules.some(sch =>
                    sch.hotelDetails?.Hotelid === schedule.hotelDetails?.Hotelid
                  );
                  if (hasSameHotel) {
                    stayNights++;
                  } else {
                    break;
                  }
                }
      
                hotelTotal += Number(hotelAmount) * stayNights;
              }
      
              // --- Transfer ---
              const transferAmount = schedule?.transferDetails?.Transferamount;
              if (transferAmount && !isNaN(Number(transferAmount))) {
                transferTotal += Number(transferAmount); // assuming transfer is one-time
              }
      
              // --- Activity ---
              const activityAmount = schedule?.activityDetails?.Activityprice;
              if (activityAmount && !isNaN(Number(activityAmount))) {
                activityTotal += Number(activityAmount);
              }
            });
          });
        });
      
        // Insurance
        const insuranceCost = pkg.itineraryAdditionalInfo?.insurance?.insurancePrice || 0;
      
        // Visa
        const visaCost = pkg.itineraryAdditionalInfo?.visa?.visaIncluded ? 2500 : 0;
      
        // Total travelers
        const totalTravelers = (pkg.NoofAdults || 0) + (pkg.NoofChildren || 0) + (pkg.NoofInfants || 0);
      
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
      
      const { totalTripCost, tcsAmount, totalPrice } = calculateTripCosts(packages[0]);

  const discount = packages[0].DiscountedPrice;
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
        <div className="packagelisting">
            <NavBar style={{backgroundColor:"#1b2340"}} />
            <div className="package-itinerary">
                <div className="package-t-d">
                    <h2 className="Itinerarytittle">5D/6N Bangkok, Pattaya</h2>
                    <Packagelistingimages packageImages={packages[0].packageImage} />
                </div>
                <div className="itinerary-container">
                    <div className="sticky-itinerary-tabs">
                        <div className="tab-menu">
                            <button onClick={() => handleScroll(dayByDayRef, 'dayByDay')} className={activeTab === 'dayByDay' ? 'active-tab' : ''}>Day by Day</button>
                            <button onClick={() => handleScroll(transferRef, 'transfer')} className={activeTab === 'transfer' ? 'active-tab' : ''}>Transfer</button>
                            <button onClick={() => handleScroll(hotelRef, 'hotel')} className={activeTab === 'hotel' ? 'active-tab' : ''}>Hotel</button>
                            <button onClick={() => handleScroll(actvitiesRef, 'activity')} className={activeTab === 'activity' ? 'active-tab' : ''}>Activity</button>
                            <button onClick={() => handleScroll(visaRef, 'visa')} className={activeTab === 'visa' ? 'active-tab' : ''}>Visa</button>
                            <button onClick={() => handleScroll(insuranceRef, 'insurance')} className={activeTab === 'insurance' ? 'active-tab' : ''}>Insurance</button>
                            <button onClick={() => handleScroll(inclusionRef, 'inclusion')} className={activeTab === 'inclusion' ? 'active-tab' : ''}>Inclusions</button>
                            <button onClick={() => handleScroll(exclusionRef, 'exclusion')} className={activeTab === 'exclusion' ? 'active-tab' : ''}>Exclusions</button>
                        </div>
                    </div>
                    <div className='tab-content-pricing'>
                        <div className="tab-content">
                            <div ref={dayByDayRef} className="section">
                                <h2>
                                    <FaCalendarAlt />
                                    <span className="itinerary-text">Day by Day Itinerary</span>
                                </h2>
                                <>
<div className="day-itinerary" style={{gap:"0px"}}>
    {packages[0].country.destinations.map((destination, destinationIndex) => (
        <div className='dayWise-itinerary' key={destination.id}>
            {destination.dayWiseList?.map((dayItem, dayIndex) => {
                // Check if this is the last day of the LAST destination
                const isLastDayOfLastDestination = 
                    destinationIndex === packages[0].country.destinations.length - 1 &&
                    dayIndex === destination.dayWiseList.length - 1;

                return (
                    <div key={dayItem.day} className='days-itinerary'>
                        <div className='daywise-p-box-line'>
                            <div className='box-line'>
                                <div className='ellipse' />
                                {!isLastDayOfLastDestination && <div className='vertical-line' />}
                            </div>
                        </div>
                        <div className="dayWise-activity">
                            <div className="textfield_itinerary">
                                <div className='timeSlotThree' style={{ gap: "0px", width: "100%" }}>
                                    <p className="dayWise" style={{width:"fit-content"}}>Day {dayItem.day}</p>
                                    {dayItem.scheduleType?.map((scheduleItem, index) => (
                                        <div 
                                        key={index} 
                                        className="timeSlotThree"
                                        style={{
                                            width: scheduleItem.schedule.includes("Morning & Afternoon") ? "66.6%" :
                                                   scheduleItem.schedule.includes("Afternoon & Evening") ? "66.6%" :
                                                   scheduleItem.schedule.includes("Morning") ? "33.3%" :
                                                   scheduleItem.schedule.includes("Afternoon") ? "33.3%" :
                                                   scheduleItem.schedule.includes("Evening") ? "33.3%" :
                                                   scheduleItem.schedule.includes("Fullday") ? "100%" :
                                                   "100%"
                                        }}
                                        >
                                            <div className='activity-time'>
                                                <div className='timeslot'>
                                                    <p className='time'>{scheduleItem.schedule}</p>
                                                    {["Morning", "Morning & Afternoon", "Afternoon", "Afternoon & Evening", "Evening", "Fullday"].includes(scheduleItem.schedule) &&
                                                        !scheduleItem.hotelDetails && !scheduleItem.transferDetails && !scheduleItem.activityDetails && (
                                                            <div className='activity-time1'>
                                                                <p className="time">At leisure.</p>
                                                                <button 
  className="addactivity" 
  onClick={() => navigate("/ActivityModal", {
    state: {
      id: packages[0]?.id,
      day: dayItem.day, // make sure it's "day1"
      schedule: scheduleItem.schedule, // make sure it's "schedule1"
      fromAddActivity: true, // <-- Add this flag
      from:"/CreateItinerary",
    }
  })}
>
  + Add Activity
</button>

                                                            </div>
                                                        )}
                                                    {["Morning", "Morning & Afternoon", "Afternoon", "Afternoon & Evening", "Evening", "Fullday"].includes(scheduleItem.schedule) && (
                                                        <div className='timedescription'>
                                                            {scheduleItem.transferDetails && <p>{scheduleItem.transferDetails.TransferTitle}</p>}
                                                            {scheduleItem.hotelDetails && <p  
                                                              onClick={() =>{
                                                                navigate(`/ViewHotel/${scheduleItem.hotelDetails.Hotelid}`, {
                                                                  state: { hotel1: scheduleItem.hotelDetails,
                                                                    day1: dayItem.day,
                                                                    schedule1: scheduleItem.schedule,
                                                                    from:"/CreateItinerary",
                                                                   },
                                                                })
                                                              }}   
                                                              style={{ cursor: "pointer" }}
                                                              onMouseEnter={(e) => (e.target.style.color = "#fdb44b")}
                                                              onMouseLeave={(e) => (e.target.style.color = "")}                                                    
                                                          >{scheduleItem.hotelDetails.Hotelname}</p>}
                                                            {scheduleItem.activityDetails && <p
                                                                                                                        onClick={() =>{
                                                                                                                          navigate(`/view-activity/${scheduleItem.activityDetails.Activityid}`, {
                                                                                                                            state: { activity1: scheduleItem.activityDetails,
                                                                                                                              day1: dayItem.day,
                                                                                                                              schedule1: scheduleItem.schedule,
                                                                                                                              from:"/CreateItinerary",
                                                                                                                             },
                                                                                                                          })
                                                                                                                        }}
                                                                                                                        style={{ cursor: "pointer" }}
                                                                                                                        onMouseEnter={(e) => (e.target.style.color = "#fdb44b")}
                                                                                                                        onMouseLeave={(e) => (e.target.style.color = "")}
                                                            >{scheduleItem.activityDetails.ActivityName}</p>}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    ))}
</div>

<div className="tab-content1">
{allDays.map((DayTabs, index) => (
                    <div 
                        key={index} 
                        className="section1"// Show only active tab content
                    >
                        <h3 className='Days'>Day {index + 1} : {DayTabs.tittle}</h3>
                        <p>{DayTabs.Description}</p>
                        <ul className='testimonialimages'>
                            {/* Use DayTabs.DayImages instead of packageData.DayImages */}
                            {DayTabs.DayImages?.slice(0, 3).map((image, imgIndex) => (
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
                            {DayTabs.DayImages?.length > 4 ? (
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
                                DayTabs.DayImages?.length === 4 && (
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
                                </>
                            </div>
                            <div ref={transferRef} className="section">
                                <h2>
                                    <FaCarSide />
                                    <span className="itinerary-text">Transfer Information</span>
                                </h2>
                                <>
                                <div className="Activity-listing">
                                {packages[0].country.destinations.map((destination) =>
                destination.dayWiseList.map((dayItem) =>
                    dayItem.scheduleType.map((scheduleItem, index) =>
                        scheduleItem.transferDetails && (
                                    <div className='Activity-content-information' key={`${dayItem.day}-${index}`}>
                                        <div className='activity-content'>
                                            <img src={scheduleItem.transferDetails.Transferimage} alt="transfer" />
                                            <div className='activity-details'>
                                                <div className='Date-actions'>
                                                    <h3>{scheduleItem.transferDetails.Transferfromto}</h3>
                                                    <div className="insurance-actions">
                                                        <button 
                                                        className="change-action"
                                                        onClick={() => handleTransferTypeToggle(dayItem.day, scheduleItem.schedule)}
                                                        >
                                                        {scheduleItem.transferDetails.Transfertype === "Private" ? "Change to Public" : "Change to Private"}
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* 👇 Add this line for Day & Schedule info */}
                                                <p className="day-schedule-info">Day {dayItem.day} - {scheduleItem.schedule}</p>
                                                <ul className='activity-time-type-amount'>
                                            <li>{scheduleItem.transferDetails.Transfertype}</li>
                                            <li>{scheduleItem.transferDetails.Transfernoofpeople}</li>
                                            <li>{scheduleItem.transferDetails.Transfername}</li>
                                                </ul>
                                                <ul className="Transfer-Information">
                                                {scheduleItem.transferDetails.Transferinformation?.map((info, i) => (
                                                <li key={i}>{info}</li>
                                            ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                                            )
                                                        )
                                                    )
                                                )}
                                </div>
                                </>
                            </div>
                            <div ref={hotelRef} className="section">
                                <h2>
                                    <RiHotelFill />
                                    <span className="itinerary-text">Hotel Information</span>
                                </h2>
                                <>
                                <div className="Activity-listing">
                                {packages[0].country.destinations.map((destination) =>
                destination.dayWiseList.map((dayItem) =>
                    dayItem.scheduleType.map((scheduleItem, index) =>
                        scheduleItem.hotelDetails && (
                                    <div className='Hotel-content-information' key={`${dayItem.day}-${index}`}>
                                        <div className='Hotel-content'>
                                            <div className='Hotel-Image-Badge'>
                                                <img src={scheduleItem.hotelDetails.Hotelimage} alt={scheduleItem.hotelDetails.Hotelname} />
                                                {scheduleItem.hotelDetails.WTRecommended && (
                                                <div className="wt-recommended-badge">
                                                    <span>WT RECOMMENDED</span>
                                                </div>
                                                )}
                                            </div>
                                            <div className='activity-details'>
                                                <div className='Date-actions'>
                                                    <h3>{scheduleItem.hotelDetails.Hotelname}</h3>
                                                    <div className="insurance-actions">
                                                    <button 
  className="change-action" 
  onClick={() =>{
    navigate(`/ViewHotel/${scheduleItem.hotelDetails.Hotelid}`, {
      state: { hotel1: scheduleItem.hotelDetails,
        day1: dayItem.day,
        schedule1: scheduleItem.schedule,
        from: '/CreateItinerary',
       },
    })
  }}
  
>
  View
</button>

<button className="change-action" onClick={() =>{
    navigate("/HotelModal", {
      state: {
        hotel: scheduleItem.hotelDetails,
        day: dayItem.day,
        schedule: scheduleItem.schedule,
        from: '/CreateItinerary',
      }
    });
    
}}>Change</button>
                                                    </div>
                                                </div>
                                                <p className="day-schedule-info">Day {dayItem.day} - {scheduleItem.schedule}</p>
                                                <p className="Hotel-Rating">
                                                <RatingStars rating={Number(scheduleItem.hotelDetails.Hotelrating) || 0} />
                                                Trip Advisor
                                                </p>
                                                <ul className='activity-time-type-amount'>
                                                <li>{scheduleItem.hotelDetails.Hotelaccomodates}</li>
                  <li>{scheduleItem.hotelDetails.Hotelamount}</li>
                  <li>{scheduleItem.hotelDetails.Hotelarea}</li>
                  <li>{scheduleItem.hotelDetails.Hoteltype}</li>
                                                </ul>
                                                <ul className="Inclusions">
                                                    Inclusions:
                                                    {scheduleItem.hotelDetails.Hotelinclusions?.map((inc, i) => (
                                                        <li key={i}>{inc}</li>
                                                    ))}
                                                </ul>
                                                <ul className="Exclusions">
                                                    Exclusions:
                                                    {scheduleItem.hotelDetails.Hotelexclusions?.map((exc, i) => (
                                                        <li key={i}>{exc}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="Hotel-price-info">
                                            <span className='Hotel-info-icon'><IoIosInformationCircle /></span>
                                            <p>{scheduleItem.hotelDetails.HotelInfo}</p>
                                        </div>
                                    </div>
                                                                                                )
                                                        )
                                                    )
                                                )}
                                </div>
                                </>
                            </div>
                            <div ref={actvitiesRef} className="section">
                                <h2>
                                    <TbTrekking />
                                    <span className="itinerary-text">Activities Information</span>
                                </h2>
                                <>
                                <div className="Activity-listing">
                                {
    packages[0].country.destinations.every(destination =>
      destination.dayWiseList.every(dayItem =>
        dayItem.scheduleType.every(scheduleItem =>
          !scheduleItem.activityDetails
        )
      )
    ) ? (
      <p style={{ marginLeft: "20px" }}>No activities added.</p>
    ) : (
      packages[0].country.destinations.map((destination) =>
        destination.dayWiseList.map((dayItem) =>
          dayItem.scheduleType.map((scheduleItem, index) =>
            scheduleItem.activityDetails && (
                                    <div className='Activity-content-information' key={index}>
                                        <div className='activity-content'>
                                            <img src={scheduleItem.activityDetails.Activityimage} alt="ActivityName" />
                                            <div className='activity-details'>
                                                <div className='Date-actions'>
                                                    <h3>{scheduleItem.activityDetails.ActivityName}</h3>
                                                    <div className="insurance-actions">
                                                        <>
                                                        <button 
                                                        className="change-action"
                                                        onClick={() =>{
                                                            navigate(`/view-activity/${scheduleItem.activityDetails.Activityid}`, {
                                                              state: { activity1: scheduleItem.activityDetails,
                                                                day1: dayItem.day,
                                                                schedule1: scheduleItem.schedule,
                                                                from:"/CreateItinerary",
                                                               },
                                                            })
                                                          }}>View</button>
                                                        <button className="change-action" onClick={() =>
    navigate("/ActivityModal", {
        state: {
            activity: scheduleItem.activityDetails,
            day: dayItem.day,
            schedule: scheduleItem.schedule,
          }
    })
  }
  >Change</button>
<button
  className="remove-action"
  onClick={() =>
    navigate("/CreateItinerary", {
      state: {
        removeActivity: true,
        day: dayItem.day,
        schedule: scheduleItem.schedule,
      },
    })
  }
>
  Remove
</button>
                                                        </>
                                                    </div>
                                                </div>
                                                <p style={{margin:"0%"}}>Day {dayItem.day} - {scheduleItem.schedule}</p>
                                                <ul className='activity-time-type-amount'>
                                                    <li>{scheduleItem.activityDetails.time}</li>
                                                    <li>{scheduleItem.activityDetails.activitytype}</li>
                                                    <li>{scheduleItem.activityDetails.Activityamount}</li>
                                                </ul>
                                                <ul className="Inclusions">
                                                    Inclusions:
                                                    {scheduleItem.activityDetails.Activityinclusions?.map((info, i) => (
                                                    <li key={i}>{info}</li>
                                                ))}
                                                </ul>
                                                <ul className="Exclusions">
                                                    Exclusions:
                                                    {scheduleItem.activityDetails.Activityexclusions?.map((info, i) => (
                                                    <li key={i}>{info}</li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
)
)
)
)
)
}
                                </div>
                                </>
                            </div>
                            <div ref={visaRef} className="section">
                                <h2>
                                    <FaCcVisa />
                                    <span className="itinerary-text">Visa Information</span>
                                </h2>
                                <>
                                <div className="Visa-content">
                                    <img src={packages[0].itineraryAdditionalInfo.visa.visaImage} alt="Visa Plan" className="insurance-image" />
                                    {packages[0].itineraryAdditionalInfo.visa.visaExcluded && (
          <div className="excluded-badge">
            <span>Excluded</span>
          </div>
        )}
        {packages[0].itineraryAdditionalInfo.visa.visaIncluded && (
          <div className="included-badge">
            <span>Included</span>
          </div>
        )}
                    <div className="insurance-details">
                <h2 className="insurance-plan">{packages[0].itineraryAdditionalInfo.visa.visaTitle}</h2>
                <p>{packages[0].itineraryAdditionalInfo.visa.visaDescription}</p>
            </div>
            <div className="insurance-actions">
                {isVisaAdded ? (
                    <button className="remove-action" onClick={handleVisaRemove}>Remove</button>
                ) : (
                    <button className="add-button" onClick={handleVisaAdd} >Add</button>
                )}
            </div>
                                </div>
                                </>
                            </div>
                            <div ref={insuranceRef} className="section">
                                <h2>
                                    <FaAddressCard />
                                    <span className="itinerary-text">Insurance Information</span>
                                </h2>
                                <>
                                <div className="day-itinerary">
                                    <div className="insurance-content">
                                        <img src={packages[0].itineraryAdditionalInfo.insurance.insuranceImage} alt="Insurance Plan" className="insurance-image" />
                                        {packages[0].itineraryAdditionalInfo.insurance.insuranceExcluded && (
                                        <div className="excluded-badge">
                                            <span>Excluded</span>
                                        </div>
                                        )}
                                        {packages[0].itineraryAdditionalInfo.insurance.insuranceIncluded && (
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
                                                      <span className="insuranceInfoMessage">{packages[0].itineraryAdditionalInfo.insurance.insuranceInfoMessage}</span>
                                                  )}
                                                <div className="insurance-actions">
                                                    {isInsuranceAdded  ? (
                                                        <>
                                                        <button className="change-action" onClick={handleChange}>Change</button>
                                                        <button className="remove-action" onClick={handleInsuranceRemove}>Remove</button>
                                                        </>
                                                    ) : (
                                                        <button className="add-button" onClick={handleInsuranceAdd}>Add</button>
                                                    )}
                                                    {isModalOpen && <InsuranceModal selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setAppliedPlan={setAppliedPlan} closeModal={closeModal} />}
                                                </div>
                                            </div>
                                            {isInsuranceAdded  && (
                                                <p>{packages[0].itineraryAdditionalInfo.insurance.insuranceDescription}</p>
                                            )}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="insurance-price-info">
                                        <span className='insurance-info-icon'><IoIosInformationCircle /></span>
                                        <p>{packages[0].itineraryAdditionalInfo.insurance.insuranceInformation}</p>
                                    </div>
                                </div>
                                </>
                            </div>
                            <div ref={inclusionRef} className="section">
                                <h2>
                                    <IoMdCheckmark />
                                    <span className="itinerary-text">Inclusions Information</span>
                                </h2>
                                <>
                                <div>
                                    <ul className="day-itinerary">
                                    {packages[0].itineraryAdditionalInfo.inclusions.map((inclusion, index) => (
                                        <li className='inclusion' key={index}>{inclusion.inclusionName}</li>
                                    ))}
                                    </ul>
                                </div>
                                </>
                            </div>
                            <div ref={exclusionRef} className="section">
                                <h2>
                                    <IoCloseSharp />
                                    <span className="itinerary-text">Exclusions Information</span>
                                </h2>
                                <>
                                <div>
                                    <ul className="day-itinerary">
                                    {packages[0].itineraryAdditionalInfo.exclusions.map((exclusion, index) => (
                                        <li className='exclusion' key={index}>{exclusion.exclusionName}</li>
                                    ))}
                                    </ul>
                                </div>
                                </>
                            </div>
                        </div>
                        <div className='itinerary-price'>
                            <div className="booking-summary-container">
                                <div>
                                    <div className="trip-details">
                                        <span className="trip-date">{packages[0].TravellingDate} . {packages[0].TravellingFrom.label} . {packages[0].NoofAdults} Adults . {packages[0].NoofChildren} Children . {packages[0].NoofInfants} Infants . {packages[0].Rooms} Room</span>
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
                                            <hr />
                                            <div className="cost-breakdown">
                                                <div className="trip-cost">
                                                    <span>Trip Cost :</span>
                                                    <span>₹ {totalTripCost.toLocaleString()}/-</span>
                                                </div>
                                            <div className="tcs-cost">
                                                <span>TCS ({totalTripCost > 700000 ? '20%' : '5%'}) :</span>
                                                <span>₹{tcsAmount.toLocaleString('en-IN')}/-</span>
                                            </div>
                                            <hr />
                                            <div className="total-payable">
                                                <span>Total Price :</span>
                                                <span>₹{totalPrice.toLocaleString('en-IN')}/-</span>
                                            </div>
                                        </div>
                                        </div>
                                        <button className="book-now-btn">Book Now</button>
                                    </div>
                                </div>
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
                                <div className="chat-expert-card">
                                  <h2 className="chat-title">Chat with our Travel Expert</h2>
                                  <div className="expert-info">
                                    <img
                                      src={packages[0].Travelexpert.Travelexpertimage} // Replace with your expert image link
                                      alt="Travel Expert"
                                      className="expert-image"
                                    />
                                    <div className="expert-details">
                                      <h4 className="expert-name">{packages[0].Travelexpert.Travelexpertname}</h4>
                                      <p className="expert-trips">Planned {packages[0].Travelexpert.Tripsplannedsofar} trips so far</p>
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
            </div>
        </div>
    );
}