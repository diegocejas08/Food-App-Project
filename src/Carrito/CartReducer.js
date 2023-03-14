import { TYPES } from "./CarritoAction";

export const cartInitialState = {
    productos: [
        {
            id: 1,
            nombre: "Combo Falafel",
            precio: 1000,
            src: "https://i.ibb.co/Qr8dwLQ/Falafelbowl.webp",
        },
        {
            id: 2,
            nombre: "Combo Veggie",
            precio: 1200,
            src: "https://i.ibb.co/XDDmPbk/comboveggie.webp",
        },
        {
            id: 3,
            nombre: "Combo Hummus",
            precio: 1250,
            src: "https://i.ibb.co/KGRcJpf/comohummus.webp", 
        },
        {
            id: 4 ,
            nombre: "Combo Sabij Veggie",
            precio: 800,
            src: "https://i.ibb.co/3hfsmWk/sabij.webp",
        },
        {
            id: 5,
            nombre: "Falafel Bowl Veggie",
            precio: 1500,
            src: "https://i.ibb.co/80WjHHS/combofalafel.webp",
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
