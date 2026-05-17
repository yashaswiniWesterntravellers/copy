import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from "react-router-dom";
import RatingStars from '../Rating/RatingStars';
import { IoIosInformationCircle } from "react-icons/io";

export default function Hotels({ packages = [] }) {
    const { id } = useParams();
    const packageData = packages.find(pkg => pkg.id === parseInt(id, 10));

    const uniqueHotels = useMemo(() => {
        if (!packageData?.Days) return [];
        const allHotels = packageData.Days.flatMap((day) =>
            day.schedule.flatMap(schedule =>
                (schedule.Hotels || []).map(hotel => ({ ...hotel }))
            )
        );
        return Array.from(new Map(allHotels.map(hotel => [hotel.Hotelid, hotel])).values());
    }, [packageData]);

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        setHotels(uniqueHotels);
    }, [uniqueHotels]);

    if (!packageData) {
        return <h1>Activity data not found</h1>;
    }

    return (
        <div className="Activity-listing">
            {hotels.map((hotel) => (
                <div key={hotel.Hotelid} className="Hotel-content-information">
                    <div className="Hotel-content">
                        <div className="Hotel-Image-Badge">
                            <img src={hotel.Hotelimage} alt={hotel.Hotelname} />
                            {hotel.WTRecommended && (
                                <div className="wt-recommended-badge">
                                    <span>WT RECOMMENDED</span>
                                </div>
                            )}
                        </div>
                        <div className="activity-details">
                            <div className="Date-actions">
                                <h3>{hotel.Hotelname}</h3>
                                <div className="insurance-actions">
                                    <button type="button" className="change-action">View</button>
                                    <button type="button" className="change-action">Change</button>
                                </div>
                            </div>
                            <p className="Hotel-Rating">
                                <RatingStars rating={hotel.Hotelrating} /> Trip Advisor
                            </p>
                            <ul className="activity-time-type-amount">
                                <li>{hotel.Hotelaccomodates}</li>
                                <li>{hotel.Hotelamount}</li>
                                <li>{hotel.Hotelarea}</li>
                                <li>{hotel.Hoteltype}</li>
                            </ul>
                            <ul className="Inclusions">
                                Inclusions:
                                {hotel.Hotelinclusions?.map((inclusion, index) => (
                                    <li key={index}>{inclusion}</li>
                                ))}
                            </ul>
                            <ul className="Exclusions">
                                Exclusions:
                                {hotel.Hotelexclusions?.map((exclusion, index) => (
                                    <li key={index}>{exclusion}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="Hotel-price-info">
                        <span className="Hotel-info-icon"><IoIosInformationCircle /></span>
                        <p>{hotel.HotelInfo}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
