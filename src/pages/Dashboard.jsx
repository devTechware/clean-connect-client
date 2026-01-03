import { useEffect, useState } from "react";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";
import { Fade, Slide } from "react-awesome-reveal";

const Dashboard = () => {
  const { user } = use(AuthContext);

  // 🔥 State to hold all dashboard data
  const [dashboardData, setDashboardData] = useState({
    totalIssues: 0,
    resolvedIssues: 0,
    pendingIssues: 0,
    totalContributions: 0,
    recentIssues: [],
    issuesByCategory: {},
    monthlyTrend: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔥 Fetch dashboard data from API
    const fetchDashboardData = async () => {
      try {
        // Get all issues from your API
        const response = await fetch(
          "https://clean-connect-api-server.vercel.app/issues"
        );
        const data = await response.json();

        // 🔥 Filter to show only current user's issues (optional)
        // If you want to show ALL issues, just use: const userIssues = data;
        const userIssues =
          data.filter((issue) => issue.userEmail === user?.email) || data;

        // Calculate resolved and pending counts
        const resolved = userIssues.filter(
          (issue) => issue.status === "resolved"
        );
        const pending = userIssues.filter(
          (issue) => issue.status === "pending"
        );

        // Calculate total contributions
        const contributions = userIssues.reduce(
          (sum, issue) => sum + (issue.contributions || 0),
          0
        );

        // Group issues by category for pie chart
        const byCategory = userIssues.reduce((acc, issue) => {
          acc[issue.category] = (acc[issue.category] || 0) + 1;
          return acc;
        }, {});

        // Generate monthly trend data for bar chart
        const monthlyData = generateMonthlyTrend(userIssues);

        // Update state with processed data
        setDashboardData({
          totalIssues: userIssues.length,
          resolvedIssues: resolved.length,
          pendingIssues: pending.length,
          totalContributions: contributions,
          recentIssues: userIssues.slice(0, 5), // Last 5 issues
          issuesByCategory: byCategory,
          monthlyTrend: monthlyData,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchDashboardData();
    }
  }, [user]);

  // 🔥 Function to generate last 6 months trend data
  const generateMonthlyTrend = (data) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentMonth = new Date().getMonth();
    const trend = [];

    for (let i = 5; i >= 0; i--) {
      const monthIndex = (currentMonth - i + 12) % 12;
      const monthData = data.filter((issue) => {
        const issueMonth = new Date(issue.createdAt).getMonth();
        return issueMonth === monthIndex;
      });

      trend.push({
        month: months[monthIndex],
        count: monthData.length,
        resolved: monthData.filter((i) => i.status === "resolved").length,
      });
    }

    return trend;
  };

  // 🔥 Data for the 4 stat cards
  const statCards = [
    {
      title: "Total Issues",
      value: dashboardData.totalIssues,
      icon: <FiAlertCircle />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Resolved",
      value: dashboardData.resolvedIssues,
      icon: <FiCheckCircle />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Pending",
      value: dashboardData.pendingIssues,
      icon: <FiClock />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Contributions",
      value: `$${dashboardData.totalContributions}`,
      icon: <FiDollarSign />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* ==================
          HEADER
          ================== */}
      <Fade>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">
              Welcome back, {user?.displayName || "User"}!
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </Fade>

      {/* ==================
          STATS CARDS (4 cards)
          ================== */}
      <Slide direction="up" cascade damping={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl p-6 border border-base-300 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div
                  className={`text-4xl ${stat.color} ${stat.bgColor} p-3 rounded-xl`}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* ==================
          CHARTS (Bar + Pie)
          ================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Monthly Trend */}
        <Fade delay={200}>
          <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
            <h3 className="text-xl font-bold mb-4">Monthly Issues Trend</h3>
            <div className="h-64">
              <BarChart data={dashboardData.monthlyTrend} />
            </div>
          </div>
        </Fade>

        {/* Pie Chart - Issues by Category */}
        <Fade delay={300}>
          <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
            <h3 className="text-xl font-bold mb-4">Issues by Category</h3>
            <div className="h-64">
              <PieChart data={dashboardData.issuesByCategory} />
            </div>
          </div>
        </Fade>
      </div>

      {/* ==================
          RECENT ISSUES TABLE
          ================== */}
      <Fade delay={400}>
        <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
          <h3 className="text-xl font-bold mb-4">Recent Issues</h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentIssues.length > 0 ? (
                  dashboardData.recentIssues.map((issue) => (
                    <tr key={issue._id}>
                      <td className="font-medium">{issue.title}</td>
                      <td>
                        <span className="badge badge-primary">
                          {issue.category}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            issue.status === "resolved"
                              ? "badge-success"
                              : "badge-warning"
                          }`}
                        >
                          {issue.status}
                        </span>
                      </td>
                      <td>{new Date(issue.createdAt).toLocaleDateString()}</td>
                      <td>
                        <span
                          className={`badge ${
                            issue.priority === "high"
                              ? "badge-error"
                              : issue.priority === "medium"
                              ? "badge-warning"
                              : "badge-info"
                          }`}
                        >
                          {issue.priority}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-8 text-gray-500">
                      No issues found. Start by adding your first issue!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Fade>
    </div>
  );
};

// ========================================
// 🔥 BAR CHART COMPONENT
// ========================================
const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.count), 1);

  return (
    <div className="flex items-end justify-between h-full gap-2">
      {data.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div className="w-full flex flex-col items-center justify-end h-48">
            <div className="relative w-full group">
              {/* Resolved bar (green) - stacked on top */}
              <div
                className="w-full bg-green-500 rounded-t-lg transition-all duration-500 hover:brightness-110"
                style={{
                  height: `${(item.resolved / maxValue) * 100}%`,
                  minHeight: item.resolved > 0 ? "8px" : "0",
                }}
              />
              {/* Pending bar (blue) - stacked below */}
              <div
                className="w-full bg-primary rounded-t-lg transition-all duration-500 hover:brightness-110"
                style={{
                  height: `${((item.count - item.resolved) / maxValue) * 100}%`,
                  minHeight: item.count > 0 ? "8px" : "0",
                }}
              />
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-base-300 px-2 py-1 rounded text-xs whitespace-nowrap">
                Total: {item.count} | Resolved: {item.resolved}
              </div>
            </div>
          </div>
          {/* Month label */}
          <p className="text-xs mt-2 font-medium">{item.month}</p>
        </div>
      ))}
    </div>
  );
};

// ========================================
// 🔥 PIE CHART COMPONENT
// ========================================
const PieChart = ({ data }) => {
  const categories = Object.entries(data);
  const total = categories.reduce((sum, [, count]) => sum + count, 0);

  const colors = [
    "#00aeef", // Primary blue
    "#34d399", // Green
    "#f59e0b", // Orange
    "#ef4444", // Red
    "#8b5cf6", // Purple
    "#ec4899", // Pink
  ];

  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        No data available
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* SVG Pie Chart */}
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {categories.map(([category, count], index) => {
            const percentage = (count / total) * 100;
            const startAngle =
              categories
                .slice(0, index)
                .reduce((sum, [, c]) => sum + (c / total) * 360, 0) *
              (Math.PI / 180);
            const endAngle = startAngle + (percentage / 100) * 2 * Math.PI;

            const x1 = 50 + 40 * Math.cos(startAngle);
            const y1 = 50 + 40 * Math.sin(startAngle);
            const x2 = 50 + 40 * Math.cos(endAngle);
            const y2 = 50 + 40 * Math.sin(endAngle);

            const largeArcFlag = percentage > 50 ? 1 : 0;

            return (
              <path
                key={category}
                d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                fill={colors[index % colors.length]}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {categories.map(([category, count], index) => (
          <div key={category} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-xs">
              {category}: {count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
