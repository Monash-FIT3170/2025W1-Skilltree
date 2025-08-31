"use client";
import React, { useState } from "react";
import { Send, Zap } from "lucide-react";
import Image from "next/image";
const userImage = "/placeholder.png";

export default function PostFeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [xpActive, setXpActive] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 rounded-lg shadow flex items-center gap-4">
      {/* Avatar */}
      <Image
        height={40}
        width={40}
        src={userImage}
        alt="User"
        className="w-10 h-10 rounded-full"
      />

      {/* Feedback input and send button */}
      <div className="flex flex-1 items-center rounded-xl px-3 py-2 gap-2">
        <input
          type="text"
          placeholder="Write some feedback..."
          className="flex-1 bg-transparent outline-none"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button
          className="p-2 rounded-full transition-colors hover:transform hover:scale-105"
          title="Send Feedback"
          disabled={feedback.trim() === ""}
        >
          <Send size={20} />
        </button>
      </div>

      {/* Give XP button */}
      <button
        className={`flex flex-col items-center justify-center w-20 h-12 ml-2 rounded-xl border transition-all hover:transform hover:scale-105
                                        ${
                                          xpActive
                                            ? "border-transparent bg-transparent"
                                            : "border-transparent bg-transparent"
                                        }`}
        onClick={() => setXpActive(!xpActive)}
        type="button"
      >
        <Zap size={22} />
        <span className="text-xs font-medium">
          {xpActive ? "XP Given" : "Give XP"}
        </span>
      </button>
    </div>
  );
}
