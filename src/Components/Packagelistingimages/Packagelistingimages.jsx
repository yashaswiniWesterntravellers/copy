import React, { useState, useEffect } from "react";
import "./Packagelistingimages.css";
import { IoCloseSharp } from "react-icons/io5";
import Imageslider from "../Imageslider/Imageslider"; // Import the image slider component

export default function Packagelistingimages({ packageImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [sliderImages, setSliderImages] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const openImageSlider = (images) => {
    setSliderImages(images);
    setIsSliderOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  return (
    <div>
      {packageImages && Array.isArray(packageImages) && (
        <div>
          {isMobile ? (
            // MOBILE VIEW: Show only one image + "more" button
            <div className="packagelistingimages">
              <div className="packageimage more" onClick={() => openImageSlider(packageImages)}>
                <img src={packageImages[0]} alt="" />
                {packageImages.length > 1 && (
                  <span className="more-text">+{packageImages.length - 1} more</span>
                )}
              </div>
            </div>
          ) : (
            // DESKTOP VIEW: Show up to 6 images
            packageImages.length > 6 ? (
              <div className="packagelistingimages">
                <div className="packageimage">
                  <img src={packageImages[0]} alt="" onClick={() => openImageSlider(packageImages)} />
                </div>
                <div className="packageimage1">
                  <img src={packageImages[1]} alt="" onClick={() => openImageSlider(packageImages)} />
                  <img src={packageImages[2]} alt="" onClick={() => openImageSlider(packageImages)} />
                </div>
                <div className="packageimage1">
                  <img src={packageImages[3]} alt="" onClick={() => openImageSlider(packageImages)} />
                  <img src={packageImages[4]} alt="" onClick={() => openImageSlider(packageImages)} />
                </div>
                <div className="packageimage more" onClick={() => openImageSlider(packageImages)}>
                  <img src={packageImages[5]} alt="" />
                  <span className="more-text">+{packageImages.length - 6} more</span>
                </div>
              </div>
            ) : (
              packageImages.map((image, index) => (
                <div className="packageimage" key={index}>
                  <img src={image} alt="" onClick={() => openImageModal(image)} />
                </div>
              ))
            )
          )}
        </div>
      )}

      {/* Modal for displaying the full-size image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}><IoCloseSharp /></span>
            <img src={selectedImage} alt="Full Size" className="full-image" />
          </div>
        </div>
      )}

      {/* Image Slider Modal */}
      {isSliderOpen && (
        <Imageslider images={sliderImages} onClose={closeSlider} />
      )}
    </div>
  );
}
