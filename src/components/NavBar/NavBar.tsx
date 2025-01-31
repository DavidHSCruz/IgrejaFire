import { Link } from "react-router-dom"
import Logo from '../../assets/coroa.svg?react'

export const NavBar = () => {
  const navegacao: string[] = ['HOME', 'NOSSA HISTÓRIA', "GR's", 'AGENDA', 'DOE']

  function linkPag(item: string) {
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
  
  return (
    <header className="flex relative">
      <Logo className="w-10 h-10 mx-3 z-10 text-red-700" />
      <nav className="w-full bg-slate-50 absolute z-0">
        <ul className="flex justify-center">
          {
            navegacao.map((nav, i) => (
              <li
                className="px-4 py-2 hover:font-medium text-gray-800"
                key={i}
              >
                <Link to={linkPag(nav)}>{nav}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

