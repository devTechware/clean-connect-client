import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout"; // ✨ NEW import
import Home from "../pages/Home";
import Issues from "../pages/Issues";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About"; // ✨ NEW import
import Contact from "../pages/Contact"; // ✨ NEW import
import Dashboard from "../pages/Dashboard"; // ✨ NEW import
import Profile from "../pages/Profile"; // ✨ NEW import
import PrivateRoute from "./PrivateRoute";
import IssueDetails from "../pages/IssueDetails";
import MyIssues from "../pages/MyIssues";
import MyContributions from "../pages/MyContributions";
import AddIssue from "../pages/AddIssue";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  // ===========================================
  // 🔵 SECTION 1: PUBLIC ROUTES (MainLayout)
  // ===========================================
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://clean-connect-api-server.vercel.app/latest-issues"),
      },
      {
        path: "issues",
        element: <Issues />,
        loader: () =>
          fetch("https://clean-connect-api-server.vercel.app/issues"),
      },
      // ✨ NEW: About page route
      {
        path: "about",
        element: <About />,
      },
      // ✨ NEW: Contact page route
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "issue-details/:id",
        element: (
          <PrivateRoute>
            <IssueDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://clean-connect-api-server.vercel.app/issues/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // ===========================================
  // 🟢 SECTION 2: DASHBOARD ROUTES (DashboardLayout)
  // ===========================================
  // ✨ NEW: Entire dashboard section with nested routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // This makes /dashboard show Dashboard.jsx
        element: <Dashboard />,
      },
      {
        path: "profile", // This makes /dashboard/profile show Profile.jsx
        element: <Profile />,
      },
    ],
  },

  // ===========================================
  // 🟡 SECTION 3: PROTECTED ROUTES (MainLayout)
  // ===========================================
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "add-issue",
        element: <AddIssue />,
      },
      {
        path: "my-issues",
        element: <MyIssues />,
      },
      {
        path: "my-contribution",
        element: <MyContributions />,
      },
    ],
  },
]);

export default router;
