import { FaTrashAlt, FaBuilding, FaTools, FaRoad } from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Garbage",
    desc: "Report garbage pile-ups, overflowing bins, or illegal dumping.",
    icon: <FaTrashAlt className="text-5xl text-primary" />,
    color: "bg-base-200",
  },
  {
    id: 2,
    title: "Illegal Construction",
    desc: "Notify authorities about unauthorized or unsafe structures.",
    icon: <FaBuilding className="text-5xl text-primary" />,
    color: "bg-base-200",
  },
  {
    id: 3,
    title: "Broken Public Property",
    desc: "Report damaged benches, lights, or other public facilities.",
    icon: <FaTools className="text-5xl text-primary" />,
    color: "bg-base-200",
  },
  {
    id: 4,
    title: "Road Damage",
    desc: "Identify potholes or damaged roads for timely repair.",
    icon: <FaRoad className="text-5xl text-primary" />,
    color: "bg-base-200",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-12 bg-base-100 rounded-xl  my-4">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          Report by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`card shadow-md hover:shadow-xl transition-all duration-300 ${cat.color} p-6 rounded-2xl border border-base-300`}
            >
              <div className="flex flex-col items-center gap-4">
                {cat.icon}
                <h3 className="text-xl font-semibold">{cat.title}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
                <button className="btn btn-outline btn-primary btn-sm mt-3">
                  Report Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
