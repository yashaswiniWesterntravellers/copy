import './packagedurationprice.css';
import RatingStars from '../Rating/RatingStars';

export default function Packagedurationprice(){
    return(
        <div className="packagedurationpricerating">
            <div className='packagedurationprice'>
                <p>Ideal Duration</p>
                <h4>12 Nights</h4>
            </div>
            <div  className='packagedurationprice'>
                <p>Starting Price</p>
                <h4>₹27,375</h4>
            </div>
            <div  className='packageexpertise'>
                <p>Our Expertise</p>
                {/* <Rating /> */}
                <p className='Ratingstars'><RatingStars rating='3.5' />Trip Advisor</p>
            </div>
        </div>
    );
}