import React from 'react';
import { AddChangeRemove } from './AddChangeRemove';
import { useParams } from "react-router-dom"; // Import the useParams hook

export default function Visa({packages}) {
  const { isVisaAdded, handleVisaRemove, handleVisaAdd } = AddChangeRemove(); // Track if the visa is added
    const { id } = useParams();
    
    // Find the package by id
    const packageData = packages.find(pkg => pkg.id === parseInt(id));
  
    if (!packageData || !packageData.visa) {
      return <h1>Visa data not found</h1>;
    }

    const visa = packageData.visa; // Access the visa object directly

    return (
        <div className="Visa-content">
            <img 
              src={visa.visaImage} 
              alt="Visa Plan" 
              className="insurance-image" 
            />
                        {visa.visaExcluded && (
          <div className="excluded-badge">
            <span>Excluded</span>
          </div>
        )}
            {visa.visaIncluded && (
          <div className="included-badge">
            <span>Included</span>
          </div>
        )}
    
            <div className="insurance-details">
                <h2 className="insurance-plan">{visa.visaTitle}</h2>
                <p>{visa.visaDescription}</p>
            </div>
            <div className="insurance-actions">
                {isVisaAdded ? (
                    <button className="remove-action" onClick={handleVisaRemove}>Remove</button>
                ) : (
                    <button className="add-button" onClick={handleVisaAdd} >Add</button>
                )}
            </div>
        </div>
    );
}
