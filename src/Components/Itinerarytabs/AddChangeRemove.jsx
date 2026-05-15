import { useState } from 'react';
export const AddChangeRemove = () => {
  const [isVisaAdded, setIsVisaAdded] = useState(false); // Track Visa addition
 const [isInsuranceAdded, setIsInsuranceAdded] = useState(false); // Track Insurance addition
 const [isAdded, setIsAdded] = useState(false); // Track if the visa is added
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedPlan, setSelectedPlan] = useState("50K Excl-Silver"); // Default selected plan
 const [appliedPlan, setAppliedPlan] = useState({
  id:"1",
  insuranceTitle: "50K Excl-Silver",
  insurancePlanType: "50K Excl-Silver for 1 people",
}); 
 // Handlers for Visa
 const handleVisaAdd = () => setIsVisaAdded(true);
 const handleVisaRemove = () => setIsVisaAdded(false);
 const handleInsuranceAdd  = () => {
  setIsInsuranceAdded(true);
};

 const handleInsuranceRemove  = () => {
  setIsInsuranceAdded(false);
    setAppliedPlan({
      id: "1",
      insuranceTitle: "50K Excl-Silver",
      insurancePlanType: "50K Excl-Silver for 1 people",
    });
     // Reset the selectedPlan to default
  setSelectedPlan("50K Excl-Silver");
};
const handleChange = () => {
    setIsModalOpen(true); // Open the modal
  };
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };
    return({ isVisaAdded, handleVisaAdd, handleVisaRemove,
      isInsuranceAdded, handleInsuranceAdd, handleInsuranceRemove, 
      handleChange, isModalOpen, closeModal, 
      selectedPlan, setSelectedPlan, appliedPlan, setAppliedPlan  })
};
// Modal Component for Insurance Selection
export const InsuranceModal = ({ selectedPlan, setSelectedPlan, closeModal, setAppliedPlan }) => {
  // Insurance Plans Data
const insurancePlans = [
  {
    id:1,
    insuranceTitle: "50K Excl-Silver",
    insurancePlanType: "50K Excl-Silver for 1 people",
    insurancePrice:50000,
    details: [
      "Hospitalization expenses - USD 50,000",
      "Outpatient Cover - USD 10K",
      "Daily Allowance - USD 25 per day (up to 10 days)",
      "Repatriation of remains - USD 8,000",
    ],
  },
  {
    id:2,
    insuranceTitle: "100K Excl-Silver",
    insurancePlanType: "100K Excl-Silver for 1 people",
    insurancePrice:100000,
    details: [
      "Hospitalization expenses - USD 100,000",
      "Outpatient Cover - USD 20K",
      "Daily Allowance - USD 50 per day (up to 10 days)",
      "Repatriation of remains - USD 10,000",
    ],
  },
  {
    id:3,
    insuranceTitle: "200K Gold-Plan",
    insurancePlanType: "200K Excl-Silver for 1 people",
    insurancePrice:200000,
    details: [
      "Hospitalization expenses - USD 200,000",
      "Outpatient Cover - USD 30K",
      "Daily Allowance - USD 75 per day (up to 15 days)",
      "Repatriation of remains - USD 15,000",
    ],
  },
];
const handleApplyInsurance = () => {
  const selectedPlanDetails = insurancePlans.find(plan => plan.insuranceTitle === selectedPlan);
  setAppliedPlan({
    insuranceTitle:selectedPlanDetails.insuranceTitle,
    insurancePlanType:selectedPlanDetails.insurancePlanType,
  }); // Apply the selected plan
  closeModal(); // Close modal
};
  return (
    <div className="insurance-modal-overlay">
      <div className="insurance-modal-content">
        <div className='Insurance-Heading'>
        <span className='Insurance-Heading-h2'>Travel Insurance Plans</span>
        <button className='insurance-close-button' onClick={closeModal}>X</button>
        </div>
        <div className="insurance-options-container">
        {insurancePlans.map((plan) => (
          <div key={plan.insuranceTitle} className={`insurance-option ${selectedPlan === plan.insuranceTitle ? "selected" : ""}`}>
            <label className='insurance-radio-title'>
              <input
              className='insurance-radio'
                type="radio"
                name="insurancePlan"
                value={plan.insuranceTitle}
                checked={selectedPlan === plan.insuranceTitle}
                onChange={() => setSelectedPlan(plan.insuranceTitle)}
              />
              <strong>{plan.insuranceTitle}</strong>
            </label>
            
            {selectedPlan === plan.insuranceTitle && (
              <ul>
                {plan.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
</div>

        <div className="insurance-modal-actions">
        <span className='insurance-plan-type-selected'>selected Plan: <strong>{selectedPlan}</strong></span>
          <button className="apply-insurance-button" onClick={handleApplyInsurance}>Apply Insurance</button>
        </div>
      </div>
    </div>
  );
};