import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-amber-300 flex items-center justify-between p-5">
      <div>
        <img
          width="70px"
          className="rounded-2xl"
          src="https://tse1.mm.bing.net/th/id/OIP.m6MsvQpAYKq7YAjrv8EoZQHaHa?pid=Api&P=0&h=180"
          alt=""
        />
      </div>
      <ul className="flex space-x-6">
        <li className="">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-amber-50 bg-black p-1 rounded-2xl" : ""
            }
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-amber-50 bg-black p-1 rounded-2xl" : ""
            }
            to="/register"
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-amber-50 bg-black p-1 rounded-2xl" : ""
            }
            to="/login"
          >
            Signin
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
