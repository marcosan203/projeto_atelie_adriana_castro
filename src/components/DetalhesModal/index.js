/**
 * useEffect
 * Hook que permite executar efeitos colaterais em componentes funcionais, como chamadas de API,
 * manipulação de eventos ou sincronização com o DOM.
 * Pode ser configurado para rodar ao montar, desmontar ou quando determinadas variáveis mudarem.
 */
import { useEffect } from "react";
// Componente do modal que exibe os detalhes do item
/**
* Componente de modal que exibe os detalhes de um item da galeria.
* Inclui imagem ampliada e descrição, com opção para fechar.
*
* @component
* @param {Object} props - Propriedades do componente.
* @param {boolean} props.aberto - Indica se o modal está visível.
* @param {Object} props.item - Item a ser exibido no modal.
* @param {string} props.item.titulo - Título do item.
* @param {string} props.item.src - URL da imagem do item.
* @param {string} props.item.alt - Texto alternativo da imagem.
* @param {string} props.item.descricao - Descrição do item.
* @param {Function} props.onClose - Função para fechar o modal.
* @returns {JSX.Element|null} Modal com informações do item ou null se fechado.
*/



// Componente do modal que exibe os detalhes do item
function DetalhesModal({ aberto, item, onClose }) {
    // Bloqueia o scroll do fundo quando o modal estiver aberto
    useEffect(() => {
        if (aberto) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [aberto]);

    // Se não houver item selecionado ou modal fechado, não renderiza nada
    if (!aberto || !item) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
        >
            {/* Fundo escuro (backdrop) que fecha o modal ao clicar */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Conteúdo do modal */}
            <div className="relative z-10 grid max-h-[90vh] w-full max-w-5xl grid-rows-[1fr_auto] overflow-hidden rounded-3xl bg-white shadow-2xl">
                {/* Corpo: imagem grande à esquerda e texto à direita */}
                <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                    {/* Imagem ocupa toda a lateral esquerda */}
                    <div className="relative h-full">
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Texto com título e descrição */}
                    <div className="flex flex-col gap-2 overflow-y-auto p-4 al items-center justify-center">
                        <h2 className="text-lg font-semibold">{item.titulo}</h2>
                        <h3 className="text-base font-medium">Descrição</h3>
                        <p className="text-base leading-relaxed text-gray-700 ">{item.descricao}</p>
                    </div>
                </div>

                {/* Rodapé do modal com botão de fechar */}
                {/*<div className="flex items-center justify-end gap-2 border-t px-4 py-3">
                    <button onClose
                        onClick={}
                        className="rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-100"
                    >
                        Fechar
                    </button>
                </div>*/}
            </div>
        </div>
    );
}

export default DetalhesModal;