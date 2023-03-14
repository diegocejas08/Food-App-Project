import React from 'react'

const ItemCarrito =({data, deleteFromCart}) => {
    const {id, nombre, precio, cantidad}= data;
  return (
    <><table className='font-questrial divide-y divide-x divide-solid mt-6'>
      <thead>
        <tr>
          <th className='w-32'>Nombre</th>
          <th className='w-20'>Precio</th>
          <th className='w-20'>Cantidad</th>
          <th className='w-24'>Subtotal</th>
        </tr>
      </thead>
      <tbody className='text-center h-8'>
        <tr>
          <td>{nombre}</td>
          <td>${precio}</td>
          <td>{cantidad}</td>
          <td>${precio * cantidad}</td>
        </tr>
      </tbody>
    </table>
    <div className='flex mb-4'>
        <button onClick={() => deleteFromCart(id, false)} className='bg-greenveg h-8 w-28 text-white font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg font-questrial'>Eliminar</button>
        <button onClick={() => deleteFromCart(id, true)} className='bg-orangeveg h-8 w-28 text-white font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg font-questrial'>Eliminar Todo </button>
    </div>
    </>
  )
}
export default ItemCarrito;