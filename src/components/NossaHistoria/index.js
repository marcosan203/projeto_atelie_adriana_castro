import React from 'react';
import Brand from '../Brand';

function NossaHistoria() {
  return (
    <section className="relative w-full h-[850px] mb-[50px] rounded-lg">
      
      {/* Brand no topo */}
      <div>
        <Brand />
      </div>   

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 rounded-lg bg-cover bg-center z-0"
      />
      <div
        className="absolute inset-0 rounded-lg bg-cover bg-center z-0 "
        style={{ backgroundImage: "url('/imagens_usadas_na_pagina/image 2.png')" }}
      />

      {/* Container do texto */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
        <div className="p-10 rounded-lg max-w-2xl w-full shadow-lg">
          <div className="font-glacial text-lg leading-loose text-white max-w-md absolute top-1/4 right-12">
            
            <p className="mt-2">
            <span className="text-black">Tudo começou quando</span> eu percebi que muitas pessoas ao <span className="text-black">meu redor tinham</span> roupas favoritas, mas acabavam <span className="text-black">deixando de</span> usar por pequenos defeitos, como um rasgo <span className="text-black">ou um botão</span> faltando.
            </p>

            <p className="mt-2">
            <span className="text-black">Eu sempre gostei</span> de costurar, então pensei: por que não <span className="text-black">ajudar essas</span> pessoas a restaurar suas roupas e ainda dar <span className="text-black">um toque especial</span> nelas? Foi assim que nasceu a ideia <span className="text-black">do meu ateliê</span> de costura.
            </p>

            <p className="mt-2">
            <span className="text-black">Queria criar</span> um lugar onde cada peça recebesse <span className="text-black">cuidado e atenção,</span> fazendo com que os clientes se <span className="text-black">sentissem</span> felizes de usar suas roupas de novo, como <span className="text-black">novas.</span>
            </p>

            <p className="mt-4">
              Com muito carinho e dedicação, meu ateliê foi ganhando vida, e hoje é um espaço de transformação e carinho para as roupas e para as pessoas.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default NossaHistoria;
