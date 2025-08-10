"use client";
import { ThumbsUp, MessageCircle, Delete } from "lucide-react";
import React, { useState } from "react";

type UserRole = 'admin' | 'verified' | 'normal';
interface PostInteractionPanelProps {
    userRole: UserRole;
}

export function PostInteractionPanel({ userRole }: PostInteractionPanelProps) {
    const iconSize = 20;
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLikes((prev) => prev + 1);
            setLiked(true);
        } else {
            setLikes((prev) => Math.max(prev - 1, 0));
            setLiked(false);
        }
    };

    // Build the actions array based on role
    const actions = [
        {
            key: "like",
            element: (
                <button
                    onClick={handleLike}
                    className={`flex-1 min-w-0 flex items-center justify-center px-4 py-2 rounded transition-colors transition-transform 
                        ${liked ? "text-[#34D399]" : ""}
                        hover:scale-105 active:scale-95`}
                    style={{ minWidth: 0 }}
                    title={liked ? "You liked this post" : "Like this post"}
                >
                    <ThumbsUp 
                    className= "mr-2" 
                    color = {liked ? "#34D399"  : undefined} 
                    fill = {liked ? "#34D399"  : "#ffffffff" } 
                    size={iconSize} />
                    <span>{liked ? "Liked" : "Like"}</span>
                </button>
            ),
        },
        {
            key: "feedback",
            element: (
                <button
                    className="flex-1 min-w-0 flex items-center justify-center px-4 py-2 rounded transition-colors truncate text-gray-600 hover:text-gray-900 hover:scale-105 active:scale-95 transition-transform"
                    style={{ minWidth: 0 }}
                >
                    <MessageCircle className="mr-2" size={iconSize} />
                    <span>Feedback</span>
                </button>
            ),
        },
    ];

    if (userRole === "admin") {
        actions.push({
            key: "delete",
            element: (
                <button
                    className="flex-1 min-w-0 flex items-center justify-center px-4 py-2 rounded transition-colors truncate text-gray-600 hover:text-red-900 hover:scale-105 active:transform-scale-95 transition-transform "
                    style={{ minWidth: 0 }}
                >
                    <Delete className="mr-2" size={iconSize} />
                    <span>Delete</span>
                </button>
            ),
        });
    }

    return (
        <div className="p-4 bg-white shadow rounded-lg w-full max-w-4xl mx-auto">
            <div className="flex flex-row justify-center items-center gap-4">
                {actions.map((action) => (
                    <React.Fragment key={action.key}>{action.element}</React.Fragment>
                ))}
            </div>
        </div>
    );
}

