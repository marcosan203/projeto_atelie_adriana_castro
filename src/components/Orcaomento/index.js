import BrandWhite from "../BrandWhite";
import './Style.css';
 
function Orcamento() {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado!");
  };
 
  return (
   
    <section className="min-h-screen bg-black flex items-center justify-center p-6 flex-col">
 
      {/* Orçamento*/}
      <div className="w-full flex justify-end px-0 mt-2 -ml-56">
        <div className=" text-white px-1 py-2 rounded-lg cursor-pointer -mt-10">
          Orçamento
        </div>
      </div>
 
      {/* Logo */}
      <div className="rounded-lg relative w-full h-[65px] mb-[50px] flex items-center left-14">
        <BrandWhite />
      </div>
 
 
      <div className="bg-black max-w-6xl w-full rounded-2xl border border-black p-8 text-[#d9d9d9] space-y-8">
        {/* Texto à direita justificado */}
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex-1" /> {/* espaço vazio à esquerda */}
          <div className="max-w-sm text-[15px] leading-[1.4] font-glacial text-justify">
            <h2 className="text-white mb-2">Orçamentos</h2>
            <p>
              Que bom que você está aqui! <br />
              Analisaremos seu pedido e logo enviaremos um e-mail com seu orçamento. <br />
              Até já!
            </p>
          </div>
        </div>
 
        {/* Formulário */}
        <form className="space-y-6 font-glacial" onSubmit={handleSubmit}>
 
          {/* Nome e Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="nome" className="sr-only">Nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Nome:"
                className="p-3 bg-white text-black placeholder-[#9ca3af] rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail:"
                className="p-3 bg-white text-black placeholder-[#9ca3af] rounded-lg focus:outline-none"
                required
              />
            </div>
          </div>
 
          {/* Assunto e Contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="assunto" className="sr-only">Assunto</label>
              <input
                id="assunto"
                name="assunto"
                type="text"
                placeholder="Assunto:"
                className="p-3 bg-white text-black placeholder-[#9ca3af] rounded-lg focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="contato" className="sr-only">Contato</label>
              <input
                id="contato"
                name="contato"
                type="tel"
                placeholder="Contato:"
                className="p-3 bg-white text-black placeholder-[#9ca3af] rounded-lg focus:outline-none"
              />
            </div>
          </div>
 
          {/* Mensagem */}
          <div className="flex flex-col">
            <label htmlFor="mensagem" className="sr-only">Sua Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="4"
              placeholder="Sua Mensagem:"
              className="p-3 bg-white text-black placeholder-[#9ca3af] rounded-lg focus:outline-none resize-none"
            ></textarea>
          </div>
 
          {/* Upload de Imagem */}
          <div className="flex flex-col items-center">
            <label htmlFor="arquivo" className="relative flex flex-col items-center justify-center border border-dashed border-[#d9d9d9] rounded-lg w-40 h-40 cursor-pointer">
              <img src="/icones/alfinete.png" alt="Alfinete" id="formulario-alfinete" className="w-6 h-6 mb-2" />
              <p className="text-[12px] text-[#d9d9d9]">Insira sua Imagem</p>
              <input
                id="arquivo"
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </label>
          </div>
 
          {/* Botão */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white text-black px-10 py-2 rounded-full hover:opacity-80 transition"
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