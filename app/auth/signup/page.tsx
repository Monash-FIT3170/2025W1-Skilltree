"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "@/components/comp-497";
import { toast } from "sonner";
import { userStore } from "@/stores";
import { signUpAction } from "@/actions/signup-action";
import { TSignInResponse, TSignUpResponse } from "@/actions/types";
import { signInAction } from "@/actions/signin-action";
import { getUserAction } from "@/actions/get-user-action";
import { TUser } from "@/types";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dateOfBirth: new Date(),
  });

  const handleLoginAfterSignUp = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await signInAction({
        email: form.email,
        password: form.password,
      });
      if (!response.ok) {
        toast.error(response.message as string);
        return;
      }
      const { access_token, user } = response.message as TSignInResponse;

      const userProfile = await getUserAction();
      if (!userProfile.ok) {
        toast.error(userProfile.message as string);
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
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signUpAction({
      name: `${form.firstname} ${form.lastname}`,
      email: form.email,
      password: form.password,
      dateOfBirth: form.dateOfBirth,
    });

    if (!response.ok) {
      return toast.error(response.message as string);
    }

    const { user, access_token } = response.message as TSignUpResponse;
    userStore.setState((state) => ({
      ...state,
      userId: user.id,
      accessToken: access_token,
    }));

    await handleLoginAfterSignUp(e);
    router.push("/dashboard");
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
          <div className="flex flex-col items-center">
            <Link href="/" aria-label="go home">
              <Image
                src="/images/logo.png"
                height={100}
                width={100}
                alt="Logo"
              />
            </Link>
            <h1 className="mt-4 mb-1 text-xl font-semibold">
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
                <Input
                  value={form.firstname}
                  onChange={handleChange}
                  type="text"
                  required
                  name="firstname"
                  id="firstname"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="block text-sm">
                  Lastname
                </Label>
                <Input
                  value={form.lastname}
                  onChange={handleChange}
                  type="text"
                  required
                  name="lastname"
                  id="lastname"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="block text-sm">
                Date of Birth
              </Label>
              <Popover>
                <PopoverTrigger className="w-full">
                  <Input
                    readOnly
                    value={format(form.dateOfBirth, "PPP") || "Select your DOB"}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <DatePicker
                    date={form.dateOfBirth}
                    setDate={(date) => {
                      if (date) {
                        setForm((prev) => ({ ...prev, dateOfBirth: date }));
                      }
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                name="email"
                id="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">
                Password
              </Label>
              <Input
                value={form.password}
                onChange={handleChange}
                type="password"
                required
                name="password"
                id="password"
                className="input sz-md variant-mixed"
              />
            </div>

            <Button className="w-full">Register your account.</Button>
          </div>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-sm text-center text-accent-foreground">
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
