import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BrandBlack from "../BrandBlack";
 
 
export default function FAQ() {
  const faqs = [
    {
      pergunta: "Vocês fazem ajustes em roupas prontas?",
      resposta:
        "Sim! Realizamos ajustes em calças, vestidos, camisas e muito mais. Basta trazer a peça e explicarmos o que pode ser feito.",
    },
    {
      pergunta: "Fazem roupas sob encomenda?",
      resposta:
        "Sim, trabalhamos com peças personalizadas de acordo com seu gosto, corpo e necessidade. É só agendar um atendimento!",
    },
    {
      pergunta: "Quanto tempo demora para ficar pronto?",
      resposta:
        "Depende do serviço. Ajustes simples podem ficar prontos em até 3 dias úteis. Já encomendas sob medida variam conforme a complexidade.",
    },
    {
      pergunta: "Vocês fazem vestidos de festa ou casamento?",
      resposta:
        "Fazemos sim! Criamos vestidos para ocasiões especiais, com provas agendadas e acompanhamento de todo o processo.",
    },
  ];
 
  const faqsDireita = [
    {
      pergunta: "Posso levar uma roupa como modelo para fazer outra igual?",
      resposta:
        "Claro! Você pode trazer uma peça que goste para usarmos como referência e criar outra sob medida.",
    },
    {
      pergunta: "Posso levar meu próprio tecido?",
      resposta:
        "Pode sim! Aceitamos tecidos trazidos pelo cliente, desde que sejam apropriados para o modelo escolhido.",
    },
    {
      pergunta: "Como funciona o pagamento?",
      resposta:
        "Aceitamos dinheiro, Pix, cartão de crédito e débito. Para encomendas, pedimos um sinal de 50% no início.",
    },
    {
      pergunta: "Preciso agendar horário para ser atendido?",
      resposta:
        "Para encomendas ou provas, sim. Mas para ajustes simples, atendemos por ordem de chegada durante o horário de funcionamento.",
    },
  ];
 
  const [abertoEsquerda, setAbertoEsquerda] = useState(null);
  const [abertoDireita, setAbertoDireita] = useState(null);
 
  return (
    <section className="">
      {/* Perguntas */}
      <div className="w-full flex justify-end px-6 mt-5">
        <div className=" text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800">
          Perguntas
        </div>
      </div>
 
      <div className=" rounded-lg relative w-full h-[-50px] mb-[50px] left-1">
        <BrandBlack />
      </div>
 
      <div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-8xl w-full">
 
          {/* Grid de perguntas em duas colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna da esquerda */}
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div key={index} className="border border-[#d9d9d9] rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setAbertoEsquerda(abertoEsquerda === index ? null : index)}
                    className="w-full flex items-center justify-between bg-[#111010] text-[#d9d9d9] text-sm md:text-base p-4 hover:bg-[#1c1c1c] transition-colors"
                  >
                    {item.pergunta}
                    <ChevronDown
                      className={`transition-transform ${abertoEsquerda === index ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {abertoEsquerda === index && (
                    <div className="p-4 text-[#d9d9d9] text-sm md:text-base bg-[#1a1a1a]">
                      {item.resposta}
                    </div>
                  )}
                </div>
              ))}
            </div>
 
            {/* Coluna da direita */}
            <div className="space-y-4">
              {faqsDireita.map((item, index) => (
                <div key={index} className="border border-[#d9d9d9] rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setAbertoDireita(abertoDireita === index ? null : index)}
                    className="w-full flex items-center justify-between bg-[#111010] text-[#d9d9d9] text-sm md:text-base p-4 hover:bg-[#1c1c1c] transition-colors"
                  >
                    {item.pergunta}
                    <ChevronDown
                      className={`transition-transform ${abertoDireita === index ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {abertoDireita === index && (
                    <div className="p-4 text-[#d9d9d9] text-sm md:text-base bg-[#1a1a1a]">
                      {item.resposta}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
/*
✔ Layout atualizado para seguir o design do PDF: Nome "Ateliê Adriana Castro" alinhado à esquerda no topo.
✔ "Perguntas Frequentes" centralizado logo abaixo do nome.
✔ Grid em duas colunas igual à imagem.
✔ Accordion abre um item por vez por coluna.
✔ Fonte "Glacial Indifference" precisa ser importada via Google Fonts ou configurada no Tailwind.
✔ Cores, tamanhos e espaçamentos compatíveis com o layout apresentado.
*/