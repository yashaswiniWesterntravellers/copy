import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook

export default function Transfer({packages}) {
    const { id } = useParams();

    // Find the package by id
    const packageData = packages.find(pkg => pkg.id === parseInt(id));
    if (!packageData) {
        return <h1>Package data not found</h1>;
    }
    // Convert TravellingDate to a JavaScript Date object
    const travelStartDate = new Date(packageData.TravellingDate);
        // Extracting all transfer data across all days and schedules
        const allTransfers = packageData.Days.flatMap((day, dayIndex) =>
            day.schedule.flatMap(schedule => 
                (schedule.Transfer || []).map(transfer => ({
                ...transfer,
                TransferDate: formatDate(addDays(travelStartDate, dayIndex)) // Calculate date dynamically
            })))
        );
    // Local state to track the transfer type changes
    const [transfers, setTransfers] = useState(allTransfers);
         // Update state if packageData changes
    useEffect(() => {
        setTransfers(allTransfers);
    }, [packageData]);

        // Handle changing the transfer type
        const handleChangeTransferType = (transferId, newType) => {
            setTransfers(prevTransfers =>
                prevTransfers.map(transfer =>
                    transfer.Transferid === transferId
                        ? { ...transfer, Transfertype: transfer.Transfertype === 'Private' ? 'Public' : 'Private' }
                        : transfer
                )
            );
        };

        // Helper function to add days to a date
    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    // Helper function to format date as dd/mm/yyyy
    function formatDate(date) {
        return date.toLocaleDateString('en-GB'); // Formats to dd/mm/yyyy
    }

    return (
        <div className="Activity-listing">
            {transfers.map((transfer) => (
                <div key={transfer.Transferid} className='Activity-content-information'>
                    <div className='activity-content'>
                        <img src={transfer.Transferimage} alt={transfer.Transferfromto} />
                        <div className='activity-details'>
                        <div className='Date-actions'>
                        <p className='Date'>{transfer.TransferDate}</p>
                            <div className="insurance-actions">
                            {transfer.Transfertype === 'Private' ? (
                                        <button
                                            className="change-action"
                                            onClick={() => handleChangeTransferType(transfer.Transferid, 'Public')}
                                        >
                                            Change to {transfer.Transfertype === 'Private' ? 'Public' : 'Private'}
                                        </button>
                                    ) : (
                                        <button
                                            className="change-action"
                                            onClick={() => handleChangeTransferType(transfer.Transferid, 'Private')}
                                        >
                                            Change to Private
                                        </button>
                                    )}
                        </div>
                        </div>
                            <h3>{transfer.Transferfromto}</h3>
                            <ul className='activity-time-type-amount'>
                                <li>{transfer.Transfertype}</li>
                                <li>{transfer.Transfernoofpeople}</li>
                                <li>{transfer.Transfername}</li>
                            </ul>
                            <ul className="Transfer-Information">
                                {transfer.Transferinformation?.map((information, index) => (
                                    <li key={index}>{information}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
