import { useState, useRef, useEffect } from "react";
import "./styles.css";

const imagens = [
  { src: "/parceiros/acessorios/acessorios.jpg", alt: "Imagem 1" },
  { src: "/parceiros/casual/casual.jpeg", alt: "Imagem 2" },
  { src: "/parceiros/fitnes/fitness.jpg", alt: "Imagem 3" },
  { src: "/parceiros/formatura/formatura.jpeg", alt: "Imagem 4" },
  { src: "/parceiros/infantil/infantil.jpg", alt: "Imagem 5" },
  { src: "/parceiros/praia/praia.jpg", alt: "imagem" }
];

export default function CarrosselFilaInfinito() {
  const [index, setIndex] = useState(imagens.length); // começa no meio
  const pistaRef = useRef(null);
  const viewportRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(250); // tamanho inicial
  const total = imagens.length;

  const prev = () => setIndex((i) => i - 1);
  const next = () => setIndex((i) => i + 1);

  // Ajusta tamanho dos itens dinamicamente
  useEffect(() => {
    const resize = () => {
      if (viewportRef.current) {
        const viewportWidth = viewportRef.current.offsetWidth;
        const itemsVisible = viewportWidth < 600 ? 1 : viewportWidth < 900 ? 3 : 3;
        setItemWidth(viewportWidth / itemsVisible - 20); // -20 = gap
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Loop infinito (teleportação invisível)
  useEffect(() => {
    if (index === 0) {
      const pista = pistaRef.current;
      pista.style.transition = "none";
      setIndex(total);
      setTimeout(() => (pista.style.transition = "transform 0.5s ease"), 0);
    } else if (index === total * 2) {
      const pista = pistaRef.current;
      pista.style.transition = "none";
      setIndex(total);
      setTimeout(() => (pista.style.transition = "transform 0.5s ease"), 0);
    }
  }, [index, total]);

  // Autoplay (avança sozinho)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000); // 3 segundos
    return () => clearInterval(interval);
  }, []);

  // Lista triplicada para efeito infinito
  const listaDuplicada = [...imagens, ...imagens, ...imagens];

  return (
    <div className="carrossel-fila">
     { /*<button className="nav esq" onClick={prev}>←</button>*/}

      <div className="viewport" ref={viewportRef}>
        <div
          className="pista"
          ref={pistaRef}
          style={{
            transform: `translateX(-${index * (itemWidth + 20)}px)`,
          }}
        >
          {listaDuplicada.map((img, i) => (
            <div className="item" key={i} style={{ width: `${itemWidth}px` }}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

     {/* <button className="nav dir" onClick={next}>→</button>*/  }
    </div>
  );
}