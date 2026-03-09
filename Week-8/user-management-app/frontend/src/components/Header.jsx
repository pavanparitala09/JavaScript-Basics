import React from "react";
import { NavLink } from "react-router";
export default function Header() {
  return (
    <div className='bg-amber-100 flex justify-between'>
      <nav>
        <img width="80px"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <ul className='flex col-auto gap-10 m-4 mt-7'>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-amber-50 bg-black p-1" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adduser"
              className={({ isActive }) =>
                isActive ? "text-amber-50 bg-black p-1" : ""
              }
            >
              Adduser
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userslist"
              className={({ isActive }) =>
                isActive ? "text-amber-50 bg-black p-1" : ""
              }
            >
              UsersList
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
