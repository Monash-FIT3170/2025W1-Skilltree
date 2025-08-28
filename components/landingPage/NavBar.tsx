import React, { useEffect, useState } from "react";
import LogInButton from "./buttons/LogInButton";
import SignInButton from "./buttons/SignInButton";
import SkillTreeButton from "./buttons/SkillTreeButton";

const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  { label: 'Communities', href: '#communities' },
];

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <SkillTreeButton />
        </div>

        {/* CENTER: Links + Search */}
        <div className="flex items-center space-x-8 flex-grow justify-center">
          <ul className="flex space-x-6">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative rounded-full bg-gray-200 px-4 py-2 flex items-center w-72">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Skills"
              className="bg-transparent outline-none w-full placeholder-black text-black"
            />
          </div>
        </div>

        {/* RIGHT: Buttons */}
        <div className="flex space-x-4">
          <SignInButton />
          <LogInButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
