import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let res = fetch("http://localhost:3000/user-api/users");
    res
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.users);
      });
  }, []);

  //function to show user details
  const userDetails = (user) => {
    alert(
      `Name: ${user.name}\nEmail: ${user.email}\nDOB: ${user.dateOfBirth}\nPhone: ${user.mobileNumber}`,
    );
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold pt-5">User List</h1>

      {users.map((user) => {
        return (
          <div onClick={() => userDetails(user)} key={user._id}>
            <card className="flex flex-col border-2 m-5 p-5 cursor-pointer">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p>{user.email}</p>
            </card>
          </div>
        );
      })}
    </div>
  );
}
