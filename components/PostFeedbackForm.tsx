"use client";
import React, {useState} from "react";
import { Send, Zap } from "lucide-react";
const userImage = "/placeholder.png";

export default function PostFeedbackForm() {
    const [feedback, setFeedback] = useState("");
    const [xpActive, setXpActive] = useState(false);

    return (
        <div className="w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow flex items-center gap-4">
            {/* Avatar */}
            <img src={userImage} alt="User" className="w-10 h-10 rounded-full" />

            {/* Feedback input and send button */}
            <div className="flex flex-1 items-center bg-gray-100 rounded-xl px-3 py-2 gap-2">
                <input
                    type="text"
                    placeholder="Write some feedback..."
                    className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500"
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                />
                <button
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors hover:transform hover:scale-105"
                    title="Send Feedback"
                    disabled={feedback.trim() === ""}
                >
                    <Send size={20} className="text-gray-500" />
                </button>
            </div>

            {/* Give XP button */}
            <button
                className={`flex flex-col items-center justify-center w-20 h-12 ml-2 rounded-xl border transition-all hover:transform hover:scale-105
                    ${xpActive
                        ? "border-[#34D399] bg-white text-[#34D399]"
                        : "border-transparent bg-gray-100 text-gray-400"
                    }`}
                onClick={() => setXpActive(!xpActive)}
                type="button"
            >
                <Zap size={22} className={xpActive ? "text-[#34D399]" : "text-gray-400"} />
                <span className={`text-xs font-medium ${xpActive ? "text-[#34D399]" : "text-gray-400"}`}>{xpActive?"XP Given":"Give XP"}</span>
            </button>
        </div>
    );
}