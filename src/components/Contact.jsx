import React from 'react'
import falafel from './About-img/falafel.webp';

const Contact = () => {
    return (
        <div id='contact' className='bg-orangeveg md:grid grid-rows-5 grid-cols-5 content-center w-3/4 mx-auto p-10'>
                <div className='col-span-2 row-span-4 justify-self-center self-center'>
                    <h2 className='text-white font-questrial text-4xl font-bold mb-10 text-center md:mb-14'>¡Contáctanos!</h2>
                    <p className='text-white font-questrial text-2xl mb-3 text-center md:text-3xl'>¿Querés hablar con nosotros?</p>
                    <p className='text-white font-questrial text-2xl mb-8 text-center md:text-3xl'>Comentanos tus dudas, sugerencias y más.</p>
                </div>
                <div className='mb-8 col-span-2 row-span-1 col-start-1 row-start-5 justify-self-center self-center md:mb-0'>
                    <img className='rounded-xl justify-self-center object-cover h-20 w-72' src={falafel} alt="" />
                </div>
                <div className='bg-white row-span-5 col-span-3 col-start-3 rounded-xl p-8 shadow-lg text-gray-800'>
                    <form action="" className='flex flex-col space-y-4 md:place-self-end font-questrial'>
                        <div>
                            <label htmlFor="" className='text-lg' >Nombre</label>
                            <input type="text" placeholder='Tu nombre' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orangeveg'/>
                        </div>
                        <div>
                            <label htmlFor="" className='text-lg' >Email</label>
                            <input type="email" placeholder='Tu Email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orangeveg'/>
                        </div>
                        <div>
                            <label htmlFor="" className='text-lg' >Mensaje</label>
                            <textarea rows='4' placeholder='Escribe aqui tu mensaje' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orangeveg'>
                            </textarea>
                        </div>
                        <button className='inline-block self-end bg-orangeveg text-white font-bold rounded-lg px-6 py-2 hover:bg-greenveg'>Enviar mensaje</button>
                    </form>
                </div>
            </div>
    )
}

export default Contact;