import React from 'react';
import SubmitResetEmailForm from "@/components/SubmitResetEmailForm";

export default function ForgetPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Forgot Password</h1>
      <SubmitResetEmailForm/>
    </div>
  );
}