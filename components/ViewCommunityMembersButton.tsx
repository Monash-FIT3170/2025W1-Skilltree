import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LogInButton = () => {
  const router = useRouter();

  const handleViewCommunity = async () => {
    router.push("/community/members");
  };

  return <Button onClick={handleViewCommunity}>View Community Members</Button>;
};
export default LogInButton;
