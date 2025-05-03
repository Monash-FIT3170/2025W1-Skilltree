import React from 'react';
import './homepage.css';

const Homepage: React.FC = () => {
    return (
        <div className="main-content">
            <div className="search-bar">
                <input type="text" placeholder="Search Your Communities" className="input" />
            </div>
            <div className="community-section">
                <div className="profile-section">
                    <div className="profile-icon"></div>
                    <span className="profile-name">Test</span>
                    <div className="tooltip"> </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
