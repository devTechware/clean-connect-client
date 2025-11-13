import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa"; // ✅ using React Icons

const IssueNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 py-8 my-4 bg-base-100 rounded-xl">
      {/* Icon */}
      <div className="p-6 bg-error/10 rounded-full">
        <FaExclamationTriangle className="w-16 h-16 text-error" />
      </div>

      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold text-error mb-2">Issue Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          The issue you’re trying to view may have been deleted, moved, or the
          ID entered is invalid. Please double-check or return to the main
          dashboard.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Link
          to="/"
          className="btn bg-primary hover:bg-secondary text-white rounded-lg"
        >
          Go to Home
        </Link>
        <Link
          to="/issues"
          className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white rounded-lg"
        >
          View All Issues
        </Link>
      </div>
    </div>
  );
};

export default IssueNotFound;
