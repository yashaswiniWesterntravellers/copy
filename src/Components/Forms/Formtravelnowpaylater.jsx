import React, { useState } from 'react';


export default function Formtravelnowpaylater(){
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
        {/* <Primarybutton button='Apply Now' /> */}
        <button className='Acknowledge-button'>Apply Now</button>
      </form>
    </div>
  );
};