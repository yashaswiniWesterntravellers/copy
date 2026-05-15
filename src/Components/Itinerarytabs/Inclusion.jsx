import React from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook
export default function Inclusion({packages}){
    const { id } = useParams();
    // Find the package by id
  const packageData = packages.find(pkg => pkg.id === parseInt(id));

  if (!packageData) {
    return <h1>Inclusion data not found</h1>;
  }
    return(
        <div>
      <ul className="day-itinerary">
        {packageData.Inclusions.map((inclusion, index) => (
          <li className='inclusion' key={index}>{inclusion.inclusionName}</li>
        ))}
      </ul>
    </div>
    );
}