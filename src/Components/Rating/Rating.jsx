import './rating.css';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
export const Fullrating=()=>{
    return(
        
            <FaStar className='ratingyes' />
    )
}
export const Halfrating=()=>{
    return(
        
            <FaStarHalfStroke className='ratingyes' />
    )
}
export const Norating=()=>{
    return(
        
            <FaStar className='norating' />
    )
}
export const Rating=()=>{
    return(
        <h4  className='rating'>3.5<span className='ratingicon'><Fullrating /><Fullrating /><Halfrating /><Norating /><Norating /></span>Trip Advisor</h4>
    )
}
export const Testimonialrating=()=>{
    return(
        <div  className='ratingicon'><Fullrating /><Fullrating /><Halfrating /><Norating /><Norating /></div>
    )
}

