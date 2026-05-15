import React from 'react';
import './Tripbanner.css'; // Create this CSS file for styling or use inline styles
import { Button } from 'primereact/button';

const Tripbanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className='h11'>Say yes for a trip to Yas Island</h1>
        <p>Kids go free on Yas Island ABU DHABI</p>
        <Button className='viewpackages'>View Packages</Button>
      </div>
    </div>
  );
};

export default Tripbanner;
