import React, {useState} from 'react';
import './Tripstyle.css'; // Include external CSS for styling
import { FaPlane, FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import ButtonWithIcon from '../Button/Teritary';

const TripStyle = () => {
    const [tripTypes] = useState([
        { title: 'Couple', description: 'We provide the best travel services for you' },
        { title: 'Family', description: 'We provide the best travel services for you' },
        { title: 'Friends', description: 'We provide the best travel services for you' },
        { title: 'Solo', description: 'We provide the best travel services for you' }
    ]);

    return (
        <div className="trip-style-container">
            <div  className="trip-style-heading">
            <h1>Choose Your <span>Trip Style</span></h1>
            </div>
            <div className="trip-style-content">
                {/* Left Side */}
                <div className="trip-options">
                    {tripTypes.slice(0, 2).map((type, index) => (
                        <div key={index} className="trip-option">
                            <h2>{type.title}</h2>
                            <p>{type.description}</p>
                            <ButtonWithIcon text="Details" iconPosition="right" />
                        </div>
                    ))}
                </div>

                {/* Image */}
                <div className="trip-image">
                        <ul>
                            <li><FaPlane className='tripicon' /> Destinations</li>
                            <li><FaCalendarAlt className='tripicon' /> Date</li>
                            <li><FaMapMarkerAlt className='tripicon' /> Location</li>
                            <li><FaDollarSign className='tripicon' /> Prices</li>
                        </ul>
                </div>

                {/* Right Side */}
                <div className="trip-options">
                    {tripTypes.slice(2).map((type, index) => (
                        <div key={index} className="trip-option">
                            <h2>{type.title}</h2>
                            <p>{type.description}</p>
                            <ButtonWithIcon text="Details" iconPosition="right" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TripStyle;
