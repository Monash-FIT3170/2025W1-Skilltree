// components/PostDetail.tsx
import { PostType } from "@/models/Post";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type PostDetailProps = {
  post: PostType;
};

export default function PostDetail({ post }: PostDetailProps) {
  //const [feedbackList, setFeedbackList] = useState<string[]>([]);
  const [newFeedback, setNewFeedback] = useState("");
  const [likes, setLikes] = useState(0);

  const router = useRouter();

    const [feedbackList, setFeedbackList] = useState<string[]>([
    "Wow that is really cool!",
    "I love form validation!",
    ]);

  const handleAddFeedback = () => {
    if (newFeedback.trim() === "") return;
    setFeedbackList((prev) => [...prev, newFeedback]);
    setNewFeedback("");
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  if (!post)
    return <div className="text-gray-500">Select a post to view details</div>;

  return (
    <div className="p-6 space-y-4 w-full">
      <h2 className="flex text-2xl font-bold">
        {post.community || "Post Title"}
      </h2>
      <Button onClick={() => router.push(`/communities/posts/proof`)}>
        Upload Proof of Completion
      </Button>
      {/* image */}
      <div className="w-full space-y-4 mt-4">
        <div className="relative w-full rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src={post.attachment || "/placeholder.png"}
            alt="Post Image"
            width={400}
            height={400}
            className="w-auto h-auto object-contain rounded-xl"
          />
        </div>

        {/* likes */}
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <button onClick={handleLike}>
              <ThumbsUp />
            </button>
            <span className="text-sm text-gray-600">
              {likes} {likes === 1 ? "like" : "likes"}
            </span>
          </div>
        </div>
      </div>

      {/* description */}
      <p className="text-gray-700 text-sm">
        {post.text || "This post doesn't have any description yet."}
      </p>

      {/* upload comment */}
      <div>
        <h3 className="text-lg font-semibold">Feedback</h3>
        <textarea
          className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          rows={3}
          placeholder="Write your feedback here..."
        />
        <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
          Post Feedback
        </button>
      </div>

      {/* comment section */}
      <div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Feedback</h3>

        <div className="space-y-2">
          {feedbackList.length === 0 ? (
            <p className="text-sm text-gray-500">
              No feedback yet. Be the first to share your thoughts!
            </p>
          ) : (
            feedbackList.map((item, idx) => (
              <div
                key={idx}
                className="p-3 border rounded-lg bg-gray-50 text-sm text-gray-800"
              >
                {item}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
