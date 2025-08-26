"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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

export default function SubmitResetEmailForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    // Fire the request (optional to await; keeping for completeness)
    try {
      await fetch("/api/forgetpass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // ignore per spec; we still show the same confirmation
    } finally {
      setLoading(false);
      setDialogOpen(true); // show success dialog
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rounded-md border bg-muted shadow-sm p-6">
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
              disabled={loading}
            />
          </div>

          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            We&apos;ll send you a link to your email, from where you can reset your password
          </p>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white hover:bg-slate-900/90"
          >
            {loading ? "Sending..." : "Send Link"}
          </Button>
        </div>
      </form>

      {/* Success dialog */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Please check your inbox</AlertDialogTitle>
            <AlertDialogDescription>
              We’ve sent you a link to reset your password. Follow the instructions in your email.
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
