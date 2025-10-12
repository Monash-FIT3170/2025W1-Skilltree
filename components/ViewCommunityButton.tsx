import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const ViewCommunityButton = () => {
  const router = useRouter();

  const handleViewCommunity = async () => {
    router.push("/community/viewPage");
  };

  return <Button onClick={handleViewCommunity}>View Community</Button>;
};
export default ViewCommunityButton;