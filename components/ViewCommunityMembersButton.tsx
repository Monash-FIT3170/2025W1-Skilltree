import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LogInButton = () => {
  const router = useRouter();

  const handleViewCommunity = async () => {
    await fetch("/api/communities", { method: "POST" });
    router.push("/communities/members");
  };

  return (
    <Button
     onClick={handleViewCommunity}
    >
        View Community Members
    </Button>
  );
};
export default LogInButton;