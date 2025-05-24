import React, {useEffect,useState} from "react";
import LogInButton from "./buttons/LogInButton";
import SignInButton from "./buttons/SignInButton";
import SkillTreeButton from "./buttons/SkillTreeButton";


const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  { label: 'Communities', href: '#communities' },
];

const NavBar = () => {
  const [show,setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    if (typeof window !== "undefined"){
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50){
            setShow(false);
        } else {
            setShow(true);
        }

        setLastScrollY(currentScrollY);
    }
  }

  useEffect (() => {
    if (typeof window !== "undefined"){
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll",handleScroll);
        };
    }
  }, [lastScrollY]);

  return (
    <nav className={"fixed top-0 left-0 w-full bg-white shadow transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} z-50"}>
      <div className="mx-auto px-6 py-4 flex space-x-6 items-center">
        <SkillTreeButton/>
        <ul className="flex space-x-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-gray-700 hover:text-gray-900">
                {label}
              </a>
            </li>
          ))}
        </ul>
      <div className="ml-auto">
        <SignInButton/>
        <LogInButton/>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;