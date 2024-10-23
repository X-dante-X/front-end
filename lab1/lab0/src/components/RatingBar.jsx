import React from 'react';
import './RatingBar.css'; 

function RatingBar({ rate }) {
    const maxStars = 10;
    
    const validatedRate = Math.max(0, Math.min(rate, maxStars));

    return (
        <div className="rating-bar">
            {[...Array(maxStars)].map((_, index) => (
                <span key={index} className={`star ${index < validatedRate ? 'filled' : ''}`}>
                    ★
                </span>
            ))}
        </div>
    );
}

export default RatingBar;