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
        <div>
            <div className=''>
                
            </div>
            <h2 className='font-questrial'> Productos</h2>
            <div>
                {productos.map(productos => <Productos key={productos.id} data={productos} addToCart={addToCart} />)}
            </div>
            <h2 className='font-questrial'> Carrito</h2>
            <button className='bg-greenveg h-10 w-28 text-white text-2xl font-bold rounded shadow-lg hover:scale-110 hover:bg-orangeveg'onClick={clearCart}> Vaciar Carrito</button>
            <div>
                {cart.map(item =>
                    <ItemCarrito key={item.id}
                        data={item}
                        deleteFromCart={deleteFromCart} />)}
            </div>

        </div>
    )
}

export default Carrito;