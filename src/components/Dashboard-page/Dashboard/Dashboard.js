import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  faUserPlus,
  faFolderPlus,
  faEdit,
  faThList,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderList from "../OrderList/OrderList";
import ManageService from "../ManageService/ManageService";
import AddAdmin from "../AddAdmin/AddAdmin";
import AddServices from "../AddServices/AddServices";
import "./Dashboard.css";
import { userInfoContext } from "../../../App";
import AddReview from "../AddReview/AddReview";
import Order from "../Order/Order";
import NotFound from "../NotFound/NotFound";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/is-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      });
  }, []);
  return (
    <section className="dashboard">
      <div className="dashboard-to-front">
        <div className="dash-btn-holder">
          <Link to="/">
            <button className="btn-visit-front">Visit Site</button>
          </Link>
        </div>
        <div className="logged-username">
          <p>{loggedInUser.username}</p>
        </div>
      </div>
      <div className="dashboard-main">
        <Router>
          <div className="dashboard-left">
            <div className="vertical-nav">
              <Link to="/dashboard/order-list">
                <span className="dashboard-icon">
                  <FontAwesomeIcon icon={faThList} />
                </span>
                Order List
              </Link>
              <Link to="/dashboard/orders">
                <span className="dashboard-icon">
                  <FontAwesomeIcon icon={faThList} />
                </span>
                Order
              </Link>
              <Link to="/dashboard/add-review">
                <span className="dashboard-icon">
                  <FontAwesomeIcon icon={faCommentAlt} />
                </span>
                Add Review
              </Link>

              {isAdmin && (
                <>
                  <Link to="/dashboard/add-service">
                    <span className="dashboard-icon">
                      <FontAwesomeIcon icon={faFolderPlus} />
                    </span>
                    Add Service
                  </Link>
                  <Link to="/dashboard/add-admin">
                    <span className="dashboard-icon">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </span>
                    Add Admin
                  </Link>
                  <Link to="/dashboard/manage-service">
                    <span className="dashboard-icon">
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                    Manage service
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="dashboard-right">
            <Switch>
              <Route exact path="/dashboard">
                <OrderList />
              </Route>
              <Route path="/dashboard/order-list">
                <OrderList />
              </Route>

              <Route path="/dashboard/orders/:serviceId">
                <Order />
              </Route>

              {isAdmin && (
                <>
                  <Route path="/dashboard/add-service">
                    <AddServices />
                  </Route>
                  <Route path="/dashboard/add-admin">
                    <AddAdmin />
                  </Route>
                  <Route path="/dashboard/manage-service">
                    <ManageService />
                  </Route>
                  <Route path="/dashboard/add-review">
                    <AddReview />
                  </Route>
                </>
              )}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </section>
  );
};

export default Dashboard;
