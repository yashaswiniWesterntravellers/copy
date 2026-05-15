import './Hotelchangeremoveotherdetails.css';
import { packages } from '../Packagelisting/Packagelisting';
import { IoIosInformationCircle } from "react-icons/io";
import { TbCreditCardRefund } from "react-icons/tb";
import { LiaUsersSolid } from "react-icons/lia";
import { TbChartTreemap } from "react-icons/tb";


export default function Hotelchangeremoveotherdetails({ hotelId }){
    const hotels = packages.flatMap(pkg => pkg.Hotels || []);
    const hotelData = hotels.find(hotel => {
        return hotel.Hotelid === hotelId; // Ensure correct comparison based on types
      });
    const handleonClickChangeHotel = () =>{
        console.log("change Hotel");
    }
    return(
        <div className="Hotel-summary-container">
            <div className="changehotel-remove">
                <button className='change-hotel-button' onClick={handleonClickChangeHotel}>Change Hotel</button>
            </div>
            <hr />
            <div className="changehotel-remove">
                <h4>{hotelData.Hoteltype} Hotel </h4>
                <p>Horizon City View</p>
            </div>
            <hr />
            <div className="changehotel-remove">
            <div className="Hotel-Details">
                <p>Check-in Time :</p>
                <h4>{hotelData.Hotelcheckintime}</h4>
            </div>
            <div className="Hotel-Details">
                <p>Check-out Time :</p>
                <h4>{hotelData.Hotelcheckouttime}</h4>
            </div>
            </div>
            <hr />
            <div className="hotel-services">
                <div className="hotel-Type">
                    <span className="hotel-icon"><TbChartTreemap /></span>
                <p>{hotelData.Hotelarea}</p>
                </div>
                <div className="hotel-Type">
                    <span className="hotel-icon"><TbCreditCardRefund /></span>
                <p>{hotelData.Hotelamount}</p>
                </div>
                <div className="hotel-Type">
                    <span className="hotel-icon"><LiaUsersSolid /></span>
                <p>{hotelData.Hotelaccomodates}</p>
                </div>
            </div>
            <hr />
            <div className="changehotel-remove">
            <span><IoIosInformationCircle className='Hotel-info-icon' /></span>
                <p>{hotelData.HotelInfo}</p>
            </div>
        </div>
    );
}