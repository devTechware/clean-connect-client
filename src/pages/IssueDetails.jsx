import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import userPhoto from "../assets/user.png";
import Swal from "sweetalert2";

const IssueDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [issue, setIssue] = useState({});
  const [contributors, setContributors] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  //console.log(user);

  const handleContribution = (e) => {
    e.preventDefault();
    const contributorData = {
      issueId: id,
      title,
      category,
      amount: e.target.amount.value,
      name: e.target.name.value,
      email: user?.email,
      photo: user?.photoURL,
      phone: e.target.phone.value,
      address: e.target.address.value,
      date: new Date(),
      additionalInfo: e.target.additionalInfo.value,
    };

    fetch("http://localhost:3000/contributors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user?.accessToken}`,
      },
      body: JSON.stringify(contributorData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Thank you for your contribution",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    handleModalToggle();
  };

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

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

  useEffect(() => {
    fetch(`http://localhost:3000/contributors/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setContributors(result);
      });
  }, [id, user]);

  const { image, title, category, location, description, date, amount } = issue;

  return (
    <>
      <title>{`Issue: ${title}`}</title>
      <section className="min-h-screen w-full bg-base-200 flex flex-col lg:flex-row items-center justify-center gap-10 px-8 py-16 transition-colors duration-300 rounded-xl shadow my-4">
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-base-300">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Info */}
        <div className="lg:w-1/2 w-full space-y-6">
          <h1 className="text-4xl font-bold text-primary">{title}</h1>
          <div className="space-y-3 text-secondary">
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
          <p className="text-gray-300 dark:text-gray-300 leading-relaxed max-w-2xl">
            {description}
          </p>
          <div className="pt-4">
            <p className="text-lg font-semibold text-accent mb-4">
              💰 Estimated Clean-Up Cost: ৳{amount}
            </p>
            <button
              onClick={handleModalToggle}
              className="btn bg-primary hover:bg-secondary text-white font-semibold rounded-xl border-none shadow-md px-6 py-3 transition-transform duration-300 hover:scale-105"
            >
              Pay Clean-Up Contribution
            </button>
          </div>
        </div>

        {/* MODAL SECTION */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center overflow-y-auto py-10">
            <div className="relative bg-base-100 w-full max-w-lg rounded-2xl shadow-2xl p-6 mx-4 my-auto">
              <button
                onClick={handleModalToggle}
                className="absolute top-3 right-3 text-gray-500 hover:text-error"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                Contribute to Clean-Up Effort
              </h2>

              <form onSubmit={handleContribution} className="space-y-4">
                <div>
                  <label className="label font-semibold">Issue Title</label>
                  <input
                    type="text"
                    name="issue_title"
                    value={title}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label font-semibold">Amount (৳)</label>
                  <input
                    type="number"
                    defaultValue={amount}
                    name="amount"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label font-semibold">
                    Contributor Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    name="name"
                    defaultValue={user.displayName}
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label font-semibold">Email</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label font-semibold">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="01XXXXXXXXX"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label font-semibold">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your address"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label font-semibold">Additional Info</label>
                  <textarea
                    name="additionalInfo"
                    placeholder="Add any special note..."
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-accent hover:bg-primary text-white w-full mt-2"
                >
                  Confirm Contribution
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
      {/* --- CONTRIBUTORS TABLE SECTION --- */}
      <section className="my-4 w-full bg-base-100 rounded-xl shadow-lg p-8 container mx-auto">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">
          Community Contributors
        </h3>

        {contributors.length === 0 ? (
          <p className="text-center text-gray-500">
            No contributors yet. Be the first to support the clean-up drive!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-300">
                <tr className="text-primary text-lg">
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Amount (৳)</th>
                </tr>
              </thead>
              <tbody>
                {contributors.map((contributor) => (
                  <tr
                    key={contributor._id}
                    className="hover:bg-base-200 transition-colors duration-200"
                  >
                    <td>
                      <img
                        src={contributor.photo || userPhoto}
                        alt={contributor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </td>
                    <td className="font-medium text-gray-700">
                      {contributor.name}
                    </td>
                    <td className="font-semibold text-accent">
                      ৳{contributor.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
};

export default IssueDetails;
