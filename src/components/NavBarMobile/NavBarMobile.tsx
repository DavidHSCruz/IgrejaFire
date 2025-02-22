import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/LOGO_FIRE.svg?react";
import { PopUpDOE } from "../PopUpDOE/PopUpDOE";

import { SlMenu } from "react-icons/sl"
import { CgClose } from "react-icons/cg"

export const NavBarMobile = () => {
  const [visible, setVisible] = useState(true);
  const [doeVisible, setDoeVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 200 || currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
        setDoeVisible(false);
        setMenuOpen(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mapping for standard navigation items
  const routes: Record<string, string> = {
    "HOME": "/",
    "NOSSA HISTÓRIA": "/historia",
    "GR's": "/grs",
  };

  // Given a label, return the corresponding route.
  function getRoute(nav: string) {
    return routes[nav.toUpperCase()] || `/${nav.toLowerCase().replace(/'/g, "")}`;
  }

  // Check if the current path matches the nav item path.
  function isActive(nav: string) {
    return pathname === getRoute(nav) ? "font-medium border-b-2" : "";
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg transition-all">
      <div
        className={`bg-primary flex items-center justify-between h-16 px-4 transition-transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Logo className="w-20 h-full text-secondary" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="mr-4 focus:outline-none"
        >
          <div className="relative w-6 h-6">
            <SlMenu className={`absolute w-6 h-6 transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}/>
            <CgClose className={`absolute w-6 h-6 transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-0 scale-130 opacity-100" : "rotate-90 scale-75 opacity-0"
            }`}/>
          </div>
        </button>
      </div>
      {menuOpen && (
        <nav className="bg-primary">
          <ul className="flex flex-col items-center">
            {Object.keys(routes).map((nav, i) => (
              <li
                key={i}
                className={`${isActive(nav)} py-2 w-full text-center border-b border-quaternary`}
              >
                <Link to={getRoute(nav)} onClick={() => setMenuOpen(false)}>
                  {nav}
                </Link>
              </li>
            ))}
            <li className="py-2 w-full text-center border-b border-quaternary">
              <button
                className="w-full"
                onClick={() => setDoeVisible(!doeVisible)}
              >
                DOE
              </button>
            </li>
          </ul>
        </nav>
      )}
      <PopUpDOE visible={doeVisible} setVisible={setDoeVisible} />
    </header>
  );
};
