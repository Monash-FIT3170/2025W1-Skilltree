"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

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
      await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, token }),
      });
      setDialogOpen(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex w-full min-h-screen">
      <form
        action=""
        className="bg-card m-auto h-fit w-full max-w-md rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8 pb-6">
          <div className="flex flex-col justify-center items-center">
            <Link href="/" aria-label="go home">
              <Image
                src="/images/logo.png"
                height={100}
                width={100}
                alt="Logo"
              />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Sign In to SkillTree
            </h1>
            <p className="text-sm">Welcome back! Sign in to continue</p>
          </div>

          <hr className="my-4 border-dashed" />

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="block text-sm">
                New Password
              </Label>
              <Input type="password" required name="password" id="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="block text-sm">
                Re-enter New Password
              </Label>
              <Input
                type="password"
                required
                name="confirm-password"
                id="confirm-password"
              />
            </div>

            <Button className="w-full">Reset Password</Button>
          </div>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            No need?
            <Button
              onClick={() => router.push("/auth/signin")}
              variant="link"
              className="px-2"
            >
              Sign in instead!
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
