import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Home = () => {
    return (
        <>
            <div className="welcome">
                <h1>Welcome to Lend It Out</h1>
            </div>
            <div className="content">
                <ul>
                    <li>Give Loan</li>
                    <li>Receive a Loan</li>
                </ul>
            </div>
        </>
    );
}

export default Home;