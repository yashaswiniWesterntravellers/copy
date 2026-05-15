import React from 'react';
import ExploreDestinations from '../../Assets/ExploreDestinations.svg';
import ExclusivePackages from '../../Assets/ExclusivePackages.svg';
import HoneymoonPackages from '../../Assets/HoneymoonPackages.svg';
import HolidayPackages from '../../Assets/HolidayPackages.svg';
import './mobilenavigation.css';
import { Link } from 'react-router-dom';
const MobileNavigation = () => {
    return(
        <div className='mobilenavigation'>
            <div className='packages'>
            <Link  to="/explore" className='package-items'>
                <img alt='ExploreDestinations' src={ExploreDestinations} />
                Explore Destinations
            </Link>
            <div className='package-items'>
                <img alt='ExploreDestinations' src={HolidayPackages} />
                Holiday Packages
            </div>
            <div className='package-items'>
                <img alt='ExploreDestinations' src={HoneymoonPackages} />
                Honeymoon Packages
            </div>
            <div className='package-items'>
                <img alt='ExploreDestinations' src={ExclusivePackages} />
                Exclusive Packages
            </div>
            </div>
        </div>
    )
}
export default MobileNavigation;