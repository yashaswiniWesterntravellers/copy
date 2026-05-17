import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import WesternTravellersLogo from "../../Assets/Logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import "./navbar.css";
import { GoHomeFill } from "react-icons/go";
import { IoArrowBack } from "react-icons/io5";


const NavBar = ({style}) => {
    const location = useLocation(); // Get current route
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position
  const [dropdownVisible, setDropdownVisible] = useState(null); // Track active dropdown
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820); // Track screen size
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const handleLoginClick = () => {
    setIsLoggedIn(true);
}

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 820);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  const toggleDropdown = (type) => {
    setDropdownVisible((prevState) => (prevState === type ? null : type));
  };
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
      <li key={index}>
        <Link to={destination.link} className="destinationlink">
          {destination.name}
        </Link>
      </li>
    ));
  };

  return (
    <div className={`d-m-navbar-container ${isScrolled ? "scrolled" : ""}`} style={style}>
      <nav className="d-m-navbar">
        {/* Logo */}
        <div className="d-m-navbar-logo">
  {isMobile && (location.pathname === "/Listing" || location.pathname.startsWith("/Packageitinerary/")) ? (
    <IoArrowBack className="back-icon" onClick={() => window.history.back()} />
  ) : (
    <Link to="/" className="d-m-navbar-logo-link">
      <img alt="Western Travellers" src={WesternTravellersLogo} />
    </Link>
  )}
</div>



        {/* Links (Dropdowns) */}
        {!isMobile && (
            <ul className='d-nav-links'>
                <li className='d-nav-links-list'>
                    <div>
                    <div className='d-nav-links-list-item' onClick={() => toggleDropdown('explore')}>
                        Explore Destinations
                        <RiArrowDropDownLine className='d-nav-dropdown-arrow' />
                    </div>
                    {dropdownVisible === "explore" && (
                        <div className='d-nav-dropdown'>
                            <div className='d-nav-dropdown-item'>
                                <h4>Domestic</h4>
                                <ul>
                                    {renderDestinations(DomesticDestinations)}
                                </ul>
                            </div>
                            <div className='d-nav-dropdown-item'>
                                <h4>International</h4>
                                <ul>
                                    {renderDestinations(InternationalDestinations)}
                                </ul>
                            </div>
                        </div>
                    )}
                    </div>
                </li>
                <li className='d-nav-links-list'>
                    <div>
                    <div className='d-nav-links-list-item' onClick={() => toggleDropdown('holiday')}>
                        Holiday Packages
                        <RiArrowDropDownLine className='d-nav-dropdown-arrow' />
                    </div>
                    {dropdownVisible === "holiday" && (
                        <div className='d-nav-dropdown'>
                            <div className='d-nav-dropdown-item'>
                                <h4>Domestic</h4>
                                <ul>
                                    {renderDestinations(DomesticDestinations)}
                                </ul>
                            </div>
                            <div className='d-nav-dropdown-item'>
                                <h4>International</h4>
                                <ul>
                                    {renderDestinations(InternationalDestinations)}
                                </ul>
                            </div>
                        </div>
                    )}
                    </div>
                </li>
                <li className='d-nav-links-list'>
                    <div>
                    <div className='d-nav-links-list-item' onClick={() => toggleDropdown('honeymoon')}>
                        Honeymoon Packages
                        <RiArrowDropDownLine className='d-nav-dropdown-arrow' />
                    </div>
                    {dropdownVisible === "honeymoon" && (
                        <div className='d-nav-dropdown'>
                            <div className='d-nav-dropdown-item'>
                                <h4>Domestic</h4>
                                <ul>
                                    {renderDestinations(DomesticDestinations)}
                                </ul>
                            </div>
                            <div className='d-nav-dropdown-item'>
                                <h4>International</h4>
                                <ul>
                                    {renderDestinations(InternationalDestinations)}
                                </ul>
                            </div>
                        </div>
                    )}
                    </div>
                </li>
                <li className='d-nav-links-list'>
                    <div>
                    <div className='d-nav-links-list-item' onClick={() => toggleDropdown('exclusive')}>
                        Exclusive Packages
                        <RiArrowDropDownLine className='d-nav-dropdown-arrow' />
                    </div>
                    {dropdownVisible === "exclusive" && (
                        <div className='d-nav-dropdown-exclusive'>
                            <div className='d-nav-dropdown-item'>
                                <h4>Domestic</h4>
                                <ul>
                                    {renderDestinations(DomesticDestinations)}
                                </ul>
                            </div>
                            <div className='d-nav-dropdown-item'>
                                <h4>International</h4>
                                <ul>
                                    {renderDestinations(InternationalDestinations)}
                                </ul>
                            </div>
                        </div>
                    )}
                    </div>
                </li>
                <li className='d-nav-links-list'>
                    <div>
                    <div className='d-nav-links-list-item' onClick={() => toggleDropdown('more')}>
                        More...
                        <RiArrowDropDownLine className='d-nav-dropdown-arrow' />
                    </div>
                    {dropdownVisible === "more" && (
                        <div className='d-nav-dropdown-more'>
                            <div className='d-nav-dropdown-item-more'>
                                <h4>Company</h4>
                                <ul>
                                    <li>About us</li>
                                    <li>Career</li>
                                    <li>Blog</li>
                                    <li>Testimonial</li>
                                    <li>Visa</li>
                                </ul>
                            </div>
                            <div className='d-nav-dropdown-item-more'>
                                <h4>Help Center</h4>
                                <ul>
                                    <li>FAQ</li>
                                    <li>Terms of use</li>
                                    <li>Privacy Policy</li>
                                    <li>Cancellation Policy</li>
                                    <li>Sitemap</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    </div>
                </li>
            </ul>
        )}

        {/* Mobile Menu */}
        {isMobile && (
            <div className='m-nav-login'>
    {["/explore", "/Listing"].includes(location.pathname) || location.pathname.startsWith("/Packageitinerary/") ? (
        <Link to='/' className="homelink">
            <GoHomeFill className="m-nav-icon-search" />
        </Link>
    ) : (
        <IoIosSearch className="m-nav-icon-search" />
    )}
    <FaUser className="m-nav-icon-profile" />
</div>

)}


        {/* Login/Profile */}
        {!isMobile && (
          <div className="d-navbar-login">
          {isLoggedIn ? (
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" className='d-nav-login-avatar' />
            ) : (
            <Button className='d-nav-login-button' onClick={handleLoginClick}>Login</Button>
          )}
        </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
