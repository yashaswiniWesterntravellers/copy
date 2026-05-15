import React from 'react';
import Slider from 'react-slick';
import './populardestination.css';
import './items.css'; // External CSS for custom styling
import Image from '../Assets/image.jpg';
import { TiLocation } from "react-icons/ti";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <GrFormNextLink className='circle1' />
    </div>
  );
};

// Custom Prev Arrow
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <GrFormPreviousLink className='circle' />
    </div>
  );
};

export default function Cards() {
  // Convert destinations to an array
  const destinations = [
    {
      name: 'Dubai',
      icon: <TiLocation className='tiLocation' />,
      image: Image,
      tagline: 'THE CITY OF LIFE',
    },
    {
      name: 'Singapore',
      icon: <TiLocation className='tiLocation' />,
      image: Image,
      tagline: 'THE LION CITY',
    },
    {
      name: 'Australia',
      icon: <TiLocation className='tiLocation' />,
      image: Image,
      tagline: 'LAND OF DOWN UNDER',
    },
    {
      name: 'New Zealand',
      icon: <TiLocation className='tiLocation' />,
      image: Image,
      tagline: 'THE ADVENTURE CAPITAL',
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='populardestination'>
      <h2 className='section-title'>Popular Destinations</h2>
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.image} alt={destination.name} />
            <div className='text-overlay'>
              <div className="destination-info">
                {destination.icon}{destination.name}
              </div>
              <div className='text-line'>{destination.tagline}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
