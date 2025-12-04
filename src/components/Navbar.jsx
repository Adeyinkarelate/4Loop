import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.webp"

const Navbar = () => {
  return (
    <div class="navbar bg-white text-black shadow-sm shadow-gray-300 fixed z-20 top-0 font-out ">
      <div class="navbar-start">
        {/* ========Dropdown============ */}
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabindex="-1"
            class="menu menu-lg dropdown-content bg-white text-black  z-1 mt-3 w-[400px] p-4 border-b-2 shadow-amber-700 font-out"
          >
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <a>Learning Path</a>
              <ul class="p-2">
                <li>
                  <Link to="/dev">DevOps</Link>
                </li>
                <li>
                  <a>Data Analysis</a>
                </li>
                <li>
                  <Link to="/java">Full Stack (Java)</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* ========================== */}
        <Link to="/" className="text-white">
          <img src={logo} alt="" class="w-60 h-16 text-white" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex rounded-none">
        <ul class="menu menu-horizontal px-1 menu-md">
          <li>
              <Link to="/courses">Courses</Link>
            </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <details>
              <summary>Learning Path</summary>
              <ul class="p-2 w-52 bg-black text-white">
                 <li>
                  <Link to="/dev">DevOps</Link>
                </li>
                <li>
                  <a>Data Analysis</a>
                </li>
                <li>
                  <Link to="/java">Full Stack (Java)</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Service</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <Link to="contact" class="btn bg-black text-white">Enroll</Link>
      </div>
    </div>
  );
};

export default Navbar;
