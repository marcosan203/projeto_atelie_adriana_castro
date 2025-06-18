import './Style.css'

function Orcamento() {
    return(
        <section className="formulario">


        <div className="area-titulo">
            <h1 className="titulo">Orçamento</h1>
        </div>

        <form className="area-formulario">

            <div className="linha-formulario">
                <div className="campo-formulario">
                    <label>Nome:</label>
                    <input id="nome" name="nome" className="txt-entrada" placeholder="Nome" type="text" />
                </div>
                <div className="campo-formulario">
                    <label>E-mail:</label>
                    <input id="email" name="email" className="txt-entrada" placeholder="E-mail" type="text" />
                </div>
            </div>


            <div className="linha-formulario">
                <div className="campo-formulario">
                    <label>Contato</label>
                    <input id="contato" name="contato" className="txt-entrada" placeholder="Contato" type="text" />
                </div>
                <div className="campo-formulario">
                    <label>Assunto</label>
                    <input id="assunto" name="assunto" className="txt-entrada" placeholder="Assunto" type="text" />
                </div>
            </div>

            <div className="area-mensagem">
                <label>Mensagem</label>
                <textarea id="mensagem" name="Mensagem" className="txt-area" cols="130" rows="15"></textarea>
            </div>

            <div className="insirasuimagem">
                <input type="file" name="" id="insirasuaimagem"/>
            </div>

            <div className="area-button">
                <button className="button">Enviar</button>
            </div>

        </form>
    </section>
    )
}

export default Orcamento;