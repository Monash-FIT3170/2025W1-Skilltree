"use client";

import Image from "next/image";
import ChangePasswordForm from "@/components/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <div className=" grid place-items-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/images/skilltree-logo.jpg"
            alt="SkillTree"
            width={80}
            height={80}
            className="h-20 w-20 rounded-full object-cover shadow-sm"
            priority
          />
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">
            Change Password
          </h1>
        </div>

        {/* Panel */}
        <div className="rounded-md border border-slate-300 bg-slate-100/70 shadow-sm p-6">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
