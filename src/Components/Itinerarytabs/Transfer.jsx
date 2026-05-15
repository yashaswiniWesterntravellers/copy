import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; // Import the useParams hook

export default function Transfer({packages}) {
    const { id } = useParams();

    // Find the package by id
    const packageData = packages.find(pkg => pkg.id === parseInt(id));
    if (!packageData) {
        return <h1>Activity data not found</h1>;
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
        // Remove duplicates based on Transferid
    const uniqueTransfers = Array.from(new Map(allTransfers.map(transfer => [transfer.Transferid, transfer])).values());
    // Local state to track the transfer type changes
    const [transfers, setTransfers] = useState([]);

         // Update state if packageData changes
    useEffect(() => {
        setTransfers(uniqueTransfers);
    }, []);

        // Toggle between Public and Private
        const handleToggleTransferType = (transferId) => {
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
            {transfers.map((transfer, index) => (
                <div key={index} className='Activity-content-information'>
                    <div className='activity-content'>
                        <img src={transfer.Transferimage} alt={transfer.Transferfromto} />
                        <div className='activity-details'>
                        <div className='Date-actions'>
                        <h3>{transfer.Transferfromto}</h3>
                        {/* <p className='Date'>{transfer.TransferDate}</p> */}
                            <div className="insurance-actions">
                            {/* Show button based on the transfer type */}
                            {/* {transfer.Transfertype === 'Private' ? (
                                <button
                                    className="change-action"
                                    onClick={() => handleChangeToPublic(transfer.Transferid)}
                                >Change to Public</button>
                            ) : transfer.Transfertype === 'Public' ? (
                                <button
                                    className="change-action"
                                    onClick={() => handleChangeToPrivate(transfer.Transferid)}
                                >Change to Private</button>
                            ) : null} */}
                            <button
                                        className="change-action"
                                        onClick={() => handleToggleTransferType(transfer.Transferid)}
                                    >
                                        Change to {transfer.Transfertype === 'Private' ? 'Public' : 'Private'}
                                    </button>
                        </div>
                        </div>
                            {/* <h3>{transfer.Transferfromto}</h3> */}
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
