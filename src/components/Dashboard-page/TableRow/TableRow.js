import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TableRow.css";

const TableRow = ({ service, index }) => {
  const { serviceName, serviceText, servicePrice, _id } = service;
  const handleDelete = (event, id) => {
    fetch(`https://secure-meadow-94796.herokuapp.com/delete-service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          event.target.parentNode.style.display= "none";
        }
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{serviceName}</td>
      <td>{serviceText}</td>
      <td>{servicePrice}</td>
      <td>
        <button
          onClick={(event) => handleDelete(event, _id)}
          className="btn-delete"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
