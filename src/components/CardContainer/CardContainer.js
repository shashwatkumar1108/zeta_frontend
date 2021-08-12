import React from 'react';
import './styles.css';

const CardContainer = () => {
    return (
        <div className="card">
            <div className="image">
                <img src="assets/Logo1.png"  width="100" height="150"/>
            </div>
            <div className="information-container">
                <div className="personal-information">
                    <div className="name">
                        <span>Name: Shashwat Kumar</span>
                    </div>
                    <div className="address">
                        <span>Address: HIG 30 ADA Colony, Preetam Nagar, Allahabad</span>
                    </div>
                </div>
                <div className="loan-details">
                    <div className="amount">
                        <span>Amount: &#8377; 5000</span>
                    </div>
                    <div className="interest">
                        <span>Interest: 5%</span>
                    </div>
                    <div className="duration">
                        <span>Return Duration: 2 weeks</span>
                    </div>
                </div>
                <div className="rating">
                    <div className="starts">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardContainer;