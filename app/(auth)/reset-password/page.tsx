"use client";

import Image from "next/image";
import ResetPasswordForm from "@/components/ResetPasswordForm";

export default function ResetPasswordPage() {
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
        Reset Your Password
      </h1>

      {/* Form Card */}
      <div className="w-full max-w-md">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
