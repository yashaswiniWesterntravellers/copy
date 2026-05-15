import './populardestination.css';
import './items.css'; // External CSS for custom styling
import Image from '../Assets/image.jpg';
import { TiLocation } from "react-icons/ti";
import React, { useState } from 'react';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

export default function Card() {
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

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle "Next" button click
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to handle "Prev" button click
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='populardestination'>
            <div className='populardestinationsarrow'>
                <h2>Popular Destinations</h2>
                <GrFormPreviousLink className='circle' onClick={handlePrev} />
                <GrFormNextLink className='circle1' onClick={handleNext} />
            </div>
            <div className="destination-card">
                <img src={destinations[currentIndex].image} alt={destinations[currentIndex].name} />
                <div className='text-overlay'>
                    <div className="destination-info">
                        {destinations[currentIndex].icon}{destinations[currentIndex].name}
                    </div>
                    <div className='text-line'>{destinations[currentIndex].tagline}</div>
                </div>
            </div>
        </div>
    );
}
