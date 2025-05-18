"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const CreateCommunityForm = () => {
  const [form, setForm] = useState({
    communityName: "",
    communityDesc: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<string | null>(null); // To store the logged-in user

  // Fetch the logged-in user's details when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/getUser");
        const data = await res.json();
        if (data.success) {
          setUser(data.email); // Assuming the email is in the decoded token
        } else {
          setUser(null); // If no user is logged in
        }
      } catch (error) {
        setUser(null); // Handle error gracefully
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/createCommunity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          communityName: form.communityName,
          communityDesc: form.communityDesc,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Community Successfully Created");
      } else {
        setMessage("Community creation failed: " + data.message);
      }
    } catch (error) {
      setMessage("Error occurred.");
    }

    setLoading(false);
  };

	return (
	<div className="form-container">
		{/* Display the user login status */}
		<div className="user-info-container">
		{user ? (
			<p className="user-info">Logged in as: {user}</p>
		) : (
			<p className="user-info">Not logged in</p>
		)}
		</div>

    {/* Form to create a community */}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-input-group">
          <input
            value={form.communityName}
            onChange={handleChange}
            name="communityName"
            type="text"
            placeholder="Enter a name for the community"
            className="form-input"
            required
          />
          <input
            value={form.communityDesc}
            onChange={handleChange}
            name="communityDesc"
            type="text"
            placeholder="Enter a description of the community"
            className="form-input"
            required
          />
        </div>

        <button
          type="submit"
          className="form-submit-button"
          disabled={loading}
        >
          {loading ? "Creating Community..." : "Submit"}
        </button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default CreateCommunityForm;
