"use client";

import { Ghost } from "lucide-react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

interface SignInButtonProps {
  label?: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({ label = "Sign Up" }) => {
  const router = useRouter();

  const handleSignIn = async () => {    
    await fetch("/api/landing", { method: "POST" });
    router.push("/signup");
  };

  return (
    <Button variant="ghost" onClick={handleSignIn}>
      {label}
    </Button>
  );
};
export default SignInButton;