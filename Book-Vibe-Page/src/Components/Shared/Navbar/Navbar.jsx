import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 font-semibold transition ${
      isActive
        ? "border border-green-500 text-green-600"
        : "text-slate-700 hover:bg-green-50 hover:text-green-600"
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/books" className={navLinkClass}>
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/page-to-read" className={navLinkClass}>
          Page to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur">
      <div className="navbar container mx-auto px-4 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-64 border border-base-200 bg-base-100 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold text-slate-900 sm:text-2xl">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div className="navbar-end w-auto gap-2 sm:gap-3">
          <button className="btn btn-outline btn-success btn-sm sm:btn-md">
            Sign In
          </button>
          <button className="btn btn-info btn-sm text-white sm:btn-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
