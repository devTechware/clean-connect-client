import { Link } from "react-router";

const IssueCard = ({ issue }) => {
  const { image, title, category, location, amount, _id } = issue || {};

  return (
    <div className="card bg-base-100 border border-base-300 shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body space-y-2">
        <h2 className="card-title text-lg font-semibold text-primary">
          {title}
        </h2>

        <div className="flex flex-wrap justify-between text-sm text-gray-600">
          <p>
            <span className="font-medium text-secondary">Category:</span>{" "}
            {category}
          </p>
          <p>
            <span className="font-medium text-secondary">Location:</span>{" "}
            {location}
          </p>
        </div>

        <p className="text-accent font-semibold mt-1">Estimated Cost: ৳{amount}</p>

        {/* Button */}
        <div className="card-actions justify-end mt-2">
          <Link to={`/issue-details/${_id}`} className="btn btn-sm bg-primary hover:bg-secondary text-white border-none rounded-lg">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
