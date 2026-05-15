import React, { useState } from 'react';
import './testimonials.css';
import Imageslider from '../Imageslider/Imageslider';
// import { Testimonialrating } from '../Rating/Rating';
// import Primarybutton from '../Button/Primary';
import RatingStars from '../Rating/RatingStars';



export const Testimonials = ({ testimonialheading = "Customer Testimonials", reviewdata = reviewData }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedImages, setSelectedImages] = useState([]);
  const [showSlider, setShowSlider] = useState(false);

  // Function to load more testimonials
  const loadMoreTestimonials = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  // Function to handle image click for the slider
  const handleImageClick = (images) => {
    setSelectedImages(images);
    setShowSlider(true);  // Show the modal with the slider
  };
  

  return (
    <div className='Testimonialcards'>
      <h2>{testimonialheading}</h2>
      <div className='Testimonialcard1'>
        {reviewdata.slice(0, visibleCount).map((testimonialdata, index) => (
          <div className='Testimonialcard' key={index}>
            <div className='testimonialprofile'>
              {testimonialdata.profileimage}
              <div className='customernamerating'>
                <h4>{testimonialdata.customername}</h4>
                <p> <RatingStars rating={testimonialdata.rating} /> {testimonialdata.reviewedon}</p>
              </div>
            </div>
            <p>{testimonialdata.Message}</p>
            <ul className='testimonialimages'>
              {/* Show first 3 images */}
              {/* First 3 images */}
{testimonialdata.images.slice(0, 3).map((image, imgIndex) => (
  <li key={imgIndex}>
    <img
      src={image}
      alt={`Review ${testimonialdata.id} - item ${imgIndex + 1}`}
      className="testimonial-image"
      onClick={() => handleImageClick(testimonialdata.images)}
    />
  </li>
))}

{/* If there are more than 4 images, show the "+ more" on the 4th image */}
{testimonialdata.images.length > 4 ? (
  <li className="more-images">
    <div className="image-container">
      <img
        src={testimonialdata.images[3]} // 4th image
        alt={`Review ${testimonialdata.id} - additional`}
        className="testimonial-image"
        onClick={() => handleImageClick(testimonialdata.images)}
      />
      <div className="more-overlay" onClick={() => handleImageClick(testimonialdata.images)}>
        +{testimonialdata.images.length - 3} more
      </div>
    </div>
  </li>
) : (
  testimonialdata.images.length === 4 && (
    <li>
      <img
        src={testimonialdata.images[3]}
        alt={`Review ${testimonialdata.id} - item 4`}
        className="testimonial-image"
        onClick={() => handleImageClick(testimonialdata.images)}
      />
    </li>
  )
)}

            </ul>
          </div>
        ))}
      </div>

      {/* Load More button */}
      {visibleCount < reviewdata.length && (
        // <button className="load-more" onClick={loadMoreTestimonials}>
        //   Load More
        // </button>
        // <Primarybutton  className="load-more" button='Load More' onClick={loadMoreTestimonials} />
        <button className='load-more' onClick={loadMoreTestimonials}>Load More</button>
      )}

      {/* Image Slider Modal */}
      {showSlider && (
        <Imageslider 
          images={selectedImages} 
          onClose={() => setShowSlider(false)} 
        />
      )}
    </div>
  );
};

export default Testimonials;