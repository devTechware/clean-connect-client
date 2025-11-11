import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Issues from "../pages/Issues";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddIssue from "../components/AddIssue";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "issues",
        element: <Issues />,
        loader: () => fetch("http://localhost:3000/issues"),
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
