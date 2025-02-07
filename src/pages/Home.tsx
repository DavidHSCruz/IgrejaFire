import { Banner } from "../components/Banner/Banner"
import { Card } from "../components/Banner/Card/Card"
import { Formulario } from "../components/Formulario/Formulario"
import { CardClick } from "../components/Banner/Card/CardClick/CardClick"

export const Home = () => {
  return (
    <main className="bg-zinc-950">
      {/*criar SLIDER*/}
      <div className="bg-[url('/img/comunhao.png')] bg-cover bg-center w-full h-96 py-60"></div>

      <Banner />
      <section className="grid grid-cols-3 gap-20 w-5/6 m-auto items-center px-24">
        <Card className="-translate-y-1/2 -translate-x-1/3 min-w-[190px] max-w-[550px] h-80 w-full flex justify-center items-center bg-[url('/img/imagem1.jpg')] bg-cover bg-center border-solid border-8 border-zinc-50">
        </Card>
        <Formulario type='contato'/>
        <div className='text-zinc-300 col-start-3 mb-12'>
          <p className='text-zinc-50 text-4xl -translate-x-2'>Te damos boas-vindas!</p>
          <p className='text-xl max-w-[410px] py-4'>Estamos de portas abertas para cada um que deseja que Jesus Cristo reine em seu coração.</p>
          <p className='text-2xl'>Juntos,</p>
          <p className='text-xl'>Somos Um, Somos FIRE!</p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-28 w-3/4 justify-self-center py-20">
          <CardClick bg='/img/imagem3.jpg' to='/agenda'>Nossa Agenda</CardClick>
          <CardClick bg='/img/pessoas1.jpg' to='/grs'>Grupos de Relacionamento</CardClick>
        </div>
      </section>
    </main>
  )
}
