import React, {useState} from 'react';
import { LuBadgePercent } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { GrDocumentVerified } from "react-icons/gr";
import { GrDocumentTime } from "react-icons/gr";


import './travelnowpaylater.css';
import { Button } from 'primereact/button';

export default function Travelnowpaylater(){
        // State variables to hold form values
        const [formData, setFormData] = useState({
          name: '',
          mobile: '',
          email: ''
        });
        // Handle form input changes
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };
      
        // Handle form submission
        const handleSubmit = (e) => {
          e.preventDefault(); // Prevents the form from reloading the page
          console.log('Form Data:', formData);
          alert(`Form Submitted! \nName: ${formData.name}, \nMobile: ${formData.mobile}, \nEmail: ${formData.email}`);
        };
    return(
        <div className="banner1">
            <div className='Travelnowpaylaterimage'>
            <h5 className='wings'>Get your wings to fly with us</h5>
            <h1 className='h12'>Travel now pay later</h1>
            <table className='offers'>
                <tbody>
                    <tr className='offers1'>
                        <th className='offerslisting'><LuBadgePercent className='offersicon' /> No Cost EMI 6Months</th>
                        <th className='offerslisting'><GrDocumentTime className='offersicon' /> Hassle Free Process</th>
                        <th className='offerslisting'><GrDocumentText className='offersicon' /> Limited Documents</th>
                        <th className='offerslisting'><GrDocumentVerified className='offersicon' /> Instant Approval</th>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* <Formtravelnowpaylater /> */}
                <div className='container'>
                  {/* <h2 className='header'>Contact us</h2> */}
                  <form onSubmit={handleSubmit} className='form'>
                    {/* Name Input */}
                    <div className='formGroup'>
                      {/* <label className='label'>Name</label> */}
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className='input'
                        required
                      />
                    </div>
            
                    {/* Mobile Input */}
                    <div className='formGroup'>
                      {/* <label className='label'>Mobile Number</label> */}
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        pattern="[0-9]{10}"
                        className='input'
                        required
                      />
                    </div>
            
                    {/* Email Input */}
                    <div className='formGroup'>
                      {/* <label className='label'>Email ID</label> */}
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className='input'
                        required
                      />
                    </div>
            
                    {/* Submit Button */}
                    <Button className='applynow'>Apply Now</Button>
                  </form>
                </div> 
        </div>
    );
}