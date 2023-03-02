import React from 'react'

import MyComponent from './Map';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='flex flex-col bg-greenveg font-questrial text-center text-white mt-5 p-2'>
            <div className='text-3xl font-bold underline underline-offset-4 mt-4'>SUCURSALES</div>
            <div className='text-center mt-5'>
                <div className='text-xl m-2 font-bold'>¡VISITÁ NUESTRAS SUCURSALES!</div>
                <div className='flex flex-col justify-center font-family-roboto text-l leading-relaxed p-2
                md:flex md:flex-row justify-evenly md:mt-4 md:mb-4'>
                    <div><a className='hover:transition delay-200 hover:underline underline-offset-4 hover:font-bold hover:text-orange-400'
                        href="https://goo.gl/maps/2AVKnmu4KPT7MUQY8">SUIPACHA 532, BS. AS. - ARGENTINA</a></div>
                    <div><a className='hover:transition delay-200 hover:underline underline-offset-4 hover:font-bold hover:text-orange-400'
                        href="https://goo.gl/maps/UpeFBhmwADRJNZS6A">SAN MARTIN 545, BS. AS. - ARGENTINA</a></div>
                    <div><a className='hover:transition delay-200 hover:underline underline-offset-4 hover:font-bold hover:text-orange-400'
                        href="https://goo.gl/maps/3reVznSPzdtuCrpz6">JUNIN 1795, BS. AS. - ARGENTINA</a></div>
                </div>
            </div>
            <div className='flex justify-center'><MyComponent /></div>
            <div className='flex flex-col justify-center leading-loose mt-4 mb-4
            md:flex md:flex-row justify-evenly'>
                <div>
                    <a className='hover:text-orange-400' href="htps://www.facebook.com/"><FontAwesomeIcon style={{fontSize: '25px'}} icon={faSquareFacebook} /> <br />Seguinos en Facebook</a>
                </div>
                <div>
                    <a className='hover:text-orange-400' href="https://www.twitter.com/"><FontAwesomeIcon style={{fontSize: '25px'}} icon={faTwitter} /> <br /> Conectá en Twitter</a>
                </div>
                <div>
                    <a className='hover:text-orange-400' href="https://www.instagram.com/"><FontAwesomeIcon style={{fontSize: '25px'}} icon={faInstagram} /> <br /> Seguinos en Instagram</a>
                </div>
            </div>
            <hr />
            <div className='flex flex-col justify-center items-end text-xs leading-loose p-2 
            md:flex md:flex-row justify-between'>
                <button onClick={() => window.location = 'veggiemediooriente@gmail.com'}>Veggiemediooriente@gmail.com</button>
                <span dangerouslySetInnerHTML={{ "__html": "&copy;Veggie Medio Oriente - 2023" }} />
            </div>
        </div>
    )
};

export default Footer;
