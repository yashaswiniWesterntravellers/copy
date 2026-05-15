import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

      // Custom Next Arrow
export const NextArrow = ({ className, onClick, currentSlide, slideCount, slidesToShow }) => {
    const isDisabled = currentSlide >= slideCount - slidesToShow; // Disable next button on last slide
    return (
      <div
        className={`${className} next-arrow ${isDisabled ? 'non-clickable' : 'clickable'}`}
        onClick={isDisabled ? null : onClick} // Prevent click if disabled
        style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
      >
        <GrFormNextLink className={`circle ${isDisabled ? 'non-clickable' : 'clickable'}`} />
      </div>
    );
  };
  
  // Custom Prev Arrow
  export const PrevArrow = ({ className, onClick, currentSlide }) => {
    const isDisabled = currentSlide === 0; // Disable prev button on first slide
    return (
      <div
        className={`${className} prev-arrow ${isDisabled ? 'non-clickable' : 'clickable'}`}
        onClick={isDisabled ? null : onClick} // Prevent click if disabled
        style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
      >
        <GrFormPreviousLink className={`circle ${isDisabled ? 'non-clickable' : 'clickable'}`} />
      </div>
    );
  };
      export const Imagesettings = (slidesToShow) => ({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow slidesToShow={slidesToShow} />,
        prevArrow: <PrevArrow />,
      });