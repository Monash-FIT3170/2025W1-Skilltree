"use client";

import SignInButton from "@/components/SignInButton";
import LogInButton from "@/components/LogInButton";

export default function LandingPage(){
    return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className="flex items-center justify-center max-w-2xl mx-auto w-full">
        <SignInButton />
        <LogInButton/>
      </div>
    </div>
  );
}