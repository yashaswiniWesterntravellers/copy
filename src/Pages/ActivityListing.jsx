import BackButton from "../Components/BackButton/BackButton";
import Filteractivitylisting from "../Components/Filterpackagelisting/FilterActivityListing";
import NavBar from "../Components/Navigation/NavBar";

export default function ActivityListing(){
    return(
        <div style={{backgroundColor:"#F7F8FB"}}>
            <NavBar />
            <BackButton />
            <Filteractivitylisting />
        </div>
    )
}