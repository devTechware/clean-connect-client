import { useEffect, useState } from "react";
import { FaUsers, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const CommunityStats = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    issuesResolved: 0,
    issuesPending: 0,
  });

  // Simulate fetching data (you can later replace this with an API)
  useEffect(() => {
    const mockData = {
      totalUsers: 2540,
      issuesResolved: 860,
      issuesPending: 420,
    };

    // Add a short delay for a natural loading effect
    const timer = setTimeout(() => {
      setStats(mockData);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-base-200 py-16 px-6 my-8 rounded-2xl shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10">
          🌍 Community Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total Users */}
          <div className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaUsers className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h3 className="text-4xl font-extrabold text-secondary">
              {stats.totalUsers.toLocaleString()}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 font-semibold">
              Registered Users
            </p>
          </div>

          {/* Issues Resolved */}
          <div className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaCheckCircle className="w-12 h-12 text-accent mx-auto mb-4 animate-bounce" />
            <h3 className="text-4xl font-extrabold text-accent">
              {stats.issuesResolved.toLocaleString()}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 font-semibold">
              Issues Resolved
            </p>
          </div>

          {/* Issues Pending */}
          <div className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaHourglassHalf className="w-12 h-12 text-secondary mx-auto mb-4 animate-spin-slow" />
            <h3 className="text-4xl font-extrabold text-secondary">
              {stats.issuesPending.toLocaleString()}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 font-semibold">
              Issues Pending
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
