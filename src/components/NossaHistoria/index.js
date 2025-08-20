import React from 'react';
import Brand from '../Brand';

function NossaHistoria() {
  return (
    <section
      className="relative h-[850px] mb-[100px] rounded-lg bg-cover"
      style={{ backgroundImage: "url('/imagens_usadas_na_pagina/image-2.png')" }}
    >
      {/* Brand no topo */}
      <Brand />

      {/* Container do texto */}
      <div className="h-full flex flex-col justify-center items-end">
        <div className="font-glacial bg-black/40 text-2xl leading-normal text-white w-[30rem] mr-[8rem] p-4 rounded-lg">
          <p className="mb-2">
            Tudo começou quando eu percebi que muitas pessoas ao meu redor tinham roupas favoritas, mas acabavam deixando de usar por pequenos defeitos, como um rasgo ou um botão faltando.
          </p>

          <p className="mb-2">
            Eu sempre gostei de costurar, então pensei: por que não ajudar essas pessoas a restaurar suas roupas e ainda dar um toque especial nelas? Foi assim que nasceu a ideia do meu ateliê de costura.
          </p>

          <p className="mb-2">
            Queria criar um lugar onde cada peça recebesse cuidado e atenção, fazendo com que os clientes se sentissem felizes de usar suas roupas de novo, como novas.
          </p>

          <p>
            Com muito carinho e dedicação, meu ateliê foi ganhando vida, e hoje é um espaço de transformação e carinho para as roupas e para as pessoas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NossaHistoria;
