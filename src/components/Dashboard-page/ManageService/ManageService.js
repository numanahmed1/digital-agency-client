import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableRow from "../TableRow/TableRow";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <div className="dash-content-top">
        <h1>Manage service</h1>
      </div>
      <div className="manage-box">
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
            {services.length === 0 ? (
              <tr>
                <td className="text-center" colSpan="4">
                  Loading...
                </td>
              </tr>
            ) : (
              services.map((service, index) => (
                <TableRow index={index} key={service._id} service={service} />
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageService;
