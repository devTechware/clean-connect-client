import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { use } from "react";
import userPhoto from "../assets/user.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
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

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/issues">All Issues</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-issues">Add Issues</NavLink>
          </li>
          <li>
            <NavLink to="/issues">My Issues</NavLink>
          </li>
          <li>
            <NavLink to="/issues">My Contribution</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar container mx-auto bg-base-200 rounded-xl">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="flex items-center text-2xl cursor-pointer">
          <img src="/favicon.png" className="w-10 font-bold" alt="" />{" "}
          CleanConnect
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        {loading ? (
          <>Loading...</>
        ) : user ? (
          <div className="dropdown dropdown-end text-center">
            {/* Avatar Button */}
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

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="dropdown-content menu p-4 shadow-lg bg-base-100 border border-base-300 rounded-2xl w-60 mt-2"
            >
              {/* User Info */}
              <li className="text-center mb-2">
                <h2 className="text-lg font-semibold text-primary">
                  {user?.displayName || "Clean Connect User"}
                </h2>
                <p className="text-sm text-secondary/80">{user?.email}</p>
              </li>

              <div className="divider my-2"></div>

              {/* Sign Out */}
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn bg-accent/10 hover:bg-accent hover:text-white text-accent font-semibold rounded-xl border-none w-full transition-all"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-2">
            <NavLink to="/login" className="btn btn-primary">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-secondary">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
