import { ADD_CART, SUB_CART } from "./actionType";

export const addToCart = (product) => ({
    type: ADD_CART,
    product
});

export const removeFromCart = (list) => ({
    type: SUB_CART,
    list
});
