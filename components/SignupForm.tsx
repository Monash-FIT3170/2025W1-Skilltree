"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

// shadcn + lucide for DOB picker
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format, parseISO } from "date-fns";

const SignupForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    dob: "", // stored as "yyyy-MM-dd" for backend
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          dob: form.dob, // yyyy-MM-dd
        }),
      });

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
    <div className="w-90 max-w-md mx-auto">
      <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email (first, to match your mock) */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className="bg-white"
              required
            />
          </div>

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
              className="bg-white"
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
              className="bg-white"
              required
            />
          </div>

          {/* Re-Enter Password */}
          <div className="space-y-1">
            <Label htmlFor="confirm">Re-Enter Password</Label>
            <Input
              id="confirm"
              name="confirm"
              type="password"
              placeholder="Re-Enter your password"
              value={form.confirm}
              onChange={handleChange}
              className="bg-white"
              required
            />
          </div>

          {/* DOB - single date component: Popover + Calendar (shadcn) */}
          <div className="space-y-1">
            <Label htmlFor="dob">DOB</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white pl-9"
                  >
                    {form.dob ? (
                      <span>{format(parseISO(form.dob), "dd-MM-yyyy")}</span>
                    ) : (
                      <span className="text-muted-foreground">dd-mm-yyyy</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="p-0">
                  <Calendar
                    mode="single"
                    selected={form.dob ? parseISO(form.dob) : undefined}
                    onSelect={(d) =>
                      setForm((prev) => ({
                        ...prev,
                        dob: d ? format(d, "yyyy-MM-dd") : "",
                      }))
                    }
                    captionLayout="dropdown"
                    fromYear={1950}
                    toYear={new Date().getFullYear()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
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
