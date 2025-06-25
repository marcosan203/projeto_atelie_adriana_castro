import React from 'react';
import Brand from '../Brand';
import './style.css'

function Banner() {
    return(
        <div className="absolute inset-0 bg-black opacity-30">
        <section className="Banner atelie-banner-img relative w-full h-[100%]  flex">
           <Brand />

        </section>
        </div>
        
    )
}

export default Banner;