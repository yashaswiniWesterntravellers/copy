import React, {useState} from 'react';  
import './Footer.css'; 
import { useMediaQuery } from "react-responsive";
import Expedia from '../../Assets/Expedia.svg';
import Skyscanner from '../../Assets/Skyscanner.svg';
import Turkish from '../../Assets/Turkish.svg';
import SunExpress from '../../Assets/SunExpress.svg';
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'; // ✅ Import Icons  
  
// Footer component  
const Footer = () => {  
    const [packages] = useState([
      'International Tour Packages',  
      'International Honeymoon Packages',  
      'International Family Packages', 
      'International Beach Packages', 
      'Adventure Packages',
      'Summer Holiday Packages',
      'International Visa on arrival Packages',
      'International Budget Packages',
      'International Luxury Packages',
      'International Solo Travel Packages'
    ]);
  
    // Store tabs in state
    const [tabs] = useState([
      { title: "Themed", key: "Themed destinations" },
      { title: "Holiday", key: "Holiday Destinations" },
      { title: "International", key: "International Travel Deals" },
    ]);
  
    const [activeTab, setActiveTab] = useState(tabs[0].key); // Default to first tab
    
    // ✅ Define Mobile View
    const isMobile = useMediaQuery({ query: "(max-width: 912px)" });
  
    return (
      <div className="footer">
        <div className="partner-section">
          <h2>Partnered with the best in the industry</h2>
          <div className="logos">
            <img src={Expedia} alt="Expedia" />
            <img src={Skyscanner} alt="Skyscanner" />
            <img src={Turkish} alt="Turkish Airlines" />
            <img src={SunExpress} alt="SunExpress" />
          </div>
        </div>  
        
        <hr />
  
        <div className="theme-packages">
          {isMobile ? (
            <div>
              {/* Tab Buttons */}
              <div className="theme-packages-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    className={`tab-button1 ${activeTab === tab.key ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
  
              {/* Tab Content */}
              <div className="theme-packages-content">
                {tabs.map((tab) =>
                  activeTab === tab.key ? (
                    <div key={tab.key} className="theme-packages-section">
                      <h3>{tab.title}</h3>
                      <ul>
                        {packages.map((packageItem, index) => (
                          <li key={index}>{packageItem}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="theme-packages-section">
                <h3>Themed destinations</h3>
                <ul>
                  {packages.map((packageItem, index) => (
                    <li key={index}>{packageItem}</li>
                  ))}
                </ul>
              </div> 
              <hr />
              <div className="theme-packages-section">
                <h3>Holiday Destinations</h3>
                <ul>
                  {packages.map((packageItem, index) => (
                    <li key={index}>{packageItem}</li>
                  ))}
                </ul>
              </div>
              <hr />
              <div className="theme-packages-section">
                <h3>International Travel Deals</h3>
                <ul>
                  {packages.map((packageItem, index) => (
                    <li key={index}>{packageItem}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
  
        <hr />
  
        <div className="footer-links-section">
          <div className="column">
            <h4>Help center</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Term of use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cancellation policy</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">Visa</a></li>
            </ul>
          </div>
          {!isMobile && (
            <div className="column">
            <h4>Talk to us</h4>
            <ul>
              <li><a href="#">Info@westerntravellers.com</a></li>
              <li><a href="#">+91-8050041118</a></li>
            </ul>
          </div>
          )}
          {!isMobile && (
            <div className="column">
            <h4>Social</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          )}
          {isMobile && (
            <div className='column'>
            <h4>Talk to us</h4>
            <ul style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
              <li><a href="#"><FaEnvelope /></a></li>
              <li><a href="#"><FaPhone /></a></li>
            </ul>
            <h4>Social</h4>
            <ul style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaPinterest /></a></li>
              <li><a href="#"><FaLinkedin /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
            </ul>
            </div>
          )}
        </div>
  
        <hr />
  
        <div className="copyright">
          <p>&copy; 2023 Westerntravellers. All rights reserved.</p>
        </div>
      </div>
    );  
  };
  
export default Footer;
