import React from 'react';
import './Imageslider.css';
import { IoCloseSharp } from "react-icons/io5";
import Slider from 'react-slick'; // Import a slider like react-slick

// Import CSS for react-slick slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Imagesettings } from '../Card1/Arrows';




const Imageslider = ({ images, onClose }) => {

  const settingsForMultipleImages = Imagesettings(1); // Show 4 images at once

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}><IoCloseSharp /></button>
        <Slider {...settingsForMultipleImages}>
          {images.map((image, index) => (
            <div key={index} className="slider-image-container">
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Imageslider;
