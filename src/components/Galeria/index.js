import './styles.css';
import Cards from '../Cards';
function Galeria() {

    const objCards = [
        { imagem: 'galeria_fotos/vestidoVermelho/vestidoVermelho.png', tamanho: 'graimagemPrimariande', texto: 'Vestido vermelho marsala em malha macia, com alças largas, corte godê e amarração nas costas, une conforto e elegância para ocasiões especiais.' },
        { imagem: 'galeria_fotos/macaquinhoTropicalEstampado/macaquinhoTropicalEstampado.jpg', tamanho: 'imagemSecundaria', texto: 'Macaquinho leve com estampa tropical vibrante, cintura marcada e alças largas,combina conforto e estilo, ideal para dias quentes, passeios e eventos..' },
        { imagem: 'galeria_fotos/conjuntoEleganciaUrbana/conjuntoEleganciaUrbana.jpg', tamanho: 'imagemSecundaria', texto: ' Conjunto com blusa rose de manga longa e gola alta, e mini saia branca com detalhes  dourados, une sofisticação e modernidade para ocasiões casuais chiques.' },
        
        { imagem: 'galeria_fotos/vestidoEstampado/vestidoEstampado.png', tamanho: 'imagemSecundaria', texto: 'Vestido sem mangas em malha estampada preto e branco, caimento fluido e cinto ajustado, une conforto e estilo para passeios e encontros casuais.' },
        { imagem: 'galeria_fotos/vestidoTubinhoPreto/vestidoTubinhoPreto.png', tamanho: 'imagemSecundaria', texto: ' Vestido tubinho preto com gola alta, recorte e fenda frontal, valoriza a silhueta com elegância, ideal para eventos especiais e ocasiões sofisticadas.' },
        { imagem: 'galeria_fotos/conjunto/conjunto.png', tamanho: 'imagemPrimaria', texto: 'Conjunto com blusa rose de manga longa e gola alta, e mini saia branca com detalhes dourados, une sofisticação e modernidade para ocasiões casuais chiques.' },
        
        { imagem: 'galeria_fotos/vestidoJuninoElegante/vestidoJuninoElegante.png', tamanho: 'imagemPrimaria', texto: 'Vestido sob medida em xadrez lilás com cetim, renda e mangas bufantes, combina romantismo e sofisticação, perfeito para festas e ensaios fotográficos.' },
        { imagem: 'galeria_fotos/camisolaBrancaComRenda/camisolaBrancaComRenda.png', tamanho: 'imagemSecundaria', texto: 'Camisola branca com alças finas, renda delicada e tecido leve, une conforto e sensualidade, ideal para noites especiais ou dormir com frescor.' },
        { imagem: 'galeria_fotos/camisolaRoseVintage/camisolaRoseVintage.jpg', tamanho: 'imagemSecundaria', texto: ' Camisola rosé com toque acetinado, decote em renda e alças largas drapeadas, mistura romantismo e ousadia, ideal para noites especiais ou dormir com charme.' },
    ];
    console.log(objCards[0]);

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

                <div className='cardPrincipal'>
                    <Cards
                        imagem={objCards[0].imagem}
                        tamanho={'imagemPrimaria'}
                        texto={objCards[0].texto}
                    />
                </div>

                <div className='cardsLinha'>
                    <div className='cardSecundario'>
                        <Cards
                            imagem={objCards[1].imagem}
                            tamanho={'imagemSecundaria'}
                            texto={objCards[1].texto}
                        />
                    </div>
                    <div className='cardSecundario'></div>
                    <Cards
                        imagem={objCards[2].imagem}
                        tamanho={'imagemSecundaria'}
                        texto={objCards[2].texto}
                    />
                </div>
            </div>


            <div className='cards'>
                <div className='cardsLinha'>
                    <Cards
                        imagem={objCards[3].imagem}
                        tamanho={objCards[3].tamanho}
                        texto={objCards[3].texto}
                    />
                    <Cards
                        imagem={objCards[4].imagem}
                        tamanho={objCards[4].tamanho}
                        texto={objCards[4].texto}
                    />
                </div>
                <Cards
                    imagem={objCards[5].imagem}
                    tamanho={objCards[5].tamanho}
                    texto={objCards[5].texto}
                />
            </div>

            <div className='cards'>
                <Cards
                    imagem={objCards[6].imagem}
                    tamanho={objCards[6].tamanho}
                    texto={objCards[6].texto}
                />

                <div className='cardsLinha'>
                    <Cards
                        imagem={objCards[7].imagem}
                        tamanho={objCards[7].tamanho}
                        texto={objCards[7].texto}
                    />

                    <Cards
                        imagem={objCards[8].imagem}
                        tamanho={objCards[8].tamanho}
                        texto={objCards[8].texto}
                    />

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