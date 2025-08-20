import { useState } from "react";
import "./styles.css";

export default function Carrossel() {
    // 1) Itens de exemplo (troque pelos seus). Imagens em /public/imgs
    const itens = [
        { title: "Conserto", img: "/imagens_carrosel_servicos/conserto.png" },
        { title: "Confecção", img: "/imagens_carrosel_servicos/confeccao.png" },
        { title: "Restauração", img: "/imagens_carrosel_servicos/restauracao.png" },
    ];

    // 2) Índice do slide "central"
    const [index, setIndex] = useState(0);

    // 3) Navegação com loop
    const prev = () => setIndex(i => (i === 0 ? itens.length - 1 : i - 1));
    const next = () => setIndex(i => (i === itens.length - 1 ? 0 : i + 1));

    // 4) Função auxiliar: diz em que "posição" cada card deve ficar
    const posicao = (i) => {
        if (i === index) return "ativo";
        if (i === (index - 1 + itens.length) % itens.length) return "esquerda";
        if (i === (index + 1) % itens.length) return "direita";
        return "oculto";
    };

    return (
        <div className="carrossel-wrap">
            {/* Botões laterais */}
            <button className="nav seta-esq" aria-label="Anterior" onClick={prev}>←</button>
            <button className="nav seta-dir" aria-label="Próximo" onClick={next}>→</button>

            {/* Pista dos cartões */}
            <div className="cards">
                {itens.map((item, i) => (
                    <div
                        key={i}
                        className={`card ${posicao(i)}`}
                        // Facilita acessibilidade: clicar nos laterais também navega
                        onClick={() => {
                            if (posicao(i) === "esquerda") prev();
                            else if (posicao(i) === "direita") next();
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
        </div>
    );
}