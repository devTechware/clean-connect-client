import { NavLink, Outlet, useNavigate } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import userPhoto from "../assets/user.png";
import Swal from "sweetalert2";
import {
  FiHome,
  FiList,
  FiUser,
  FiPlusCircle,
  FiHeart,
  FiMenu,
  FiX,
} from "react-icons/fi";

const DashboardLayout = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed out successfully",
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

  // 🔥 SIDEBAR MENU ITEMS (5 items as required)
  const menuItems = [
    {
      path: "/dashboard",
      icon: <FiHome className="text-xl" />,
      label: "Dashboard Home",
    },
    {
      path: "/dashboard/profile",
      icon: <FiUser className="text-xl" />,
      label: "My Profile",
    },
    {
      path: "/add-issue",
      icon: <FiPlusCircle className="text-xl" />,
      label: "Add Issue",
    },
    {
      path: "/my-issues",
      icon: <FiList className="text-xl" />,
      label: "My Issues",
    },
    {
      path: "/my-contribution",
      icon: <FiHeart className="text-xl" />,
      label: "My Contributions",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* ============================================
          TOP NAVBAR (shows on all dashboard pages)
          ============================================ */}
      <div className="sticky top-0 z-50 bg-base-200 border-b border-base-300">
        <div className="navbar container mx-auto">
          {/* Left side: Hamburger + Logo */}
          <div className="flex-1">
            {/* 🔥 Hamburger button for mobile */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="btn btn-ghost lg:hidden"
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center text-xl font-bold cursor-pointer"
            >
              <img src="/favicon.png" className="w-8 h-8 mr-2" alt="Logo" />
              <span className="hidden sm:inline">CleanConnect</span>
            </NavLink>
          </div>

          {/* Right side: Profile dropdown */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-2 border-primary">
                  <img
                    src={user?.photoURL || userPhoto}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* 🔥 Profile Dropdown Menu */}
              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow-lg bg-base-100 border border-base-300 rounded-2xl w-60 mt-2"
              >
                {/* User info */}
                <li className="text-center mb-2">
                  <div className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-primary">
                      {user?.displayName || "User"}
                    </h2>
                    <p className="text-sm text-secondary/80">{user?.email}</p>
                  </div>
                </li>

                <div className="divider my-2"></div>

                {/* Quick links */}
                <li>
                  <NavLink to="/dashboard/profile">
                    <FiUser /> Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">
                    <FiHome /> Dashboard
                  </NavLink>
                </li>

                <div className="divider my-2"></div>

                {/* Sign out button */}
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm bg-error/10 hover:bg-error hover:text-white text-error font-semibold rounded-xl border-none w-full"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          MAIN LAYOUT (Sidebar + Content)
          ============================================ */}
      <div className="flex">
        {/* ==================
            SIDEBAR
            ================== */}
        <aside
          className={`
          fixed lg:sticky top-[65px] left-0 h-[calc(100vh-65px)] 
          w-64 bg-base-200 border-r border-base-300 
          transition-transform duration-300 ease-in-out z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <nav className="p-4 space-y-2">
            {/* 🔥 Loop through all 5 menu items */}
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)} // Close sidebar on click (mobile)
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-md" // Active link styling
                      : "hover:bg-base-300" // Hover styling
                  }`
                }
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* ==================
            OVERLAY (mobile only)
            ================== */}
        {/* 🔥 Dark overlay when sidebar is open on mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ==================
            MAIN CONTENT AREA
            ================== */}
        {/* 🔥 This is where Dashboard.jsx and Profile.jsx will render */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="container mx-auto">
            <Outlet /> {/* Dashboard pages render here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;