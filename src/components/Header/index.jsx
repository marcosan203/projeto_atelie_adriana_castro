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
      <header className="flex flex-col h-[120px] w-full ">
        <div className="flex-1 w-full bg-black flex px-[100px]">
          <div className="flex-1 flex justify-start">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <nav className="flex-1 flex justify-end">
            <ul className="flex gap-6 items-center text-white"> 
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#perguntas">Perguntas</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 w-full bg-white flex px-[100px]">
          <div>
            <p></p>
          </div>
          <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          </div>
         
        </div>
      </header>
    )
}

export default Header;