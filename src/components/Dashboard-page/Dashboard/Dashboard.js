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
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://secure-meadow-94796.herokuapp.com/is-admin", {
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
          <p>Welcome, {loggedInUser.username}</p>
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
              <PrivateRoute exact path="/dashboard">
                <OrderList />
              </PrivateRoute>
              <PrivateRoute path="/dashboard/order-list">
                <OrderList />
              </PrivateRoute>

              <PrivateRoute path="/dashboard/orders/:serviceId">
                <Order />
              </PrivateRoute>
              <PrivateRoute path="/dashboard/add-review">
                <AddReview />
              </PrivateRoute>

              {isAdmin && (
                <>
                  <PrivateRoute path="/dashboard/add-admin">
                    <AddAdmin />
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard/manage-service">
                    <ManageService />
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard/add-service">
                    <AddServices />
                  </PrivateRoute>
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
