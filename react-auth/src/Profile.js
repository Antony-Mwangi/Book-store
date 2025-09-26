import React, { useState, useEffect } from "react";

function Profile() {
  const [userData, setUserData] = useState({ username: "", email: "", profile_picture: "" });
  const [profileImage, setProfileImage] = useState(null);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("access_token");

  // Fetch user data from backend
  useEffect(() => {
    fetch("http://localhost:8000/api/profile/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch(() => setMessage("Failed to fetch profile data."));
  }, [token]);

  // Handle profile picture update
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!profileImage) {
      setMessage("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("profile_picture", profileImage);

    const response = await fetch("http://localhost:8000/api/profile/update/", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (response.ok) {
      setMessage("Profile picture updated successfully!");
      // Refresh profile image
      setUserData((prev) => ({ ...prev, profile_picture: URL.createObjectURL(profileImage) }));
    } else {
      setMessage("Failed to update profile.");
    }
  };

  return (
    <div>
      <style>{`
        .container { max-width: 600px; margin: 50px auto; padding: 20px; background: #fff; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); text-align: center; font-family: Arial, sans-serif; }
        h2 { margin-bottom: 20px; }
        .profile-info { margin-bottom: 20px; }
        .profile-info p { margin: 8px 0; font-size: 16px; }
        .profile-picture { width: 200px; height: 200px; border-radius: 10px; object-fit: cover; border: 1px solid #ccc; margin-bottom: 15px; }
        input[type="file"] { margin-bottom: 10px; }
        button { padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background-color: #0056b3; }
        .message { margin-top: 15px; color: red; }
      `}</style>

      <div className="container">
        <h2>Your Profile</h2>

        <div className="profile-info">
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>

        <img
          src={userData.profile_picture || "/default-profile.png"}
          alt="Profile"
          className="profile-picture"
        />

        <form onSubmit={handleProfileUpdate}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
          <br />
          <button type="submit">Update Profile Picture</button>
        </form>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default Profile;
