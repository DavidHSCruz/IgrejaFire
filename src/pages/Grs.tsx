import { Link } from "react-router-dom"
import { Card } from "../components/Banner/Card/Card"

export const Grs = () => {
  return (
    <main className="bg-quaternary text-primary p-6 text-lg mt-28">
      <section className="grid grid-cols-2 grid-rows-6 row items-center gap-20 w-3/4 mx-auto mt-28">
        <div className="row-span-3">
          <h1 className="text-9xl font-bold -indent-2">GR's</h1>
          <h2 className="text-4xl mr-5 mb-2">Grupos de Relacionamento</h2>
          <p className="opacity-90">Os Grupos de Relacionamento (GR's) são muito mais<br /> do que simples encontros semanais.
          </p>
          <h3 className="text-2xl font-medium mt-16">Por que participar de um GR?</h3>
          <div className="mt-6 indent-5 space-y-4">
            <p><strong className="font-medium">Comunhão Verdadeira:</strong> Em um GR, você tem a oportunidade de conhecer novas pessoas, criar laços de amizade e compartilhar suas experiências de vida cristã.</p>
            <p><strong className="font-medium">Aprofundamento na Palavra:</strong> Além dos cultos principais, os encontros oferecem momentos de estudo bíblico, oração e reflexão sobre temas relevantes para a vida cristã.</p>
            <p><strong className="font-medium">Apoio e Crescimento Espiritual:</strong> A caminhada cristã pode ter desafios, mas no GR você encontra suporte, encorajamento e direção para enfrentar as dificuldades com fé.</p>
            <p><strong className="font-medium">Ambiente Seguro e Acolhedor:</strong> É um espaço onde você pode se expressar livremente, tirar dúvidas e ser ouvido.</p>
          </div>
        </div>

        <div className="row-start-4 row-span-2 col-start-2">
          <h3 className="text-2xl font-medium mt-16">Como encontrar um GR próximo?</h3>
          <p className="my-6 indent-5">A melhor forma de encontrar um grupo é verificar os encontros disponíveis na sua igreja ou em nosso site. 
            Muitos grupos são organizados por faixa etária (jovens, casais, mulheres, homens) ou por temas específicos. 
            Se você deseja crescer espiritualmente e viver 
            uma vida cristã mais conectada com irmãos na fé, um GR pode ser o lugar perfeito para você!
          </p>
        </div>
        <div className="row-start-6 col-span-2">
          <Link 
            to='/encontrar-gr'
            className="bg-secondary flex justify-center items-center px-6 w-full h-20 rounded-xl text-lg font-semibold hover:brightness-125"
          >Encontrar uma GR
          </Link>
        </div>

        <div className="col-start-2 row-span-3 w-full h-full flex justify-center items-center">
          <Card className="bg-[url('/img/celula1.jpg')] bg-cover h-1/2 w-2/3"></Card>
        </div>

        <div className="row-start-4 row-span-2 w-full h-full flex justify-center items-center">
          <Card className="bg-[url('/img/celula2.jpg')] bg-cover bg-right h-2/3 w-2/3"></Card>
        </div>

        {/* <div className="row-span-2 col-start-2">
          <h2 className="text-2xl font-semibold mb-4">Algumas GR's disponíveis:</h2>
          <ul className="space-y-4">
            <li className="bg-zinc-900 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">GR - Até Sermos Um</h3>
              <p>📍 Bairro Borda do Campo - Pastor Boleslau Oucha, 277, 20h</p>
            </li>
            <li className="bg-zinc-900 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">GR - Efraim</h3>
              <p>📍 Bairro Borda do Campo - Pastor Boleslau Oucha, 277, 20h</p>
            </li>
            <li className="bg-zinc-900 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">GR - Mais que Vencedores</h3>
              <p>📍 Bairro Borda do Campo - Pastor Boleslau Oucha, 277, 20h</p>
            </li>
          </ul>
        </div> */}
      </section>
    </main>
  )
}
