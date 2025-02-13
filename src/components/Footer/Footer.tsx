import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Footer = () => {
  const informacoes: {
    email: string
    telefone: string
    sites: {
      youtube: { url: string; icon: JSX.Element }
      facebook: { url: string; icon: JSX.Element }
      instagram: { url: string; icon: JSX.Element }
    }
  } = {
    email: 'igrejafire@gmail.com',
    telefone: '(41) 99628-3603',
    sites: {
      youtube: {
        url: "https://www.youtube.com/@IgrejaFire",
        icon: <FaYoutube />,
      },
      facebook: {
        url: "https://web.facebook.com/IgrejaFire/",
        icon: <FaFacebook />,
      },
      instagram: {
        url: "https://www.instagram.com/igrejafireoficialsjp/",
        icon: <FaInstagram />,
      },
    },
  }
  
  
  return (
    <footer className="bg-quinary text-primary py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Entre em contato</h4>
          <p className="opacity-90">Email: {informacoes.email}</p>
          <p className="opacity-90">Telefone: {informacoes.telefone}</p>
        </div>
        <div className="flex justify-center space-x-5 mb-4">
          {
            Object.entries(informacoes.sites).map(([site, { url,icon }]) => (
              <Link 
                key={site}
                to={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary text-4xl hover:brightness-125 transition-all"
              >{icon}</Link>
            ))
          }
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Igreja Fire. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

