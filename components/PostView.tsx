import Image from "next/image";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";

export default function PostView() {
  return (
    <div className="bg-white rounded-lg shadow max-w-2xl mx-auto my-8">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b">
        <Image
          src="/placeholder.png" 
          alt="Community Icon"
          width={48}
          height={48}
          className="rounded-full bg-gray-200"
        />
        <div>
          <div className="font-bold text-lg">Snowboarding Jump Node</div>
          <div className="text-xs text-gray-500">Example User · 5h ago</div>
        </div>
      </div>

      {/* Post text */}
      <div className="px-4 py-2 text-base">
        this is me doing a jump. how good!
      </div>

      {/* Post image */}
      <div className="w-full bg-gray-100 flex justify-center items-center">
        <Image
          src="/placeholder.png" 
          alt="Post Image"
          width={600}
          height={350}
          className="object-cover rounded"
        />
      </div>

      {/* Like/people summary and comment count */}
      <div className="flex items-center justify-between px-4 py-2 border-b text-sm text-gray-600">
        <div>
          <span className="inline-flex items-center">
            <span className="mr-1">💚</span>
            John Doe, Jane Do and 59 others
          </span>
        </div>
        <div>2 comments</div>
      </div>

      {/* Action panel */}
      <PostInteractionPanel userRole="normal" />
    </div>
  );
}