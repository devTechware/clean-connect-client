import { Link } from "react-router";
import { FaGlobeAsia, FaLeaf, FaMapMarkerAlt } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <>
      <title>Error Page: 404</title>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center relative overflow-hidden px-4 transition-all duration-300">
        {/* Background Decorations */}
        <div className="absolute -top-16 -left-16 w-44 h-44 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-accent/30 rounded-full blur-3xl opacity-40"></div>

        {/* Icons */}
        <div className="flex items-center gap-3 mb-6 text-primary">
          <FaLeaf className="w-10 h-10 animate-pulse" />
          <FaMapMarkerAlt className="w-10 h-10 animate-pulse delay-200" />
        </div>

        {/* Main Title */}
        <h1 className="text-7xl font-extrabold text-primary drop-shadow-sm">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mt-2">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-md mx-auto">
          Looks like you’ve stepped outside the CleanConnect community Let’s get
          you back to a cleaner, greener space!
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="mt-6 btn bg-primary hover:bg-secondary text-white border-none rounded-full px-8 shadow-md hover:shadow-lg transition"
        >
          Back to Home
        </Link>

        {/* Floating Decoration */}
        <div className="absolute bottom-6 right-8 text-secondary/40 animate-bounce">
          <FaGlobeAsia className="w-10 h-10" />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
