import { use, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 500);
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading || showLoading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRoute;
