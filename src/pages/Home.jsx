
import Banner from "../components/Banner";
import NossaHistoria from "../components/NossaHistoria";
import Orcamento from "../components/Orcamento";


function Home() {
    
    return(
        <div className="relative mx-auto flex-grow">
            <div className="w-full px-[100px]">
            <Banner />
            </div>
            <div className="w-full px-[100px]">
            <NossaHistoria />
            </div>
           
           <Orcamento/>
        </div>
    )
}

export default Home;