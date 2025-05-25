"use client";

import { useState } from "react";

const SubmitResetEmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch("/api/request-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message || "Check your email for reset instructions.");
  } catch (error) {
    setMessage("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
        placeholder="Enter your email here"
        className="border p-2 w-full mb-4"
        required
      />
      <button
        type="submit"
        className="bg-[#0A1128] text-white font-semibold px-6 py-2 rounded-md 
             shadow-md transition-all duration-300 ease-in-out 
             hover:bg-[#0c1533] hover:scale-105 hover:shadow-lg"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </form>
  );
};

export default SubmitResetEmailForm;
