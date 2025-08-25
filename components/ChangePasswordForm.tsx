"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChangePasswordForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      return "All fields are required.";
    }
    if (form.newPassword.length < 8) {
      return "New password must be at least 8 characters.";
    }
    if (form.newPassword !== form.confirmPassword) {
      return "New passwords do not match.";
    }
    if (form.newPassword === form.currentPassword) {
      return "New password must be different from current password.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const err = validate();
    if (err) {
      setMessage(err);
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
        setMessage("Password updated successfully.");
        // optional: take user back to settings
        // router.push("/usersettings");
      } else {
        setMessage("Change failed: " + (data?.message ?? "Unknown error"));
      }
    } catch (error) {
      setMessage("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-stretch gap-5 p-80"
    >
      <div className="mb-1">
        <h2 className="text-2xl font-semibold tracking-tight">Change Password</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Choose a strong, unique password you haven’t used before.
        </p>
      </div>
      <Input
        value={form.currentPassword}
        onChange={handleChange}
        name="currentPassword"
        type="password"
        placeholder="Current password"
        required
        disabled={loading}
      />

      <Input
        value={form.newPassword}
        onChange={handleChange}
        name="newPassword"
        type="password"
        placeholder="New password"
        required
        disabled={loading}
      />

      <Input
        value={form.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
        type="password"
        placeholder="Confirm new password"
        required
        disabled={loading}
      />

      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2">
        

        <Button
          onClick={() => router.push("/usersettings")}
          className="flex-1 border-2"
          variant="link"
          type="button"
          disabled={loading}
        >
          Cancel
        </Button>


        <Button className="flex-1" type="submit" disabled={loading}>
          {loading ? "Saving..." : "Submit"}
        </Button>
      </div>

      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </form>
  );
};

export default ChangePasswordForm;
