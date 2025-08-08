
import Banner from "../components/Banner";
import NossaHistoria from "../components/NossaHistoria";
import Orcamento from "../components/Orcamento";
<<<<<<< HEAD
import Perguntas_Respostas from "../components/Perguntas_Respostas"
=======
import Galeria from "../components/Galeria";
>>>>>>> f51f2949d08bbf10941d2862f42c2fd874005855


function Home() {

    return (
        <div className="relative mx-auto flex-grow">
            <div className="w-full px-[100px]">
                <Banner />
            </div>
            
            <div className="w-full px-[100px]">
                <NossaHistoria />
            </div>
<<<<<<< HEAD
            
            <div className="w-full px-[100px]">
            <Orcamento/>
            </div>

            <div className="w-full px-[100px]">
            <Perguntas_Respostas/>
            </div>
=======
            <div className="w-full px-[100px]">
                <Galeria />
            </div>
            <Orcamento />
>>>>>>> f51f2949d08bbf10941d2862f42c2fd874005855
        </div>
    )
}

export default Home;