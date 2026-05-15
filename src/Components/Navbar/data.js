import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import Logo from '../../Assets/Logo.svg';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Link } from 'react-router-dom';
import { LoginPopup } from '../Login/LoinPopup';
import './flags.css';
export const BasicDemo = [
    //Explore Destinations
        {
            label: 'Explore Destinations',
            // icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Domestic',
                        items: [{label: <Link to="/Listing" className='Listing'>Shimla</Link> }, { label: 'Manali' }, { label: 'Kashmir' }, { label: 'Kasol' }, { label: 'Spit vally' }]
                    }],

                    [{
                        label: 'Domestic',
                        items: [{ label: 'Kerala' }, { label: 'Andaman and Nicobar' },{ label: 'Ladak' }, { label: 'Lakshadweep' }, { label: 'Himachal Pradesh' }]
                    }
                ],
                [
                    {
                        label: 'International',
                        items: [{ label: 'Thailand' }, { label: 'Singapore' }, { label: 'Malasia' },{ label: 'Dubai' }, { label: 'bali' }, { label: 'Vietnam' }, { label: 'Spain' }]
                    }],
                    [{
                        label: 'International',
                        items: [{ label: 'Srilanka' }, { label: 'Maldives' }, { label: 'Cambolia' },{ label: 'Mauritius' }, { label: 'Azerbaijan' }, { label: 'Australia' }]
                    }
                ]
            ]
        },
        //Holiday Packages
        {
            label: 'Holiday Packages',
            // icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Domestic',
                        items: [{label: <Link to="/Listing" className='Listing'>Shimla</Link> }, { label: 'Manali' }, { label: 'Kashmior' }, { label: 'Kasol' }, { label: 'Spit vally' }]
                    }],

                    [{
                        label: 'Domestic',
                        items: [{ label: 'Kerala' }, { label: 'Andaman and Nicobar' },{ label: 'Spit vally' }, { label: 'Lakshadweep' }]
                    }
                ],
                [
                    {
                        label: 'International',
                        items: [{ label: 'Thailand' }, { label: 'Singapore' }, { label: 'Malasia' },{ label: 'Dubai' }, { label: 'bali' }, { label: 'Vietnam' }, { label: 'Spain' }]
                    }],
                    [{
                        label: 'International',
                        items: [{ label: 'Srilanka' }, { label: 'Maldives' }, { label: 'Cambolia' },{ label: 'Mauritius' }, { label: 'Azerbaijan' }, { label: 'Australia' }]
                    }
                ]
            ]
        },
        //Honeymoon Getaways
        {
            label: 'Honeymoon Getaways',
            // icon: 'pi pi-clock',
            items: [
                [
                    {
                        label: 'Domestic',
                        items: [{label: <Link to="/Listing" className='Listing'>Shimla</Link> }, { label: 'Manali' }, { label: 'Kashmior' }, { label: 'Kasol' }, { label: 'Spit vally' }]
                    }],

                    [{
                        label: 'Domestic',
                        items: [{ label: 'Kerala' }, { label: 'Andaman and Nicobar' },{ label: 'Spit vally' }, { label: 'Lakshadweep' }]
                    }
                ],
                [
                    {
                        label: 'International',
                        items: [{ label: 'Thailand' }, { label: 'Singapore' }, { label: 'Malasia' },{ label: 'Dubai' }, { label: 'bali' }, { label: 'Vietnam' }, { label: 'Spain' }]
                    }],
                    [{
                        label: 'International',
                        items: [{ label: 'Srilanka' }, { label: 'Maldives' }, { label: 'Cambolia' },{ label: 'Mauritius' }, { label: 'Azerbaijan' }, { label: 'Australia' }]
                    }
                ]
            ]
        },
        //Exclusive Packages
        {
            label: 'Exclusive Packages',
            // icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Domestic',
                        items: [{label: <Link to="/Listing" className='Listing'>Shimla</Link> }, { label: 'Manali' }, { label: 'Kashmior' }, { label: 'Kasol' }, { label: 'Spit vally' }]
                    }],

                    [{
                        label: 'Domestic',
                        items: [{ label: 'Kerala' }, { label: 'Andaman and Nicobar' },{ label: 'Spit vally' }, { label: 'Lakshadweep' }]
                    }
                ],
                [
                    {
                        label: 'International',
                        items: [{ label: 'Thailand' }, { label: 'Singapore' }, { label: 'Malasia' },{ label: 'Dubai' }, { label: 'bali' }, { label: 'Vietnam' }, { label: 'Spain' }]
                    }],
                    [{
                        label: 'International',
                        items: [{ label: 'Srilanka' }, { label: 'Maldives' }, { label: 'Cambolia' },{ label: 'Mauritius' }, { label: 'Azerbaijan' }, { label: 'Australia' }]
                    }
                ]
            ]
        },
        //More...
        {
            label: 'More...',
            // icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Company',
                        items: [{ label: 'About us' }, { label: 'Career' }, { label: 'Blog' }, { label: 'Testimonial' }, { label: 'Visa' }]
                    }
                ],
                [
                    {
                        label: 'Help Center',
                        items: [{ label: 'FAQ' }, { label: 'Terms of use' }, { label: 'Privacy Policy' }, { label: 'Cancellation Policy' }, { label: 'Sitemap' }, { label: 'Contact us' }]
                    }
                ],
            ]
        },
    ];


    export const start = (
        <Link to="/">  {/* Specify the route you want to redirect to */}
            <img alt="logo" src={Logo} height="40" className="mr-2" />
        </Link>
    );
    export const EndComponent = () => {
        const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
        const [showLoginPopup, setShowLoginPopup] = useState(false);
        
    
        // Handle the login button click
        const handleLoginClick = () => {
            setShowLoginPopup(true); // Show login popup
        };
    
        // Handle the form submission (i.e., login)
        const handleLogin = () => {
            setIsLoggedIn(true);
            setShowLoginPopup(false); // Close popup after login
        };
    
        return (
            <div className="flex align-items-center">
            {isLoggedIn ? (
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            ) : (
                <button onClick={handleLoginClick} className="login-button">Login</button>
            )}
            <LoginPopup visible={showLoginPopup} onHide={() => setShowLoginPopup(false)} onLogin={handleLogin} />
        </div>
        );
    };


    export const centerContent = (
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Search" />
        </IconField>
    );