"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePasswordForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    current: false,
    next: false,
    confirm: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<null | { type: "ok" | "err"; text: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.currentPassword || !form.newPassword || !form.confirmPassword)
      return "All fields are required.";
    if (form.newPassword.length < 8)
      return "New password must be at least 8 characters.";
    if (form.newPassword !== form.confirmPassword)
      return "New passwords do not match.";
    if (form.newPassword === form.currentPassword)
      return "New password must be different from current password.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    const err = validate();
    if (err) {
      setMessage({ type: "err", text: err });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        }),
      });

      const data = await res.json();
      if (data?.success) {
        setMessage({ type: "ok", text: "Password updated successfully." });
        setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
        // router.push("/usersettings") // enable if you want to redirect
      } else {
        setMessage({
          type: "err",
          text: "Change failed: " + (data?.message ?? "Unknown error"),
        });
      }
    } catch {
      setMessage({ type: "err", text: "Error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-80 flex flex-col items-stretch gap-5"
    >
      {/* Current password */}
      <div>
        <label className="mb-1 block text-m font-medium">Current Password</label>
        <div className="relative">
          <Input
            value={form.currentPassword}
            onChange={handleChange}
            name="currentPassword"
            type={show.current ? "text" : "password"}
            placeholder="Enter your current password"
            required
            disabled={loading}
            className="bg-white"
          />
          <button
            type="button"
            onClick={() => setShow((s) => ({ ...s, current: !s.current }))}
            className="absolute inset-y-0 right-0 px-3 text-slate-600"
            aria-label={show.current ? "Hide password" : "Show password"}
          >
            {show.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* New password */}
      <div>
        <label className="mb-1 block text-m font-medium">New Password</label>
        <div className="relative">
          <Input
            value={form.newPassword}
            onChange={handleChange}
            name="newPassword"
            type={show.next ? "text" : "password"}
            placeholder="Enter a new password"
            required
            disabled={loading}
            className="bg-white"
          />
          <button
            type="button"
            onClick={() => setShow((s) => ({ ...s, next: !s.next }))}
            className="absolute inset-y-0 right-0 px-3 text-slate-600"
            aria-label={show.next ? "Hide password" : "Show password"}
          >
            {show.next ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <p className="mt-1 text-xs text-slate-600">
          Use at least 8 characters with a mix of letters, numbers & symbols.
        </p>
      </div>

      {/* Confirm new password */}
      <div>
        <label className="mb-1 block text-m font-medium">Confirm New Password</label>
        <div className="relative">
          <Input
            value={form.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            type={show.confirm ? "text" : "password"}
            placeholder="Re-enter the new password"
            required
            disabled={loading}
            className="bg-white"
          />
          <button
            type="button"
            onClick={() => setShow((s) => ({ ...s, confirm: !s.confirm }))}
            className="absolute inset-y-0 right-0 px-3 text-slate-600"
            aria-label={show.confirm ? "Hide password" : "Show password"}
          >
            {show.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Primary action row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2">
        {/* Dark navy primary like the login screenshot */}
        <Button
          className="flex-1 bg-slate-900 text-white hover:bg-slate-800"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Log In".replace("Log In", "Save New Password")}
        </Button>

        <Button
          onClick={() => router.push("/usersettings")}
          className="flex-1 border-2 bg-muted"
          variant="link"
          type="button"
          disabled={loading}
        >
          Cancel
        </Button>
      </div>

      {message && (
        <p
          className={`text-sm ${
            message.type === "ok" ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {message.text}
        </p>
      )}

      {/* Optional divider + helper links to mirror login layout */}
      
      
    </form>
  );
}
