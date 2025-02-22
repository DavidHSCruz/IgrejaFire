import { Link } from 'react-router-dom'
import LogoLeao from '../../assets/leao.svg?react'
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo'
import { Card } from './Card/Card'

export const Banner = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col-reverse place-items-center gap-20 justify-center items-center w-2/3 m-auto py-24">
        <div className="text-primary font-montserrat w-full">
          <h3 className="text-6xl w-96 m-auto">Somos FIRE, uma igreja VIVA.</h3>
          <p className="my-4 text-primary w-96 opacity-90 m-auto">Faça parte dessa família.</p>
        </div>
        <div className='flex justify-center w-full flex-grow-0'>
          <Card className='min-w-[350px] w-full aspect-[16/9]'>
            <YoutubeVideo embedID="kx7oSyxGVY8"/>
          </Card>
        </div>
      </section>
      <section className="bg-primary w-full flex justify-center">
        <div className="flex items-center justify-center gap-5 py-24 md:w-2/3 w-full">
          <Card className="md:flex md:h-80 hidden min-w-[190px] max-w-full md:max-w-[550px] h-60 w-full justify-center items-center bg-[url('/img/imagem1.jpg')] bg-cover bg-center">
          </Card>
          <div className="md:grid grid-cols-2 flex w-3/4 gap-4">
            <div className="col-start-1 flex justify-end items-center w-full overflow-hidden">
              <LogoLeao className=" h-60 flex-none translate-x-1/2 text-secondary"/>
            </div>
            <div className="text-quaternary col-start-2 min-w-96 max-w-lg mt-4">
              <h2 className="text-6xl mb-4">O que é ser <strong className="border-b-2 border-secondary border-opacity-20">FIRE?</strong></h2>
              <p className="text-2xl text-quaternary opacity-80">
                Ser FIRE é ter em si uma chama que contagia e transforma sua realidade de dentro para fora.
              </p>
              <Link className='text-end' to='/historia'><p className='p-2 opacity-80'>Saiba mais...</p></Link>
            </div>
          </div>
        </div>
      </section>
      {
        //Juntos
        //SOMOS UM, SOMOS FIRE!
      }
    </>
  );
};
