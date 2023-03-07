import React from 'react';
import {FaShopify } from "react-icons/fa";

const Productos = ({ data, addToCart}) =>{
  const { id, nombre, src, precio} = data;

  return (
    <div>
      <h2>
        {nombre}
      </h2>
      <img className='w-max:50' src={src} alt=""/>
      <h5> $ {precio}</h5>
      <button className='bg-greenveg h-10 w-28 text-white text-lg text-center font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg font-questrial'onClick= {( )=> addToCart (id)}><FaShopify/>Agregar</button>
    </div>
  )
}
export default Productos 