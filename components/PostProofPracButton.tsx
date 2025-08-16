"use client";
import React, {useState} from "react";
import { Send, XCircle, Zap } from "lucide-react";
import AddPostProofPrac from "./AddPostProofPrac";
const userImage = "/placeholder.png";

export default function PostProofPracButton() {
    const [feedback, setFeedback] = useState("");
    const [xpActive, setXpActive] = useState(false);
    const [showModal, setShowModal] = useState(false);


    return (
        <>
        <div className="w-full max-w-2xl mx-auto bg-white p-4 rounded-2xl shadow flex items-center gap-4">
            {/* Avatar */}
            <img src={userImage} alt="User" className="w-10 h-10 rounded-full" />

            {/* Feedback input and send button */}
            <div className="flex flex-1 items-center bg-gray-100 rounded-2xl px-3 py-2 gap-2">
                <button
                    className="bg-transparent items-left outline-none text-gray-800 placeholder-gray-500"
                    onClick={e =>setShowModal(true)}
                >
                    Upload some Proof of Practice...
                </button>
            
            </div>
        </div>

       
        {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-20 z-50">
            {/* Modal container */}
            <div className="relative w-full max-w-2xl mx-4">
            {/* The modal content */}
            <AddPostProofPrac />

            {/* Close button in top-right corner of modal */}
            <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200"
            >
                <XCircle className="w-6 h-6 text-gray-700" />
            </button>
            </div>
        </div>
        )}
    </>
    );
}