import React from "react";
//import { useRouter } from "next/navigation";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";
import PostView from "@/components/PostView";
import PostFeedbackForm from "@/components/PostFeedbackForm";
import PostProofPracForm from "@/components/PostProofPracButton"
import AddPostProofPrac from "@/components/AddPostProofPrac"

export default function postviewtest() {
    return (
        <div className="flex-1 flex-col items-right min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Post View Test Page</h1>
            <PostProofPracForm/>
            <AddPostProofPrac/>

            <PostView userRole={"normal"} />
            <PostView userRole={"verified"} /> 
            <PostView userRole={"admin"} />
        </div>
    );
}