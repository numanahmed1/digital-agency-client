import React from "react";
import "./UserOrderList.css";

const UserOrderList = ({ order }) => {
  const { orderInfo, status } = order;

  console.log(order);
  return (
    <div className="col-md-4">
      <div className="user-order-card">
        <div className="user-order-card-top">
          <img src={orderInfo.order_service_iconUrl} alt="" />
          {status === "pending" && <p className="pending">Pending</p>}
          {status === "on-going" && <p className="ongoing">On going</p>}
          {status === "done" && <p className="done">Done</p>}
        </div>
        <div className="user-order-card-bottom">
          <p>{orderInfo.order_service_name}</p>
          <p>{orderInfo.order_service_text}</p>
        </div>
      </div>
    </div>
  );
};

export default UserOrderList;
