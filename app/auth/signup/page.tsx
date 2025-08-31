"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <section className="flex w-full min-h-screen">
      <form
        action=""
        className="bg-card m-auto h-fit w-full max-w-md rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8 pb-6">
          <div className="flex flex-col items-center">
            <Link href="/" aria-label="go home">
              <Image
                src="/images/logo.png"
                height={100}
                width={100}
                alt="Logo"
              />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Create a SkillTree Account
            </h1>
            <p className="text-sm">Welcome! Create an account to get started</p>
          </div>

          <hr className="my-4 border-dashed" />

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="block text-sm">
                  Firstname
                </Label>
                <Input type="text" required name="firstname" id="firstname" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="block text-sm">
                  Lastname
                </Label>
                <Input type="text" required name="lastname" id="lastname" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Username
              </Label>
              <Input type="email" required name="email" id="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pwd" className="text-sm">
                Password
              </Label>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                className="input sz-md variant-mixed"
              />
            </div>

            <Button className="w-full">Register your account.</Button>
          </div>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Have an account ?
            <Button
              onClick={() => router.push("/auth/signin")}
              variant="link"
              className="px-2"
            >
              Sign In
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
