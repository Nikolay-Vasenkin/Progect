import {
    GET_PIZZA_LIST,
    CHANGE_CURRENT_PAGE,
    ADD_PRODUCT,
    CHANGE_COUNT_PRODUCT,
} from "./const";

const initialState = {
    pizzaList: [],
    basket: [],
    basket_sum: 0,
    currentPage: "",
};

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_PIZZA_LIST :
            return {
                ...state,
                pizzaList: action.payload
            };

        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };

        case CHANGE_COUNT_PRODUCT:
            const indexProduct = state.basket.findIndex((pizza) => {
                return pizza._id === action.payload._id;
            });
            let basketArray = [...state.basket];
            if(action.payload.act === 'inc') {
                basketArray[indexProduct].count += 1;
            } else {
                if(basketArray[indexProduct].count > 1) basketArray[indexProduct].count -= 1;
            }
            return {
                ...state,
                basket: basketArray
            };

        case ADD_PRODUCT:
            const {_id, name, size, price} = action.payload;
            const findProductIndex = state.basket.findIndex((pizza) => {
                return pizza._id === _id;
            });
            if (findProductIndex !== -1) {
                let basketArray = [...state.basket];
                basketArray[findProductIndex].count += 1;
                return {
                    ...state,
                    basket: basketArray
                };
            } else {
                const addProduct = {
                    _id: _id,
                    name: name,
                    size: size,
                    price: price,
                    count: 1,
                };
                return {
                    ...state,
                    basket: state.basket.concat(addProduct)
                };
            }

        default:
            return state;
    }

};