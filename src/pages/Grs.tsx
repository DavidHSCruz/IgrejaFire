import { Link } from "react-router-dom"

export const Grs = () => {
  return (
    <main className="bg-zinc-950 text-zinc-50 p-6">
      <section className="grid grid-cols-2 items-center gap-20 w-3/4 mx-auto">
        <div>
          <h1 className="text-9xl font-bold text-zinc-50 -indent-2">GR's</h1>
          <div className="flex">
            <h2 className="text-4xl text-zinc-300 mr-5">Grupos de Relacionamento</h2>
            <Link
              to="/encontrar-gr"
              className="bg-red-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-red-500"
            >
              Encontre um GR
            </Link>
          </div>
          <div className="text-lg my-6 indent-5 space-y-2">
            <p>
            Os Grupos de Relacionamento (GR's) são muito mais do que simples encontros semanais.
            </p>

            <h3 className="my-6 text-2xl">Por que participar de um GR?</h3>
            <p>✅ Comunhão Verdadeira: Em um GR, você tem a oportunidade de conhecer novas pessoas, criar laços de amizade e compartilhar suas experiências de vida cristã.</p>
            <p>✅ Aprofundamento na Palavra: Além dos cultos principais, os encontros oferecem momentos de estudo bíblico, oração e reflexão sobre temas relevantes para a vida cristã.</p>
            <p>✅ Apoio e Crescimento Espiritual: A caminhada cristã pode ter desafios, mas no GR você encontra suporte, encorajamento e direção para enfrentar as dificuldades com fé.</p>
            <p>✅ Ambiente Seguro e Acolhedor: É um espaço onde você pode se expressar livremente, tirar dúvidas e ser ouvido.</p>
    
            <h3 className="mt-6">Como encontrar um GR próximo?</h3>
            <p>A melhor forma de encontrar um grupo é verificar os encontros disponíveis na sua igreja ou em nosso site. 
              Muitos grupos são organizados por faixa etária (jovens, casais, mulheres, homens) ou por temas específicos. 
              Se você deseja crescer espiritualmente e viver 
              uma vida cristã mais conectada com irmãos na fé, um GR pode ser o lugar perfeito para você!
            </p>
          </div>
        </div>

        <div className="row-span-2 col-start-2">
          <h2 className="text-2xl font-semibold mb-4">GR's disponíveis:</h2>
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
        </div>
      </section>
    </main>
  )
}
