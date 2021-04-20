import React from "react";
import "./AdminOrderList.css";

const AdminOrderList = ({ order }) => {
  const { email, orderInfo, orderTime, paymentInfo, status } = order;

  const handleChange = (event, id) => {
    const currentStatus = event.target.value;
    const order = { id, currentStatus };

    fetch(`https://secure-meadow-94796.herokuapp.com/update-order/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <tr>
      <td>{orderInfo.shipment_username}</td>
      <td>{email}</td>
      <td>{orderInfo.order_service_name}</td>
      <td>{paymentInfo.cardType}</td>
      <td>{new Date(orderTime).toDateString("dd/MM/yyyy")}</td>
      <td>
        <select
          value={status}
          onChange={(event) => handleChange(event, order._id)}
        >
          <option value="pending">Pending</option>
          <option value="on-going">On going</option>
          <option value="done">Done</option>
        </select>
      </td>
    </tr>
  );
};

export default AdminOrderList;
