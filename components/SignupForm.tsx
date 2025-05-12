"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../app/styles/styles.css";

const SignupForm = () => {
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
      const res = await fetch("/api/auth/signup", {
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
        setMessage("Sign-up successful! You can now log in.");
      } else {
        setMessage("Sign-up failed: " + data.message);
      }
    } catch (error) {
      setMessage("An error occurred.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto my-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-3">
          <input
            value={form.username}
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 bg-white/20 rounded"
            required
          />
          <input
            value={form.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 bg-white/20 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-1/2 py-2 bg-white/20 rounded mx-auto block"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Submit"}
        </button>

        {message && <p className="text-center mt-4">{message}</p>}

        {/* Link to the login page */}
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Link href="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
