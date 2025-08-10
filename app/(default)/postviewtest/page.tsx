import React from "react";
//import { useRouter } from "next/navigation";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";
import PostView from "@/components/PostView";

export default function postviewtest() {
    return (
        <div className="flex-1 flex-col items-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Post View Test Page</h1>
            <PostView userRole={"normal"} />
            <PostView userRole={"verified"} />
            <PostView userRole={"admin"} />
        </div>
    );
}