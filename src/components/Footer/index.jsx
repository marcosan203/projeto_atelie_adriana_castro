import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="py-[50px] px-[100px]">
            <h1> Meu footer</h1>
            <Link to="/"> Voltar para Home </Link>
        </footer>
    )
}
export default Footer;