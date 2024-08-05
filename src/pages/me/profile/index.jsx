import React, { useState, useEffect } from "react";
import "./index.scss";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.first_name || "",
        lastName: user.last_name || "",
        email: user.email || "",
        gender: user.gender || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile data:", formData);
    setIsEditing(false);
  };

  return (
    <div className="profile_container">
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-item full-width">
            <h3>Profile</h3>
          </div>
          <div className="grid-item half-width">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="grid-item half-width">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="grid-item half-width">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} readOnly />
          </div>
          <div className="grid-item half-width">
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" value={formData.gender} readOnly />
          </div>
          <div className="grid-item full-width">
            <button
              type="button"
              onClick={isEditing ? handleSubmit : handleToggleEdit}
            >
              {isEditing ? "Update Profile" : "Edit Profile"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
