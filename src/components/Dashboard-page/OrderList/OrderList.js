import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { userInfoContext } from "../../../App";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);

  useEffect(() => {
    fetch("http://localhost:5000/orders-list", {
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

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="container">
      <div className="dash-content-top">
        <h1>Manage service</h1>
      </div>
      <div className="order-list-main">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Service Name</th>
              <th>Service Text</th>
              <th>Service Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr>
                <td>
                  <select value={order.status} >
                    <option value="pending">Pending</option>
                    <option value="on-going">On going</option>
                    <option value="done">Done</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderList;
