import React, {useState, useEffect} from 'react';
import NavBar from '../Navigation/NavBar';
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import InternationalDestinationsActive from '../../Assets/internationaldestinationsactive.svg';
import DomesticDestinationsActive from '../../Assets/domesticdestinationsactive.svg';
import InternationalDestinationsINActive from '../../Assets/Internationaldestinationsinactive.svg';
import DomesticDestinationsInActive from '../../Assets/domesticdestinationsinactive.svg';
import './exploredestinations.css';
const ExploreDestinations = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
    const navigate = useNavigate(); // Hook to navigate

    // Redirect to main page if screen size changes to desktop
    useEffect(() => {
      if (!isMobile) {
        navigate("/"); // Redirect to main page (update this path if needed)
      }
    }, [isMobile, navigate]);
    const [activeTab, setActiveTab] = useState('domestic'); // Set 'domestic' as default tab
    // Use useState to manage destination lists
  const [DomesticDestinations] = useState([
    {name:'Shimla', link:'/Listing'},
    {name:'Kashmir', link:'/Listing'},
    {name:'Split Valley', link:'/Listing'},
    {name:'Andaman Nicobar', link:'/Listing'},
    {name:'Lakshadweep', link:'/Listing'},
    {name:'Manali', link:'/Listing'},
    {name:'Kasol', link:'/Listing'},
    {name:'Kerala', link:'/Listing'},
    {name:'Ladak', link:'/Listing'},
    {name:'Himachal Pradesh', link:'/Listing'},
  ]);
    const [InternationalDestinations] = useState([
    {name:'Paris', link:'/Listing'},
    {name:'New York', link:'/Listing'},
    {name:'Maldives', link:'/Listing'},
    {name:'Dubai', link:'/Listing'},
    {name:'Singapore', link:'/Listing'},
    {name:'Bali', link:'/Listing'},
    {name:'Switzerland', link:'/Listing'},
    {name:'Tokyo', link:'/Listing'},
    {name:'Sydney', link:'/Listing'},
    {name:'London', link:'/Listing'},
  ]);
const renderDestinations = (destinations) => {
  return destinations.map((destination, index) => (
    <li key={index} className="destination-item">
      <Link to={destination.link} className="destination-link">
        {destination.name}
      </Link>
    </li>
  ));
};
    return(
        <div>
            <NavBar />
            <div className='d-m-banner'>
            <div className="banner-image">
                <div className='banner-text'>
                    <h1 className='h1'>Let’s travel the world</h1>
                    <p className='paragraph'>Explore destinations, places, and unforgettable experiences</p>
                </div>
            </div>
                    </div>
            <div className='domestic-packages'>
            <div className='tab-buttons'>
                    <button
                    className={`tab-button ${ activeTab === 'domestic' ? 'active' : ''}`}
                    onClick={() => setActiveTab('domestic')}
                    >
                        <img 
                        src={
                            activeTab === 'domestic'
                              ? DomesticDestinationsActive
                              : DomesticDestinationsInActive
                          } 
                        alt='Explore Destinations' />
                        Domestic Destinations</button>
                    <button
                    className={`tab-button ${ activeTab === 'international' ? 'active' : ''}`}
                    onClick={() => setActiveTab('international')}
                    >
                        <img 
                        src={
                            activeTab === 'domestic'
                              ? InternationalDestinationsINActive
                              : InternationalDestinationsActive
                          } 
                        alt='Explore Destinations' />
                        International Destinations</button>
                </div>
                <div>
                <h2 className='destinationheading'>
  {activeTab === 'domestic'
    ? 'Domestic Destinations'
    : 'International Destinations'}
</h2>

                <ul>
                  {renderDestinations(
              activeTab === "domestic"
                ? DomesticDestinations
                : InternationalDestinations
            )}
                </ul>
                </div>
            </div>
        </div>
    )
};

export default ExploreDestinations;