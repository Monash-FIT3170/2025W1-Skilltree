"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function LogInPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
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
              <Label htmlFor="email" className="block text-sm">
                Username
              </Label>
              <Input type="email" required name="email" id="email" />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="pwd" className="text-sm">
                  Password
                </Label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" size="sm">
                      Forgot Password?
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reset your password</DialogTitle>
                      <DialogDescription>
                        Please enter your email address to receive a password
                        reset link.
                      </DialogDescription>
                    </DialogHeader>
                    <Input
                      type="email"
                      required
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                    <DialogFooter>
                      <Button type="submit">Send Reset Link</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                className="input sz-md variant-mixed"
              />
            </div>

            <Button className="w-full">Sign In</Button>
          </div>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Don&apos;t have an account ?
            <Button
              onClick={() => router.push("/auth/signup")}
              variant="link"
              className="px-2"
            >
              Create account
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
