import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { use, useEffect, useState } from "react";
import userPhoto from "../assets/user.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleTheme = (e) => {
    const isDark = e.target.checked;
    setTheme(isDark ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signout successful.",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => navigate("/"), 100);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: error.message,
        });
      });
  };

  // 🔥 MAIN CHANGE: Added About, Contact, and Dashboard links
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/issues">All Issues</NavLink>
      </li>
      {/* ✨ NEW: About link */}
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {/* ✨ NEW: Contact link */}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <>
          {/* ✨ NEW: Dashboard link */}
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/add-issue">Add Issues</NavLink>
          </li>
          <li>
            <NavLink to="/my-issues">My Issues</NavLink>
          </li>
          <li>
            <NavLink to="/my-contribution">My Contribution</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    // 🔥 CHANGE: Added shadow-lg for better visibility
    <div className="sticky top-0 z-50 navbar container mx-auto bg-base-200 rounded-xl mt-2 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            // 🔥 CHANGE: Added z-[100] for better dropdown visibility
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center text-2xl cursor-pointer">
          <img src="/favicon.png" className="w-10 font-bold" alt="" />
          <span className="hidden sm:inline">CleanConnect</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2 md:mr-4">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={theme === "dark"}
              className="theme-controller"
            />

            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.5,5.5,0,0,0,12,6.5Z" />
            </svg>

            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="dropdown dropdown-end text-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
            >
              <div className="w-10 rounded-full border-2 border-primary shadow-sm">
                <img
                  src={user?.photoURL || userPhoto}
                  alt="User Avatar"
                  className="rounded-full"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              // 🔥 CHANGE: Added z-[100] and enhanced styling
              className="dropdown-content menu p-4 shadow-lg bg-base-100 border border-base-300 rounded-2xl w-60 mt-2 z-[100]"
            >
              <li className="text-center mb-2">
                <div className="flex flex-col items-center p-2">
                  <h2 className="text-lg font-semibold text-primary">
                    {user?.displayName || "Clean Connect User"}
                  </h2>
                  <p className="text-sm text-secondary/80">{user?.email}</p>
                </div>
              </li>

              <div className="divider my-2"></div>

              {/* ✨ NEW: Profile link with icon */}
              <li>
                <NavLink to="/dashboard/profile" className="justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  My Profile
                </NavLink>
              </li>

              {/* ✨ NEW: Dashboard Home link with icon */}
              <li>
                <NavLink to="/dashboard" className="justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard Home
                </NavLink>
              </li>

              <div className="divider my-2"></div>

              {/* 🔥 ENHANCED: Sign out button with icon */}
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn bg-error/10 hover:bg-error hover:text-white text-error font-semibold rounded-xl border-none w-full transition-all justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className="hidden md:flex space-x-2">
              <NavLink to="/login" className="btn btn-primary">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-secondary">
                Register
              </NavLink>
            </div>

            <div className="dropdown dropdown-end md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[100] mt-3 w-40 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/login"
                    className="text-center justify-center py-2"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="text-center justify-center py-2"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
