import { TYPES } from "./CarritoAction";

export const cartInitialState={
    productos: [
        {
            id: 1,
            nombre: "Menu Falafel",
            precio: 20,
            // src: xxx,
        },
        {
            id: 1,
            nombre: "Menu Falafel",
            precio: 20,
            // src:   xxx,  
        },
        {
            id: 1,
            nombre: "Menu Falafel",
            precio: 20,
            // src: xx,
        },
    ],
    cart: [],
};

export function CarritoReducer (state, action) {
    switch (action.type){
        case TYPES.ADD_TO_CART:{
            break;
        }
        case TYPES.REMOVE_ITEM:{
            break;
        }
        case TYPES.REMOVE_ALL_ITEMS:{
            break;
        }
        case TYPES.CLEAR_CART:{
            break;
        }
        default: 
        break;
    }
}

