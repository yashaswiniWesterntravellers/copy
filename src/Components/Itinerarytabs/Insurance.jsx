import React from 'react';
import { IoIosInformationCircle } from "react-icons/io";
import { AddChangeRemove } from './AddChangeRemove';
import { useParams } from "react-router-dom"; // Import the useParams hook
import { InsuranceModal } from './AddChangeRemove';

export default function Insurance({packages}) {
  const {
    isInsuranceAdded, handleInsuranceAdd, handleInsuranceRemove, handleChange, isModalOpen, closeModal, selectedPlan, setSelectedPlan, appliedPlan, setAppliedPlan } = AddChangeRemove(); // Track if the visa is added
    const { id } = useParams();
    
    // Find the package by id
    const packageData = packages.find(pkg => pkg.id === parseInt(id));
  
    if (!packageData || !packageData.Insurance) {
      return <h1>Visa data not found</h1>;
    }

    const Insurance = packageData.Insurance; // Access the visa object directly

    return (
        <div className="day-itinerary">
            <div className="insurance-content">
        <img 
          src={Insurance.insuranceImage} 
          alt="Insurance Plan" 
          className="insurance-image" 
        />
        {Insurance.insuranceExcluded && (
          <div className="excluded-badge">
            <span>Excluded</span>
          </div>
        )}
                {Insurance.insuranceIncluded && (
          <div className="included-badge">
            <span>Included</span>
          </div>
        )}
        <div className="insurance-details">
          <div className='insurance-title-plan-actions'>
          {isInsuranceAdded  ? (
          <div className='insurance-title-plan'>
          <h4 className="insurance-tittle">{appliedPlan.insuranceTitle}</h4>
          <h2 className="insurance-plan">{appliedPlan.insurancePlanType}</h2>
          </div>
          ) : (
          <span className="insuranceInfoMessage">{Insurance.insuranceInfoMessage}</span>
          )}
          <div className="insurance-actions">
        {isInsuranceAdded ? (
                <>
                  <button className="change-action" onClick={handleChange} >Change</button>
                  <button className="remove-action" onClick={handleInsuranceRemove} >Remove</button>
                </>
              ) : (
                <button className="add-button" onClick={handleInsuranceAdd} >Add</button>
              )}
              {isModalOpen && <InsuranceModal selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setAppliedPlan={setAppliedPlan} closeModal={closeModal} />}
        </div>
          </div>
          {isInsuranceAdded  && (
          <p>{Insurance.insuranceDescription}</p>
        )}
        </div>
      </div>
      <hr />

      <div className="insurance-price-info">
      <span className='insurance-info-icon'><IoIosInformationCircle /></span>
        <p>{Insurance.insuranceInformation}</p>
      </div>
        </div>
    );
}
