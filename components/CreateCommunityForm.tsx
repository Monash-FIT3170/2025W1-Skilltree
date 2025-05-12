"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../app/styles/styles.css";

const CreateCommunityForm = () => {
	const [form, setForm] = useState({
		communityName: "",
		communityDesc: "",
	});

	const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

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
              setMessage("Login failed: " + data.message);
            }
          } catch (error) {
            postMessage("Error occured.");
          }
      
          setLoading(false);
	};

	return (
		<div className="form-container">
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
