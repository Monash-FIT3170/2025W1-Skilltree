// components/PostSidebar.tsx
import Image from "next/image";

export default function PostSidebar({
  posts,
  selectedPostId,
  onSelectPost,
}: {
  posts: any[];
  selectedPostId: string;
  onSelectPost: (post: any) => void;
}) {
  return (
    <div className="space-y-4 w-full">
      {posts.map((post) => (
        <div
          key={post._id}
          onClick={() => onSelectPost(post)}
          className={`w-full p-4 border rounded-xl cursor-pointer hover:shadow-sm transition ${
            selectedPostId === post._id ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <div className="flex gap-4">
            <Image
              width={720}
              height={720}
              src={post.attachment || "/placeholder.png"}
              alt="Post"
              className="w-20 h-20 rounded object-cover"
            />
            <div className="flex flex-col justify-between flex-1">
              <p className="font-semibold text-base  w-full">
                {post.community}
              </p>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {post.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
