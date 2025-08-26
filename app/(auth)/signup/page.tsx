// app/(auth)/signup/page.tsx
import Image from "next/image";
import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
      {/* logo + title like mock */}
      <Image src="/images/skilltree-logo.jpg" alt="SkillTree" width={100} height={100} className="mb-3" />
      <h1 className="text-center text-xl font-semibold mb-6">Sign Up to SkillTree</h1>
      <SignupForm />
    </div>
  );
}
