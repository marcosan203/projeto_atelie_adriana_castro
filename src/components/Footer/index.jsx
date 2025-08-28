import React from 'react';
import { Link } from "react-router-dom";
import Brand from '../Brand';

function Footer() {
    return (
      <>
        <div className='bg-white bg-contain h-48'></div>
        <footer className="bg-black text-white px-[100px] font-glacial text-lg">
          <div className="flex flex-col md:flex-row justify-between gap-10 pl-10 relative h-[400px]">
            <Brand />

            {/* Coluna esquerda */}
            <div className="flex flex-col gap-4 justify-end pb-10">
              <div className="text-gray-300">
                <p>Ateliê Adriana Castro</p>
                <p>Um espaço para você saber onde qualidade é construída.</p>
              </div>

              <p className="text-xs mt-4 text-gray-500">© 2025 Direitos autorais</p>
            </div>

            {/* Coluna direita */}
            <div className="flex gap-[80px] py-[50px]">
              {/* Menu */}
              <div className="flex flex-col gap-2">
                <h3 className="font-normal mb-2">Menu</h3>

                <Link to="/nossa-historia" className="hover:underline">Nossa História</Link>
                <Link to="/servicos" className="hover:underline">Serviços</Link>
                <Link to="/perguntas" className="hover:underline">Perguntas</Link>
                <Link to="/orcamentos" className="hover:underline">Orçamentos</Link>
                <Link to="/galeria" className="hover:underline">Galeria</Link>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-2">
                <h3 className="font-normal mb-2">Social</h3>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/icones/instagram.png" alt="Instagram" className="h-4" />
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/icones/facebook.png" alt="Facebook" className="h-4" />
                  Facebook
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/icones/tiktok.png" alt="TikTok" className="h-4" />
                  TikTok
                </a>
                <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/icones/whatsapp.png" alt="Whatsapp" className="h-4" />
                  Whatsapp
                </a>
                <a href="mailto:seuemail@exemplo.com" className="flex items-center gap-2">
                  <img src="/icones/carta.png" alt="E-mail" className="h-4" />
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
}
export default Footer;