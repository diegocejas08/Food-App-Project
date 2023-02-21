import { TYPES } from "./CarritoAction";
import pelotitas from "../Assets/ParaCart/pelotitas.webp";
import comboensalada from   '../Assets/ParaCart/comboensalada.webp';

export const cartInitialState = {
    productos: [
        {
            id: 1,
            nombre: "18 pelotitas",
            precio: 40,
            src: {pelotitas} ,
        },
        {
            id: 2,
            nombre: "Combo 1",
            precio: 20,
            src: {comboensalada},
        },
        {
            id: 3,
            nombre: "Menu fel",
            precio: 30,
            // src: 
          
        },
    ],
    cart: [],
};

export function cartReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const nuevoItem = state.productos.find(
                (productos) => productos.id === action.payload
            );
            const itemEnCarrito = state.cart.find(
                (item) => item.id === action.payload
            );
            return itemEnCarrito
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === nuevoItem.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...nuevoItem, cantidad: 1 }],
                };
        }
        case TYPES.REMOVE_ITEM: {
            const itemAEliminar = state.cart.find(
                (item) => item.id === action.payload
            );
            return itemAEliminar.cantidad>1
            ?{
                    ...state,
                    cart: state.cart.map( (item) =>
                        item.id === action.payload
                            ? { ...item, cantidad: item.cantidad - 1 }
                             :item )

                } : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload)
                };
        }

        case TYPES.REMOVE_ALL_ITEMS: {
            return  {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            };
        }
        case TYPES.CLEAR_CART: {
            return cartInitialState
        }
        default:
            break;
    }
}
