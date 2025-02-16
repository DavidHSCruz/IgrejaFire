import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/LOGO_FIRE.svg?react";
import { PopUpDOE } from "./PopUpDOE/PopUpDOE";

export const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [doeVisible, setDoeVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 200) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
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

  const navegacao: string[] = ["HOME", "NOSSA HISTÓRIA", "GR's"];

  function NavStr(item: string) {
    if (["HOME", "NOSSA HISTÓRIA", "GR's"].some((e) => e.includes(item))) {
      switch (item.toLowerCase()) {
        case "home":
          return "/";
        case "nossa história":
          return "/historia";
        case "gr's":
          return "/grs";
        default:
          return "/";
      }
    } else {
      return `/${item.toLowerCase()}`;
    }
  }

  function LocateURL(nav: string) {
    const url = useLocation().pathname;
    const URLClicado = NavStr(nav);

    if (url === URLClicado) {
      return "font-medium border-b-2";
    }
  }

  return (
    <header
      className={`flex items-center h-28 bg-primary fixed ${
        visible ? "top-0" : "-top-28"
      } transition-all left-0 w-full z-50`}
    >
      <Logo className="w-24 h-full mx-10 z-10 text-secondary -translate-y-1" />
      <nav className="w-full">
        <ul className="flex">
          {navegacao.map((nav, i) => (
            <li
              className={`${LocateURL(
                nav
              )} mx-4 hover:font-medium hover:border-b-2 border-quaternary border-opacity-10 text-quaternary`}
              key={i}
            >
              <Link to={NavStr(nav)}>{nav}</Link>
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
