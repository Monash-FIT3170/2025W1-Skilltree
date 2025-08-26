"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubmitResetEmailForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    try {
      const res = await fetch("/api/forgetpass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMsg("Check your inbox for the reset link.");
        // router.push("/login"); // enable if you want to redirect immediately
      } else {
        const err = await res.json().catch(() => ({}));
        setMsg(err?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setMsg("Network error. Please try again.");
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
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white border border-slate-300"
          />
        </div>

        {/* Helper text */}
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          We&apos;ll send you a link to your email, from where you can reset your password
        </p>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 text-white hover:bg-slate-900/90"
        >
          {loading ? "Sending..." : "Send Link"}
        </Button>

        {/* Feedback */}
        {msg && (
          <p className="mt-4 text-center text-sm" aria-live="polite">
            {msg}
          </p>
        )}
      </div>
    </form>
  );
};

export default SubmitResetEmailForm;
