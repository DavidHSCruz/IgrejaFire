import { Link, useLocation } from "react-router-dom"
import Logo from '../../assets/LOGO_FIRE.svg?react'

export const NavBar = () => {
  const navegacao: string[] = ['HOME', 'NOSSA HISTÓRIA', "GR's", 'AGENDA', 'DOE']

  function NavStr(item: string) {
    if (['HOME', 'NOSSA HISTÓRIA', "GR's"].some((e) => e.includes(item))) {
      switch (item.toLowerCase()) {
          case 'home': return '/'
          case 'nossa história': return '/historia'
          case "gr's": return '/grs'
          default: return '/'
      }
    }else {
        return `/${item.toLowerCase()}`
      }
    }
  
  function LocateURL(nav: string) {
    const url = useLocation().pathname
    const URLClicado = NavStr(nav)

    if (url === URLClicado) {
      return 'font-medium border-b-2'
    }
  }
  
  return (
    <header className="flex items-center h-28 bg-slate-50">
      <Logo className="w-24 h-full mx-10 z-10 text-red-700 -translate-y-1" />
      <nav className="w-full">
        <ul className="flex">
          {
            navegacao.map((nav, i) => (
              <li
                className={`${LocateURL(nav)} mx-4 hover:font-medium hover:border-b-2 text-gray-800`}
                key={i}
              >
                <Link to={NavStr(nav)}>{nav}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

