"use client";

import { useRouter } from "next/navigation";
import "../app/styles/styles.css";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 mt-4 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  );
};
export default LogoutButton;