import React from 'react';
import "./dashboard.css";
import gmailPng from "./gmailPng.png"

function Dashboard() {
    return (
        <div className="container">

            <div className="sidebar">
                <div className="logo1">M</div>

                <div className="sideItems">

                    <div className="sidebar-item">
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="sidebar-item">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="sidebar-item">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="sidebar-item">
                        <i className="fas fa-paper-plane"></i>
                    </div>
                    <div className="sidebar-item">
                        <i className="fas fa-list"></i>
                    </div>
                    <div className="sidebar-item">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="sidebar-item">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="header1">
                    <div className="title">Onebox</div>
                    <div className="user">
                        <div>Tim's Workspace</div>
                    </div>
                </div>

                <div className="content">
                    <div className="message">
                        <img src={gmailPng} alt="envelope" />
                        <h2>It's the beginning of a legendary sales pipeline</h2>
                        <p>When you have inbound E-mails you'll see them here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
