import Image from "next/image";
import { ThumbsUp } from "lucide-react";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";
import PostFeedbackForm from "./PostFeedbackForm";
const communityIcon = "/placeholder.png"; // Placeholder for community icon
const postTitle = "Snowboarding Jump Node";
const postUser = "Example User"; // Placeholder for user name
const postTimeAgo = "5h ago"; // Placeholder for time since post was made
const postText = "this is me doing a jump. how good!";
const postImage = "/placeholder.png"; // Placeholder image path

type UserRole = 'admin' | 'verified' | 'normal';
interface PostViewPanelProps {
    userRole: UserRole;
}




export default function PostView({userRole}: PostViewPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow max-w-2xl mx-auto my-8">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b">
        <Image
          src={communityIcon}
          alt="Community Icon"
          width={48}
          height={48}
          className="rounded-full bg-gray-200"
        />
        <div>
          <div className="font-bold text-lg">{postTitle}</div>
          <div className="text-xs text-gray-500">{postUser} · {postTimeAgo}</div>
        </div>
      </div>

      {/* Post text */}
      <div className="px-4 py-2 text-base">
        {postText}
      </div>

      {/* Post image */}
      <div className="w-full bg-gray-100 flex justify-center items-center">
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
      <br></br>
    </div>
  );
}