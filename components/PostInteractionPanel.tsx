"use client";
import { ThumbsUp, MessageCircle, Delete } from "lucide-react";
import React, { useState } from "react";
import PostFeedbackForm from "./PostFeedbackForm";
import PostFeedback from "./PostFeedback";

type UserRole = "admin" | "verified" | "normal" | "nonMember";
interface PostInteractionPanelProps {
  userRole: UserRole;
}

//example comments
const comments = [
  {
    id: 1,
    user: "User 1",
    text: "Wow very cool jump example user!",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    user: "User 1",
    text: "I wish I could do that.....",
    timeAgo: "3 hours ago",
  },
];

export function PostInteractionPanel({ userRole }: PostInteractionPanelProps) {
  const iconSize = 20;
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [feedbackClicked, setFeedbackClicked] = useState(false);
  const [commentsClicked, setCommentClicked] = useState(false);
  const postLikes = 59; // Placeholder for number of likes
  const postComments = comments.length; // Placeholder for number of comments

  return <pre>{JSON.stringify({ userRole }, null, 2)}</pre>;

  const handleLike = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
    } else {
      setLikes((prev) => Math.max(prev - 1, 0));
      setLiked(false);
    }
  };

  const handleFeedback = () => {
    if (!feedbackClicked) {
      setFeedbackClicked(true);
    } else {
      setFeedbackClicked(false);
    }
  };

  const handleCommentClick = () => {
    if (!commentsClicked) {
      setCommentClicked(true);
    } else {
      setCommentClicked(false);
    }
  };

  // Build the actions array based on role
  const actions = [
    {
      key: "like",
      element: (
        <button
          onClick={handleLike}
          className={`flex-1 min-w-0 flex items-center justify-center px-4 py-2 rounded transition-all 
                        ${liked ? "text-[#34D399]" : "text-gray-600"}
                        hover:scale-105 active:scale-95`}
          style={{ minWidth: 0 }}
          title={liked ? "You liked this post" : "Like this post"}
        >
          <ThumbsUp
            className="mr-2"
            color={liked ? "#34D399" : undefined}
            fill={liked ? "#34D399" : "#ffffffff"}
            size={iconSize}
          />
          <span>{liked ? "Liked" : "Like"}</span>
        </button>
      ),
    },
    {
      key: "feedback",
      element: (
        <button
          onClick={handleFeedback}
          className="flex items-center justify-center flex-1 min-w-0 px-4 py-2 text-gray-600 truncate transition-all rounded hover:text-gray-900 hover:scale-105 active:scale-95"
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
          className="flex items-center justify-center flex-1 min-w-0 px-4 py-2 text-gray-600 truncate transition-all rounded hover:text-red-900 hover:scale-105 active:transform-scale-95 "
          style={{ minWidth: 0 }}
        >
          <Delete className="mr-2" size={iconSize} />
          <span>Delete</span>
        </button>
      ),
    });
  }

  return (
    <div>
      {/* Like/people summary and comment count */}
      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 border-b">
        <div>
          <span className="inline-flex items-center">
            <ThumbsUp
              className="mr-1"
              size={18}
              color="#34D399"
              fill="#34D399"
            />
            {postLikes} likes
          </span>
        </div>
        <button className="hover:underline" onClick={handleCommentClick}>
          {postComments} comments
        </button>
      </div>
      {userRole == "nonMember" && (
        <div>
          <div className="w-full max-w-4xl p-4 mx-auto rounded-lg shadow">
            <div className="flex flex-row items-center justify-center gap-4">
              {actions.map((action) => (
                <React.Fragment key={action.key}>
                  {action.element}
                </React.Fragment>
              ))}
            </div>
          </div>
          <br></br>

          <div
            className={`transition-all duration-300 ease-in-out ${commentsClicked ? "translate-y-0" : "-translate-y-2 pointer-events-none"}`}
          >
            {commentsClicked &&
              comments.map((comment) => (
                <PostFeedback key={comment.id} {...comment} />
              ))}
          </div>

          <div
            className={`transition-all duration-300 ease-in-out 
                    ${feedbackClicked ? "translate-y-0" : "-translate-y-2 pointer-events-none"}
                `}
          >
            {feedbackClicked && <PostFeedbackForm />}
          </div>
        </div>
      )}
    </div>
  );
}
