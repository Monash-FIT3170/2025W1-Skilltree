import { ThumbsUp, MessageCircle, Award, Zap, Delete, icons } from "lucide-react";

type UserRole = 'admin' | 'verified' | 'normal';
interface PostInteractionPanelProps {
    userRole: UserRole;
}

export function PostInteractionPanel({ userRole }: PostInteractionPanelProps) {
    // Build the actions array based on role
    const iconSize = 20;
    const actions = [
        {
            icon: <ThumbsUp className="mr-2" size = {iconSize} />,
            label: "Like",
            className: "text-gray-600 hover:text-gray-900",
        },
        {
            icon: <MessageCircle className="mr-2" size = {iconSize}/>,
            label: "Comment",
            className: "text-gray-600 hover:text-gray-900",
        },
        {
            icon: <Award className="mr-2" size = {iconSize}/>,
            label: "Proof",
            className: "text-gray-600 hover:text-gray-900",
        },
    ];

    if (userRole === "verified" || userRole === "admin") {
        actions.push({
            icon: <Zap className="mr-2" size = {iconSize}/>,
            label: "Give XP",
            className: "text-gray-600 hover:text-gray-900",
        });
    }
    if (userRole === "admin") {
        actions.push({
            icon: <Delete className="mr-2" size = {iconSize}/>,
            label: "Delete",
            className: "text-gray-600 hover:text-gray-900",
        });
    }

    return (
        <div className="p-4 bg-white shadow rounded-lg w-full max-w-4xl mx-auto">
            <div className="flex flex-row justify-center items-center gap-4">
                {actions.map((action, idx) => (
                    <button
                        key={idx}
                        className={`flex-1 min-w-0 flex items-center justify-center px-4 py-2 rounded transition-colors truncate ${action.className}`}
                        style={{ minWidth: 0 }}
                    >
                        {action.icon}
                        <span className="">{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}