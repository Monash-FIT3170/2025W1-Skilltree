export default function LogInPage() {
  return <div>Log In Page</div>;
}

import LoginForm from "@/components/LoginForm";

export default function LogInPage() {
  return (
    <div className="items-center">
      <h1 className="text-center text-2xl mt-10">Login</h1>
      <div className="flex items-center justify-center min-h-screen">
        <LoginForm />
      </div>
    </div>
  );
}
