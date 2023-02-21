
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import uno from '../Assets/veggie.webp';
import dos from '../Assets/jugos.webp';
import tres from '../Assets/porcion.webp'
import cuatro from '../Assets/vegano.webp'
import cinco from '../Assets/sabij.webp'
import seis from '../Assets/picada.webp'
import siete from '../Assets/bowl.webp'
import ocho from '../Assets/delivery.webp'
import nueve from '../Assets/falafel.webp'
import diez from '../Assets/sandwich.webp' 


const Header = () => {
    return (
        <>


                <header>
                         

                <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px4 relative group"> 
                <Carousel slideInterval={5000} leftControl="left" rightControl="right">
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={uno} alt="falafel"/> 
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={dos} alt="falafel"/>
                </div>
                
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={tres} alt="falafel"/>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={cuatro} alt="falafel"/> 
                </div> 
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={cinco} alt="falafel"/> 
                </div> 
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={seis} alt="falafel"/> 
                </div>                    
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={siete} alt="falafel"/> 
                </div>    
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={ocho} alt="falafel"/> 
                </div>    
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={nueve} alt="falafel"/> 
                </div>    
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={diez} alt="falafel"/> 
                </div>    

                </Carousel>
                </div>  
            </header>
        </>
    )
}

export default Header;