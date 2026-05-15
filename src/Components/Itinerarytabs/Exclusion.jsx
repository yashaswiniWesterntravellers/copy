import React from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook
export default function Exclusion({packages}){
    const { id } = useParams();
    // Find the package by id
  const packageData = packages.find(pkg => pkg.id === parseInt(id));

  if (!packageData) {
    return <h1>Exclusion data not found</h1>;
  }
    return(
        <div>
      <ul className="day-itinerary">
        {packageData.Exclusions.map((exclusion, index) => (
          <li key={index} className='exclusion'>{exclusion.exclusionName}</li>
        ))}
      </ul>
    </div>
    );
}