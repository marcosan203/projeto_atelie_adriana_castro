import './styles.css';

function Cards({ imagem, tamanho, texto }) {
    return (

        <div className="galeria-item">
            <img src={imagem} alt='' className={tamanho}/>
            <div className="galeria-overlay">
                <span className="galeria-texto">
                    {texto}
                </span>
            </div>
        </div>
    )
}

export default Cards;
