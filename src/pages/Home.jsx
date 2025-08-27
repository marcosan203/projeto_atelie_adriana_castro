
import Banner from "../components/Banner";
import NossaHistoria from "../components/NossaHistoria";
import Orcamento from "../components/Orcamento";
import Perguntas_Respostas from "../components/Perguntas_Respostas";
import Galeria from "../components/Galeria";
import Carrossel from "../components/Carrossel";
import Parceiros from "../components/Parceiros";
import EnderecoMaps from "../components/Endereco_Maps";

function Home() {
    return (
        <div className="relative mx-auto flex-grow">
            <div className="w-full px-[100px]">
                <Banner />
            </div>
            <div className="w-full px-[100px]">
                <NossaHistoria />
            </div>
            <div className="w-full px-[100px]">
                <Perguntas_Respostas />
            </div>

            <div className="w-full px-[100px]">
                <Carrossel />
            </div>
            <div className="w-full px-[100px]">
                <Galeria />
            </div>
            <Orcamento />
            <div className="w-full px-[100px]">
                <Parceiros />
            </div>
            <div className="w-full">
                <EnderecoMaps />
            </div>
        </div>
    )
}

export default Home;