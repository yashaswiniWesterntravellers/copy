import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import { IoSearch } from "react-icons/io5";
import './mainbanner.css';
import MobileNavigation from "../Navigation/MobileNavigation";
import SearchDestinationModal from "./SearchDestinationModal";
export default function MainBanner(){
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
    const [modalOpen, setModalOpen] = useState(false);
        // Disable scrolling when modal is open
        useEffect(() => {
            if (modalOpen) {
                document.body.style.overflow = "hidden";  // Prevent scrolling
            } else {
                document.body.style.overflow = "auto";  // Restore scrolling
            }
            return () => {
                document.body.style.overflow = "auto";  // Cleanup on unmount
            };
        }, [modalOpen]);
    return(
        <div className='d-m-banner'>
            <div className="banner-image">
                <div className='banner-text'>
                    <h1 className='h1'>Let’s travel the world</h1>
                    <p className='paragraph'>Explore destinations, places, and unforgettable experiences</p>
                </div>
                {!isMobile && (
                    <div className="search-container" onClick={() => setModalOpen(true)}>
                        <div className="search-input">Search destinations...</div>
                        <span className="search-icon"><IoSearch className="search-icon-landing-page" /></span>
                    </div>
                )}
                {isMobile && (<MobileNavigation />)}
            </div>
                        {/* Render Modal */}
                        <SearchDestinationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                    </div>
    );
}