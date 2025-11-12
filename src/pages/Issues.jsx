import { useEffect, useState } from "react";
import IssueCard from "../components/IssueCard";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  // Fetch issues dynamically based on filters
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (category) queryParams.append("category", category);
        if (status) queryParams.append("status", status);

        const res = await fetch(`http://localhost:3000/issues?${queryParams}`);
        const data = await res.json();
        setIssues(data);
      } catch (err) {
        console.error("Error fetching filtered issues:", err);
      }
    };

    fetchIssues();
  }, [category, status]);

  return (
    <>
      <title>All Issues</title>
      <div className="min-h-screen bg-base-200 py-10 px-6 my-4 rounded-xl shadow">
        <div className="max-w-7xl mx-auto">
          {/* 🔍 Filter Section */}
          <div className="sticky top-15 z-40 bg-base-100 p-6 rounded-xl shadow border border-base-300 mb-8">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Filter Community Issues
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-10">
              {/* 🗑 Category Filter */}
              <div className="space-y-2">
                <h3 className="font-semibold text-secondary text-lg">
                  Filter by Category:
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "All", value: "" },
                    { label: "Garbage", value: "garbage" },
                    {
                      label: "Illegal Construction",
                      value: "illegal construction",
                    },
                    {
                      label: "Broken Public Property",
                      value: "broken public property",
                    },
                    { label: "Road Damage", value: "road damage" },
                  ].map((cat) => (
                    <label
                      key={cat.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.value}
                        checked={category === cat.value}
                        onChange={(e) => setCategory(e.target.value)}
                        className="radio radio-primary"
                      />
                      <span className="capitalize">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 🚧 Status Filter */}
              <div className="space-y-2">
                <h3 className="font-semibold text-secondary text-lg">
                  Filter by Status:
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "All", value: "" },
                    { label: "Ongoing", value: "ongoing" },
                    { label: "Ended", value: "ended" },
                  ].map((stat) => (
                    <label
                      key={stat.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="status"
                        value={stat.value}
                        checked={status === stat.value}
                        onChange={(e) => setStatus(e.target.value)}
                        className="radio radio-accent"
                      />
                      <span className="capitalize">{stat.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 🧾 Issues Grid */}
          {issues.length === 0 ? (
            <p className="text-center text-gray-500 text-lg mt-10">
              No issues found. Try adjusting your filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {issues.map((issue) => (
                <IssueCard key={issue._id} issue={issue} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Issues;
