import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TableRow.css";

const TableRow = ({ service, index }) => {
  const { serviceName, serviceText, servicePrice, _id } = service;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{serviceName}</td>
      <td>{serviceText}</td>
      <td>{servicePrice}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn-delete">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
