import { Link } from "react-router-dom"
import { Card } from "../components/Banner/Card/Card"

export const Grs = () => {
  return (
    <main className="bg-quaternary text-primary p-6 text-lg md:mt-28 mt-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 w-11/12 md:w-3/4 mx-auto mt-28">
        {/* Bloco 1: Texto principal */}
        <div className="order-1 md:order-none md:row-span-3">
          <h1 className="text-5xl md:text-9xl font-bold -indent-2">GR's</h1>
          <h2 className="text-2xl md:text-4xl mr-5 mb-2">Grupos de Relacionamento</h2>
          <p className="opacity-90">
            Os Grupos de Relacionamento (GR's) são muito mais<br /> do que simples encontros semanais.
          </p>
          <h3 className="text-xl md:text-2xl font-medium mt-16">Por que participar de um GR?</h3>
          <div className="mt-6 indent-5 space-y-4">
            <p>
              <strong className="font-medium">Comunhão Verdadeira:</strong> Em um GR, você tem a oportunidade de conhecer novas pessoas, criar laços de amizade e compartilhar suas experiências de vida cristã.
            </p>
            <p>
              <strong className="font-medium">Aprofundamento na Palavra:</strong> Além dos cultos principais, os encontros oferecem momentos de estudo bíblico, oração e reflexão sobre temas relevantes para a vida cristã.
            </p>
            <p>
              <strong className="font-medium">Apoio e Crescimento Espiritual:</strong> A caminhada cristã pode ter desafios, mas no GR você encontra suporte, encorajamento e direção para enfrentar as dificuldades com fé.
            </p>
            <p>
              <strong className="font-medium">Ambiente Seguro e Acolhedor:</strong> É um espaço onde você pode se expressar livremente, tirar dúvidas e ser ouvido.
            </p>
          </div>
        </div>

        {/* Bloco 4: Card com imagem 1 */}
        <div className="order-2 md:order-none md:col-start-2 md:row-span-3 w-full h-full flex justify-center items-center">
          <Card className="bg-[url('/img/celula1.jpg')] bg-cover h-[300px] md:h-1/2 w-2/3 md:w-2/3"></Card>
        </div>

        {/* Bloco 2: Texto "Como encontrar um GR próximo?" */}
        <div className="order-3 md:order-none mt-8 md:mt-0 md:row-start-4 md:row-span-2 md:col-start-2">
          <h3 className="text-xl md:text-2xl font-medium mt-16">Como encontrar um GR próximo?</h3>
          <p className="my-6 indent-5">
            A melhor forma de encontrar um grupo é verificar os encontros disponíveis na sua igreja ou em nosso site.
            Muitos grupos são organizados por faixa etária (jovens, casais, mulheres, homens) ou por temas específicos.
            Se você deseja crescer espiritualmente e viver uma vida cristã mais conectada com irmãos na fé, um GR pode ser o lugar perfeito para você!
          </p>
        </div>

        {/* Bloco 5: Card com imagem 2 */}
        <div className="order-4 md:order-none mt-8 md:mt-0 md:row-start-4 md:row-span-2 w-full h-full flex justify-center items-center">
          <Card className="bg-[url('/img/celula2.jpg')] bg-cover bg-right h-[300px] md:h-2/3 w-2/3 md:w-2/3"></Card>
        </div>

        {/* Bloco 3: Botão para encontrar uma GR */}
        <div className="order-5 md:order-none mt-8 md:mt-0 md:row-start-6 md:col-span-2">
          <Link 
            to='/grs'
            className="bg-tertiary flex justify-center items-center px-6 w-full h-20 rounded-xl text-lg font-semibold hover:brightness-125"
            
          >
            Encontrar um GR (em breve...)
          </Link>
        </div>
      </section>
    </main>
  )
}
