import React from 'react';

const Productos = ({ data, addToCart}) =>{
  const { id, nombre, src, precio} = data;

  return (
    <div className='h-80 md:h-72 border-2 border-greenveg rounded-lg mx-auto p-3 mt-4 items-center justify-center md:hover:scale-110'>
      <h2 className='font-questrial text-center text-xl font-bold mb-2 md:text-lg'>
        {nombre}
      </h2>
      <img className='w-40 h-40 rounded-lg mb-2 object-cover' src={src} alt=""/>
      <h5 className='text-center text-lg font-questrial mb-2'>Precio: ${precio}</h5>
      <div className='text-center'>
      <button className='h-6 bg-greenveg w-28 text-white font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg font-questrial'onClick= {( )=> addToCart (id)}>Agregar</button>
      </div>  
    </div>
  )
}
export default Productos 