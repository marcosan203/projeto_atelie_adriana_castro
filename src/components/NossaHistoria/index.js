import Brand from '../Brand';
import './style.css'

function NossaHistoria() {
    return(
        <section className="Nossahistoria atelie-nossa-historia-img rounded-lg relative w-full h-[850px] mb-[50px]">
           <Brand />

        <div className="relative w-full h-[850px] mb-[50px]">
      {/* Imagem de fundo */}
      <div className="atelie-nossa-historia-img absolute inset-0 rounded-lg bg-cover bg-center" />
      
      {/* Container principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
        {/* Texto centralizado como na imagem */}
        <div className="bg-white bg-opacity-90 p-10 rounded-lg max-w-2xl w-full shadow-lg">
          {/* Título dividido em duas linhas */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Ateliê</h1>
            <h2 className="text-4xl font-bold mt-2">Adriana Castro</h2>
          </div>
          
          {/* Parágrafos com espaçamento e alinhamento */}
          <div className="text-lg space-y-6">
            <p className="text-justify leading-relaxed">
              Tudo começou quando eu percebi que muitas pessoas ao meu redor tinham roupas favoritas, 
              mas acabavam deixando de usar por pequenos defeitos, como um rasgo ou um botão faltando.
            </p>
            <p className="text-justify leading-relaxed">
              Eu sempre gostei de costurar, então pensei: por que não ajudar essas pessoas a restaurar 
              suas roupas e ainda dar um toque especial nelas? Foi assim que nasceu a ideia do meu 
              ateliê de costura.
            </p>
            <p className="text-justify leading-relaxed">
              Queria criar um lugar onde cada peça recebesse cuidado e atenção, fazendo com que os 
              clientes se sentissem felizes de usar suas roupas de novo, como novas.
            </p>
            <p className="text-justify leading-relaxed">
              Com muito carinho e dedicação, meu ateliê foi ganhando vida, e hoje é um espaço de 
              transformação e carinho para as roupas e para as pessoas.
            </p>
          </div>
        </div>
      </div>
    </div>
        </section>
    )
}

export default NossaHistoria;