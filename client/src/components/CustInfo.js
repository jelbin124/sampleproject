import React, { useEffect, useState } from "react";
import MainService from "../service/MainService";

export default function CustInfo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    MainService.getUsers()
      .then((response) => {
        console.log("getUsers:", response.data.value);
        setUsers(response.data.value); // Save data to state
      })
      .catch((err) => {
        console.error("error:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Information Data List Mod123</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>CUSTNAME</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>COMPANY</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.CUSTNAME}</td>
              <td>{user.NAME}</td>
              <td>{user.USERNAME}</td>
              <td>{user.Y_1529_0_ESH}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
