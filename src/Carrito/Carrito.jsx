import React, { useReducer } from 'react';
import { TYPES } from './CarritoAction';
import { cartInitialState, cartReducer } from './CartReducer';
import Productos from './Productos';
import ItemCarrito from './ItemCarrito';



function Carrito() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const { productos, cart } = state

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    }
    const deleteFromCart = (id, eliminarTodos) => {
        if (eliminarTodos) {
            dispatch ({type: TYPES.REMOVE_ALL_ITEMS, payload: id});
        } else {
            dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
        }
    };
    const clearCart = () => { dispatch ({ type: TYPES.CLEAR_CART})};

    return (
        <div className='md:grid md:grid-cols-3 md:gap-2'>
            <div className='md:col-start-1 md:col-end-3'>
                <h2 className='font-questrial text-3xl font-bold text-center mt-10 text-gray-700 bg-greenveg text-white h-14 grid content-center'> Productos</h2>
                <div className='flex-wrap flex md:flex-row md:gap-2'>
                {productos.map(productos => <Productos key={productos.id} data={productos} addToCart={addToCart} />)}
                </div>
            </div>
            <div className='md:col-start-3'>
                <div>
                <h2 className='font-questrial text-3xl font-bold text-center mt-10 text-gray-700 bg-greenveg text-white h-14 grid content-center'> Carrito</h2>
                {cart.map(item =>
                    <ItemCarrito key={item.id}
                        data={item}
                        deleteFromCart={deleteFromCart} />)}
                <button className='md:mt-4 bg-greenveg h-10 w-28 text-white text-md font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg'onClick={clearCart}> Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito;