import { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import GoogleLogIn from "../components/GoogleLogIn";

const Register = () => {
  const { createUser, updateUser, setLoading } = use(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const photoURL = e.target.photo?.value;
    const password = e.target.password?.value;

    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regEx.test(password)) {
      Swal.fire({
        icon: "error",
        text: "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter",
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUser(displayName, photoURL)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Signup successful.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            text: "User already exists in the database.",
          });
        } else if (error.code === "auth/missing-email") {
          Swal.fire({
            icon: "error",
            text: "The email field is required",
          });
        } else if (error.code === "auth/invalid-email") {
          Swal.fire({
            icon: "error",
            text: "The email address is badly formatted.",
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
            Join Clean Connect 🌍
          </h1>
          <p className="text-center text-sm text-secondary mb-6">
            Create your account to make your community cleaner
          </p>

          {/* Form */}
          <form onSubmit={handleRegistration}>
            <fieldset className="fieldset space-y-4">
              <div>
                <label className="label text-secondary font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                  placeholder="Full Name"
                  required
                />
              </div>

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

              <div>
                <label className="label text-secondary font-semibold">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                  placeholder="https://your-photo-link.com"
                />
              </div>

              <div className="relative">
                <label className="label text-secondary font-semibold">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                  // placeholder="••••••"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-8 text-secondary cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button
                type="submit"
                className="btn w-full bg-primary hover:bg-secondary text-white font-semibold rounded-xl mt-2 border-none"
              >
                Register
              </button>
            </fieldset>
          </form>

          {/* Divider */}
          <div className="divider text-secondary">OR</div>

          {/* Google Login */}
          <GoogleLogIn />

          {/* Footer */}
          <p className="text-center text-sm text-secondary mt-4">
            Already have an account?{" "}
            <Link
              className="font-semibold text-accent hover:text-primary transition-colors"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
