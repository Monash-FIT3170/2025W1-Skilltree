import LoginForm from "@/components/LoginForm";

export default function LogInPage() {
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <h1 className="text-center text-2xl mb-5">Login</h1>
      <div className="flex items-center justify-center max-w-2xl mx-auto w-full">
        <LoginForm />
      </div>
    </div>
  );
}
