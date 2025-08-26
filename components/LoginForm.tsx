"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data?.success) {
        setMessage("Login successful");
        // router.push("/dashboard"); // <- uncomment when you have a target
      } else {
        setMessage("Login failed: " + (data?.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      setMessage("Error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Card-like container */}
      <div className="rounded-md border bg-muted shadow-sm p-6">
        {/* Email */}
        <div className="space-y-2 mb-4">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="bg-white"
          />
        </div>

        {/* Password */}
        <div className="space-y-2 mb-5">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="bg-white"
          />
        </div>

        {/* Primary login button (dark) */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 text-white hover:bg-slate-900/90"
        >
          {loading ? "Logging in..." : "Log In"}
        </Button>

        {/* Divider with 'Or' */}
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-muted ">Or</span>
          </div>
        </div>

        {/* Forgot password link (centered, subtle) */}
        <div className="mb-4 text-center">
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto underline"
            onClick={() => router.push("/forgot-password")}
          >
            Forgot Password
          </Button>
        </div>

        {/* New user text */}
        <p className="text-center text-sm text-muted-foreground mb-3">
          New to SkillTree ?
        </p>

        {/* Sign Up button (dark, full width) */}
        <Button
          type="button"
          onClick={() => router.push("/signup")}
          className="w-full bg-slate-900 text-white hover:bg-slate-900/90"
        >
          Sign Up
        </Button>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-sm" aria-live="polite">
            {message}
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
