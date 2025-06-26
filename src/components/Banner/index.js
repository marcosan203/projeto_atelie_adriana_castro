import React from 'react';
import Brand from '../Brand';
import './style.css'

function Banner() {
    return(
        <section className="Banner atelie-banner-img rounded-lg relative w-full h-[850px] mb-[50px]">
           <Brand />
        </section>
    )
}

export default Banner;