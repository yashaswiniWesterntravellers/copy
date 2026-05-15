import BackButton from "../Components/BackButton/BackButton";
import Filterhotellisting from "../Components/Filterpackagelisting/FilterHotelListing";
import NavBar from "../Components/Navigation/NavBar";

export default function HotelListingMain(){
    return(
        <div style={{backgroundColor:"#F7F8FB"}}>
            <NavBar />
            <BackButton />
            <Filterhotellisting />
        </div>
    )
}