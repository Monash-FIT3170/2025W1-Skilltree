import React from 'react';
import './homepage.css';

const Homepage: React.FC = () => {
    return (
        <div className="main-container">
            <div className="left-nav">
                <button className="nav-item">X</button>
                <button className="nav-item">Y</button>
            </div>
        
        <div className="main-content">
            <div className="search-bar">
                <input type="text" placeholder="Search Your Communities" className="input" />
            </div>
            <div className="communities-section">
                <div className="profile-section">
                    <div className="profile-icon"></div>
                    <span className="profile-name">Test</span>
                    <div className="tooltip"> </div>
                </div>
                <div className="community-section">
                    <h2>Subscribed communities:</h2>
                    <div className="community-grid">
                        <div className="community-tile">Community 1</div>

                        <h2>Recent events:</h2>
                    <div className="event-grid">
                        <div className="event-tile">Event 1</div>
 
                    </div>
                    </div>
            </div>
        </div>
        </div>
        </div>
        
    );
};

export default Homepage;
