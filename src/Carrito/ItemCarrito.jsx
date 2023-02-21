import React from 'react'

const ItemCarrito =({data, deleteFromCart}) => {
    const {id, nombre, precio, cantidad}= data;
  return (
    <div>
        <h5 className='font-questrial'> {nombre}- $ {precio}- {cantidad}- Subtotal= ${precio*cantidad} </h5>
        <button onClick={()=>deleteFromCart(id, false)}   className='bg-greenveg h-10 w-28 text-white text-2xl font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg font-questrial'>Eliminar</button>
        <button onClick={()=> deleteFromCart(id, true)}      className='bg-orangeveg h-10 w-28 text-white  font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg font-questrial'>Eliminar Todo </button>

        
    </div>
  )
}
export default ItemCarrito;