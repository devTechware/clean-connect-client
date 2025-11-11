import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const IssueDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [issue, setIssue] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/issues/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setIssue(result);
      });
  }, [id, user]);

  const { image, title, category, location, description, date, amount } = issue;

  return (
    <div className="min-h-screen w-full bg-base-200 flex items-center justify-center transition-colors duration-300 my-4 rounded-xl">
      <div className="flex flex-col lg:flex-row bg-base-100 rounded-3xl shadow-xl border border-base-300 overflow-hidden w-full max-w-6xl min-h-[80vh] hover:scale-[1.01] transition-transform duration-300">
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full h-64 lg:h-auto">
          <img src={image} alt={title} className="object-content w-full h-full" />
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 w-full p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-3">{title}</h1>

            <div className="space-y-2 text-secondary mb-6">
              <p>
                🗂️ <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                📍 <span className="font-semibold">Location:</span> {location}
              </p>
              <p>
                📅 <span className="font-semibold">Date:</span>{" "}
                {new Date(date).toLocaleDateString()}
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {description}
            </p>

            <p className="text-lg font-semibold text-accent">
              💰 Estimated Clean-Up Cost: ৳{amount}
            </p>
          </div>

          <div className="mt-8">
            <button className="btn w-full bg-primary hover:bg-secondary text-white font-semibold rounded-xl py-3 border-none shadow-md">
              Pay Clean-Up Contribution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
