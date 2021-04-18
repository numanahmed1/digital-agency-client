import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard-to-front">
        <Link to="/">
          <button className="btn-visit-front">Visit Site</button>
        </Link>
      </div>
      <div className="dashboard-main">
        <Router>
          <div className="dashboard-left">
            <h1>Left</h1>
          </div>
          <div className="dashboard-right">
            <h1>Right</h1>
          </div>
        </Router>
      </div>
    </section>
  );
};

export default Dashboard;
