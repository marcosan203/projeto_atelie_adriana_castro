import './Style.css'



function Orcamento() {
    

    return (
        <section className="min-h-screen bg-[#111010] flex items-center justify-center p-6">
      
          <div className="bg-[#111010] max-w-4xl w-full rounded-2xl border border-[#111010] p-8 text-[#d9d9d9] space-y-8">
      
            {/* Título */}
            <div className="flex justify-between flex-wrap gap-4">
              <h1 className="text-white text-[35px] tracking-[0.12em] leading-[0.9] font-glacial">
                Ateliê <br /> Adriana <br /> Castro
              </h1>
      
              <div className="max-w-sm text-[12px] leading-[1.4] font-glacial">
                <h2 className="text-white mb-2">Orçamentos</h2>
                <p>
                  Que bom que esteja aqui! <br />
                  Analisaremos o seu pedido e logo enviaremos um e-mail com seu orçamento. <br />
                  Até já!
                </p>
              </div>
            </div>
      
            {/* Formulário */}
            <form className="space-y-6 font-glacial">
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Nome:"
                    className="p-3 bg-white text-[#d9d9d9] placeholder-[#d9d9d9] rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail:"
                    className="p-3 bg-white text-[#d9d9d9] placeholder-[#d9d9d9] rounded-lg focus:outline-none"
                    required
                  />
                </div>
              </div>
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <input
                    id="assunto"
                    name="assunto"
                    type="text"
                    placeholder="Assunto:"
                    className="p-3 bg-white text-[#d9d9d9] placeholder-[#d9d9d9] rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    id="contato"
                    name="contato"
                    type="tel"
                    placeholder="Contato:"
                    className="p-3 bg-white text-[#d9d9d9] placeholder-[#d9d9d9] rounded-lg focus:outline-none"
                  />
                </div>
              </div>
      
              {/* Mensagem */}
              <div className="flex flex-col">
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  placeholder="Sua Mensagem:"
                  className="p-3 bg-white text-[#d9d9d9] placeholder-[#d9d9d9] rounded-lg focus:outline-none resize-none"
                ></textarea>
              </div>
      
              {/* Upload de Imagem */}
              <div className="flex flex-col items-center">
                <div className="relative flex flex-col items-center justify-center border border-dashed border-[#d9d9d9] rounded-lg w-40 h-40">
                  <img src="/icones/alfinete.png" alt="Alfinete" id='formulario-alfinete' className="w-6 h-6 mb-2" />
                  <p className="text-[12px] text-[#d9d9d9]">Insira sua Imagem</p>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
              </div>
      
              {/* Botão */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-white text-[#d9d9d9] px-10 py-2 rounded-full hover:opacity-80 transition"
                >
                  Enviar
                </button>
              </div>
      
            </form>
          </div>
        </section>
      );
      
}

export default Orcamento;