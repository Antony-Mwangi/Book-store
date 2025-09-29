import React, { useState, useEffect } from "react";

function Profile({ token }) {
  const [profile, setProfile] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/profile/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setFirstName(data.first_name || "");
        setLastName(data.last_name || "");
      });
  }, [token]);

  const handleImageChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    if (profilePicture) formData.append("profile_picture", profilePicture);

    const res = await fetch("http://localhost:8000/api/profile/", {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      setProfile(data);
      setMessage("Profile updated successfully!");
    } else {
      setMessage("Update failed.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", textAlign: "center" }}>
      <h2>Your Profile</h2>
      <img
        src={profile.profile_picture ? `http://localhost:8000${profile.profile_picture}` : "/default-avatar.png"}
        alt="Profile"
        style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "15px" }}
      />
      <form onSubmit={handleUpdate}>
        <input type="text" value={profile.username || ""} readOnly style={{ width: "100%", marginBottom: "10px" }} />
        <input type="email" value={profile.email || ""} readOnly style={{ width: "100%", marginBottom: "10px" }} />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" style={{ width: "100%", marginBottom: "10px" }} />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" style={{ width: "100%", marginBottom: "10px" }} />
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: "10px" }} />
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Update Profile</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

export default Profile;
