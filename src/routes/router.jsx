import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Issues from "../pages/Issues";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddIssue from "../components/AddIssue";
import PrivateRoute from "./PrivateRoute";
import IssueDetails from "../pages/IssueDetails";
import MyIssues from "../pages/MyIssues";
import MyContributions from "../pages/MyContributions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest-issues"),
      },
      {
        path: "issues",
        element: <Issues />,
        loader: () => fetch("http://localhost:3000/issues"),
      },
      {
        path: "issue-details/:id",
        element: (
          <PrivateRoute>
            <IssueDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "add-issues",
        element: (
          <PrivateRoute>
            <AddIssue />
          </PrivateRoute>
        ),
      },
      {
        path: "my-issues",
        element: <PrivateRoute><MyIssues /></PrivateRoute>
      },
      {
        path: "my-contribution",
        element: <PrivateRoute><MyContributions /></PrivateRoute>
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
]);

export default router;
