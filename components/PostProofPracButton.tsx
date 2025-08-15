"use client";
import React, {useState} from "react";
import { Send, Zap } from "lucide-react";
const userImage = "/placeholder.png";

export default function PostFeedbackForm() {
    const [feedback, setFeedback] = useState("");
    const [xpActive, setXpActive] = useState(false);


    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-4 rounded-2xl shadow flex items-center gap-4">
            {/* Avatar */}
            <img src={userImage} alt="User" className="w-10 h-10 rounded-full" />

            {/* Feedback input and send button */}
            <div className="flex flex-1 items-center bg-gray-100 rounded-2xl px-3 py-2 gap-2">
                <button
                    className="bg-transparent items-left outline-none text-gray-800 placeholder-gray-500"
                    //onClick={e => ()}//setFeedback(e.target}
                >
                    Upload some Proof of Practice...
                </button>
            
            </div>
        </div>
    );
}