import React from 'react';
import './RatingStar.css';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

// Rating component to render stars
const RatingStars = ({ rating }) => {
  const totalStars = 5; // Assume rating is out of 5
  const fullStars = Math.floor(rating); // Full star count
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); // Calculate remaining empty stars

  // Ensure array lengths are non-negative
  const validEmptyStars = Math.max(emptyStars, 0);
  const validFullStars = Math.max(fullStars, 0);

  return (
    <div className="rating-stars">
        {/* Display rating text */}
      <span className="rating-text"> {rating}</span>
      <div className='Stars'>
      {/* Render full stars */}
      {[...Array(validFullStars)].map((_, index) => (
        <FaStar key={index} style={{ color: '#ffc371' }} />
      ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <FaStarHalfStroke style={{ color: '#ffc371' }} />}

      {/* Render empty stars to complete 5 stars */}
      {[...Array(validEmptyStars)].map((_, index) => (
        <FaStar key={index} style={{ color: '#e7e7e7' }} />
      ))}

</div>

      
    </div>
  );
};

export default RatingStars;
