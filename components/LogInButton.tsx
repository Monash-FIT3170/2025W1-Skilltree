import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LogInButton = () => {
  const router = useRouter();

  const handleLogIn = async () => {
    await fetch("/api/landing", { method: "POST" });
    router.push("/login");
  };

  return (
    <Button
     onClick={handleLogIn}
    >
      Log In
    </Button>
  );
};
export default LogInButton;
