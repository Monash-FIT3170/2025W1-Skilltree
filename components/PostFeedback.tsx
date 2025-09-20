import Image from "next/image";
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
    <div className="flex items-start w-full max-w-4xl gap-4 mx-auto mb-4">
      <Image
        height={40}
        width={40}
        src="/placeholder.png"
        alt={user}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1 px-4 py-2 shadow rounded">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-semibold text-gray-500">{user}</span>
          <span className="text-xs text-gray-400">{timeAgo}</span>
        </div>
        <div className="text-sm text-gray-700">{text}</div>
      </div>
    </div>
  );
}
