"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label"; // shadcn label

const SignupForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    dob: "",
    profile: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, profile: file }));
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      let res: Response;

      if (form.profile) {
        const fd = new FormData();
        fd.append("name", form.name);
        fd.append("email", form.email);
        fd.append("password", form.password);
        fd.append("dob", form.dob);
        fd.append("profile", form.profile);
        res = await fetch("/api/auth/signup", { method: "POST", body: fd });
      } else {
        res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            dob: form.dob,
          }),
        });
      }

      const data = await res.json();
      setMessage(
        data?.success
          ? "Sign-up successful! You can now log in."
          : `Sign-up failed: ${data?.message ?? "Please try again."}`
      );
    } catch {
      setMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Re-Enter Password (just below password) */}
          <div className="space-y-1">
            <Label htmlFor="confirm">Re-Enter Password</Label>
            <Input
              id="confirm"
              name="confirm"
              type="password"
              placeholder="Re-Enter your password"
              value={form.confirm}
              onChange={handleChange}
              required
            />
          </div>

          {/* DOB (shadcn Input) */}
          <div className="space-y-1">
            <Label htmlFor="dob">DOB</Label>
            <Input
              id="dob"
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Profile (shadcn Input as file) */}
          <div className="space-y-1">
            <Label htmlFor="profile">Profile</Label>
            <Input
              id="profile"
              name="profile"
              type="file"
              accept="image/*"
              onChange={handleFile}
            />
            {/* Optional tiny filename text */}
            {form.profile && (
              <p className="text-xs text-gray-600">{form.profile.name}</p>
            )}
          </div>

          <Button
            className="w-full bg-black text-white hover:bg-gray-900"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign-Up"}
          </Button>

          {message && <p className="text-center mt-2 text-sm">{message}</p>}
        </form>
      </div>

      <Button
        type="button"
        onClick={() => router.push("/login")}
        className="w-full mt-4"
        variant="link"
      >
        Already have an account? Log in
      </Button>
    </div>
  );
};

export default SignupForm;
