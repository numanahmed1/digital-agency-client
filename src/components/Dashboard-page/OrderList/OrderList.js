import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { userInfoContext } from "../../../App";
import AdminOrderList from "../AdminOrderList/AdminOrderList";
import UserOrderList from "../UserOrderList/UserOrderList";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
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

  useEffect(() => {
    fetch("https://secure-meadow-94796.herokuapp.com/orders-list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  }, []);
  console.log(orderList);

  return (
    <div className="container">
      <div className="dash-content-top">
        <h1>Order List</h1>
      </div>
      <div className="order-list-main">
        {isAdmin ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service Name</th>
                <th>Pay With</th>
                <th>Order Placed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((singleOrder) => (
                <AdminOrderList key={singleOrder._id} order={singleOrder} />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="row">
            {orderList.map((singleOrder) => (
              <UserOrderList key={singleOrder._id} order={singleOrder} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
