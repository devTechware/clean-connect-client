import { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import userPhoto from "../assets/user.png";

const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  // 🔥 Form data state
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
    bio: "Environmental enthusiast and community advocate",
    location: "Dhaka, Bangladesh",
    joinedDate: user?.metadata?.creationTime || new Date().toISOString(),
  });
  const [loading, setLoading] = useState(false);

  // 🔥 Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Save profile changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update Firebase profile
      await updateUserProfile(formData.displayName, formData.photoURL);

      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: "Your profile has been updated successfully.",
        showConfirmButton: false,
        timer: 1500,
      });

      setIsEditing(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Cancel editing
  const handleCancel = () => {
    // Reset to original values
    setFormData({
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
      bio: formData.bio,
      location: formData.location,
      joinedDate: formData.joinedDate,
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* ==================
          HEADER with Edit Button
          ================== */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-primary">My Profile</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary btn-sm gap-2"
          >
            <FiEdit2 /> Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="btn btn-ghost btn-sm gap-2"
            >
              <FiX /> Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="btn btn-success btn-sm gap-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                <>
                  <FiSave /> Save Changes
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* ==================
          PROFILE CARD
          ================== */}
      <div className="bg-base-200 rounded-2xl border border-base-300 overflow-hidden">
        {/* Header Banner */}
        <div className="bg-linear-to-r from-primary to-secondary h-32"></div>

        {/* Profile Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* ==================
                AVATAR SECTION
                ================== */}
            <div className="flex flex-col items-center md:items-start -mt-20 md:-mt-16">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring ring-base-200 ring-offset-4 ring-offset-base-100">
                  <img
                    src={formData.photoURL || userPhoto}
                    alt="Profile"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Photo URL input (only in edit mode) */}
              {isEditing && (
                <div className="mt-4 w-full max-w-xs">
                  <label className="text-xs font-medium mb-1 block">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    value={formData.photoURL}
                    onChange={handleChange}
                    className="input input-bordered input-sm w-full"
                    placeholder="Enter image URL"
                  />
                </div>
              )}
            </div>

            {/* ==================
                INFO SECTION
                ================== */}
            <div className="flex-1 space-y-6">
              {/* Display Name */}
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">
                  Display Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Your name"
                  />
                ) : (
                  <p className="text-2xl font-bold">
                    {formData.displayName || "Anonymous User"}
                  </p>
                )}
              </div>

              {/* Email (Read-only) */}
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">
                  Email Address
                </label>
                <p className="text-gray-700">{user?.email}</p>
              </div>

              {/* Bio */}
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    rows="3"
                    placeholder="Tell us about yourself"
                  />
                ) : (
                  <p className="text-gray-700">{formData.bio}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Your location"
                  />
                ) : (
                  <p className="text-gray-700">{formData.location}</p>
                )}
              </div>

              {/* Joined Date (Always read-only) */}
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">
                  Member Since
                </label>
                <p className="text-gray-700">
                  {new Date(formData.joinedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* ==================
              STATS SECTION
              ================== */}
          <div className="divider my-8"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-base-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-gray-600">Issues Reported</p>
            </div>
            <div className="bg-base-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-success">8</p>
              <p className="text-xs text-gray-600">Issues Resolved</p>
            </div>
            <div className="bg-base-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-warning">4</p>
              <p className="text-xs text-gray-600">Pending</p>
            </div>
            <div className="bg-base-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-purple-500">$120</p>
              <p className="text-xs text-gray-600">Total Contributions</p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================
          ADDITIONAL INFO CARDS
          ================== */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Account Settings Card */}
        <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
          <h3 className="text-lg font-bold mb-4">Account Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Email Notifications</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">SMS Alerts</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Public Profile</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </div>
          </div>
        </div>

        {/* Recent Activity Card */}
        <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
          <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <p className="text-sm">Reported garbage issue in Sector 7</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <p className="text-sm">Contributed $20 to cleanup drive</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-warning"></div>
              <p className="text-sm">Updated profile information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
