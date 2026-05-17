import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from "react-router-dom";

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function formatDate(date) {
    return date.toLocaleDateString('en-GB');
}

export default function Transfer({ packages = [] }) {
    const { id } = useParams();
    const packageData = packages.find(pkg => pkg.id === parseInt(id, 10));

    const uniqueTransfers = useMemo(() => {
        if (!packageData?.Days) return [];
        const travelStartDate = new Date(packageData.TravellingDate);
        const allTransfers = packageData.Days.flatMap((day, dayIndex) =>
            day.schedule.flatMap(schedule =>
                (schedule.Transfer || []).map(transfer => ({
                    ...transfer,
                    TransferDate: formatDate(addDays(travelStartDate, dayIndex)),
                }))
            )
        );
        return Array.from(
            new Map(allTransfers.map(transfer => [transfer.Transferid, transfer])).values()
        );
    }, [packageData]);

    const [transfers, setTransfers] = useState([]);

    useEffect(() => {
        setTransfers(uniqueTransfers);
    }, [uniqueTransfers]);

    const handleToggleTransferType = (transferId) => {
        setTransfers(prevTransfers =>
            prevTransfers.map(transfer =>
                transfer.Transferid === transferId
                    ? {
                        ...transfer,
                        Transfertype: transfer.Transfertype === 'Private' ? 'Public' : 'Private',
                    }
                    : transfer
            )
        );
    };

    if (!packageData) {
        return <h1>Activity data not found</h1>;
    }

    return (
        <div className="Activity-listing">
            {transfers.map((transfer, index) => (
                <div key={index} className="Activity-content-information">
                    <div className="activity-content">
                        <img src={transfer.Transferimage} alt={transfer.Transferfromto} />
                        <div className="activity-details">
                            <div className="Date-actions">
                                <h3>{transfer.Transferfromto}</h3>
                                <div className="insurance-actions">
                                    <button
                                        type="button"
                                        className="change-action"
                                        onClick={() => handleToggleTransferType(transfer.Transferid)}
                                    >
                                        Change to {transfer.Transfertype === 'Private' ? 'Public' : 'Private'}
                                    </button>
                                </div>
                            </div>
                            <ul className="activity-time-type-amount">
                                <li>{transfer.Transfertype}</li>
                                <li>{transfer.Transfernoofpeople}</li>
                                <li>{transfer.Transfername}</li>
                            </ul>
                            <ul className="Transfer-Information">
                                {transfer.Transferinformation?.map((information, infoIndex) => (
                                    <li key={infoIndex}>{information}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
