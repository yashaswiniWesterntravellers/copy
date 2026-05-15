import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import './Listing.css';
import Packagelistingimages from "../Components/Packagelistingimages/Packagelistingimages";
import NavBar from "../Components/Navigation/NavBar";
import Thailand from '../Assets/Thailand.jpg';
import Abudhabi from '../Assets/Abudhabi.jpg';
import Australia1 from '../Assets/Australia1.jpg';
import Pattaya from '../Assets/Pattaya.jpg';
import InsuranceImage from '../Assets/Insurance.png';
import { useMediaQuery } from "react-responsive";
import Footer from "../Components/Footer/Footer";
import { IoClose } from "react-icons/io5";
import Select from "react-select";
import '../Components/Itinerarytabs/Itinerarytabs.css'; // Custom CSS
import { FaCalendarAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";
import { TbTrekking } from "react-icons/tb";
import { FaCcVisa } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { IoIosInformationCircle, IoMdCheckmark } from "react-icons/io";
import PrintDownloadEmail from '../Components/Itinerarytabs/ItineraryPrice/PrintDownloadEmail.jsx';
import { TiArrowSortedDown, TiArrowSortedUp  } from "react-icons/ti";
import Buttonwithicon from '../Components/Button/ButtonwithIcon.jsx';
import { IoCloseSharp } from "react-icons/io5";
import { FaFileAlt, FaCreditCard, FaLock, FaTimesCircle, FaSearch, FaSyncAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import '../Components/Itinerarytabs/ItineraryPrice/travelexpert.css'; // Import your CSS file for styling
import { AddChangeRemove, InsuranceModal } from '../Components/Itinerarytabs/AddChangeRemove.jsx';
import RatingStars from "../Components/Rating/RatingStars.jsx";
import Imageslider from "../Components/Imageslider/Imageslider.jsx";
export default function Packageitinerary() {

    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
          const { id } = useParams();
          const navigate = useNavigate();
          const location = useLocation();
    const getTodayDate = () => {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const dd = String(today.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    };
    const [packages, setPackages] = useState(
        [
          {
          id: 1,
          title: "8N/4 Days Dazzling Phuket Pattaya Package",
          Images:[Thailand, Abudhabi, Australia1, Thailand, Thailand, Thailand, Thailand, Thailand, Thailand],
          Days:[
            { 
              tittle:'1 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
              {
                scheduleType:"Morning",
                Activities:[
                  {
                    Activityid:'1',
                    ActivityTitle:"Morning activity1 description",
                    ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                    ActivityOverview: "Activity Overview",
                    Activityimage: InsuranceImage,
                    ActivityName:"Activity1", 
                    Date:"12/04/2024", 
                    Starttime: "10:00 AM",
                    time:"7 hrs", 
                    activitytype:'private', 
                    Activityamount:'Refundable', 
                    Activityprice:"1000",
                    Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                    Activityexclusions:["Elevator","Bathtub"],
                    Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],
                  },
                ],
                Transfer:[
                  {
                    Transferid:'1',
                    TransferTitle:"Morning transfer1 description",
                    Transferimage: InsuranceImage,
                    Transferfromto:"Pataya Yotel - Pucket Yotel", 
                    TransferDate:"12/04/2024", 
                    Transfernoofpeople:"2 No.s", 
                    Transfertype:'Private', 
                    Transfername:'Sedan', 
                    Transferamount:"500",
                    Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                  },
                ],
                Hotels:[
                  {
                    Hotelid:'1',
                    HotelTitle:"Morning hotel1 description",
                    HotelOverview: "Lorem.",
                    HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                    Hotelimage: InsuranceImage,
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
                    Hotelprice:"1000",
                    Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                  },
                ],
              },
              {
                scheduleType:"Afternoon",
                Activities:[
                  {
                    Activityid:'3',
                    ActivityTitle:"Afternoon activity1 description",
                    ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                    ActivityOverview: "Activity Overview",
                    Activityimage: InsuranceImage,
                    ActivityName:"Activity3", 
                    Date:"12/04/2024", 
                    Starttime: "10:00 AM",
                    time:"7 hrs", 
                    activitytype:'private', 
                    Activityamount:'Refundable',
                    Activityprice:"1000", 
                    Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                    Activityexclusions:["Elevator","Bathtub"],
                    Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],

                  },
                ],
                Transfer:[
                  {
                    Transferid:'2',
                    TransferTitle:"Afternoon transfer2 description",
                    Transferimage: InsuranceImage,
                    Transferfromto:"Pataya Yote2 - Pucket Yotel", 
                    TransferDate:"12/04/2024", 
                    Transfernoofpeople:"2 No.s", 
                    Transfertype:'Private', 
                    Transfername:'Sedan', 
                    Transferamount:"500",
                    Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                  },
                ],
                Hotels:[
                  {
                    Hotelid:'2',
                    HotelTitle:"Afternoon hotel1 description",
                    HotelOverview: "Lorem laborum.",
                    HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                    Hotelimage: InsuranceImage,
                    WTRecommended: false,  // Add this field to determine if the insurance is excluded
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
                    ],
                    HotelInfo:'Hotels damage.',
                    Hotelprice:"1000",
                    Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                  },
                ],
              },
              {
                scheduleType:"Evening",
                Transfer:[
                  {
                    Transferid:'3',
                    TransferTitle:"Evening transfer3 description",
                    Transferimage: InsuranceImage,
                    Transferfromto:"Pataya Yotel3 - Pucket Yotel", 
                    TransferDate:"12/04/2024", 
                    Transfernoofpeople:"2 No.s", 
                    Transfertype:'Private', 
                    Transfername:'Sedan',
                    Transferamount:"500", 
                    Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                  },
                ],
                Hotels:[
                  {
                    Hotelid:'3',
                    HotelTitle:"Evening hotel1 description",
                    HotelOverview: "Lorem laborum.",
                    HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                    Hotelimage: InsuranceImage,
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
                    ],
                    HotelAmenties:[
                      "Elevator facility",
                      "Concierge Service",
                    ],
                    HotelInfo:'Hotels damage.',
                    Hotelprice:"1000",
                    Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                  },
                ],
              }
            ],
            },
            {
              tittle:'2 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
              {
                scheduleType:"Morning",
              },
              {
                scheduleType:"Afternoon",
                Transfer:[
                  {
                    Transferid:'4',
                    TransferTitle:"Afternoon transfer4 description",
                    Transferimage: InsuranceImage,
                    Transferfromto:"Pataya Yotel4 - Pucket Yotel", 
                    TransferDate:"12/04/2024", 
                    Transfernoofpeople:"2 No.s", 
                    Transfertype:'Private', 
                    Transfername:'Sedan', 
                    Transferamount:"500",
                    Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                  },
                ],
              },
              {
                scheduleType:"Evening",
                Activities:[
                  {
                    Activityid:'4',
                    ActivityTitle:"Evening activity1 description",
                    ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                    ActivityOverview: "Activity Overview",
                    Activityimage: InsuranceImage,
                    ActivityName:"Activity4", 
                    Date:"12/04/2024", 
                    Starttime: "10:00 AM",
                    time:"7 hrs", 
                    activitytype:'private', 
                    Activityamount:'Refundable', 
                    Activityprice:"1000",
                    Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                    Activityexclusions:["Elevator","Bathtub"],
                    Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],

                  },
                ],
                Transfer:[
                  {
                    Transferid:'5',
                    TransferTitle:"Evening transfer5 description",
                    Transferimage: InsuranceImage,
                    Transferfromto:"Pataya Yotel - Pucket Yotel", 
                    TransferDate:"12/04/2024", 
                    Transfernoofpeople:"2 No.s", 
                    Transfertype:'Private', 
                    Transfername:'Sedan', 
                    Transferamount:"500",
                    Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                  },
                ],
                Hotels:[
                  {
                    Hotelid:'2',
                    HotelTitle:"Evening hotel1 description",
                    HotelOverview: "Lorem laborum.",
                    HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                    Hotelimage: InsuranceImage,
                    WTRecommended: false,  // Add this field to determine if the insurance is excluded
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
                    ],
                    HotelAmenties:[
                      "Elevator facility",
                      "Concierge Service",
                    ],
                    Hotelprice:"1000",
                    HotelInfo:'Hotels may charge a caution deposit on your credit card. It will be refunded within 10-15 days if there is no property damage.',
                    Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                  },
                ],
              }
            ],
            },
            { 
              tittle:'3 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
                {
                  scheduleType:"Morning & Afternoon",
                },
                {
                  scheduleType:"Evening",
                  Activities:[
                    {
                      Activityid:'5',
                      ActivityTitle:"Evening activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity5", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable',
                      Activityprice:"1000", 
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],

                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'5',
                      TransferTitle:"Evening transfer5 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel5 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan', 
                      Transferamount:"500",
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"Evening hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      HotelAmenties:[
                        "Elevator facility",
                        "Concierge Service",
                      ],
                      HotelInfo:'Hotelsdamage.',
                      Hotelprice:"1000",
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                }
              ],
            },
            {
              tittle:'4 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
                {
                  scheduleType:"Morning",
                  Activities:[
                    {
                      Activityid:'6',
                      ActivityTitle:"Morning activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity6", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable', 
                      Activityprice:"1000",
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],

                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'6',
                      TransferTitle:"Morning transfer6 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel6 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan', 
                      Transferamount:"500",
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"Morning hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      HotelAmenties:[
                        "Elevator facility",
                        "Concierge Service",
                      ],
                      Hotelprice:"1000",
                      HotelInfo:'Hotels damage.',
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                },
                {
                  scheduleType:"Afternoon & Evening",
                },
              ],
            },
            {
              tittle:'5 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
                {
                  scheduleType:"Fullday",
                },
              ],
            },
            {
              tittle:'6 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
                {
                  scheduleType:"Fullday",
                  Activities:[
                    {
                      Activityid:'7',
                      ActivityTitle:"Fullday activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity7", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable', 
                      Activityprice:"1000",
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],

                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'7',
                      TransferTitle:"Fullday transfer7 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel7 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan', 
                      Transferamount:"500",
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"Fullday hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      HotelAmenties:[
                        "Elevator facility",
                        "Concierge Service",
                      ],
                      HotelInfo:'Hotels damage.',
                      Hotelprice:"1000",
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                },
              ],
            },
            {
              tittle:'7 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive at packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
                {
                  scheduleType:"Morning",
                  Activities:[
                    {
                      Activityid:'8',
                      ActivityTitle:"Morning activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity8", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable', 
                      Activityprice:"1000",
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],
                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'8',
                      TransferTitle:"Morning transfer8 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel8 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan', 
                      Transferamount:"500",
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"Morning hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      Hotelprice:"1000",
                      HotelInfo:'Hotels damage.',
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                },
                {
                  scheduleType:"Afternoon & Evening",
                  Activities:[
                    {
                      Activityid:'9',
                      ActivityTitle:"AfternoonEvening activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity9", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable', 
                      Activityprice:"1000",
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],

                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'9',
                      TransferTitle:"AfternoonEvening transfer9 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel9 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan', 
                      Transferamount:"500",
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"AfternoonEvening hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      HotelAmenties:[
                        "Elevator facility",
                        "Concierge Service",
                      ],
                      Hotelprice:"1000",
                      HotelInfo:'Hotels damage.',
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                },
              ],
            },
            { 
              tittle:'8 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
                {
                  scheduleType:"Morning & Afternoon",
                  Activities:[
                    {
                      Activityid:'11',
                      ActivityTitle:"MorningAfternoon activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity11", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable', 
                      Activityprice:"1000",
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],
                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'1',
                      TransferTitle:"MorningAfternoon transfer1 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel1 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan', 
                      Transferamount:"500",
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"MorningAfternoon hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      HotelAmenties:[
                        "Elevator facility",
                        "Concierge Service",
                      ],
                      Hotelprice:"1000",
                      HotelInfo:'Hotels damage.',
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                },
                {
                  scheduleType:"Evening",
                  Activities:[
                    {
                      Activityid:'10',
                      ActivityTitle:"Evening activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity10", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable',
                      Activityprice:"1000", 
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],

                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'10',
                      TransferTitle:"Evening transfer10 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel10 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan', 
                      Transferamount:"500",
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"Evening hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      HotelAmenties:[
                        "Elevator facility",
                        "Concierge Service",
                      ],
                      Hotelprice:"1000",
                      HotelInfo:'Hotels damage.',
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                },
              ],
            }, 
            {
              tittle:'9 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
                {
                  scheduleType:"Fullday",
                },
              ],
            },
            { 
              tittle:'10 Get ready to enjoy a trip most romantic in Bali',
              Description:'Arrive packages.',
              DayImages:[InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage, InsuranceImage],
              schedule:[
                {
                  scheduleType:"Morning & Afternoon",
                  Activities:[
                    {
                      Activityid:'13',
                      ActivityTitle:"MorningAfternoon activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity13", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable', 
                      Activityprice:"1000",
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],
                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'1',
                      TransferTitle:"MorningAfternoon transfer1 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel1 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan',
                      Transferamount:"5500", 
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"MorningAfternoon hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      HotelAmenties:[
                        "Elevator facility",
                        "Concierge Service",
                      ],
                      Hotelprice:"1000",
                      HotelInfo:'Hotels damage.',
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                },
                {
                  scheduleType:"Evening",
                  Activities:[
                    {
                      Activityid:'12',
                      ActivityTitle:"Evening activity1 description",
                      ActivityheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      ActivityOverview: "Activity Overview",
                      Activityimage: InsuranceImage,
                      ActivityName:"Activity12", 
                      Date:"12/04/2024", 
                      Starttime: "10:00 AM",
                      time:"7 hrs", 
                      activitytype:'private', 
                      Activityamount:'Refundable', 
                      Activityprice:"1000",
                      Activityinclusions:["Elevator1","Bathtub1","Elevator1","Bathtub1"], 
                      Activityexclusions:["Elevator","Bathtub"],
                      Additionalinfo:["Additional info","Additional info","Additional info","Additional info"],

                    },
                  ],
                  Transfer:[
                    {
                      Transferid:'10',
                      TransferTitle:"Evening transfer10 description",
                      Transferimage: InsuranceImage,
                      Transferfromto:"Pataya Yotel10 - Pucket Yotel", 
                      TransferDate:"12/04/2024", 
                      Transfernoofpeople:"2 No.s", 
                      Transfertype:'Private', 
                      Transfername:'Sedan', 
                      Transferamount:"500",
                      Transferinformation:["Pickup from Pattaya Yotel","Drop at Yotel  Pucket",], 
                    },
                  ],
                  Hotels:[
                    {
                      Hotelid:'1',
                      HotelTitle:"Evening hotel1 description",
                      HotelOverview: "Lorem laborum.",
                      HotelheaderImages: [Australia1, Australia1, Australia1, Australia1,Australia1,Australia1,Australia1,Australia1,],
                      Hotelimage: InsuranceImage,
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
                      ],
                      HotelAmenties:[
                        "Elevator facility",
                        "Concierge Service",
                      ],
                      Hotelprice:"1000",
                      HotelInfo:'Hotels damage.',
                      Hoteladdress:'21/100 South Sathon Road,Bangkok,Bangkok,10120,TH ',
                    },
                  ],
                },
              ],
            }, 
          ],
          TravellingDate: getTodayDate(), // Set default to today's date
          TravellingFrom: { value: "BLR", label: "Bangalore (BLR)" }, // Example default value
          NoofAdults: 2,
          NoofChildren: 1,
          ChildrenAges: [3, 8],
          NoofInfants: 0,
          Rooms: 1,
          TCS:5,
          DiscountedPrice: 10000,
          rating: 4.5,
          originalprice: 30000,
          offerprice: 26034,
          offerpercentage: 8,
          days: 4,
          EMI:"3472",
          loyality:"611",
          info:"dkhashgdvgsdvgasv",
          amenties:["5 Star","9 Activities", "Shared Transfer" , "24/7 Concierge"],
          image: Pattaya, // Use the actual image link
          information:'Filler filter.',
          Travelexpert:{
            Travelexpertid:1,
            Travelexpertname:"Manimala",
            Tripsplannedsofar:10,
            Travelexpertimage:InsuranceImage,
          },
          itineraryAdditionalInfo: {
            "id": 1,
            termsConditions: `Please read the following terms and conditions carefully before proceeding with your booking. By confirming your booking, you agree to comply with and be bound by these terms.`,

            paymentPolicy: `Full payment must be made at the time of booking unless otherwise stated. We accept all major credit and debit cards. In case of payment failure, your booking may be cancelled.`,
        
            privacyPolicy: `We respect your privacy. All personal data collected will be used solely for booking and communication purposes and will not be shared with third parties without your consent.`,
        
            cancellationPolicy: `Cancellations made 7 days before the travel date are eligible for a full refund. Cancellations within 7 days of the travel date will incur a 50% cancellation fee. No refunds for same-day cancellations.`,
        
            scopeOfService: `Our services include accommodation booking, itinerary planning, and customer support. We do not provide visa processing or flight bookings unless specified.`,
        
            amendmentPolicy: `Any changes to guest details or dates must be made at least 48 hours before check-in. Amendments are subject to availability and may incur additional charges.`,
          },
          visa:{
            visaIncluded: true,
            visaExcluded: false,
            visaTitle: "Visa Title",
            visaImage: InsuranceImage,
            visaDescription: "Arrive at Suvarnabhumi Airport or Don Mueang Airport, Bangkok.Meet Greet",
          },
          Insurance:{
            id:1,
            insuranceTitle: "50K Excl-Silver",
            insurancePlanType: "50K Excl-Silver for 1 people",
            insuranceDescription: "This is the average cost. Depending on the actual age of the travellers, the final cost will vary. We will update you when it does,be rest assured.",
            insuranceInformation: "Insurance prices are purely based on the age band you fall under. Prices might change once you input your age details in the next screen.",
            insuranceImage: InsuranceImage,
            insuranceIncluded: false,
            insuranceExcluded: true,
            insurancePrice:50000,
            insuranceInfoMessage: "Add Insurance to save on un-planned emergencies like lost passport, medical emergency, lost baggage, etc. On an average, it costs less than 20 Euros per person. Make a smart choice now."
          },
          Inclusions:[
            {
              id: 8,
              inclusionName: "Ticket Included",
          },
          {
              id: 3,
              inclusionName: "Mini Fridge",
          }
          ],
          Exclusions:[
            {
              id: 6,
              exclusionName: "Additional Fees",
              "exclusionType": "ACTIVITY"
          },
          {
              id: 2,
              exclusionName: "Other Charges",
          }
          ],
        },]
        // Add more packages as per your requirement
        );
        
                  // Find the package by id
                  const packageData = packages.find(pkg => pkg.id === parseInt(id));

                            if (!packageData) {
                              return <h1>Exclusion data not found</h1>;
                            }

                            const { addedHotel, addedActivity, removeActivity, day, schedule } = location.state || {};

                            useEffect(() => {
                              if ((addedHotel || addedActivity || removeActivity) && day && schedule) {
                                const updatedPackages = [...packages];
                                console.log("Before update:", JSON.stringify(updatedPackages, null, 2));
                            
                                updatedPackages.forEach(pkg => {
                                  pkg.Days.forEach((dayItem, dayIndex) => {
                                    if (dayIndex + 1 === day) {
                                      dayItem.schedule.forEach(scheduleItem => {
                                        if (scheduleItem.scheduleType === schedule) {
                                          // Handle hotel addition
                                          if (addedHotel) {
                                            scheduleItem.Hotels = Array.isArray(addedHotel)
                                              ? addedHotel
                                              : [addedHotel];
                                          }
                                          // Handle activity addition
if (addedActivity) {
  scheduleItem.Activities = Array.isArray(addedActivity)
    ? addedActivity
    : [addedActivity];
}

                            
                                          // Handle activity removal
                                          if (removeActivity && removeActivity.Activityid) {
                                            // Remove only the specific activity by Activityid
                                            scheduleItem.Activities = scheduleItem.Activities.filter(
                                              a => a.Activityid !== removeActivity.Activityid
                                            );
                                          }
                                        }
                                      });
                                    }
                                  });
                                });
                            
                                console.log("After update:", JSON.stringify(updatedPackages, null, 2));
                                setPackages(updatedPackages);
                                navigate(location.pathname, { replace: true });
                              }
                            }, [addedHotel, addedActivity, removeActivity, day, schedule]);
                            
                            console.log("Removing activity for", { day, schedule });

                            const {
                              isInsuranceAdded, handleInsuranceAdd, handleInsuranceRemove, handleChange, isModalOpen, closeModal, selectedPlan, setSelectedPlan, appliedPlan, setAppliedPlan,  isVisaAdded, handleVisaRemove, handleVisaAdd } = AddChangeRemove(); // Track if the visa is added
                         
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

                          const handleTransferTypeToggle = (dayIndex, scheduleType) => {
                            const updatedPackages = packages.map(pkg => {
                              if (pkg.id === 1) {
                                return {
                                  ...pkg,
                                  Days: pkg.Days.map((dayItem, idx) => {
                                    if (idx === dayIndex) {
                                      return {
                                        ...dayItem,
                                        schedule: dayItem.schedule.map(scheduleItem => {
                                          if (scheduleItem.scheduleType === scheduleType) {
                                            return {
                                              ...scheduleItem,
                                              Transfer: scheduleItem.Transfer?.map(transfer => ({
                                                ...transfer,
                                                Transfertype: transfer.Transfertype === "Private" ? "Public" : "Private"
                                              }))
                                            };
                                          }
                                          return scheduleItem;
                                        })
                                      };
                                    }
                                    return dayItem;
                                  })
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

                  
                            const Expert = packageData.Travelexpert; // Access travel expert object
                  
                            const Insurance = packageData.Insurance; // Access the visa object directly

                            const visa = packageData.visa; // Access the visa object directly
        
                            const [showSlider, setShowSlider] = useState(false);

                            const [selectedImages, setSelectedImages] = useState([]);
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
        
    return (
        <div className="packagelisting">
            <NavBar style={{backgroundColor:"#1b2340"}} />
            <div className="package-itinerary">
              <div className="package-t-d">
              <h2 className="Itinerarytittle">{packages[0].title}</h2>
              <Packagelistingimages packageImages={packages[0].Images}/>
              </div>
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
<div className="day-itinerary" style={{ gap: "0px" }}>
  {packages[0].Days.map((dayItem, dayIndex) => (
    <div className="dayWise-itinerary" key={dayIndex}>
      <div className="days-itinerary">
        <div className="daywise-p-box-line">
          <div className="box-line">
            <div className="ellipse" />
            {dayIndex !== packages[0].Days.length - 1 && <div className="vertical-line" />}
          </div>
        </div>

        <div className="dayWise-activity">
          <div className="textfield_itinerary">
            <div className="timeSlotThree" style={{ gap: "0px", width: "100%" }}>
              <p className="dayWise" style={{ width: "fit-content" }}>Day {dayIndex + 1}</p>

              {dayItem.schedule?.map((scheduleItem, index) => (
                <div
                  key={index}
                  className="timeSlotThree"
                  style={{
                    width: scheduleItem.scheduleType?.includes("Morning & Afternoon") ? "66.6%" :
                           scheduleItem.scheduleType?.includes("Afternoon & Evening") ? "66.6%" :
                           scheduleItem.scheduleType?.includes("Morning") ? "33.3%" :
                           scheduleItem.scheduleType?.includes("Afternoon") ? "33.3%" :
                           scheduleItem.scheduleType?.includes("Evening") ? "33.3%" :
                           scheduleItem.scheduleType?.includes("Fullday") ? "100%" :
                           "100%"
                  }}
                >
                  <div className="activity-time">
                    <div className="timeslot">
                      <p className="time">{scheduleItem.scheduleType}</p>

                      {["Morning", "Morning & Afternoon", "Afternoon", "Afternoon & Evening", "Evening", "Fullday"].includes(scheduleItem.scheduleType) &&
                      !scheduleItem.Hotels?.length && !scheduleItem.Transfer?.length && !scheduleItem.Activities?.length && (
                        <div className="activity-time1">
                          <p className="time">At leisure.</p>
                          <button
                            className="addactivity"
                            onClick={() =>
                              navigate("/ActivityModal", {
                                state: {
                                  id: packageData.id,
                                  day: dayIndex + 1,
                                  schedule: scheduleItem.scheduleType,
                                  fromAddActivity: true,
                                  from: `/Packageitinerary/${packageData.id}`,
                                },
                              })
                            }
                          >
                            + Add Activity
                          </button>
                        </div>
                      )}
{["Morning", "Morning & Afternoon", "Afternoon", "Afternoon & Evening", "Evening", "Fullday"].includes(scheduleItem.scheduleType || "") && (
<div className="timedescription">
  
    {scheduleItem.Transfer?.map((transfer) => (
      <p key={transfer.Transferid}>{transfer.TransferTitle}</p>
    ))}    
  
   {scheduleItem?.Hotels?.map((hotel) => (
      <p 
      key={hotel.Hotelid} 
      onClick={() =>{
        navigate(`/ViewHotel/${hotel.Hotelid}`, {
          state: { hotel1: hotel,
            day1: dayIndex + 1,
            schedule1: scheduleItem.scheduleType,
            from: `/Packageitinerary/${packageData.id}`,
           },
        })
      }}
            style={{ cursor: "pointer" }}
  onMouseEnter={(e) => (e.target.style.color = "#fdb44b")}
  onMouseLeave={(e) => (e.target.style.color = "")}
      >{hotel.Hotelname}</p>
    ))}

    {scheduleItem.Activities?.map((activity) => (
      <p 
      key={activity.Activityid}
      onClick={() => {
        navigate(`/view-activity/${activity.Activityid}`, {
          state: {
            activity1: activity,
            day1: dayIndex+1,
            schedule1: scheduleItem.scheduleType,
            from: `/Packageitinerary/${packageData.id}`,
          }
        });
      }}
      style={{ cursor: "pointer" }}
  onMouseEnter={(e) => (e.target.style.color = "#fdb44b")}
  onMouseLeave={(e) => (e.target.style.color = "")}
      >{activity.ActivityName}</p>
    ))}
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
    </div>
  ))}
</div>

                                    <div>
                                    <div className="tab-content1">
                {packageData.Days.map((DayTabs, index) => (
                    <div 
                        key={index} 
                        className="section1"
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
                                    {!isMobile || isOpen === "transfer" ? 
                                                                        <>
                                                                        <div className="Activity-listing">
                                                                          {packageData?.Days?.flatMap((dayItem, dayIndex) =>
                                                                            dayItem.schedule?.flatMap((scheduleItem) =>
                                                                              scheduleItem.Transfer?.map((transfer, transferIndex) => (
                                                                                <div
                                                                                  className="Activity-content-information"
                                                                                  key={`day-${dayIndex}-schedule-${scheduleItem.scheduleType}-transfer-${transferIndex}`}
                                                                                >
                                                                                  <div className="activity-content">
                                                                                    <img src={transfer.Transferimage} alt="transfer" />
                                                                                    <div className="activity-details">
                                                                                      <div className="Date-actions">
                                                                                        <h3>{transfer.Transferfromto}</h3>
                                                                                        <div className="insurance-actions">
                                                                                          <button
                                                                                            className="change-action"
                                                                                            onClick={() =>
                                                                                              handleTransferTypeToggle(dayIndex, scheduleItem.scheduleType)
                                                                                            }
                                                                                          >
                                                                                            {transfer.Transfertype === "Private" ? "Change to Public" : "Change to Private"}
                                                                                          </button>
                                                                                        </div>
                                                                                      </div>
                                                                      
                                                                                      <p className="day-schedule-info">
                                                                                        Day {dayIndex + 1} - {scheduleItem.scheduleType}
                                                                                      </p>
                                                                      
                                                                                      <ul className="activity-time-type-amount">
                                                                                        <li>{transfer.Transfertype}</li>
                                                                                        <li>{transfer.Transfernoofpeople}</li>
                                                                                        <li>{transfer.Transfername}</li>
                                                                                      </ul>
                                                                      
                                                                                      <ul className="Transfer-Information">
                                                                                        {transfer.Transferinformation?.map((info, i) => (
                                                                                          <li key={i}>{info}</li>
                                                                                        ))}
                                                                                      </ul>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              ))
                                                                            )
                                                                          )}
                                                                        </div>
                                                                      </>
                                    : null }



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
                                    {!isMobile || isOpen === "hotel" ? 
                                                                    <>
                                                                    <div className="Activity-listing">
                                                                    {packageData?.Days?.flatMap((dayItem, dayIndex) =>
                                                                            dayItem.schedule?.flatMap((scheduleItem) =>
                                                                              scheduleItem.Hotels?.map((hotel, hotelIndex) => (
                                                                        <div className='Hotel-content-information' 
                                                                        key={`day-${dayIndex}-schedule-${scheduleItem.scheduleType}-transfer-${hotelIndex}`}
                                                                        >
                                                                            <div className='Hotel-content'>
                                                                                <div className='Hotel-Image-Badge'>
                                                                                    <img src={hotel.Hotelimage} alt={hotel.Hotelname} />
                                                                                    {hotel.WTRecommended && (
                                                                                    <div className="wt-recommended-badge">
                                                                                        <span>WT RECOMMENDED</span>
                                                                                    </div>
                                                                                    )}
                                                                                </div>
                                                                                <div className='activity-details'>
                                                                                    <div className='Date-actions'>
                                                                                        <h3>{hotel.Hotelname}</h3>
                                                                                        <div className="insurance-actions">
                                                                                        <button 
                                      className="change-action" 
                                      onClick={() =>{
                                        navigate(`/ViewHotel/${hotel.Hotelid}`, {
                                          state: { hotel1: hotel,
                                            day1: dayIndex + 1,
                                            schedule1: scheduleItem.scheduleType,
                                            from: `/Packageitinerary/${packages[0].id}`,
                                           },
                                        })
                                      }}
                                      
                                    >
                                      View
                                    </button>
                                    
                                    <button className="change-action" onClick={() =>{
                                        navigate("/HotelModal", {
                                          state: {
                                            hotel: hotel,
                                            day: dayIndex + 1,
                                            schedule: scheduleItem.scheduleType,
                                            from: `/Packageitinerary/${packages[0].id}`,
                                          }
                                        });
                                        
                                    }}>Change</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="day-schedule-info">Day {dayIndex + 1} - {scheduleItem.scheduleType}</p>
                                                                                    <p className="Hotel-Rating">
                                                                                    <RatingStars rating={Number(hotel.Hotelrating) || 0} />
                                                                                    Trip Advisor
                                                                                    </p>
                                                                                    <ul className='activity-time-type-amount'>
                                                                                    <li>{hotel.Hotelaccomodates}</li>
                                                      <li>{hotel.Hotelamount}</li>
                                                      <li>{hotel.Hotelarea}</li>
                                                      <li>{hotel.Hoteltype}</li>
                                                                                    </ul>
                                                                                    <ul className="Inclusions">
                                                                                        Inclusions:
                                                                                        {hotel.Hotelinclusions?.map((inc, i) => (
                                                                                            <li key={i}>{inc}</li>
                                                                                        ))}
                                                                                    </ul>
                                                                                    <ul className="Exclusions">
                                                                                        Exclusions:
                                                                                        {hotel.Hotelexclusions?.map((exc, i) => (
                                                                                            <li key={i}>{exc}</li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                            <div className="Hotel-price-info">
                                                                                <span className='Hotel-info-icon'><IoIosInformationCircle /></span>
                                                                                <p>{hotel.HotelInfo}</p>
                                                                            </div>
                                                                        </div>
                                                                                                                                    )
                                                                                            )
                                                                                        )
                                                                                    )}
                                                                    </div>
                                                                    </>
                                    : null }
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
                                    {!isMobile || isOpen === "activity" ? 
                                      <div className="Activity-listing">
  {
    packages[0].Days.every(dayItem =>
      dayItem.schedule.every(scheduleItem =>
        !scheduleItem.Activities || scheduleItem.Activities.length === 0
      )
    ) ? (
      <p style={{ marginLeft: "20px" }}>No activities added.</p>
    ) : (
      packages[0].Days.map((dayItem, dayIndex) =>
        dayItem.schedule.map((scheduleItem, scheduleIndex) =>
          scheduleItem.Activities?.map((activity, activityIndex) => (
            <div className='Activity-content-information' key={`day-${dayIndex}-schedule-${scheduleIndex}-activity-${activityIndex}`}>
              <div className='activity-content'>
                <img src={activity.Activityimage} alt={activity.ActivityName} />
                <div className='activity-details'>
                  <div className='Date-actions'>
                    <h3>{activity.ActivityName}</h3>
                    <div className="insurance-actions">
                      <button 
                        className="change-action"
                        onClick={() => {
                          navigate(`/view-activity/${activity.Activityid}`, {
                            state: {
                              activity1: activity,
                              day1: dayIndex+1,
                              schedule1: scheduleItem.scheduleType,
                              from: `/Packageitinerary/${packages[0].id}`,
                            }
                          });
                        }}
                      >
                        View
                      </button>
                      <button 
                        className="change-action"
                        onClick={() => {
                          navigate("/ActivityModal", {
                            state: {
                              activity: activity,
                              day: dayIndex+1,
                              schedule: scheduleItem.scheduleType,
                              from: `/Packageitinerary/${packages[0].id}`,
                            }
                          });
                        }}
                      >
                        Change
                      </button>
                      <button 
                        className="remove-action"
                        onClick={() => {
                          navigate(`/Packageitinerary/${packageData.id}`, {
                            state: {
                              removeActivity: activity,
                              day: dayIndex+1,
                              schedule: scheduleItem.scheduleType,
                            },
                          });
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p style={{ margin: "0%" }}>
                    Day {dayIndex+1} - {scheduleItem.scheduleType}
                  </p>
                  <ul className='activity-time-type-amount'>
                    <li>{activity.time}</li>
                    <li>{activity.activitytype}</li>
                    <li>{activity.Activityamount}</li>
                  </ul>
                  <ul className="Inclusions">
                    Inclusions:
                    {activity.Activityinclusions?.map((info, i) => (
                      <li key={i}>{info}</li>
                    ))}
                  </ul>
                  <ul className="Exclusions">
                    Exclusions:
                    {activity.Activityexclusions?.map((info, i) => (
                      <li key={i}>{info}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        )
      )
    )
  }
</div>

                                    : null }    
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
            {!isMobile && (<Footer />)}
            </div>
            {isMobile && (
              <div className="booking-summary">
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
              </div>
              )}
        </div>
    );
}
