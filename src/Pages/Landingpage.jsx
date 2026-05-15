import React, {useState, useEffect} from 'react';
import '../App.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TripStyle from '../Components/Tripstyle/Tripstyle.jsx';
import Tripbanner from '../Components/Tripbanner/Tripbanner.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Travelnowpaylater from '../Components/Banner/Travelnowpaylater.jsx';
import NavBar from '../Components/Navigation/NavBar.jsx';
import MainBanner from '../Components/Banner/MainBanner.jsx';
import Maldives from '../Assets/Maldives.jpg';
import Switzerland from '../Assets/Switzerland.avif';
import Thailand from '../Assets/Thailand.jpg';
import Italy from '../Assets/Italy.jpg';
import Bali from '../Assets/Bali.jpg';
import Srilanka from '../Assets/Srilanka.jpg';
import PackagesSlider from '../Components/Slider/PackagesSlider.jsx';
import PackagesSlider2 from '../Components/Slider/PackageSlider2.jsx';
import ResponsiveBudget from '../Components/Budgetsection/ResponsiveBudget.jsx';
import './landingpage.css';

function Landingpage() {
  const [packagedestination, setPackagedestination] = useState(
    [
        {
            id:1,
            image:Srilanka,
            location:'Srilanka',
            tagline:'The city of life',
        },
        {
            id:2,
            image: Maldives,
            location:'Maldives',
            tagline:'Tropical Paradise',
        },
        {
            id:3,
            image: Switzerland,
            location:'Switzerland',
            tagline:'Land of Alps',
        },
        {
            id:4,
            image:Thailand,
            location:'Thailand',
            tagline:'Amazing Thailand',
        },
        {
            id:5,
            image:Italy,
            location:'Italy',
            tagline:'Land of Rising Sun',
        },
        {
            id:6,
            image:Bali,
            location:'Bali',
            tagline:'Island of Gods',
        },
    ]
);
const [packagedestination1, setPackagedestination1] = useState(
    [
        {
            id:1,
            image:Srilanka,
            location:'Srilanka',
            from:'37,500',
        },
        {
            id:2,
            image: Maldives,
            location:'Maldives',
            from:'37,500',
        },
        {
            id:3,
            image: Switzerland,
            location:'Switzerland',
            from:'37,500',
        },
        {
            id:4,
            image:Thailand,
            location:'Thailand',
            from:'37,500',
        },
        {
            id:5,
            image:Italy,
            location:'Italy',
            from:'37,500',
        },
        {
            id:6,
            image:Bali,
            location:'Bali',
            from:'37,500',
        },
        {
            id:7,
            image: Switzerland,
            location:'Finland',
            from:'37,500',
        },
        {
            id:8,
            image:Thailand,
            location:'America',
            from:'37,500',
        },
        {
            id:9,
            image:Italy,
            location:'Belgium',
            from:'37,500',
        },
        {
            id:10,
            image:Bali,
            location:'Europe',
            from:'37,500',
        },
    ]
);
const [modalOpen, setModalOpen] = useState(false);

// Prevent scrolling when modal is open
useEffect(() => {
  if (modalOpen) {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = "auto"; // Restore scrolling
  }
  return () => {
    document.body.style.overflow = "auto"; // Cleanup when unmounted
  };
}, [modalOpen]);
  return (
    <div  className={`landing-page ${modalOpen ? "modal-active" : ""}`}>
            {/* <Navbar1 /> */}
            <NavBar />
            <MainBanner  setModalOpen={setModalOpen} />
            {/* Overlay to hide the background when modal is open */}
      {modalOpen && <div className="overlay" onClick={() => setModalOpen(false)}></div>}
            <div className='l-packages'>
            <PackagesSlider packagesheading="Popular Destinations" packagedestination={packagedestination} />
            <PackagesSlider packagesheading="Quick Getaways" packagedestination={packagedestination} />
            <TripStyle />
            <PackagesSlider2 packagesheading="Visa Free Destinations" packagedestination={packagedestination1} />
            <Tripbanner />
            <PackagesSlider packagesheading="Explore Europe" packagedestination={packagedestination} style={{top:"0"}} />
            <PackagesSlider packagesheading="Oceania" packagedestination={packagedestination} style={{top:"0", paddingBottom:"min(2rem, 3vw)"}} />
            <PackagesSlider2 packagesheading="Explore Domestic Destinations" packagedestination={packagedestination1} />
            <PackagesSlider packagesheading="Middle East" packagedestination={packagedestination} style={{top:"0", paddingTop: "min(0rem, 3vw)",}} />
            <ResponsiveBudget />
            <PackagesSlider packagesheading="United States" packagedestination={packagedestination} style={{top:"0", paddingTop: "min(0rem, 3vw)",}} />
            <Travelnowpaylater />
            <Footer />
            </div>
        </div>
  );
}

export default Landingpage;
