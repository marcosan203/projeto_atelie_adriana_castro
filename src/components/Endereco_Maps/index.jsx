function EnderecoMaps() {
  return (
    <section className="min-h-screen flex flex-col items-center p-0">
 
      {/* Header preto */}
      <header className="w-full bg-black h-[50px] flex items-center px-6">
      </header>
 
      {/* Contato abaixo do header */}
      <div className="w-full flex justify-end px-6 mt-2 -ml-56">
        <div className=" text-black px-4 py-2 rounded-lg cursor-pointer">
          Contato
        </div>
      </div>
 
      {/* Conteúdo */}
      <div className="flex-1 w-full flex items-center justify-center p-6">
        <div className="max-w-6xl w-full rounded-2xl  p-8 text-[#d9d9d9]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
 
            {/* Informações de contato */}
            <div className="space-y-6 font-glacial">
 
              <h2 className="text-black text-[50px] tracking-[0.12em] leading-[0.9]">
                <div>Ateliê</div>
 
                <div className="bg-black text-white inline-block px-1">
                  Adriana <br /> Castro
                </div>
              </h2>
 
              <div className="space-y-3 text-[16px]">
                <p className="text-black flex items-center gap-2">
                  <img src="/icones/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                  (18) 00000-0000
                </p>
                <p className="text-black flex items-center gap-2">
                  <img src="/icones/carta.png" alt="Email" className="w-5 h-5" />
                  atelieadrianacastro@gmail.com
                </p>
              </div>
            </div>
 
            {/* Mapa */}
            <div className="w-[750px] h-[450px] rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.133145503694!2d-51.
                // 38814262471208!3d-22.121094179835878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                // 1!3m3!1m2!1s0x9493a3c5a4f6a3e9%3A0x93fbb93b6f52c4df!2sAv.
                // %20Manoel%20Goulart%2C%202881%20-%20Vila%20Santa%20Helena%2C%20Pres.
                // %20Prudente%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="mt-2 text-[10px] text-[#d9d9d9] font-glacial">
                Av. Manoel Goulart, 2881 – Vila Santa Helena, Pres. Prudente – SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default EnderecoMaps;