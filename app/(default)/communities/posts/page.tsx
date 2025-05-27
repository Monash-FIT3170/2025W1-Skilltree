// app/community/posts/page.tsx
"use client";

import { useState, useEffect } from "react";
import { PostType } from "@/models/Post";
import PostDetail from "@/components/PostDetails";
import PostSidebar from "@/components/PostSideBar";
import { Button } from "@/components/ui/button";
import { communities } from "@/lib/mocks";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  useEffect(() => {
    // TODO: fetch from DB
    setPosts(communities);
    setSelectedPost(communities[0]);
  }, []);

  return (
    <div className="flex w-full h-full max-h-[calc(100vh-6.5rem)] gap-4 overflow-hidden">
      <div className="w-1/3 overflow-y-auto border p-6 rounded-xl">
        <PostSidebar
          posts={posts}
          selectedPostId={selectedPost?._id || ""}
          onSelectPost={setSelectedPost}
        />
      </div>

      <div className="w-2/3 border rounded-xl relative flex-1 overflow-y-auto">
        {selectedPost ? (
          <PostDetail post={selectedPost} />
        ) : (
          <div className="text-gray-500 p-4">No post selected</div>
        )}
      </div>
    </div>
  );
}
