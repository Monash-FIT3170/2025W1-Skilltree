"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SubmitResetEmailForm = () => {
  const [form, setForm] = useState({
    emailToChange: "",
    oldPassword: "",
    newPassword: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/forgetpass", {
      method: "POST",
      body: JSON.stringify({
        user: form.emailToChange,
        oldPass: form.oldPassword,
        newPass: form.newPassword,
      }),
    });

    if (res.ok) {
      // optional: show a flash or message
      router.push("/login"); // ■ redirect on success
    } else {
      const err = await res.json();
      alert(err.error || "Unknown error");
    }
  };

  return (
    <form onSubmit={handleReset}>
      <input
        value={form.emailToChange}
        onChange={handleChange}
        name="emailToChange"
        type="text"
        placeholder="Enter your email here"
        className="border p-2 w-full mb-4"
        required
      />
      <input
        value={form.oldPassword}
        onChange={handleChange}
        name="oldPassword"
        type="password"
        placeholder="Enter your old password here"
        className="border p-2 w-full mb-4"
        required
      />
      <input
        value={form.newPassword}
        onChange={handleChange}
        name="newPassword"
        type="password"
        placeholder="Enter your new password here"
        className="border p-2 w-full mb-4"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Reset Password
      </button>
    </form>
  );
};
export default SubmitResetEmailForm;
