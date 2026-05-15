import React, {useState} from "react";
import { useMediaQuery } from "react-responsive";
import { IoFilterSharp } from "react-icons/io5";
import Maldives from '../Assets/Maldives.jpg';
import Switzerland from '../Assets/Switzerland.avif';
import Thailand from '../Assets/Thailand.jpg';
import Italy from '../Assets/Italy.jpg';
import Bali from '../Assets/Bali.jpg';
import Srilanka from '../Assets/Srilanka.jpg';
import PackagesSlider from "../Components/Slider/PackagesSlider.jsx";
import './Listing.css';
import Footer from '../Components/Footer/Footer.jsx';
import Packagelistingimages from "../Components/Packagelistingimages/Packagelistingimages.jsx";
import Packagedurationprice from "../Components/Packagedurationprice/Packagedurationprice.jsx";
import Testimonials from "../Components/ItemList/testimonials.jsx";
import Filterpackagelisting from "../Components/Filterpackagelisting/Filterpackagelisting.jsx";
import NavBar from "../Components/Navigation/NavBar.jsx";
import ReadMoreLess from "../Components/Button/ReadmoreReadless.jsx";
import Abudhabi from '../Assets/Abudhabi.jpg';
import Australia1 from '../Assets/Australia1.jpg';
import { FaCircleUser } from "react-icons/fa6";
import Image from '../Assets/Australia1.jpg';

export default function Listing(){
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
    // Sample review data
const [reviewData, setReviewData] = useState([
    {
      id: 1,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 1,
      reviewedon: '2 mins ago',
      customername: 'Courtney Henry',
      images: [Image, Image, Image,Image, Image, Image,Image, Image, Image],
      Message: 'Filler text that shares some characteristics of a real written text but is random or otherwise generated.'
    },
    {
      id: 2,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 2,
      reviewedon: 'Yesterday',
      customername: 'Jane Doe',
      images: [Image, Image, Image],
      Message: 'Filler text that shares some characteristics of a real written text but is random or otherwise generated.'
    },
    {
      id: 3,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 3,
      reviewedon: '04-11-2024',
      customername: 'John Smith',
      images: [Image, Image, Image],
      Message: 'Randomly generated text for demo purposes.'
    },
    {
      id: 4,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 4,
      reviewedon: '04-11-2024',
      customername: 'Sarah Connor',
      images: [Image, Image, Image],
      Message: 'Generated text that mimics the structure of real writing.'
    },
  
    {
      id: 5,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 5,
      reviewedon: '04-11-2024',
      customername: 'Courtney Henry',
      images: [Image, Image, Image],
      Message: 'Filler text that shares some characteristics of a real written text but is random or otherwise generated.'
    },
    {
      id: 6,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 1,
      reviewedon: '04-11-2024',
      customername: 'Jane Doe',
      images: [Image, Image, Image],
      Message: 'Filler text that shares some characteristics of a real written text but is random or otherwise generated.'
    },
    {
      id: 7,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 2,
      reviewedon: '04-11-2024',
      customername: 'John Smith',
      images: [Image, Image, Image],
      Message: 'Randomly generated text for demo purposes.'
    },
    {
      id: 8,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 3,
      reviewedon: '04-11-2024',
      customername: 'Sarah Connor',
      images: [Image, Image, Image],
      Message: 'Generated text that mimics the structure of real writing.'
    },
    {
      id: 9,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 4,
      reviewedon: '04-11-2024',
      customername: 'Courtney Henry',
      images: [Image, Image, Image],
      Message: 'Filler text that shares some characteristics of a real written text but is random or otherwise generated.'
    },
    {
      id: 10,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 5,
      reviewedon: '04-11-2024',
      customername: 'Jane Doe',
      images: [Image, Image, Image],
      Message: 'Filler text that shares some characteristics of a real written text but is random or otherwise generated.'
    },
    {
      id: 11,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 1,
      reviewedon: '04-11-2024',
      customername: 'John Smith',
      images: [Image, Image, Image],
      Message: 'Randomly generated text for demo purposes.'
    },
    {
      id: 12,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 2,
      reviewedon: '04-11-2024',
      customername: 'Sarah Connor',
      images: [Image, Image, Image],
      Message: 'Generated text that mimics the structure of real writing.'
    },
  
    {
      id: 13,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 3,
      reviewedon: '04-11-2024',
      customername: 'Courtney Henry',
      images: [Image, Image, Image],
      Message: 'Filler text that shares some characteristics of a real written text but is random or otherwise generated.'
    },
    {
      id: 14,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 4,
      reviewedon: '04-11-2024',
      customername: 'Jane Doe',
      images: [Image, Image, Image],
      Message: 'Filler text that shares some characteristics of a real written text but is random or otherwise generated.'
    },
    {
      id: 15,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 4.5,
      reviewedon: '04-11-2024',
      customername: 'John Smith',
      images: [Image, Image, Image],
      Message: 'Randomly generated text for demo purposes.'
    },
    {
      id: 16,
      profileimage: <FaCircleUser className='profileimage' />,
      rating: 3.5,
      reviewedon: '04-11-2024',
      customername: 'Sarah Connor',
      images: [Image, Image, Image],
      Message: 'Generated text that mimics the structure of real writing.'
    },
    // Add more testimonials as needed...
  ]);

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
    const [packageslist, setPackageslist]= useState(
        [
            {
                id:1,
                packagetittle:"Phuket Pattaya Packages",
                packagesubtittle:"Discover ancient ruins and relaxing beach resorts in Thailand",
                packagedescription:'We bdhavghdfahdgafsgdfashgdfashgdfashgdfafsghdfhgsafddgashfdhgasfdgfasjgdvhasgcdghascgdfsadjfahdfutawfwdvashgfhgdcdcasjfdtasfsdashfduyafsvdhasfdyhdvhvdghfcashgfjgdshgfjmsjbdfggsdhfjh wish to travel to different locations when we want to escape our mundane lifestyle. What if there is a stunning location that can provide you with the relaxing',
                Images:[Thailand, Abudhabi, Australia1, Thailand, Thailand, Thailand, Thailand, Thailand, Thailand],
            }
        ]
    )
    return(
        <div className="packagelisting" >
            <NavBar style={{backgroundColor:"#1b2340"}} />
            <div className="package-itinerary">
                <div className="package-t-d">
                <div className="packagetittle">
                <div className="packagetittleh3">
                    <h3>Phuket Pattaya Packages</h3>
                    <p>Discover ancient ruins and relaxing beach resorts in Thailand</p>
                </div>
                <button className="requestcallback">Request Call Back</button>
            </div>
            {packageslist.map((packageItem) => (
            <Packagelistingimages packageImages={packageItem.Images} />
        ))}
            <Packagedurationprice />
                </div>
            {/* <Listingtittledescription /> */}
            <div className="listingtittledescription">
                <h3 className="listingtittle">Phuket Pattaya Packages</h3>
                <ReadMoreLess text="Webdhavghdfahdgafsgdfashgdfashgdfashgdfafsghdfhgsafddgashfdhgasfdgfasjgdvhasgcdghascgdfsadjfahdfutawfwdvashgfhgdcdcasjfdtasfsdashfduyafsvdhasfdyhdvhvdghfcashgfjgdshgfjmsjbdfggsdhfjh wish to travel to different locations when we want to escape our mundane lifestyle. What if there is a stunning location that can provide you with the relaxing" />
            </div>
            <div className="packageheading">
                <h3>10 Packages</h3>
                {isMobile && (
                        <IoFilterSharp />
                )}
            </div>
            <Filterpackagelisting />
            <PackagesSlider packagesheading="United States" packagedestination={packagedestination} />
            <Testimonials testimonialheading='Travelers Love' reviewdata={reviewData} />
            <Footer />
            </div>
        </div>
    );
}