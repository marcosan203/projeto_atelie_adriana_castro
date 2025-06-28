import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/storage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const navigate = useNavigate();

    return(
      <header className="flex flex-col h-[120px] w-full">
        <div className="flex-1 w-full bg-black flex px-[130px]">
          <div className="flex-1 flex justify-start">
            <nav>
              <a href="">
                <img />
              </a>
              <a href="">
                <img />
              </a>
              <a href="">
                <img />
              </a>
            </nav>
          </div>
          <nav className="flex-1 flex justify-end">
            <ul className="flex gap-10 items-center text-[20px] text-white"> 
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#contato">Parceiros</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#perguntas">Perguntas</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 w-full bg-white flex px-[100px]">
          <div>
            <p></p>
          </div>
          <div className="flex-1 flex px-[30px] justify-end">
          <ul className="flex  gap-6 items-center text-[20px] text-black">
            <li><a href="nossa-historia">Nossa História</a></li>
            <li><a href="servicos">Serviços</a></li>
            <li><a href="orcamentos">Orçamentos</a></li>
          </ul>
          </div>
         
        </div>
      </header>
    )
}

export default Header;