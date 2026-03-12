import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-10 py-7 bg-slate-900 shadow-md">
      <img
        className="w-14 sm:w-16 md:w-16 rounded-full border-2 border-cyan-400 shadow-md hover:scale-105 transition mb-3 sm:mb-0"
        src="data:image/jpeg;base64,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"
        alt="Logo"
      />

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-base sm:text-lg md:text-2xl font-semibold text-cyan-200">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                : "hover:text-cyan-300 transition"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                : "hover:text-cyan-300 transition"
            }
          >
            ProductsList
          </NavLink>
        </li>

        <li>
          <NavLink
            to="contactus"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                : "hover:text-cyan-300 transition"
            }
          >
            ContactUs
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;