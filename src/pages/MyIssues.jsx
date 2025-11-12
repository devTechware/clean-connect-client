import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const MyIssues = () => {
  const { user } = useContext(AuthContext);
  const [issues, setIssues] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);

  // ✅ Fetch user's issues
  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/my-issues?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setIssues(result))
      .catch((err) => console.error(err));
  }, [user]);

  // ✅ Open/Close modal
  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  // ✅ Open modal with selected issue data
  const handleUpdateClick = (issue) => {
    setSelectedIssue(issue);
    setIsModalOpen(true);
  };

  // ✅ Handle update form submission
  const handleUpdateIssue = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedIssue = {
      title: form.title.value,
      category: form.category.value,
      amount: form.amount.value,
      description: form.description.value,
      status: form.status.value,
    };

    fetch(`http://localhost:3000/issues/${selectedIssue._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(updatedIssue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your issue details have been updated successfully.",
            icon: "success",
            confirmButtonColor: "#00aeef",
          });
          // Refresh issues list
          setIssues((prev) =>
            prev.map((issue) =>
              issue._id === selectedIssue._id
                ? { ...issue, ...updatedIssue }
                : issue
            )
          );
          handleModalToggle();
        }
      })
      .catch(() => {
        Swal.fire("Error", "Failed to update issue. Try again later.", "error");
      });
  };

  // ✅ Delete issue
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00aeef",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/issues/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setIssues(issues.filter((issue) => issue._id !== id));
              Swal.fire("Deleted!", "Your issue has been removed.", "success");
            }
          });
      }
    });
  };

  return (
    <>
    <title>My Issues</title>
      <div className="min-h-screen bg-base-200 py-12 px-6 my-4 rounded-xl shadow">
        <div className="max-w-6xl mx-auto bg-base-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            My Submitted Issues
          </h1>

          {issues.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              You haven’t submitted any issues yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full border border-base-300 rounded-lg">
                <thead className="bg-base-300 text-primary">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {issues.map((issue, index) => (
                    <tr
                      key={issue._id}
                      className="hover:bg-base-200 transition-all duration-200"
                    >
                      <td className="font-semibold">{index + 1}</td>
                      <td className="font-semibold">{issue.title}</td>
                      <td className="text-secondary">{issue.category}</td>
                      <td>{issue.location}</td>
                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            issue.status === "ongoing"
                              ? "bg-accent/20 text-accent"
                              : "bg-primary/20 text-primary"
                          }`}
                        >
                          {issue.status}
                        </span>
                      </td>
                      <td className="flex justify-center gap-3">
                        <button
                          onClick={() => handleUpdateClick(issue)}
                          className="btn btn-sm bg-primary hover:bg-secondary text-white"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(issue._id)}
                          className="btn btn-sm bg-error hover:bg-red-700 text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ✅ Update Issue Modal */}
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
                Update Issue Details
              </h2>

              <form onSubmit={handleUpdateIssue} className="space-y-4">
                <div>
                  <label className="label font-semibold">Title</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={selectedIssue?.title}
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label font-semibold">Category</label>
                  <select
                    name="category"
                    defaultValue={selectedIssue?.category}
                    className="select select-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                    required
                  >
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

                <div>
                  <label className="label font-semibold">Amount (৳)</label>
                  <input
                    type="number"
                    name="amount"
                    defaultValue={selectedIssue?.amount}
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label font-semibold">Description</label>
                  <textarea
                    name="description"
                    defaultValue={selectedIssue?.description}
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>

                <div>
                  <label className="label font-semibold">Status</label>
                  <select
                    name="status"
                    defaultValue={selectedIssue?.status}
                    className="select select-bordered w-full rounded-xl border-base-300 focus:border-primary focus:ring-primary"
                    required
                  >
                    <option value="ongoing">Ongoing</option>
                    <option value="ended">Ended</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn bg-accent hover:bg-primary text-white w-full mt-2"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyIssues;
