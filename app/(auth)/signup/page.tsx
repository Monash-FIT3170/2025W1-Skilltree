import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <h1 className="text-center text-2xl mb-5">Sign Up</h1>
      <div className="flex items-center justify-center max-w-2xl mx-auto w-full">
        <SignupForm />
      </div>
    </div>
  );
}
