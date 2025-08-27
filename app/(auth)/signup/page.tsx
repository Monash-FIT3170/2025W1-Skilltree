import SignupForm from "@/components/SignupForm";
import Image from "next/image";

export default function SignupPage() {
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

      <h1 className="mt-4 mb-8 text-2xl md:text-3xl font-semibold text-center">
        Sign Up to SkillTree
      </h1>
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
      
    </div>
  );
}
