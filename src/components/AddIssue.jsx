import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddIssue = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddIssue = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      amount: e.target.amount.value,
      status: "ongoing",
      email: user?.email,
      date: new Date(),
    };

    fetch("http://localhost:3000/issues", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user?.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Issue successfully added",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        navigate("/my-issues");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-b from-base-200 to-base-300 py-4 my-4 rounded-xl shadow">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl rounded-2xl border border-base-300">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-primary text-center mb-2">
            Add New Issue
          </h2>
          <p className="text-center text-sm text-secondary mb-6">
            Help us make your community cleaner and safer.
          </p>

          <form onSubmit={handleAddIssue} className="space-y-4">
            {/* Title */}
            <div>
              <label className="label text-secondary font-semibold">
                Issue Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="e.g., Overflowing garbage near park"
                className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="label text-secondary font-semibold">
                Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                required
              >
                <option value="">Select a category</option>
                <option value="garbage">Garbage</option>
                <option value="illegal construction">
                  Illegal Construction
                </option>
                <option value="broken public property">
                  Broken Public Property
                </option>
                <option value="road damage">Road Damage</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="label text-secondary font-semibold">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Dhanmondi 32, Dhaka"
                className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="label text-secondary font-semibold">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Describe the issue in detail..."
                className="textarea textarea-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                required
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="label text-secondary font-semibold">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>

            {/* Amount */}
            <div>
              <label className="label text-secondary font-semibold">
                Amount (৳)
              </label>
              <input
                type="number"
                name="amount"
                placeholder="Enter amount if applicable"
                className="input input-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full bg-primary hover:bg-secondary text-white font-semibold rounded-xl mt-2 border-none"
            >
              Submit Issue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddIssue;
