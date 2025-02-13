import { Link } from 'react-router-dom'
import LogoLeao from '../../assets/leao.svg?react'
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo'
import { Card } from './Card/Card'

export const Banner = () => {
  return (
    <>
      <section className="grid grid-cols-2 place-items-center gap-20 justify-center items-center w-2/3 m-auto">
        <div className="py-24 text-primary font-montserrat leading-normal w-full">
          <h3 className="text-6xl w-96">Somos FIRE, uma igreja VIVA.</h3>
          <p className="my-4 text-primary opacity-90">Faça parte dessa família.</p>
        </div>
        <div className='flex justify-center w-full flex-grow-0'>
          <Card className='min-w-[350px] w-full aspect-[16/9]'>
            <YoutubeVideo embedID="kx7oSyxGVY8"/>
          </Card>
        </div>
      </section>
      <section className="bg-primary grid grid-cols-2 items-center w-full gap-5 py-24">
        <div className="col-start-1 flex justify-end w-full overflow-hidden">
          <LogoLeao className="w-1/3 h-60 translate-x-1/2 text-secondary"/>
        </div>
        <div className="w-3/4 text-quaternary col-start-2 max-w-lg mt-4">
          <h2 className="text-6xl mb-4">O que é ser <strong className="border-b-2 border-secondary border-opacity-20">FIRE?</strong></h2>
          <p className="text-2xl text-quaternary opacity-80">
            Ser FIRE é ter em si uma chama que contagia e transforma sua realidade de dentro para fora.
          </p>
          <Link className='text-end' to='/historia'><p className='p-2 opacity-80'>Saiba mais...</p></Link>
        </div>
      </section>
      {
        //Juntos
        //SOMOS UM, SOMOS FIRE!
      }
    </>
  );
};
