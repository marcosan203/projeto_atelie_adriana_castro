/**
 * useState:
 * Hook que permite criar e controlar o estado local dentro de um componente funcional.
 * Ele retorna um valor atual e uma função para atualizá-lo.
 * 
 * useMemo:
 * Hook que memoriza valores calculados, evitando recalcular algo caro (ou irrelevante)
 * se as dependências não mudarem.Muito útil para otimizar desempenho em listas ou filtros, por exemplo.
 * 
 * useCallback:
 * Hook que memoriza funções, retornando sempre a mesma instância enquanto as dependências não
 * mudarem.Isso evita re-renderizações desnecessárias em componentes filhos que recebem essas funções via props.
 */

// Componente principal da galeria com modal
/**
* Componente principal que renderiza uma galeria de imagens com suporte a modal de detalhes.
* Utiliza `useState`, `useCallback` e `useMemo` para controlar o estado da seleção e exibição.
*
* @component
* @param {Object} props - Propriedades do componente.
* @param {Array<Object>} props.itens - Lista de itens a serem exibidos na galeria.
* @param {string} props.itens[].id - Identificador do item.
* @param {string} props.itens[].titulo - Título do item.
* @param {string} props.itens[].src - URL da imagem.
* @param {string} props.itens[].alt - Texto alternativo da imagem.
* @param {string} props.itens[].descricao - Texto descritivo do item.
* @returns {JSX.Element} Galeria de imagens com modal de visualização.
*/

import { useMemo, useState, useCallback } from "react";

import IMAGENS from "../../data/itensGaleria";
import ItemCard from "../../components/Cards";
import DetalhesModal from "../../components/DetalhesModal";

// Componente principal da galeria com modal
export default function GaleriaComModal({ itens = IMAGENS }) {
    const [selecionado, setSelecionado] = useState(null); // Item atualmente selecionado
    const [aberto, setAberto] = useState(false); // Estado do modal (aberto ou fechado)

    // Identifica a posição do item selecionado na lista
    const indexAtual = useMemo(() => {
        if (!selecionado) return -1;
        return itens.findIndex((i) => i.id === selecionado.id);
    }, [selecionado, itens]);

    // Abre o modal com o item escolhido
    const abrir = useCallback((item) => {
        setSelecionado(item);
        setAberto(true);
    }, []);

    // Fecha o modal
    const fechar = useCallback(() => setAberto(false), []);

    return (
        <div className="mx-auto max-w-6xl p-4">
            <h1 className="mb-4 text-2xl font-bold">Galeria</h1>

            {/* Grid da galeria com todas as imagens */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {itens.map((item) => (
                    <ItemCard key={item.id} item={item} onClick={abrir} />
                ))}
            </div>

            {/* Modal que aparece ao clicar em uma imagem */}
            <DetalhesModal
                aberto={aberto}
                item={selecionado}
                onClose={fechar}
            />
        </div>
    );
}
