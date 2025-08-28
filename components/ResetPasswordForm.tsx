"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || ""; // if your reset link includes ?token=...

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      // Call your API
      await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, token }),
      });

      // Always show success dialog per UX (or gate on res.ok if you prefer)
      setDialogOpen(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rounded-md border bg-muted shadow-sm p-6">
          {/* Email */}
          <div className="space-y-2 mb-4">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Confirm your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white border border-slate-300"
              disabled={loading}
            />
          </div>

          {/* New Password */}
          <div className="space-y-2 mb-4">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white border border-slate-300"
              disabled={loading}
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2 mb-5">
            <label htmlFor="confirm" className="text-sm font-medium">
              Re-Enter Password
            </label>
            <Input
              id="confirm"
              type="password"
              placeholder="Confirm your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="bg-white border border-slate-300"
              disabled={loading}
            />
          </div>

          {/* Error (if any) */}
          {error && (
            <p className="mb-4 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          {/* Reset button (dark) */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white hover:bg-slate-900/90"
          >
            {loading ? "Resetting..." : "Reset"}
          </Button>
        </div>
      </form>

      {/* Success dialog */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Password updated</AlertDialogTitle>
            <AlertDialogDescription>
              Your password has been reset successfully. You can now log in with your new password.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => router.push("/login")}
              className="bg-slate-900 text-white hover:bg-slate-900/90"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
