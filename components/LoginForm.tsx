"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
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
      // TODO: use axios instead of fetch
      // await axios.post("/api/login", {body}, {headers})
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
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
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-stretch gap-5"
    >
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

      {/* <Link href="/forgetpass">Forget Password?</Link> */}

      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between">
        <Button className="flex-1" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </Button>
        <Button
          onClick={() => router.push("/forgot-password")}
          className="flex-1"
          variant="link"
          type="button"
        >
          Forgot Password? Click here.
        </Button>
      </div>

      {message && <p className="message">{message}</p>}

      <Button
        type="button"
        onClick={() => router.push("/signup")}
        className="w-full"
        variant="link"
      >
        Don't have an account? Sign Up
      </Button>
    </form>
  );
};

export default LoginForm;
