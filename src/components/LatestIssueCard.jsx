const LatestIssueCard = ({ issue }) => {
  const { title, description, category, location } = issue || {};

  return (
    <div className="card bg-base-100 border border-base-300 shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden">
      <div className="card-body space-y-3">
        {/* Title */}
        <h2 className="card-title text-xl font-semibold text-primary">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        {/* Category and Location */}
        <div className="flex flex-wrap justify-between text-sm mt-2">
          <p className="font-medium text-secondary">
            🗂️ Category:{" "}
            <span className="font-normal text-gray-600">{category}</span>
          </p>
          <p className="font-medium text-secondary">
            📍 Location:{" "}
            <span className="font-normal text-gray-600">{location}</span>
          </p>
        </div>

        {/* Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-sm bg-primary hover:bg-secondary text-white border-none rounded-lg shadow-sm transition-all">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestIssueCard;
