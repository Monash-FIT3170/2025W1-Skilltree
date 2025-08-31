import React from "react";
interface PostFeedbackProps {
  id: number;
  user: string;
  text: string;
  timeAgo: string;
}
export default function PostFeedback({
  user,
  text,
  timeAgo,
}: PostFeedbackProps) {
  return (
    <div className="w-full max-w-4xl mx-auto flex items-start gap-4 mb-4">
      <img
        src="/placeholder.png"
        alt={user}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1 rounded-xl px-4 py-2 shadow">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-sm text-gray-500">{user}</span>
          <span className="text-xs text-gray-400">{timeAgo}</span>
        </div>
        <div className="text-gray-700 text-sm">{text}</div>
      </div>
    </div>
  );
}
