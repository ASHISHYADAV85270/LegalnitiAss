// NavBar.tsx

import React from "react";
import { Link } from "react-router-dom";
const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 h-14">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold"> Logo</div>
        <ul className="flex space-x-4">
          <li className="text-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-white">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="text-white">
            <Link to={"/logout"}>Logout</Link>
          </li>
          <li className="relative group">
            <span className="text-white cursor-pointer">
              USER
              <svg
                className="h-5 w-5 ml-1 text-white inline-block"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
            <ul className="absolute hidden bg-gray-700 text-white p-2 space-y-2 group-hover:block">
              <li className="text-white">
                <Link to={"/login"}>Login</Link>
              </li>
              <li className="text-white">
                <Link to={"/signup"}>Signup</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
