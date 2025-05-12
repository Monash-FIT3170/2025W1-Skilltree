"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../app/styles/styles.css";

const LoginForm = () => {
	const [form, setForm] = useState({
		username: "",
		password: "",
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
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: form.username,
                  password: form.password,
                }),
              });
      
            const data = await res.json();
            if (data.success) {
              setMessage("Login successful");
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
				value={form.username}
				onChange={handleChange}
				name="username"
				type="text"
				placeholder="Enter your username"
				className="form-input"
				required
			  />
			  <input
				value={form.password}
				onChange={handleChange}
				name="password"
				type="password"
				placeholder="Enter your password"
				className="form-input"
				required
			  />
			</div>
	
			<div className="forgot-password-link">
			  <Link href="/forgetpass" className="link">
				Forget Password?
			  </Link>
			</div>
	
			<button
			  type="submit"
			  className="form-submit-button"
			  disabled={loading}
			>
			  {loading ? "Logging in..." : "Submit"}
			</button>
	
			{message && <p className="message">{message}</p>}
	
			<div className="signup-link">
			  <span>Don't have an account? </span>
			  <Link href="/signup" className="link">
				Sign Up
			  </Link>
			</div>
		  </form>
		</div>
	  );
	};
	
export default LoginForm;
