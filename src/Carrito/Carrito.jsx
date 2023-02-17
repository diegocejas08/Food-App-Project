import React, {useReducer} from 'react';
import { cartInitialState, cartReducer } from './CartReducer';
import Productos from './Productos';

function Carrito() {
    const [state, dispatch]= useReducer(cartReducer, cartInitialState)

    const addToCart = () => { }
    const deleteFromCart = () => { }
    const clearCart = () => { }

    return (
        <div>
            <h1>Carrito de compras</h1>
            <h2> Productos</h2>
            <div>
                {/*mapear productos disponibles*/}
            </div>
            <h2> Carrito</h2>
            <div>
                {/*mapear productos q se agreguen*/}
            </div>

        </div>
    )
}

export default Carrito;