import React from 'react';
import menu from './About-img/combo1.webp';
import falafel from './About-img/paraiso.webp';
import franq from './About-img/franquicia.webp';


const About = () => {
    return (
        <><section className='mt-40 mb-80 h-80 bg-greenveg md:mb-48 grid place-content-center'>
        <div className='w-9/12 mx-auto md:max-w-full md:flex'>
            <div className='md:w-3/5 flex-none'>
                <img className='rounded-full' src={menu} alt="" />
            </div>
            <div className='bg-white -mt-10 border-2 border-greenveg place-self-center p-4 grid place-content-center md:w-96 md:h-full md:border-0'>
                <div className='mb-8'>
                    <div className='text-center font-questrial'>
                        <h2 className='text-gray-800 font-bold mt-8 text-3xl md:w-96 md:text-3xl'>El menú mas apetitoso</h2>
                        <h2 className='font-yellowtail text-gray-800 text-4xl mb-6 md:mb-14'>en un click</h2>
                        <button className='bg-greenveg h-10 w-28 text-white text-2xl font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg'>MENU</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className='mb-96 h-80 bg-orangeveg md:mb-52 grid place-content-center'>
                <div className='w-9/12 mx-auto md:w-8/12 md:flex'>
                    <div className='bg-white -mb-10 border-2 border-orangeveg place-self-center p-4 grid place-content-center md:h-full md:w-96 md:border-0'>
                        <div className='mb-8'>
                            <div className='text-center'>
                                <h2 className='font-yellowtail text-gray-800 text-3xl mb-2 md:text-5xl md:mb-8'>El paraiso del Falafel</h2>
                                <h3 className='mb-4 font-questrial text-gray-800 text-2xl md:mb-8'>¿Ya probaste nuestros platos?</h3>
                                <p className='font-questrial md:leading-6'>Disfrutá de una mezcla de sabores inigualables elaborados a base de especias, granos y un sinfín de vegetales como pimiento, cebolla, tomate, garbanzos, berenjenas.</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-3/5 flex-none'>
                        <img className='rounded-full' src={falafel} alt="" />
                    </div>
                </div>
            </section><section className='mb-48 h-80 bg-greenveg grid place-content-center'>
                <div className='w-9/12 mx-auto md:w-8/12 md:flex'>
                    <div className='md:w-3/5 flex-none'>
                        <img className='rounded-full' src={franq} alt="" />
                    </div>
                    <div className='bg-white -mt-10 border-2 border-greenveg place-self-center p-4 grid place-content-center md:h-96 md:border-0 md:m-0'>
                        <div className='mb-8'>
                            <div className='text-center font-questrial'>
                                <h2 className='text-gray-800 mt-8 font-bold text-2xl mb-2 md:text-3xl'>¿Querés abrir una</h2>
                                <h2 className='mb-4 font-yellowtail text-gray-700 text-2xl md:text-4xl md:mb-8'>Franquicia?</h2>
                                <p className='mb-4 md:leading-6'>Veggie es una cadena de origen argentino, número uno en comidas rápidas del medio oriente. El rubro de Street food tiene un gran caudal y altos niveles de venta lo que facilita el retorno de la inversión, para más info sobre franquicias contactanos.</p>
                                <button className='bg-greenveg h-10 w-32 text-white text-lg font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg md:mt-4'>Contáctanos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
        )
    };

export default About