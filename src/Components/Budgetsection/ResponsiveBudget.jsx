import React, {useState} from 'react';
import './responsivebudget.css';
import { FaStar } from 'react-icons/fa6';
const ResponsiveBudget = () => {
    const [budgetoptions, setBudgetOptions] = useState([
        { amount: '₹50,000', color: '#4CAF50' }, // Green
        { amount: '₹75,000', color: '#2196F3' }, // Blue
        { amount: '₹100,000', color: '#9C27B0' }, // Purple
        { amount: '₹200,000', color: '#FF9800' }, // Orange
        { amount: '₹300,000', color: '#673AB7' }, // Violet
      ]);
    return(
        <div className='w-budget-section'>
            <h2 className='w-budget-heading'>Holidays For Every <span className='w-highlight'>Budget</span></h2>
            <div className='w-budget-box-container'>
                {budgetoptions.map((option, index) => (
                    <div className='w-budget-box' key={index} style={{ backgroundColor: option.color }}>
                        <div className='w-budget-label'>Below</div>
                        <div className='w-budget-amount'>{option.amount}</div>
                        <FaStar className='w-budget-icon' />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ResponsiveBudget;