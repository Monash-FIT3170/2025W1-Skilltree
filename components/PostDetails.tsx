// components/PostDetail.tsx
import { PostType } from "@/models/Post";
import Image from "next/image";

type PostDetailProps = {
    post: PostType;
};

export default function PostDetail({ post }: PostDetailProps) {
    if (!post)
        return <div className="text-gray-500">Select a post to view details</div>;

    return (
        <div className="p-6 border rounded-xl space-y-4 w-full">
            <h2 className="text-2xl font-bold">
                {post.text?.slice(0, 50) || "Post Title"}
            </h2>

            <div className="relative w-full rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                    src={post.attachment || "/placeholder.png"}
                    alt="Post Image"
                    width={400}
                    height={400}
                    className="w-auto h-auto object-contain rounded-xl"
                />
            </div>

            <p className="text-gray-700 text-sm">
                {post.text || "This post doesn't have any description yet."}
            </p>

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
        </div>
    );
}
