import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LogInButton = () => {
  const router = useRouter();

  const handleViewCommunity = async () => {
    router.push("/community/members");
  };

  return;
};
export default LogInButton;
