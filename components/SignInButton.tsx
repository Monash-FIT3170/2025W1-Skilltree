"use client";

import { Ghost } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SignInButton = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    await fetch("/api/landing", { method: "POST" });
    router.push("/signup");
  };

  return (
    <Button
     variant={"ghost"}
     onClick={handleSignIn}
    >
      Sign Up
    </Button>
  );
};
export default SignInButton;