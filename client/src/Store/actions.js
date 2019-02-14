import {
    GET_PIZZA_LIST ,
    CHANGE_CURRENT_PAGE,
    ADD_PRODUCT,
    CHANGE_COUNT_PRODUCT,
} from "./const";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
};

export const getPostList = (pizzaList) => {
    return {
        type: GET_PIZZA_LIST,
        payload: pizzaList
    }
};

export const changeCurrentPage = (page) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: page
    }
};

export const changeCountProduct = (indexPizza) => {
    return {
        type: CHANGE_COUNT_PRODUCT,
        payload: indexPizza
    }
};