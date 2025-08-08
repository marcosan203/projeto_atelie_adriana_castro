import './styles.css';
import imagem1 from '../../assets/vestidoVermelho.png'
function Galeria() {
    return (
        <section>
            <div className='cards'>
                <img className='cardPrincipal' src="galeria_fotos/vestidoVermelho/vestidoVermelho.png" />
                <div className='cardsLinha'>
                    <img className='card' src='galeria_fotos/macaquinhoTropicalEstampado/macaquinhoTropicalEstampado.jpg' />
                    <img className='card' src='galeria_fotos/conjuntoEleganciaUrbana/conjuntoEleganciaUrbana.jpg' />
                </div>
            </div>
        </section>
    )
}

export default Galeria;