import { Link, useLocation, useNavigate } from "react-router";
import { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import GoogleLogIn from "../components/GoogleLogIn";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInUser, setLoading } = use(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then(() => {
        event.target.reset();
        navigate(state || "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          Swal.fire({
            icon: "error",
            text: "Invalid email or password.",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: error.code || "An unexpected error occurred.",
          });
        }
      });
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-b from-base-200 to-base-300 py-4 my-4 rounded-xl shadow">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl rounded-2xl border border-base-300">
        <div className="card-body">
          {/* Header */}
          <h1 className="text-3xl font-bold text-primary text-center mb-3">
            Welcome Back 👋
          </h1>
          <p className="text-center text-sm text-secondary mb-6">
            Please log in to continue to{" "}
            <span className="font-semibold text-accent">Clean Connect</span>
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset space-y-4">
              {/* Email */}
              <div>
                <label className="label text-secondary font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                  placeholder="example@email.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="label text-secondary font-semibold">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-9 text-secondary cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn w-full bg-primary hover:bg-secondary text-white font-semibold rounded-xl mt-2 border-none"
              >
                Login
              </button>
            </fieldset>
          </form>

          {/* Divider */}
          <div className="divider text-secondary">OR</div>

          {/* Google Login */}
          <GoogleLogIn />

          {/* Footer */}
          <p className="text-center text-sm text-secondary mt-4">
            New to Clean Connect?{" "}
            <Link
              className="font-semibold text-accent hover:text-primary transition-colors"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
