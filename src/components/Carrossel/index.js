import React, { useState } from 'react';
import './styles.css'
// 1. Itens de exemplo.
// Adicionei mais dois itens para o efeito de rotação ficar mais evidente
// e troquei as imagens por placeholders para o código funcionar em qualquer ambiente.
const itens = [
    {
        titulo: "Conserto",
        img: "/imagens_carrosel_servicos/conserto.png",
        descricao: "Nosso processo segue uma analise para ajustar, reparar ou modificar peças de vestuário para melhorar o caimento, restaurar danos ou adaptar ao gosto do cliente.",
        etapas: ["Atendimento à cliente.", "Análise da peça.", "Prova (se necessário).", "Marcações.", "Costura ou ajuste.", "Acabamento.", "Entrega."],
    },
    {
        titulo: "Confecção",
        img: "/imagens_carrosel_servicos/confeccao.png",
        descricao: "Criamos roupas exclusivas e sob medida, refletindo seu estilo pessoal. Desde a escolha dos tecidos até o design final, transformamos sua visão em realidade.",
        etapas: ["Atendimento inicial", "Tiragem de medidas", "Escolha de tecido", "Desenho ou molde", "Corte do Tecido", "Costura inicial", "Primeira prova", "Ajustes finais", "Acabamentos", "Entrega"],
    },
    {
        titulo: "Restauração",
        img: "/imagens_carrosel_servicos/restauracao.png",
        descricao: "Nosso processo de restauração, consiste em recuperar peças danificadas, como consertar rasgos, substituir zíperes, ajustar costuras e renovar detalhes.",
        etapas: ["Receber a peça", "Avaliar o problema", "Orçar o serviço", "Fazer o conserto", "Verificar acabamento", "Entregar a peça"],
    },
    
];

// O componente do carrossel com o novo efeito 3D
function Carrossel() {
    // 2. Estado para o índice do slide ativo
    const [index, setIndex] = useState(0);
    // 3. Estado para controlar o modal
    const [modalItem, setModalItem] = useState(null);

    // 4. Funções de navegação (próximo/anterior)
    const prev = () => setIndex((i) => (i === 0 ? itens.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === itens.length - 1 ? 0 : i + 1));

    // 5. Função que determina a classe de cada card com base na sua posição
    //    em relação ao card ativo.
    const getPosicaoClasse = (i, currentIndex, totalItens) => {
        const offset = i - currentIndex;
        
        if (offset === 0) return "ativo";
        if (offset === 1 || offset === -(totalItens - 1)) return "direita";
        if (offset === -1 || offset === totalItens - 1) return "esquerda";
        
        if (offset > 1 || offset < -(totalItens - 1)) return "oculto-direita";
        return "oculto-esquerda";
    };

    return (
        <div className="body-carrossel">
            {/* Container principal que cria o efeito de perspectiva */}
            <div className="carrossel-wrap">
                {/* Container dos cards que será posicionado no espaço 3D */}
                <div className="cards">
                    {itens.map((item, i) => (
                        <div
                            key={i}
                            className={`card ${getPosicaoClasse(i, index, itens.length)}`}
                            onClick={() => {
                                const p = getPosicaoClasse(i, index, itens.length);
                                if (p === "esquerda") prev();
                                else if (p === "direita") next();
                                else if (p === "ativo") setModalItem(item);
                            }}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${i + 1} de ${itens.length}`}
                        >
                            <img src={item.img} alt={item.titulo} />
                            <span className="titulo">{item.titulo}</span>
                        </div>
                    ))}
                </div>

                {/* Botões de navegação */}
                <button className="nav seta-esq" aria-label="Anterior" onClick={prev}>
                    &larr;
                </button>
                <button className="nav seta-dir" aria-label="Próximo" onClick={next}>
                    &rarr;
                </button>
            </div>
            
            {/* O Modal continua funcionando da mesma forma */}
            {modalItem && (
                <div className="modal" role="dialog" aria-modal="true">
                    <div className="modal-bg" onClick={() => setModalItem(null)} />
                    <div className="modal-conteudo">
                        <div className="modal-conteudo-img">
                            <img src={modalItem.img} alt={modalItem.titulo} className="modal-img" />
                        </div>
                        <div className="modal-conteudo-informacao">
                            <h2>{modalItem.titulo}</h2>
                            <p>{modalItem.descricao}</p>
                            <strong>Etapas do processo:</strong>
                            <ul>
                                {modalItem.etapas.map((etapa, idx) => (
                                    <li key={idx}>{etapa}</li>
                                ))}
                            </ul>
                            <button className="btn-fechar" onClick={() => setModalItem(null)}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Componente principal que renderiza o carrossel e inclui os estilos.
// Você pode copiar e colar estes estilos no seu arquivo .css
export default function App() {
    return (
        <>
            <style>{``}</style>
            <Carrossel />
        </>
    );
}
