import { Banner } from "../components/Banner/Banner"
import { Formulario } from "../components/Formulario/Formulario"
import { CardClick } from "../components/Banner/Card/CardClick/CardClick"

export const Home = () => {
  return (
    <main className="bg-quaternary md:mt-28 mt-16">
      {/* Slider responsivo */}
      <div className="bg-[url('/img/comunhao.png')] bg-cover bg-center w-full py-20 md:py-60"></div>

      <Banner />

      <section className="grid grid-cols-1 md:grid-cols-6 w-11/12 md:w-5/6 m-auto items-center py-8 px-4 md:px-24">
        <Formulario className="md:col-span-3" type='inscricao' />
        <div className="text-primary md:col-start-5 md:col-span-2 mb-8 md:mb-12 text-center md:text-left">
          <p className="text-3xl md:text-4xl md:-translate-x-2">Te damos boas-vindas!</p>
          <p className="text-base md:text-xl max-w-full md:max-w-[410px] py-2 md:py-4 opacity-90">
            Estamos de portas abertas para cada um que deseja que Jesus Cristo reine em seu coração.
          </p>
          <p className="text-lg md:text-2xl opacity-90">Juntos,</p>
          <p className="text-base md:text-xl opacity-90">Somos Um, Somos FIRE!</p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 w-5/6 m-auto py-8 md:py-20">
          <CardClick bg='/img/imagem3.jpg' to='/historia'>Nossa História</CardClick>
          <CardClick bg='/img/pessoas1.jpg' to='/grs'>Grupos de Relacionamento</CardClick>
        </div>
      </section>
    </main>
  )
}
