// Componente que representa cada item da galeria
/**
* Componente que representa um item da galeria em formato de cartão.
* Ao ser clicado, aciona a função para abrir o modal com detalhes.
*
* @component
* @param {Object} props - Propriedades do componente.
* @param {Object} props.item - Objeto com dados da imagem e descrição.
* @param {string} props.item.id - Identificador único do item.
* @param {string} props.item.titulo - Título do item exibido.
* @param {string} props.item.src - URL da imagem.
* @param {string} props.item.alt - Texto alternativo da imagem.
* @param {Function} props.onClick - Função chamada ao clicar no item.
* @returns {JSX.Element} Um botão estilizado contendo imagem e título.
*/

function ItemCard({ item, onClick }) {
    return (
        <button
            // Ao clicar, abre o modal com os detalhes do item
            onClick={() => onClick(item)}
            className="group relative block overflow-hidden rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            aria-label={`Abrir detalhes de ${item.titulo}`}
        >
            {/* Imagem do item */}
            <img
                src={item.src}
                alt={item.alt}
                className="h-56 w-full object-cover transition-opacity group-hover:opacity-85"
                loading="lazy"
            />
            {/* Título sobre a imagem */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-3 py-2 text-white">
                <p className="text-sm font-medium">{item.titulo}</p>
            </div>
        </button>
    );
}

export default ItemCard;
