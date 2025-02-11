import { Card } from "../components/Banner/Card/Card"

export const Historia = () => {
  return (
    <main className="bg-zinc-950 text-zinc-400 flex justify-center mt-28">
      <section className="grid grid-cols-2 grid-rows-4 w-3/4 py-20 gap-x-20 gap-y-5">
        <div className="text-lg leading-loose row-span-4">
          <h1 className="text-4xl text-zinc-300 font-bold pb-4 font-montserrat">POR QUE FIRE?</h1>

          <p className="pb-4 indent-7"> Nosso ministério acredita na verdade contida em <i className="text-zinc-300">Hebreus 12:29</i>,
              de que nosso Deus é um fogo consumidor. Um fogo que não apenas
              queima todo o pecado, mas que também faz nossos corações
              arderem por um avivamento que se manifesta das portas para fora
              de nossa igreja. Cremos que este fogo se alastrará pelas ruas, casas, bairros,
              cidades e abrirá uma porta de Salvação pela qual almas, todas aquelas que o Senhor desejar,
              virão em arrependimento e com o coração quebrantado e viverão em novidade de vida em nosso meio.</p>

          <h2 className="text-3xl text-zinc-300 font-bold pb-4 font-montserrat">HISTÓRIA</h2>

          <p className="pb-2 indent-7"> No dia 4 de fevereiro de 2017, respondendo ao chamado de Deus, nossa igreja teve início,
              destinada por Deus a tornar-se uma igreja relevante, saudável e crescente.</p>

          <p className="pb-2 indent-7"> Depois de trabalhar com jovens por mais de 7 anos, os Pastores Israel e Daiane Nascimento começaram uma pequena
              “célula” em uma pequena sala alugada no Bairro Borda do Campo em São José dos Pinhais, e após 3 meses já haviam
              crescido para um número maior que 30 pessoas, já havendo após 5 meses do início do trabalho, a necessidade de
              mudarem para um lugar maior devido ao crescimento daqueles que foram alcançados pelo Amor de Cristo.</p>

          <p className="pb-2 indent-7"> Hoje após alguns anos somos uma igreja em constante crescimento tendo como cobertura espiritual a Comunidade Semear
              de Curitiba, onde nossos pastores são discipulados, e de onde temos aprendido constantemente o poder da honra e da unidade no reino de Deus.</p>

          <p className="pb-2 indent-7"> <i className="text-zinc-300">Provérbios 29:18</i> nos diz que: Não havendo visão o povo perece. Esta tem sido uma das palavras que
              tem norteado nossa igreja, buscamos ser integralmente obedientes à visão que nos foi confiada,
              abraçando-a de coração e nos empenhando em seu cumprimento. <i className="text-zinc-300">(Atos 26:19)</i></p>

          <p className="indent-7"> Nosso nome reflete nossa visão de avivamento, do avivamento que Deus irá derramar sobre todas as nações,
              povos, línguas e raças nos últimos dias. Não apenas um avivamento que se reflete nos cultos, mas das
              portas para fora e  em toda a vida daqueles que compõe o corpo de membros de nossas igreja local.</p>
        </div>
          <Card className="bg-[url(/img/imagem4.jpg)] bg-cover mx-24 ml-40"></Card>
          <Card className="bg-[url(/img/imagem5.jpg)] bg-cover bg-center mx-24 mr-40"></Card>
          <Card className="bg-[url(/img/imagem6.jpg)] bg-cover mx-24 ml-40"></Card>
          <Card className="bg-[url(/img/imagem7.jpg)] bg-cover bg-center mx-24 mr-40"></Card>
      </section>
    </main>
  )
}
