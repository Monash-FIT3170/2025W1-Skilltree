"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
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
          name: form.name,
          email: form.email,
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
          <Input
            value={form.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <Input
            value={form.email}
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Enter your email"
            required
          />
          <Input
            value={form.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <Button className="flex-1" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </Button>

        {message && <p className="text-center mt-4">{message}</p>}

        <Button
          type="button"
          onClick={() => router.push("/login")}
          className="w-full"
          variant="link"
        >
          Already have an account? Log in
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
