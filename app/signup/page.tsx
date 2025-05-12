import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="items-center">
      <h1 className="text-center text-2xl mt-10">Sign Up</h1>
      <div className="flex items-center justify-center min-h-screen">
        <SignupForm />
      </div>
    </div>
  );
}
