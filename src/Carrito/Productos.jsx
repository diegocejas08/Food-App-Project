import React from 'react';

const Productos = ({ data, addToCart}) =>{
  const { id, nombre, src, precio} = data;

  return (
    <div>
      <h4>
        {nombre}
      </h4>
      <img src={src} alt="" />
      <h5> $ {precio}</h5>
      <button className='bg-greenveg h-10 w-28 text-white text-2xl font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg font-questrial'onClick= {( )=> addToCart (id)}>Agregar</button>
    </div>
  )
}
export default Productos