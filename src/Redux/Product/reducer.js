import {GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS} from "./actionType"

const initState = {
    isLoading: false,
    productList: [],
    isError: false,
    page: [1]
}

export const getProductReducer = (state = initState, {type, payload}) => {
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                productList: payload
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}