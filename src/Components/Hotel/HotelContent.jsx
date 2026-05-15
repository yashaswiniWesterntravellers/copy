import { packages } from '../Packagelisting/Packagelisting';
import './HotelContent.css';

export const HotelOverview = ({ hotelId }) => {
    const hotels = packages.flatMap(pkg => pkg.Hotels || []);
    const hotelData = hotels.find(hotel => {
        return hotel.Hotelid === hotelId; // Ensure correct comparison based on types
      });
    return(
        <div>
            <h3>Overview</h3>
            <p className='Hotel-Overview'>{hotelData.HotelOverview}</p>
        </div>
        
    )
}

export const HotelAmenties = ({hotelId}) => {
    const hotels = packages.flatMap(pkg => pkg.Hotels || []);
    const hotelData = hotels.find(hotel => hotel.Hotelid === hotelId);

    // Assuming hotelData.HotelNearbyAttractions is an array of attractions
    const attractions = hotelData?.HotelAmenties || []; // Fallback to an empty array if not found
    return(
        <div>
            <h3>Amenties</h3>
            {attractions.length > 0 ? (
                <ul className='Hotel-content-ul'>
                    {attractions.map((attraction, index) => (
                        <li key={index}>{attraction}</li>
                    ))}
                </ul>
            ) : (
                <p>No nearby attractions found.</p>
            )}
        </div>
    )
}

export const HotelInclusionsExclusions = ({hotelId}) => {
    const hotels = packages.flatMap(pkg => pkg.Hotels || []);
    const hotelData = hotels.find(hotel => hotel.Hotelid === hotelId);

    // Assuming hotelData.HotelNearbyAttractions is an array of attractions
    const Inclusions = hotelData?.Hotelinclusions || []; // Fallback to an empty array if not found
    const Exclusions = hotelData?.Hotelexclusions || []; // Fallback to an empty array if not found
    return(
        <div className='Hotel-Inclusion-Exclusion'>
        <div className='Hotel-Inclusion'>
        <h3>Inclusions</h3>
        {Inclusions.length > 0 ? (
            <ul className='Hotel-Inclusioncontent-ul'>
                {Inclusions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                ))}
            </ul>
        ) : (
            <p>No nearby attractions found.</p>
        )}
    </div>
    <div className='Hotel-Exclusion'>
    <h3>Exclusions</h3>
    {Exclusions.length > 0 ? (
        <ul className='Hotel-Exclusioncontent-ul'>
            {Exclusions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
            ))}
        </ul>
    ) : (
        <p>No nearby attractions found.</p>
    )}
</div>
</div>
    )
}

export const HotelNearbyAttractions = ({ hotelId }) => {
    const hotels = packages.flatMap(pkg => pkg.Hotels || []);
    const hotelData = hotels.find(hotel => hotel.Hotelid === hotelId);

    // Assuming hotelData.HotelNearbyAttractions is an array of attractions
    const attractions = hotelData?.HotelNearbyAttractions || []; // Fallback to an empty array if not found

    return (
        <div>
            <h3>Nearby Attractions</h3>
            {attractions.length > 0 ? (
                <ul className='Hotel-content-ul'>
                    {attractions.map((attraction, index) => (
                        <li key={index}>{attraction}</li>
                    ))}
                </ul>
            ) : (
                <p>No nearby attractions found.</p>
            )}
        </div>
    );
};