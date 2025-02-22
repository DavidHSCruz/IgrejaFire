import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/LOGO_FIRE.svg?react";
import { PopUpDOE } from "../PopUpDOE/PopUpDOE";

export const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [doeVisible, setDoeVisible] = useState(false);
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
    <header
      className={`flex items-center h-28 bg-primary shadow-lg fixed ${
        visible ? "top-0" : "-top-28"
      } transition-all left-0 w-full z-50`}
    >
      <Logo className="w-24 h-full mx-10 z-10 text-secondary -translate-y-1" />
      <nav className="w-full">
        <ul className="flex">
          {Object.keys(routes).map((nav, i) => (
            <li
              key={i}
              className={`${isActive(nav)} mx-4 hover:font-medium hover:border-b-2 border-quaternary border-opacity-10 text-quaternary`}
            >
              <Link to={getRoute(nav)}>{nav}</Link>
            </li>
          ))}
          <li>
            <div className="absolute">
              <button
                className="mx-4 hover:font-medium hover:border-b-2 border-quaternary border-opacity-10 text-quaternary"
                onClick={() => setDoeVisible(!doeVisible)}
              >
                DOE
              </button>
              <PopUpDOE visible={doeVisible} setVisible={setDoeVisible} />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
