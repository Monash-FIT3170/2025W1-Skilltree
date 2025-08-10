import React from "react";
//import { useRouter } from "next/navigation";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";
export default function postviewtest() {
    //const router = useRouter();
    return (
        <div className="flex-1 flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Post View Test Page</h1>
            <p className="mb-4">This is a test page for post view functionality.</p>
        
            <div className="mt-8 w-full max-w-5xl">
                <PostInteractionPanel userRole="normal" />
                <br></br>
                <PostInteractionPanel userRole="verified" />
                <br></br>
                <PostInteractionPanel userRole="admin" />
            </div>
        </div>
    );
}