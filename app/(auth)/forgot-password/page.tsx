"use client";

import Image from "next/image";
import SubmitResetEmailForm from "@/components/SubmitResetEmailForm";

export default function ForgetPage() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start pt-10 px-4">
      {/* Logo */}
      <Image
        src="/images/skilltree-logo.jpg"
        alt="SkillTree"
        width={96}
        height={96}
        className="rounded-full"
        priority
      />

      {/* Title */}
      <h1 className="mt-4 mb-8 text-2xl md:text-3xl font-semibold text-center">
        Forgot Password ?
      </h1>

      {/* Card + form */}
      <div className="w-full max-w-md">
        <SubmitResetEmailForm />
      </div>
    </div>
  );
}
