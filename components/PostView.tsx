import Image from "next/image";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";

const communityIcon = "/placeholder.png"; // Placeholder for community icon
const postTitle = "Snowboarding Jump Node";
const postUser = "Example User"; // Placeholder for user name
const postTimeAgo = "5h ago"; // Placeholder for time since post was made
const postText = "this is me doing a jump. how good!";
const postImage = "/placeholder.png"; // Placeholder image path

type UserRole = "admin" | "verified" | "normal" | "nonMember";
interface PostViewPanelProps {
  userRole: UserRole;
}

export default function PostView({ userRole }: PostViewPanelProps) {
  return (
    <div className="rounded-lg border p-5 shadow max-w-2xl mx-auto my-8">
      {/* Header */}
      <div className="flex items-center gap-4 border-b">
        <Image
          src={communityIcon}
          alt="Community Icon"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <div className="font-bold text-lg">{postTitle}</div>
          <div className="text-xs">
            {postUser} · {postTimeAgo}
          </div>
        </div>
      </div>

      {/* Post text */}
      <div className="px-4 py-2 text-base">{postText}</div>

      {/* Post image */}
      <div className="w-full flex justify-center items-center">
        <Image
          src={postImage}
          alt="Post Image"
          width={600}
          height={350}
          className="object-cover rounded"
        />
      </div>

      {/* Action panel */}
      <PostInteractionPanel userRole={userRole} />
    </div>
  );
}
