import { getUser } from "../utils/storage";

function Painel() {

    return(
        <div className="flex-grow flex">
        <p>Ola {getUser()?.nome}</p>
        </div>
    )
}

export default Painel;