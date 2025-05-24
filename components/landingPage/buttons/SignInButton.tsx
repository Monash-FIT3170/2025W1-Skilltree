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
<button
  onClick={handleSignIn}
  className="bg-[#0A1128] text-white font-semibold px-6 py-2 rounded-md 
             shadow-md transition-all duration-300 ease-in-out 
             hover:bg-[#0c1533] hover:scale-105 hover:shadow-lg"
>
  {label}
</button>

  );
};
export default SignInButton;