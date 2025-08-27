import SignupForm from "@/components/SignupForm";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // ← NEW

export default function SignupPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
      {/* Icon changed to Avatar (instead of <Image/>) */}
      <Avatar className="h-20 w-20 mb-3">
        <AvatarImage src="/images/skilltree-logo.jpg" alt="SkillTree" />
        <AvatarFallback>ST</AvatarFallback>
      </Avatar>

      <h1 className="text-center text-xl font-semibold mb-6">
        Sign Up to SkillTree
      </h1>

      <SignupForm />
    </div>
  );
}
