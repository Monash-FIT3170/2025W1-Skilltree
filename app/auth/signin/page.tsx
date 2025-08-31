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
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { userStore } from "@/stores";
import { signInAction } from "../../../actions/signin-action";
import { TSignInResponse } from "@/actions/types";
import { getUserAction } from "@/actions/get-user-action";
import { TUser } from "@/types";

export default function LogInPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "user@example.com",
    password: "string",
  });
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const response = await signInAction(form);
      if (!response.ok) {
        toast.error(response.message as string);
        setIsPending(false);
        return;
      }
      const { access_token, user } = response.message as TSignInResponse;

      const userProfile = await getUserAction();
      if (!userProfile.ok) {
        toast.error(userProfile.message as string);
        setIsPending(false);
        return;
      }

      userStore.setState((pv) => ({
        ...pv,
        userId: user.id,
        accessToken: access_token,
        user: userProfile.message as TUser,
      }));

      router.push("/dashboard");
    } catch (err) {
      toast.error("Something went wrong");
      setIsPending(false);
    }
    setIsPending(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex w-full min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-card m-auto h-fit w-full max-w-md rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8 pb-6">
          <div className="flex flex-col items-center justify-center">
            <Link href="/" aria-label="go home">
              <Image
                src="/images/logo.png"
                height={100}
                width={100}
                alt="Logo"
              />
            </Link>
            <h1 className="mt-4 mb-1 text-xl font-semibold">
              Sign In to SkillTree
            </h1>
            <p className="text-sm">Welcome back! Sign in to continue</p>
          </div>

          <hr className="my-4 border-dashed" />

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input
                value={form.email}
                type="email"
                required
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm">
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
                name="password"
                id="password"
                className="input sz-md variant-mixed"
                onChange={handleChange}
                value={form.password}
              />
            </div>

            <Button disabled={isPending} type="submit" className="w-full">
              {isPending ? <Loader2 className="animate-spin" /> : "Sign In"}
            </Button>
          </div>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-sm text-center text-accent-foreground">
            Don&apos;t have an account ?
            <Button
              type="button"
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
