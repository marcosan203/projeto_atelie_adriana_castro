import { useMemo } from "react";
import Carousel from "../components/Carousel";

function Solucoes() {
    const marcas = useMemo(() => [
        'Microsoft', //0
        'Apple', //1
        'Google', //2
        'Android', //3
        'Furukawa', //4
        'Samsung',  //5
        'Lg', //6
        'Ubiquiti', //7
        'Cisco' //8
    ],[])
    return(
        <div className="flex-grow mt-[110px]">
            <h1>Solucoes</h1>
            <p>Esta e a pagina Solucoes a nossa empresa</p>
            <Carousel dados={marcas} />
        </div>
    )
}
export default Solucoes;