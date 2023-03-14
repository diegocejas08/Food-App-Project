import React from 'react';
import {FaShopify } from "react-icons/fa";

const Productos = ({ data, addToCart}) =>{
  const { id, nombre, src, precio} = data;

  return (
    <div className='border-2 border-greenveg rounded-lg mx-auto p-3 m-5 items-center justify-center hover:scale-110'>
      <h2 className='font-questrial text-center text-xl font-bold mb-2'>
        {nombre}
      </h2>
      <img className='w-40 h-40 rounded-lg mb-2 object-cover' src={src} alt=""/>
      <h5 className='text-center text-lg font-questrial mb-2'>Precio: ${precio}</h5>
      <div className=''>
      <button className='bg-greenveg h-10 w-28 text-white text-lg font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg font-questrial'onClick= {( )=> addToCart (id)}><FaShopify/>Agregar</button>
      </div>  
    </div>
  )
}
export default Productos 