import './styles.css';
import imagem1 from '../../assets/vestidoVermelho.png'
function Galeria() {
    return (
        <section className='areaCards'>

            <div className='cards'>

                <div className='card'>
                    <img className='cardPrincipal' src="galeria_fotos/vestidoVermelho/vestidoVermelho.png" />
                </div>
                <div className='cardsLinha'>
                    <div className="galeria-item">
                        <img src='galeria_fotos/macaquinhoTropicalEstampado/macaquinhoTropicalEstampado.jpg' alt='' className="galeria-imagem" />
                        <div className="galeria-overlay">
                            <span className="galeria-texto">
                                Macaquinho leve e moderno com estampa tropical vibrante em azul, 
                                rosa e preto. Possui modelagem ajustada, cintura marcada,
                                 alças largas e botões frontais brancos. Confortável, 
                                 feminino e versátil, ideal para dias quentes, passeios e eventos casuais.
                            </span>
                        </div>
                    </div>

                    <div className="galeria-item">
                        <img src='galeria_fotos/conjuntoEleganciaUrbana/conjuntoEleganciaUrbana.jpg' alt='' className="galeria-imagem" />
                        <div className="galeria-overlay">
                            <span className="galeria-texto">Teste</span>
                        </div>
                    </div>

                </div>

            </div>


            <div className='cards'>
                <div className='cardsLinha'>
                    <img className='cardImagem' src='galeria_fotos/vestidoEstampado/vestidoEstampado.png' />
                    <img className='cardImagem' src='galeria_fotos/vestidoTubinhoPreto/vestidoTubinhoPreto.png' />
                </div>
                <img className='cardPrincipal' src="galeria_fotos/conjunto/conjunto.png" />
            </div>
            <div className='cards'>
                <img className='cardPrincipal' src='galeria_fotos/vestidoJuninoElegante/vestidoJuninoElegante.png' />
                <div className='cardsLinha'>
                    <img className='cardImagem' src='galeria_fotos/camisolaBrancaComRenda/camisolaBrancaComRenda.png' />
                    <img className='cardImagem' src='galeria_fotos/camisolaRoseVintage/camisolaRoseVintage.jpg' />
                </div>
            </div>


        </section>
    )
}

export default Galeria;