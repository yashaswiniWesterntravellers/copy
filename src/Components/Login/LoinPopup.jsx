import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export const LoginPopup = ({ visible, onHide, onLogin }) => {
    const [mobile, setMobile] = useState(''); // State for mobile number
    const [selectedCountry, setSelectedCountry] = useState({ name: 'India', dialCode: '+91' });

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        onLogin(`${selectedCountry.dialCode} ${mobile}`); // Include country code in the mobile number
        onHide(); // Close the modal
    };

    const countryCodes = [
        { name: 'India', code: 'in', dialCode: '+91' },
        { name: 'United States', code: 'us', dialCode: '+1' },
        { name: 'United Kingdom', code: 'gb', dialCode: '+44' },
        { name: 'Australia', code: 'au', dialCode: '+61' },
        // Add more countries as needed
    ];

    // Custom template to display the selected dial code
    const selectedCountryTemplate = (option) => {
        return option ? option.dialCode : '+91'; // Display only the dial code in the input field
    };

    // Custom option template for dropdown to show both name and dial code
    const countryOptionTemplate = (option) => {
        return `${option.name} (${option.dialCode})`; // Show both name and dial code in the dropdown
    };

    return (
        <Dialog header="Enter mobile number to personalise your trip" visible={visible} onHide={onHide} style={{ width: '30vw' }}>
            <form onSubmit={handleLoginSubmit} className='Login-Submit'>
                <div className="p-field">
                    <label htmlFor="mobile" className="input-label">
                        Mobile Number <span className="required-asterisk">*</span>
                    </label>

                    {/* Country Code Dropdown */}
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <Dropdown
                                value={selectedCountry} // Default to India
                                options={countryCodes}
                                onChange={(e) => setSelectedCountry(e.value)}
                                itemTemplate={countryOptionTemplate} // Show both name and dial code
                                placeholder={selectedCountry.dialCode} // Show the default dial code as a placeholder
                                className="country-dropdown"
                                valueTemplate={selectedCountryTemplate} // Display only the dial code in the input field
                            />
                        </span>

                        {/* Mobile Number Input */}
                        <InputText
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter mobile number"
                            required
                            maxLength={10}
                            keyfilter="pnum" // Allow only numbers
                            type="tel"
                        />
                    </div>
                </div>
                <Button type="submit" label="Get OTP" className="Get-OTP" />
            </form>
        </Dialog>
    );
};
